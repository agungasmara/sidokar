<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Instansi extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
        date_default_timezone_set('Asia/Jayapura');
		$this->load->model("content_model");
		$this->load->model("forex_model");
		$this->load->model("user_model");
		$this->load->model("instansi_model");
	//	$this->load->helper(array('form', 'url'));
		if (!$this->user->loggedin) 	redirect(site_url("hideend/login"));
//		echo "<pre>"; print_r($this->user);die;
		if(!$this->common->has_permissions(array(
				"admin", "content_manager", "content_worker","admin_members"), $this->user)) {
				$this->template->error(lang("error_81"));
		}
	}


	public function index(){
        $this->add();
    }


    public function add($idPengajuan='')
	{
		$this->template->loadData("activeLink",
			array("content" => array("general" => 1)));

		$vueComponentPenggajianForm = $this->load->view("hidepage/vue/ComponentPenggajianForm.js",'',true);
        $vueComponentPenggajianTable = $this->load->view("hidepage/vue/ComponentPenggajianTable.js",'',true);
		$this->template->loadExternal(
			'<link rel="stylesheet" href="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css">'.
			'<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">'.
			'<link rel="stylesheet" href="https://unpkg.com/vue-airbnb-style-datepicker@2.7.1/dist/vue-airbnb-style-datepicker.min.css">'
			);
		$this->template->loadExternalJs(
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-form-wizard.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-the-mask.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vee-validate.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-multiselect.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/v-money.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-airbnb-style-datepicker.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/date_fns.js"></script>'.
            '<script src="'.$this->common->theme_hideend().'plugins/js/vuejs-datepicker"></script>'.
			$vueComponentPenggajianTable.
            $vueComponentPenggajianForm.
			'<script src="'.$this->common->theme_hideend().'plugins/js/appPenggajian.js"></script>'
			);
		$this->template->loadContent("hidepage/penggajian/index.php", array(
				"idPengajuan" => $idPengajuan
			)
		);
	}



	public function lists()
	{  
		$this->template->loadData("activeLink",
			array("content" => array("general" => 1)));
		$vueComponentInstansiForm = $this->load->view("hidepage/vue/ComponentInstansiForm.js",'',true);
        $vueComponentInstansiTable = $this->load->view("hidepage/vue/ComponentInstansiTable.js",'',true);
        $vueComponentRenstraTable = $this->load->view("hidepage/vue/ComponentInstansiRenstraTable.js",'',true);
        $vueComponentRenjaTable = $this->load->view("hidepage/vue/ComponentInstansiRenjaTable.js",'',true);
        $vueComponentDocumentForm = $this->load->view("hidepage/vue/ComponentDocumentForm.js",'',true);
		$this->template->loadExternal(
			'<link rel="stylesheet" href="'.$this->common->theme_hideend().'plugins/css/vue-form-wizard.min.css">'.
			'<link rel="stylesheet" href="'.$this->common->theme_hideend().'plugins/css/vue-multiselect.min.css">'
			);

		$this->template->loadExternalJs(
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-form-wizard.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-the-mask.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vee-validate.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-multiselect.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/v-money.js"></script>'.
            '<script src="'.$this->common->theme_hideend().'plugins/js/vuejs-datepicker.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/date_fns.js"></script>'.
            '<script src="'.$this->common->theme_hideend().'plugins/js/vue-blink.js"></script>'.
			$vueComponentInstansiForm.
            $vueComponentInstansiTable.
            $vueComponentRenstraTable.
            $vueComponentRenjaTable.
            $vueComponentDocumentForm.
			'<script src="'.$this->common->theme_hideend().'plugins/js/appInstansi.js"></script>'
			);
		$this->template->loadContent("hidepage/instansi/lists.php", array(
			)
		);
	}

	public function showUser(){
       	$userid=$this->user->info->ID;
       	$query =  $this->user_model->get_user_by_id($userid);
       	$data= $query->result();
       	$data= $data[0];
       	$result = [];
        if($query){
            $result['nama_petugas'] = $data->fullname;
            $result['nip_petugas'] = $data->nip;
            $result['jabatan_petugas'] = $data->jabatan;
            $result['kontak_petugas'] = $data->phone;
            $result['email_petugas'] = $data->email;
        }
  
        echo json_encode($result);
    }	

    public function show($id){
       	$query =  $this->penggajian_model->showAllbyID($id);
       	$result = [];
        if($query){
            $result['pengajuan'] = $query;
        }
        echo json_encode($result);
    }

	public function showAllbyIDProses($jenisAkun=''){

		$userid=$this->user->info->ID;
       	$query =  $this->pengajuan_model->showAllbyProsesID($userid);
       	$result = [];
        if($query){
            $result['pengajuan'] = $query;
        }
        echo json_encode($result);	
	}


	public function showAll($jenisAkun=''){
		$userid = '';
		if($jenisAkun!=="verify"){
			$userid=$this->user->info->ID;
		}
		
       	$query =  $this->instansi_model->showAll($userid);
       	$result = [];
        if($query){
            $result['instansi'] = $query;
        }
        echo json_encode($result);
    }


    public function showJenisGaji(){
        
        
        $query =  $this->penggajian_model->showJenisGaji();

        //echo "<pre>"; print_r($query);die;
        $result = [];
        if($query){
            $result['jenisGaji'] = $query;
        }
        echo json_encode($result);
    } 

    public function showPegawai(){
        
        
        $query =  $this->penggajian_model->showPegawai();

        //echo "<pre>"; print_r($query);die;
        $result = [];
        if($query){
            $result['pegawai'] = $query;
        }
        echo json_encode($result,JSON_NUMERIC_CHECK);
    }





    public function updateStatusPengajuan()
    {
    	$id = $this->input->post('idPengajuan');


        $data = array(
                'status_pengajuan' => $this->input->post('status_pengajuan'));
        if($this->pengajuan_model->update($id, $data)){
        	 $result['error'] = false;
             $result['msg']   = 'Data updated successfully';
        }else{
        	$result['error'] = true;
        	$result['msg']   = 'Update Data ERROR';
        }

        echo json_encode($result);
    }

   	public function insert()
    {	
      
        $checked = $this->input->post('is_saveschema');

        $data = array(                
           'userid' => $this->user->info->ID,
           'updated_at' =>  date("Y-m-d H:i:s"),  
        );
            
        $dataRekap = array_merge($data,$this->getDataRekap()); 
        if($checked){
            $idpegawai = $this->input->post('id_pegawai');
            $dataPegawai = array_merge($data,$this->getDataPegawaiSchema()); 
            $this->penggajian_model->updatePegawai($idpegawai, $dataPegawai);
        }
           
        if ($this->penggajian_model->insertRekap($dataRekap)) {
                $result['error'] = false;
                $result['msg']   = 'Pengajuan Insert successfully';
               
        }else{
            
            $result['error'] = false;
            $result['msg']   = 'Pengajuan Insert Error';
        }
        // echo "<pre>"; print_r($this->db->last_query());die;          
        echo json_encode($result);
    }


    public function update()
    {   

        $id = $this->input->post('idrekap');        
        $is_saveschema = (int)$this->input->post('is_saveschema');

        $data = array(                
           'userid' => $this->user->info->ID,
           'updated_at' =>  date("Y-m-d H:i:s"),  
        );
            
        $dataRekap = array_merge($data,$this->getDataRekap()); 
        
        $idpegawai = $this->input->post('id_pegawai');
        $dataPegawai = array_merge($data,$this->getDataPegawaiSchema()); 
        $this->penggajian_model->updatePegawai($idpegawai, $dataPegawai);
        
   
        if ($this->penggajian_model->updateRekap($id, $dataRekap)) {
                $result['error'] = false;
                $result['msg']   = 'Pengajuan Updated successfully';
               
        }else{
                
            $result['error'] = false;
            $result['msg']   = 'Pengajuan Updated Error';
        }
            
        echo json_encode($result);
    }

    public function getDataRekap(){
        $dataRekap = array(
                'id_pegawai' => $this->input->post('id_pegawai'),
                'kopri_dw' => $this->input->post('kopri_dw'),
                'bpd' => $this->input->post('bpd'),
                'kop_melati' => $this->input->post('kop_melati'),
                'suka_duka' => $this->input->post('suka_duka'),
                'simp_voucher' => $this->input->post('simp_voucher'),
                'cicilan_barang' => $this->input->post('cicilan_barang'),
                'pinjaman_koperasi' => $this->input->post('pinjaman_koperasi'),
                'arisan_dw' => $this->input->post('arisan_dw'),
                'werdhi_sedana' => $this->input->post('werdhi_sedana'),
                'santunan_meninggal' => $this->input->post('santunan_meninggal'),
                'pinjaman_kop_naker' => $this->input->post('pinjaman_kop_naker'),
                'simpanan_kop_naker' => $this->input->post('simpanan_kop_naker'),
                'tabungan_mesra' => $this->input->post('tabungan_mesra'),
                'bpr_kanti' => $this->input->post('bpr_kanti'),
                'kop_sinar' => $this->input->post('kop_sinar'),
                'periode_gaji' => $this->input->post('periode_gaji'),
                'jenis_gaji' => $this->input->post('jenis_gaji'),
                'jenis_gaji_obj' => $this->input->post('jenis_gaji_obj'),
            );

        return $dataRekap;
    }

    public function getDataPegawaiSchema(){
        $dataRekap['is_saveschema'] = ((int)$this->input->post('is_saveschema')?1:0);
        if((int)$this->input->post('is_saveschema')){
            $dataRekap['schemaJSON'] = $this->input->post('schemaJSON');
        }

        return $dataRekap;
    }


    public function finishPenggajian(){
		


		$result['error'] = false;
        $result['msg']   = 'Proses Penggajian Berhasil!';

		echo json_encode($result);

	}

	public function sendEmailQueueTable($dataEmail)
    {   
       
        return $this->pengajuan_model->add_emailQueue($dataEmail);
        
    } 

    public function sendEmail() 
    {
        $dataEmail = $this->pengajuan_model->get_emailQueue();
        foreach ($dataEmail->result() as $res) {
           //SEND ke CUSTOMER
            $replayto             = "aplikasiapuse@gmail.com";
            $emailCustomer = $res->email_send;
            $body = $res->message;
            $subject = $res->subject;
           	$this->common->send_email($subject, $body, $emailCustomer, $replayto);

            $dataEmail = array(
                            "status" => 1
                        );
            $this->pengajuan_model->update_emailQueue($res->id,$dataEmail);
        }
    }


    public function uploadFile()
    {   
        $dataArray = array();
        $this->load->library("upload");
        if (isset($_FILES['fileSoft'])||isset($_FILES['fileHard'])) {
            $this->upload->initialize(array(
               "upload_path" => $this->settings->info->upload_path."/document/",
               "overwrite" => FALSE,
               "max_filename" => 300,
               "encrypt_name" => false,
               "remove_spaces" => TRUE,
               "allowed_types" => "docx|doc|xlsx|xls|pdf|jpg|jpeg|png",
               "max_size" => 0
            ));

            $tipe = array();
            $file = array();
            $msg = array();
            $error = array();
            if(isset($_FILES['fileSoft'])){
                if($this->upload->do_upload('fileSoft')){
                    $data = $this->upload->data();
                    $FileData = $data['file_name'];
                    $error[] = false;
                    $file[] = "/document/".$FileData;                          
                    $tipe[] = "fileSoft";
                    $msg[] = "Successfully upload!";
                }else{
                    $error[] = true;
                    $msg[] = $this->upload->display_errors();
                }   

            }
            if(isset($_FILES['fileHard'])){
                if($this->upload->do_upload('fileHard')){
                    $data = $this->upload->data();
                    $FileData = $data['file_name'];
                    $error[] = false;
                    $file[] = "/document/".$FileData;                          
                    $tipe[] = "fileHard";
                    $msg[] = "Successfully upload!";
                }else{
                    $error[] = true;
                    $msg[] = $this->upload->display_errors();
                }   

            }
                    


             $dataArray = array(
                            "error" => $error,
                            "msg" => $msg,
                            "tipe" => $tipe,
                            "file" => $file
                );
            

        }

        echo json_encode($dataArray);

    }





	
	


}

?>

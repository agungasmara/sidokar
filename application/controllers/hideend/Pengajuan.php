<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Pengajuan extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
        date_default_timezone_set('Asia/Jayapura');
		$this->load->model("content_model");
		$this->load->model("forex_model");
		$this->load->model("user_model");
		$this->load->model("pengajuan_model");
	//	$this->load->helper(array('form', 'url'));
		if (!$this->user->loggedin) 	redirect(site_url("hideend/login"));
//		echo "<pre>"; print_r($this->user);die;
		if(!$this->common->has_permissions(array(
				"admin", "content_manager", "content_worker","admin_members"), $this->user)) {
				$this->template->error(lang("error_81"));
		}
	}


	public function index($idPengajuan='')
	{
		$this->template->loadData("activeLink",
			array("content" => array("general" => 1)));

		$vueComponent = $this->load->view("hidepage/vue/ComponentPspBMNPengajuanWizardForm.js",'',true);

		$this->template->loadExternal(
			'<link rel="stylesheet" href="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css">'.
			'<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">'.
			'<link rel="stylesheet" href="https://unpkg.com/vue-airbnb-style-datepicker@2.7.1/dist/vue-airbnb-style-datepicker.min.css">'
			);
		$this->template->loadExternalJs(
			'<script src="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.js"></script>'.
			'<script src="https://cdn.jsdelivr.net/npm/vue-the-mask@0.11.1/dist/vue-the-mask.min.js"></script>'.
			'<script src="https://unpkg.com/vee-validate@2.0.0-rc.21/dist/vee-validate.js"></script>'.
			'<script src="https://unpkg.com/vue-multiselect@2.1.6/dist/vue-multiselect.min.js"></script>'.
			'<script src="https://unpkg.com/v-money@0.8.1/dist/v-money.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-airbnb-style-datepicker.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/date_fns.js"></script>'.
			$vueComponent.
			'<script src="'.$this->common->theme_hideend().'plugins/js/appPengajuanPSP.js"></script>'
			);
		    $this->template->loadContent("hidepage/pengajuan/index.php", array(
				"idPengajuan" => $idPengajuan
			)
		);
	}



	public function status()
	{
		$this->template->loadData("activeLink",
			array("content" => array("general" => 1)));
		$vueComponent = $this->load->view("hidepage/vue/ComponentPspBMNPengajuanWizardForm.js",'',true);

		$this->template->loadExternal(
			'<link rel="stylesheet" href="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css">'.
			'<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">'.
			'<link rel="stylesheet" href="https://unpkg.com/vue-airbnb-style-datepicker@latest/dist/vue-airbnb-style-datepicker.min.css">'
			);

		$this->template->loadExternalJs(
			'<script src="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.js"></script>'.
			'<script src="https://cdn.jsdelivr.net/npm/vue-the-mask@0.11.1/dist/vue-the-mask.min.js"></script>'.
			'<script src="https://unpkg.com/vee-validate@2.0.0-rc.21/dist/vee-validate.js"></script>'.
			'<script src="https://unpkg.com/vue-multiselect@2.1.6/dist/vue-multiselect.min.js"></script>'.
			'<script src="https://unpkg.com/v-money@0.8.1/dist/v-money.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/vue-airbnb-style-datepicker.min.js"></script>'.
			'<script src="'.$this->common->theme_hideend().'plugins/js/date_fns.js"></script>'.
			$vueComponent.
			'<script src="'.$this->common->theme_hideend().'plugins/js/appPengajuanPSP.js"></script>'
			);
		$this->template->loadContent("hidepage/pengajuan/status.php", array(
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
       	$query =  $this->pengajuan_model->showAllbyID($id);
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
		
       	$query =  $this->pengajuan_model->showAll($userid);
       	$result = [];
        if($query){
            $result['pengajuan'] = $query;
        }
        echo json_encode($result);
    }
	public function add()
    {	

    	if(true){
    		// $detail_djkn = $this->input->post('detail_djkn');
    		// $detail_djkn =  json_decode($detail_djkn);
    		// $prosesid = (int)$detail_djkn->kode;
    		// if($detail_djkn->kantor==='Kanwil DJKN'){
    		// 	$prosesid = 5;
    		// }
            $data = array(
                'jenis_bmn' => $this->input->post('nama_jenis_bmn'),
                'totalnilai_bmn' => $this->input->post('totalnilai_bmn'),
                'jumlah_unit' => $this->input->post('jumlah_unit'),
                'detail_djkn' => $this->input->post('detail_djkn'),
                'provinsi' => $this->input->post('nama_provinsi'),
                'kabupaten' => $this->input->post('nama_kabupaten'),
                'kementerian_lembaga' => $this->input->post('nama_kementerian_lembaga'),
                'alamat_kantorKL' => $this->input->post('alamat_kantorKL'),
                'email_djkn' => $this->input->post('email_djkn'),
                'satuan_kerja' => $this->input->post('satuan_kerja'),
                'nama_petugas' => $this->input->post('nama_petugas'),
                'nip_petugas' => $this->input->post('nip_petugas'),
                'jabatan_petugas' => $this->input->post('jabatan_petugas'),
                'kontak_petugas' => $this->input->post('kontak_petugas'),
                'email_petugas' => $this->input->post('email_petugas'),
                'status_proses' => $this->input->post('status_proses'),
                'status_pengajuan' => $this->input->post('status_pengajuan'),
                'jabatan_pemohon' => $this->input->post('jabatan_pemohon'),
                'noSurat_pemohon' => $this->input->post('noSurat_pemohon'),
                'tglSurat_pemohon' => date($this->input->post('tglSurat_pemohon')), //format to date
                'perihalSurat_pemohon' => $this->input->post('perihalSurat_pemohon'),
                'fileSuratPermohon' => $this->input->post('fileSuratPermohon'),
                'fileDaftarRincian' => $this->input->post('fileDaftarRincian'),
                'fileDokumenKelengkapan' => $this->input->post('fileDokumenKelengkapan'),
                'userid' => $this->user->info->ID,
                'prosesid' => $this->input->post('prosesid'),
                'submitdate' =>  date("Y-m-d H:i:s")
            );
            
            $idPengajuan = $this->pengajuan_model->insert($data);

       	
            if($idPengajuan){
	            $result['error'] = false;
	            $result['msg']   = 'Data added successfully';
	            $result['id']   = $idPengajuan;
            }else{
            	$result['error'] = true;
            	$result['msg']   = 'Something wrong! Cannot insert data';
            	$result['id']   = '';
            }

            //IF MENTOK SAMPAI STEP 2, langsung kirim email
                      
        }
        echo json_encode($result);
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

   	public function update()
    {	

    	if(true){

            
            $id = $this->input->post('id');
            $data = array(
                'jenis_bmn' => $this->input->post('nama_jenis_bmn'),
                'totalnilai_bmn' => $this->input->post('totalnilai_bmn'),
                'jumlah_unit' => $this->input->post('jumlah_unit'),
                'provinsi' => $this->input->post('nama_provinsi'),
                'detail_djkn' => $this->input->post('detail_djkn'),
                'email_djkn' => $this->input->post('email_djkn'),
                'kabupaten' => $this->input->post('nama_kabupaten'),
                'kementerian_lembaga' => $this->input->post('nama_kementerian_lembaga'),
                'alamat_kantorKL' => $this->input->post('alamat_kantorKL'),
                'satuan_kerja' => $this->input->post('satuan_kerja'),
                'nama_petugas' => $this->input->post('nama_petugas'),
                'nip_petugas' => $this->input->post('nip_petugas'),
                'jabatan_petugas' => $this->input->post('jabatan_petugas'),
                'kontak_petugas' => $this->input->post('kontak_petugas'),
                'email_petugas' => $this->input->post('email_petugas'),
                'status_proses' => $this->input->post('status_proses'),
                'status_pengajuan' => $this->input->post('status_pengajuan'),
                'jabatan_pemohon' => $this->input->post('jabatan_pemohon'),
                'noSurat_pemohon' => $this->input->post('noSurat_pemohon'),
                'tglSurat_pemohon' => date($this->input->post('tglSurat_pemohon')), //format to date
                'perihalSurat_pemohon' => $this->input->post('perihalSurat_pemohon'),
                'fileSuratPermohon' => $this->input->post('fileSuratPermohon'),
                'fileDaftarRincian' => $this->input->post('fileDaftarRincian'),
                'fileDokumenKelengkapan' => $this->input->post('fileDokumenKelengkapan'),
                'kuisioner' => $this->input->post('kuisioner'),
                'userid' => $this->user->info->ID,                
                'prosesid' => $this->input->post('prosesid'),
                'updatedate' =>  date("Y-m-d H:i:s")//format to date
            );
            
            
            if ($this->pengajuan_model->update($id, $data)) {
            	//echo $this->db->last_query();die;
                $result['error'] = false;
                $result['msg']   = 'Pengajuan Updated successfully';
               

                
            }else{
            	
                $result['error'] = false;
                $result['msg']   = 'Pengajuan Added successfully';
            }
            
        }
        echo json_encode($result);
    }

	public function finishPengajuan($emailtoUser,$emailtoKantor, $nama_surat){
		$msg = "Terimakasih telah mewujudkan pengelolaan BMN yang tertib administrasi, tertib fisik dan tertib hukum. Permohonan PSP BMN untuk surat ".$nama_surat." yang Bapak/Ibu ajukan melalui Aplikasi APUSE akan segera kami Proses.<br/><br/>Terima Kasih";
        $dataEmail = array(
                    "email_send" => $emailtoUser,
                    "email_cc" => 'aplikasiapuse@gmail.com',
                    "replayTo" => $emailtoKantor,
                    "subject" => '[APUSE NOTIF]Sukses Pengajuan PSP BMN - '.$nama_surat,
                    "message" => $msg,
                    "createdAt" => date("Y/m/d")
                );
		$idEmailQueue = $this->sendEmailQueueTable($dataEmail);      


         $msg = "Terdapat Pengajuan Permohonan PSP dari ".$nama_surat.", mohon segera cek Aplikasi APUSE.<br/>Terima Kasih";
        $dataEmail = array(
                    "email_send" => $emailtoKantor,
                    "email_cc" => 'aplikasiapuse@gmail.com',
                    "replayTo" => $emailtoUser,
                    "subject" => '[APUSE NOTIF]Pengajuan PSP BMN Baru - '.$nama_surat,
                    "message" => $msg,
                    "createdAt" => date("Y/m/d")
                );
        $idEmailQueue = $this->sendEmailQueueTable($dataEmail);

		$result['error'] = false;
        $result['msg']   = 'Pengajuan Added successfully';
        $result['id']   = $idEmailQueue;

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
		if (isset($_FILES['file1']) || isset($_FILES['file2']) || isset($_FILES['file3'])) {
			$this->upload->initialize(array(
		       "upload_path" => $this->settings->info->upload_path."/pengajuan/",
		       "overwrite" => FALSE,
		       "max_filename" => 300,
		       "encrypt_name" => false,
		       "remove_spaces" => TRUE,
		       "allowed_types" => "docx|doc|xlsx|xls|pdf|jpg|jpeg|png",
		       "max_size" => 5000
		    ));

		    $tipe = array();
		    $file = array();
		    $msg = array();
		    $error = array();
		    if(isset($_FILES['file1'])){
				if($this->upload->do_upload('file1')){
					$data = $this->upload->data();
					$FileData = $data['file_name'];
					$error[] = false;
			    	$file[] = "/pengajuan/".$FileData;			    	    	
			    	$tipe[] = "file1";
			    	$msg[] = "Successfully upload!";
				}else{
					$error[] = true;
			    	$msg[] = $this->upload->display_errors();
				}	

			}
					

		    if(isset($_FILES['file2'])){
				if($this->upload->do_upload('file2')){
					$data = $this->upload->data();
					$FileData = $data['file_name'];
					$error[] = false;
			    	$file[] = "/pengajuan/".$FileData;		    	
			    	$tipe[] = "file2";
			    	$msg[] = "Successfully upload!";
				}else{
					$error[] = true;
			    	$msg[] = $this->upload->display_errors();
				}		
			}		


		    if(isset($_FILES['file3'])){
				if($this->upload->do_upload('file3')){
					$data = $this->upload->data();
					$FileData = $data['file_name'];
					$error[] = false;
			    	$file[] = "/pengajuan/".$FileData;
			    	$tipe[] = "file3";
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

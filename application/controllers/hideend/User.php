<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Userapp extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
        date_default_timezone_set('Asia/Jayapura');
		$this->load->model("content_model");
		$this->load->model("forex_model");
		$this->load->model("user_model");
		$this->load->model("instansi_model");
		if (!$this->user->loggedin) 	redirect(site_url("hideend/login"));
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
		$vueComponentUserForm = $this->load->view("hidepage/vue/ComponentUserForm.js",'',true);
        $vueComponentUserTable = $this->load->view("hidepage/vue/ComponentUserTable.js",'',true);
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
			$vueComponentUserForm.
            $vueComponentUserTable.
			'<script src="'.$this->common->theme_hideend().'plugins/js/appUser.js"></script>'
			);
		$this->template->loadContent("hidepage/user/lists.php", array(
			)
		);
	}



	public function showAll(){
		
       	$query =  $this->user_model->showAll($userid);
       	$result = [];
        if($query){
            $result['user'] = $query;
        }
        echo json_encode($result);
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

<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Renja extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
        date_default_timezone_set('Asia/Jayapura');
		$this->load->model("content_model");
		$this->load->model("forex_model");
		$this->load->model("user_model");
		$this->load->model("instansi_model");
        $this->load->model("renja_model");
	//	$this->load->helper(array('form', 'url'));
		if (!$this->user->loggedin) 	redirect(site_url("hideend/login"));
//		echo "<pre>"; print_r($this->user);die;
		if(!$this->common->has_permissions(array(
				"admin", "content_manager", "content_worker","admin_members"), $this->user)) {
				$this->template->error(lang("error_81"));
		}
	}

    public function showAll($jenisAkun=''){
        $userid = '';
        if($jenisAkun!=="verify"){
            $userid=$this->user->info->ID;
        }
        
        $query =  $this->renja_model->showAll($userid);
        $result = [];
        if($query){
            $result['dokumen'] = $query;
        }
        echo json_encode($result);
    }


	


}

?>

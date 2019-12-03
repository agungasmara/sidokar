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

    public function showAll($idinstansi,$startYear='',$endYear=''){

        $query =  $this->renja_model->showAll($idinstansi,$startYear,$endYear);
        $result = [];
        if($query){
            $result['dokumen'] = $query;
        }
        echo json_encode($result);
    }


    public function insert_document()
    {   

        $id = $this->input->post('id');  

        $data = array(                
           'userid' => $this->user->info->ID,
           'updated_at' =>  date("Y-m-d H:i:s"),  
        );
            
        $dataDocument = array_merge($data,$this->getDataDocument()); 
   
        if ($this->renja_model->insertDocument($dataDocument)) {
                $result['error'] = false;
                $result['msg']   = 'Pengajuan Inserted successfully';
               
        }else{
                
            $result['error'] = false;
            $result['msg']   = 'Pengajuan Inserted Error';
        }
            
        echo json_encode($result);
    }

    public function update_document()
    {   

        $id = $this->input->post('id');  

        $data = array(                
           'userid' => $this->user->info->ID,
           'updated_at' =>  date("Y-m-d H:i:s"),  
        );
            
        $dataDocument = array_merge($data,$this->getDataDocument()); 
        
        $idrenstra = $this->input->post('id');
   		//echo "<pre>"; print_r( $dataDocument );die;
        if ($this->renja_model->updateDocument($idrenstra, $dataDocument)) {
                $result['error'] = false;
                $result['msg']   = 'Pengajuan Updated successfully';
               
        }else{
                
            $result['error'] = false;
            $result['msg']   = 'Pengajuan Updated Error';
        }
            
        echo json_encode($result);
    }

    public function getDataDocument(){
        $dataDocument = array(
                'id_instansi' => $this->input->post('id_instansi'),
                'nama' => $this->input->post('nama'),
                'periode_start' => $this->input->post('periode_start'),
                'periode_end' => $this->input->post('periode_end'),
                'softcopy' => $this->input->post('softcopy'),
                'file_softcopy' => $this->input->post('file_softcopy'),
                'hardcopy' => $this->input->post('hardcopy'),
                'file_hardcopy' => $this->input->post('file_hardcopy')
            );

        return $dataDocument;
    }


	


}

?>

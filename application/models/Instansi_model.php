<?php

class Instansi_model extends CI_Model 
{

	public function updatePegawai($id,$data) 
	{
		$this->db->where("id", $id)->update("pegawai", $data);
    //echo "<pre>"; print_r($this->db->last_query());
    return true ;
	}

  public function insertRekap($data) 
  {
    
    $this->db->insert("rekap_gaji", $data);
    return $this->db->insert_id();  
  }

  public function updateRekap($id,$data) 
  {
    $this->db->trans_start();
    $this->db->where("id", $id)->update("rekap_gaji", $data);
    $this->db->trans_complete();
    return $this->db->trans_status() ;
  }
  public function update_emailQueue($id, $data)
  {
    $this->db->where("id", $id)->update("email_queue", $data);
  }
  public function add_emailQueue($data)
  {
    $this->db->insert("email_queue", $data);
    return $this->db->insert_id();
  }
  public function get_emailQueue()
  {
    return $this->db
          ->where("status", 0)
          ->get("email_queue");
  }
	public function insert($data) 
	{
		$this->db->insert("pengajuan_pspbmn", $data);
		$insert_id = $this->db->insert_id();
		return  $insert_id;
	}

  public function showJenisGaji(){
		    $query = $this->db
              ->select('*')
              ->from('jenis_gaji')
              ->get();
                      
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }   

  public function showPegawai(){
        $query = $this->db
              ->select('*')
              ->from('pegawai')
              ->get();
                      
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    } 



  public function showAll($idInstansi=""){
        $query = $this->db
                 ->select('*');


        $query = $query->from('instansi');
        if($idInstansi!==""){
          $query = $query->where("id",$idInstansi);
        }
        $query = $query->get();
                      
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }

    

	
}

?>
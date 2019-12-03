<?php

class Renstra_model extends CI_Model 
{

	public function updatePegawai($id,$data) 
	{
		$this->db->where("id", $id)->update("pegawai", $data);
    //echo "<pre>"; print_r($this->db->last_query());
    return true ;
	}

  public function insertDocument($data) 
  {
    
    $this->db->insert("dokumen_renstra", $data);
    return $this->db->insert_id();  
  }

  public function updateDocument($id,$data) 
  {
    $this->db->trans_start();
    $this->db->where("id", $id)->update("dokumen_renstra", $data);
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


  public function showAll($idinstansi,$startYear='',$endYear=''){
        $query = $this->db
                 ->select('*');

        $query = $query->from('dokumen_renstra')
                       ->where('id_instansi',$idinstansi);
        if($startYear!==''&&$endYear!==''){
            $query = $query->where('periode_start >=',$startYear)
                           ->where('periode_end <=',$endYear);
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
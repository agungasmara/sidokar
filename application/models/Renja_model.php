<?php

class Renja_model extends CI_Model 
{

    public function insertDocument($data) 
  {
    
    $this->db->insert("dokumen_renja", $data);
    return $this->db->insert_id();  
  }





  public function showAll($idinstansi,$startYear='',$endYear=''){
        $query = $this->db
                 ->select('*');

        $query = $query->from('dokumen_renja')
                       ->where('id_instansi',$idinstansi);
        if($startYear!==''&&$endYear!==''){
            $query = $query->where('periode_start >=',$startYear)
                           ->where('periode_end <=',$endYear);
        }
        $query = $query->get();
        //echo "<pre>"; print_r($this->db->last_query());die;              
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }

  public function updateDocument($id,$data) 
  {
    $this->db->trans_start();
    $this->db->where("id", $id)->update("dokumen_renja", $data);
    $this->db->trans_complete();
    return $this->db->trans_status() ;
  }

	
}

?>
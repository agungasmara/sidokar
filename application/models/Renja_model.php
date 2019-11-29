<?php

class Renja_model extends CI_Model 
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


    public function showAllbyProsesID($prosesID=''){
        $status = array('DJKN Pusat', 'PKNSI');
        $query = $this->db
              ->select('p.*,
                        v.hasil_verifikasi,
                        v.suratHasilVerifikasifinal,
                        v.daftarKekuranganData,
                        v.rencana_survey,
                        v.nama_survey,
                        v.cp_survey')
              ->where_not_in('status_proses',$status);
        if($prosesID!==''){                 
              $query = $query->where('prosesid',$prosesID);
        } 

        $query = $query->order_by('id', 'DESC')
                      ->from('pengajuan_pspbmn p')
                      ->join('verifikasi_pspbmn v', 'p.id = v.idPengajuan', 'left')
                      ->get();
                      
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    } 


  public function showAll(){
        $query = $this->db
                 ->select('*');

        $query = $query->from('dokumen_renja')
                       ->get();
                      
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }

    public function showAllbyID($idPengajuan){
		$status = array('DJKN Pusat', 'PKNSI');
      	$query = $this->db
       				->where('id',$idPengajuan)
       				->where_not_in('status_proses',$status)
       				->get('pengajuan_pspbmn');
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }

	
}

?>
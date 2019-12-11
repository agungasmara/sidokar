<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class SendEmail extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model("content_model");
		$this->load->model("forex_model");
		$this->load->model("user_model");
		$this->load->model("pengajuan_model");

	}

	public function send() 
    {
        $dataEmail = $this->pengajuan_model->get_emailQueue();
        foreach ($dataEmail->result() as $res) {
           //SEND ke CUSTOMER
            $replayto             = "sidokar.bappedadanlitbang@gmail.com";
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
	




	
	


}

?>

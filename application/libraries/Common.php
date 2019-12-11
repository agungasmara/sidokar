<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once("PasswordHash.php");

class Common
{
	function makeTitleText($string){
		return ucwords(strtolower($string));

	}
	function cleanString($string)
	{
	  // allow only letters
	  $res = preg_replace("/[^a-zA-Z0-9]/", "", $string);

	  // trim what's left to 8 chars
	  $res = substr($res, 0, 8);

	  // make lowercase
	  $res = strtolower($res);

	  // return
	  return $res;
	}
	function penyebut($nilai) {
		$nilai = abs($nilai);
		$huruf = array("", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas");
		$temp = "";
		if ($nilai < 12) {
			$temp = " ". $huruf[$nilai];
		} else if ($nilai <20) {
			$temp = $this->penyebut($nilai - 10). " belas";
		} else if ($nilai < 100) {
			$temp = $this->penyebut($nilai/10)." puluh". $this->penyebut($nilai % 10);
		} else if ($nilai < 200) {
			$temp = " seratus" . $this->penyebut($nilai - 100);
		} else if ($nilai < 1000) {
			$temp = $this->penyebut($nilai/100) . " ratus" . $this->penyebut($nilai % 100);
		} else if ($nilai < 2000) {
			$temp = " seribu" . $this->penyebut($nilai - 1000);
		} else if ($nilai < 1000000) {
			$temp = $this->penyebut($nilai/1000) . " ribu" . $this->penyebut($nilai % 1000);
		} else if ($nilai < 1000000000) {
			$temp = $this->penyebut($nilai/1000000) . " juta" . $this->penyebut($nilai % 1000000);
		} else if ($nilai < 1000000000000) {
			$temp = $this->penyebut($nilai/1000000000) . " miliar" . $this->penyebut(fmod($nilai,1000000000));
		} else if ($nilai < 1000000000000000) {
			$temp = $this->penyebut($nilai/1000000000000) . " triliun" . $this->penyebut(fmod($nilai,1000000000000));
		}     
		return $temp;
	}

	function terbilang($nilai) {
		if($nilai<0) {
			$hasil = "minus ". trim($this->penyebut($nilai));
		} else {
			$hasil = trim($this->penyebut($nilai));
		}     		
		return $hasil." rupiah";
	}

	function configPagination($baseUrl,$numRow,$numLink,$perPage,$segment){
	   $config = array();
	   $config["base_url"] = $baseUrl;
       $config["total_rows"] = $numRow;
       $config["per_page"] = $perPage;
       $config['cur_tag_open'] = '<li class="active"><a href="#">';
       $config['cur_tag_close'] = '</a></li>';
       $config['next_link'] = 'Next';
       $config['prev_link'] = 'Previous';
       $config['first_link'] = 'First';
       $config['first_tag_open'] = '<li>';
       $config['first_tag_close'] = '</li>';
       $config['last_link'] = 'Last';
       $config['last_tag_open'] = '<li>';
       $config['last_tag_close'] = '</li>';
       $config['prev_link'] = 'Previous';
       $config['prev_tag_open'] = '<li>';
       $config['prev_tag_close'] = '</li>';
       $config['next_link'] = 'Next';
       $config['next_tag_open'] = '<li>';
       $config['next_tag_close'] = '</li>';
       $config['num_tag_open'] = '<li>';
       $config['num_tag_close'] = '</li>';
       $config['full_tag_open'] = '<ul class="pagination">';
       $config['full_tag_close'] = '</ul>';
       $config["uri_segment"] = $segment;
       $config["num_links"] = $numLink;
       return $config;
	}
	function validateDate($date)
	{
		$d = DateTime::createFromFormat('Y-m-d', $date);
		return $d && $d->format('Y-m-d') === $date;
	}
 	
 	function issulgable($string) {
		if ( preg_match('/\s/',$string) ||  preg_match('/[^a-z_\-0-9]/i', $string) || ($string == "") ){
			return false;
		}else{
			return true;
		}
	} 	
	
	function create_slug_string($string) {
		$string = strtolower($string);
		$string = html_entity_decode($string);
		$string = str_replace(array('ä','ü','ö','ß'),array('ae','ue','oe','ss'),$string);
		$string = preg_replace('#[^\w\säüöß]#',null,$string);
		$string = preg_replace('#[\s]{2,}#',' ',$string);
		$string = str_replace(array(' '),array('-'),$string);
		return $string;
	}
	
	//Library untuk Controll Comment
 	function in_parent($parentid,$postid,$array_all_id) { 
		$html = "";
		$CI =& get_instance();
		$CI->load->model("content_model"); 
		$CI->load->library("settings");
		// this variable to save all concatenated html 
		$html = "";   
		// build hierarchy html structure based on ul li (parent-child) nodes 
		if (in_array($parentid,$array_all_id)) { 
		
			$result = $CI->content_model->get_post_comment_byparent($postid,$parentid);
			$resArray = $result->result_array(); 
				
			foreach ($resArray as $res) { 
				$result = $CI->content_model->get_post_comment_byparent($postid,$res['comment_id']);
				$addClassChild = ($result->num_rows()==0 && $parentid <>0 ) ? "comments-2" : "";
				$html .= "<div class='comments-1 ".$addClassChild."'>
							<div class='comments-photo'>".
							   "<img class='img-responsive' src='".base_url().$CI->settings->info->upload_path_relative."/".$res["avatar"]."' style='width:90px!important' alt=''>
							</div>
							<div class='comments-info' style='margin-bottom:20px!important'>
								<h4 class='text-blue'> ".$res["comment_name"]." <span>".$this->date_time($res["timestamp"]). 
								"</span></h4>".
								(($result->num_rows()!=0 || $parentid == 0) ?
								"<div class='port-post-social pull-right'>
									<a href='javascript:void(0)' class='replycomment' data-comment='".$res['comment_id']."'>Reply</a> 
								</div>":"")."<p>"	
								.$res['comment_body']."</p>
							</div>
						</div>
						";
				$html .=$this->in_parent($res['comment_id'],$postid, $array_all_id); 
			} 

		} 
		return $html; 
	} 
	

	public function paketname($str){
		$str = explode(" ",$str);
		return $str[0];	
	}	
	
	public function resizecropImageCI($data,$newwidth,$newheight){
		$this->CI =& get_instance();
		$namafile=explode(".",$data['full_path']);
		$newpath = $namafile[0]."_".$newwidth."x".$newheight.".".$namafile[1];
		
		//get full path to resize
		$this->resizeImageCI($data['full_path'],$newpath,$newheight,$newwidth,$data["image_height"],$data["image_width"]);
		
		//get resized path to crop
		$this->cropImageCI($newpath,$newpath,$newheight,$newwidth);
		
	}
		
	public function resizeImageCI($path,$newpath,$height,$width,$image_height,$image_width){
		$this->CI =& get_instance();
		$this->CI->load->library('image_lib');
		
		$image_config["image_library"] = "gd2";
		$image_config["source_image"] = $path;
		$image_config['create_thumb'] = FALSE;
		$image_config['maintain_ratio'] = TRUE;
		$image_config['new_image'] = $newpath;
		$image_config['quality'] = "100";
		$image_config['width'] = $width;
		$image_config['height'] = $height;
		$dim = (intval($image_width) / intval($image_height)) - ($image_config['width'] / $image_config['height']);
		$image_config['master_dim'] = ($dim > 0)? "height" : "width";
		 
		$this->CI->image_lib->clear();
		$this->CI->image_lib->initialize($image_config);
		
		if(!$this->CI->image_lib->resize()){ //Resize image
			return "error";
		}
						
	}

	public function cropImageCI($path,$newpath,$height,$width){
		$this->CI =& get_instance();
		$this->CI->load->library('image_lib');
		
		$image_config['image_library'] = 'gd2';
		$image_config["source_image"] = $path;
		$image_config['new_image'] = $newpath;
		$image_config['quality'] = "100";
		$image_config['maintain_ratio'] = false;
		$image_config['width'] = $width;
		$image_config['height'] = $height;
		$image_config['x_axis'] = '0';
		$image_config['y_axis'] = '0';
		
		 
		$this->CI->image_lib->clear();
		$this->CI->image_lib->initialize($image_config);
		
		if(!$this->CI->image_lib->crop()){ //Resize image
			return "error";
		}
						
	}
	public function generateInvoice($name,$year,$paket,$id)
	{		
		$digits = 2;
		$rand = str_pad(rand(0, pow(10, $digits)-1), $digits, '0', STR_PAD_LEFT);
		return $name.$year.sprintf('%02d',$paket).sprintf('%05d',$id)."-".$rand;
	}
	
	


function limitString($text, $length = 100, $ending = '...', $exact = false, $considerHtml = true) {
    if ($considerHtml) {
      // if the plain text is shorter than the maximum length, return the whole text
      if (strlen(preg_replace('/<.*?>/', '', $text)) <= $length) {
        return $text;
      }
      // splits all html-tags to scanable lines
      preg_match_all('/(<.+?>)?([^<>]*)/s', $text, $lines, PREG_SET_ORDER);
      $total_length = strlen($ending);
      $open_tags = array();
      $truncate = '';
      foreach ($lines as $line_matchings) {
        // if there is any html-tag in this line, handle it and add it (uncounted) to the output
        if (!empty($line_matchings[1])) {
          // if it's an "empty element" with or without xhtml-conform closing slash
          if (preg_match('/^<(\s*.+?\/\s*|\s*(img|br|input|hr|area|base|basefont|col|frame|isindex|link|meta|param)(\s.+?)?)>$/is', $line_matchings[1])) {
            // do nothing
            // if tag is a closing tag
          } else if (preg_match('/^<\s*\/([^\s]+?)\s*>$/s', $line_matchings[1], $tag_matchings)) {
            // delete tag from $open_tags list
            $pos = array_search($tag_matchings[1], $open_tags);
            if ($pos !== false) {
              unset($open_tags[$pos]);
            }
            // if tag is an opening tag
          } else if (preg_match('/^<\s*([^\s>!]+).*?>$/s', $line_matchings[1], $tag_matchings)) {
            // add tag to the beginning of $open_tags list
            array_unshift($open_tags, strtolower($tag_matchings[1]));
          }
          // add html-tag to $truncate'd text
          $truncate .= $line_matchings[1];
        }
        // calculate the length of the plain text part of the line; handle entities as one character
        $content_length = strlen(preg_replace('/&[0-9a-z]{2,8};|&#[0-9]{1,7};|[0-9a-f]{1,6};/i', ' ', $line_matchings[2]));
        if ($total_length+$content_length> $length) {
          // the number of characters which are left
          $left = $length - $total_length;
          $entities_length = 0;
          // search for html entities
          if (preg_match_all('/&[0-9a-z]{2,8};|&#[0-9]{1,7};|[0-9a-f]{1,6};/i', $line_matchings[2], $entities, PREG_OFFSET_CAPTURE)) {
            // calculate the real length of all entities in the legal range
            foreach ($entities[0] as $entity) {
              if ($entity[1]+1-$entities_length <= $left) {
                $left--;
                $entities_length += strlen($entity[0]);
              } else {
                // no more characters left
                break;
              }
            }
          }
          $truncate .= substr($line_matchings[2], 0, $left+$entities_length);
          // maximum lenght is reached, so get off the loop
          break;
        } else {
          $truncate .= $line_matchings[2];
          $total_length += $content_length;
        }
        // if the maximum length is reached, get off the loop
        if($total_length>= $length) {
          break;
        }
      }
    } else {
      if (strlen($text) <= $length) {
        return $text;
      } else {
        $truncate = substr($text, 0, $length - strlen($ending));
      }
    }
    // if the words shouldn't be cut in the middle...
    if (!$exact) {
      // ...search the last occurance of a space...
      $spacepos = strrpos($truncate, ' ');
      if (isset($spacepos)) {
        // ...and cut the text in this position
        $truncate = substr($truncate, 0, $spacepos);
      }
    }
    // add the defined ending to the text
    $truncate .= $ending;
    if($considerHtml) {
      // close all unclosed html-tags
      foreach ($open_tags as $tag) {
        $truncate .= '</' . $tag . '>';
      }
    }
    return $truncate;
  }	
	public function addDate($date,$month)
	{		
		return date('Y-m-d', strtotime("+".$month." months", strtotime($date)));
	}

	public function formatIDR($curr)
	{		
		return "Rp " . number_format($curr,0,',','.');
	}
	


    public function theme_custome()
    {
      return base_url()."theme_costume/";
    }    
	
	public function theme_hideend()
    {
      return base_url()."theme_hideend/";
    }	
	
	
    public function slug_link($controller)
    {
	  $this->CI =& get_instance();
	  $this->CI->load->model("site_slugs_m");
	  $slugs_data = $this->CI->site_slugs_m->get_all();
      $link = "";
      foreach ($slugs_data as $key => $data){
          if($data["controller"]===$controller){
              $link = base_url().$data["slug"]; break;
          }
      };
      return ($link=="")? base_url().$controller:$link;
    }

    public function keyword_page($slugs_data,$uri)
    {
      $keyword = "";
      foreach ($slugs_data as $key => $data){
          if($data["slug"]===$uri){
              $keyword =	 $data["keywords"]; break;
          }
      };
      return ($keyword=="")?"sertifikasi, profesi, lsp bali, bali, bnsp, pariwisata, lsp pariwisata":$keyword;
    }
    public function description_page($slugs_data,$uri)
    {
      $description= "";
      foreach ($slugs_data as $key => $data){
          if($data["slug"]===$uri){
              $description =	 $data["description"]; break;
          }
      };
      return ($description=="")?"LSP Pariwisata Bali - Independent - Reliable - Traceable":$description;
    }
    public function cur_date_time()
    {
        return date("Y-m-d H:i:s",gmt_to_local(time(),"UP6"));;
    } 

	public function date_time($timestamp, $format="d/m/Y")
    {
        return date($format,$timestamp);
       // return $timestamp;
    }
	
	function tgl_indo($tanggal){
		$bulan = array (
			1 =>   'Januari',
			'Februari',
			'Maret',
			'April',
			'Mei',
			'Juni',
			'Juli',
			'Agustus',
			'September',
			'Oktober',
			'November',
			'Desember'
		);
		$pecahkan = explode('-', $tanggal);
		
		// variabel pecahkan 0 = tanggal
		// variabel pecahkan 1 = bulan
		// variabel pecahkan 2 = tahun
	 
		return $pecahkan[2] . ' ' . $bulan[ (int)$pecahkan[1] ] . ' ' . $pecahkan[0];
	}
	
	
    public function nohtml($message)
    {
        $message = trim($message);
        $message = strip_tags($message);
        $message = htmlspecialchars($message, ENT_QUOTES);
        return $message;
    }

	public function encrypt($password)
    {
        $phpass = new PasswordHash(12, false);
        $hash = $phpass->HashPassword($password);
    	return $hash;
    }

    public function get_user_role($user)
    {
        if(isset($user->user_role_name)) {
            return $user->user_role_name;
        } else {
            return lang("ctn_46");
        }
    }

    public function randomPassword()
    {
    	$letters = array(
            "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
            "r","s","t","u","v","w","x","y","z"
        );
    	$pass = "";
    	for($i=0;$i<10;$i++) {
    		shuffle($letters);
    		$letter = $letters[0];
    		if(rand(1,2) == 1) {
	    		$pass .= $letter;
    		} else {
	    		$pass .= strtoupper($letter);
    		}
    		if(rand(1,3)==1) {
    			$pass .= rand(1,9);
    		}
    	}
    	return $pass;
    }

    public function checkAccess($level, $required)
    {
        $CI =& get_instance();
        if($level < $required) {
            $CI->template->error(
                "You do not have the required access to use this page.
                You must be a ". $this->getAccessLevel($required)
                . "to use this page."
            );
        }
    }

	public function send_email($subject, $body, $emailt)
    {
        $CI =& get_instance();
        $CI->load->library('email');

        //$CI->email->from($CI->settings->info->site_email, $CI->settings->info->site_name);
        
		$CI->email->from('sidokar.bappedadanlitbang@gmail.com', "Aplikasi Sidokar");
        $CI->email->to($emailt);
        $CI->email->bcc('dode.agung.asmara@gmail.com');

        $CI->email->subject($subject);
        $CI->email->message($body);

        $CI->email->send();
    }
	
    public function send_email_bck($subject, $body, $emailt)
    {
		
		//echo $emailt;die;
        $CI =& get_instance();

        $CI->load->library('email');
		$config = array();
		
		
			$config['protocol'] = "smtp";
			$config['smtp_host'] = "ssl://bossforexsignal.com";
			$config['smtp_port'] = "465";
			$config['smtp_user'] = "info@bossforexsignal.com"; 
			$config['smtp_pass'] = "pass2login";
			$config['charset'] = "utf-8";
			$config['newline'] = "\r\n";
			$config['wordwrap'] = true;
			$config['mailtype'] = "html";
			
			$CI->email->initialize($config);
        //$CI->email->from($CI->settings->info->site_email, $CI->settings->info->site_name);
        $CI->email->from('info@bossforexsignal.com', $CI->settings->info->site_name);
        $CI->email->to($emailt);
        $CI->email->cc($emailt);
        //$CI->email->bcc('bossfxsignal@gmail.com');

        $CI->email->subject($subject);
        $CI->email->message($body);

                $r =$CI->email->send();
		if (!$r)
		  log_message('debug',$CI->email->print_debugger());
    }

    public function check_mime_type($file)
    {
        return true;
    }

    public function replace_keywords($array, $message)
    {
        foreach($array as $k=>$v) {
            $message = str_replace($k, $v, $message);
        }
        return $message;
    }

    public function convert_time($timestamp)
    {
        $time = $timestamp - time();
        if($time <=0) {
            $days = 0;
            $hours = 0;
            $mins = 0;
            $secs = 0;
        } else {
            $days = intval($time / (3600 * 24));
            $hours = intval( ($time - ($days * (3600*24))) / 3600);
            $mins = intval( ($time - ($days * (3600*24)) - ($hours * 3600) )
                    / 60);
            $secs = intval( ($time - ($days * (3600*24)) - ($hours * 3600)
                    - ($mins * 60)) );
        }
        return array(
            "days" => $days,
            "hours" => $hours,
            "mins" => $mins,
            "secs" => $secs
        );
    }

    public function get_time_string($time)
    {
        if(isset($time['days']) &&
            ($time['days'] > 1 || $time['days'] == 0)) {
            $days = lang("ctn_294");
        } else {
            $days = lang("ctn_295");
        }
        if(isset($time['hours']) &&
            ($time['hours'] > 1 || $time['hours'] == 0)) {
            $hours = lang("ctn_296");
        } else {
            $hours = lang("ctn_297");
        }
        if(isset($time['mins']) &&
            ($time['mins'] > 1 || $time['mins'] == 0)) {
            $mins = lang("ctn_298");
        } else {
            $mins = lang("ctn_299");
        }
        if(isset($time['secs']) &&
            ($time['secs'] > 1 || $time['secs'] == 0)) {
            $secs = lang("ctn_300");
        } else {
            $secs = lang("ctn_301");
        }

        // Create string
        $timeleft = "";
        if(isset($time['days'])) {
            $timeleft = $time['days'] . " " . $days;
        }

        if(isset($time['hours'])) {
            if(!empty($timeleft)) {
                if(!isset($time['mins'])) {
                    $timeleft .= " ".lang("ctn_302")." " . $time['hours'] . " "
                    . $hours;
                } else {
                    $timeleft .= ", " . $time['hours'] . " " . $hours;
                }
            } else {
                $timeleft .= $time['hours'] . " " . $hours;
            }
        }

        if(isset($time['mins'])) {
            if(!empty($timeleft)) {
                if(!isset($time['secs'])) {
                    $timeleft .= " ".lang("ctn_302")." " . $time['mins'] . " "
                    . $mins;
                } else {
                    $timeleft .= ", " . $time['mins'] . " " . $mins;
                }
            } else {
                $timeleft .= $time['mins'] . " " . $mins;
            }
        }

        if(isset($time['secs'])) {
            if(!empty($timeleft)) {
                $timeleft .= " ".lang("ctn_302")." " . $time['secs'] . " "
                . $secs;
            } else {
                $timeleft .= $time['secs'] . " " . $secs;
            }
        }

        return $timeleft;
    }

    public function has_permissions($required, $user)
    {
        if(!isset($user->info->user_role_id)) return 0;
        foreach($required as $permission) {
            if(isset($user->info->{$permission}) && $user->info->{$permission}) {
                return 1;
            }
        }
        return 0;
    }

    public function get_user_display($data)
    {
        if(empty($data['username'])) return "";
        if(isset($data['online_timestamp']) > 0) {
            if($data['online_timestamp'] > time() - (60*15)) {
                $class = "online-dot-user";
                $title = lang("ctn_334");
            } else {
                $class = "offline-dot-user";
                $title = lang("ctn_335");
            }
        } else {
            $class = "online-dot-user";
        }
        $CI =& get_instance();
        $html = '<div class="user-box-avatar">
                <div class="'.$class.'" data-toggle="tooltip" data-placement="bottom" title="'.$title.'"></div>
                <a href="'.site_url("hideend/profile/view/" . $data['username']).'"><img src="'. base_url() . $CI->settings->info->upload_path_relative .'/'. $data['avatar'] .'" title="'.$data['username'].'" data-toggle="tooltip" data-placement="right" /></a>
                </div>';
        return $html;
    }

}

?>

<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		if (defined('REQUEST') && REQUEST == "external") {
	        return;
	    }
		$this->template->loadData("activeLink",
			array("home" => array("general" => 1)));
		$this->load->model("user_model");
		$this->load->model("home_model");
		if(!$this->user->loggedin) {
			redirect(site_url("hideend/login"));
		}
	}
	//code for front end


	public function index()
	{	
		if($this->user->loggedin && isset($this->user->info->user_role_id) &&
           ($this->user->info->admin)) {

           	redirect(site_url('/hideend/instansi/lists/'),'refresh');
			// $this->admin();
		}else{

           	redirect(site_url('/hideend/instansi/lists'),'refresh');
			// $this->memberpage();;			
		}
	}

	public function memberpage()
	{

		if (defined('REQUEST') && REQUEST == "external") {
	        return;
	    }

		$new_members = $this->user_model->get_new_members(5);
		$months = array();

		// Graph Data

		
		//print_r($javascript);die;

		$stats = $this->home_model->get_home_stats();
		if($stats->num_rows() == 0) {
			$this->template->error(lang("error_24"));
		} else {
			$stats = $stats->row();
			if($stats->timestamp < time() - 3600 * 5) {
				$stats = $this->get_fresh_results($stats);
				// Update Row
				$this->home_model->update_home_stats($stats);
			}
		};



		$javascript = '$(document).ready(function() {
			   var st = $("#search_type").val();
				var table = $("#content-table").DataTable({
					"dom" : "<\'row\'<\'col-sm-12\'tr>>" +
							"<\'row\'<\'col-sm-5\'i><\'col-sm-7\'p>>",
				  "processing": false,
					"pagingType" : "full_numbers",
					"postLength" : 15,
					"serverSide": true,
					"orderMulti": false,
					"order": [
					  [9, "ASC" ]
					],
				    "columns": [
				        null,
				        null,
				        null,
				        null,
				        null,
				        null,
				        null,
				        null,
				        null,
				        null,
				    ],
					"ajax": {
						url : "'.site_url("hideend/forex/gethistory/").'",
						type : "GET",
						data : function ( d ) {
							d.search_type = $("#search_type").val();
						}
					},
					"drawCallback": function(settings, json) {
					 $(\'[data-toggle="tooltip"]\').tooltip();
				  }
				});
				$("#form-search-input").on("keyup change", function () {
				table.search(this.value).draw();
			});

			} );
			function change_search(search)
				{
				  var options = [
					"search-like",
					"search-exact",
					"user-exact",
					"title-exact",
					"summary-exact",
					"category-exact"
				  ];
				  set_search_icon(options[search], options);
					$("#search_type").val(search);
					$( "#form-search-input" ).trigger( "change" );
				}

			function set_search_icon(icon, options)
				{
				  for(var i = 0; i<options.length;i++) {
					if(options[i] == icon) {
					  $("#" + icon).fadeIn(10);
					} else {
					  $("#" + options[i]).fadeOut(10);
					}
				  }
				}';	

		$javascript .= '
			  		$.getJSON("'.site_url("/hideend/trade/getdatachart").'", function (data) {
			  			Highcharts.setOptions({
					        global: {
					            useUTC: false
					        }
					    });
			    // Create the chart
			    var chart = Highcharts.StockChart("containerChart", {

			        chart: {
			            height: 400
			        },

			        title: {
			            text: "Take Profit Chart"
			        },

			        subtitle: {
			            text: "Drag to Maximize & Minimize"
			        },

			        rangeSelector: {
			        	 buttonTheme: {
                width: 80,
                style: {
                    fontFamily: "Tahoma"
                }
            },

            buttons: [{
                type: "month",
                count: 6,
                text: "6 month"
            }, {
                type: "year",
                count: 1,
                text: "1 year"
            }, {
                type: "all",
                text: "all"
            }],
			            selected: 1
			        },
			        yAxis: {
			            title: {
			                text: "Pips"
			            },
			            // plotLines: [{
			            //     value: 0,
			            //     color: "green",
			            //     dashStyle: "shortdash",
			            //     width: 2,
			            //     label: {
			            //         text: "Last quarter minimum"
			            //     }
			            // }, {
			            //     value: 17378,
			            //     color: "red",
			            //     dashStyle: "shortdash",
			            //     width: 2,
			            //     label: {
			            //         text: "Last quarter maximum"
			            //     }
			            // }]
			        },
			       
					tooltip: {
					    formatter: function() {
					        return "<b>" + Highcharts.dateFormat("%b \'%y",this.x) + ":</b> " + this.y;
					    }
					},
			        series: [{
			            name: "Pip Accumulation",
			            data: data,
			            lineWidth: 4,
			            tooltip: {
			                valueDecimals: 2
			            },
						marker: {
			                enabled: true

			            }
			        }],

			        responsive: {
			            rules: [{
			                condition: {
			                    maxWidth: 500
			                },
			                chartOptions: {
			                    chart: {
			                        height: 300
			                    },
			                    subtitle: {
			                        text: null
			                    },
			                    navigator: {
			                        enabled: false
			                    }
			                }
			            }]
			        }
			    });

			});';
  		

		$this->template->loadExternal(
			'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.6/css/highcharts.css" />'.
			'<link href="'.base_url().'theme_hideend/ltetheme/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet" type="text/css">'
			
		);

		$this->template->loadExternalJs(
			'<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.6/js/highstock.js"></script>'.
			'<script src="'.base_url().'/theme_hideend/ltetheme/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>'.
			'<script src="'.base_url().'/theme_hideend/ltetheme/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js">
			</script>'.
			'<script type="text/javascript">'.$javascript.'</script>'
			
		);

		$online_count = $this->user_model->get_online_count();

		$pages = $this->home_model->get_recent_pages(5);

		$this->template->loadContent("hidepage/home/indexmember.php", array(
			"new_members" => $new_members,
			"stats" => $stats,
			"online_count" => $online_count,
			"pages" => $pages
			)
		);
	}


	public function admin()
	{

		if (defined('REQUEST') && REQUEST == "external") {
	        return;
	    }

		$new_members = $this->user_model->get_new_members(5);
		$months = array();

		// Graph Data
		$current_month = date("n");
		$current_year = date("Y");
		$count = $this->user_model
				->get_registered_users_date(6, 2017); 
				
		// First month
		for($i=6;$i>=0;$i--) {
			// Get month in the past
			$new_month = $current_month - $i;
			// If month less than 1 we need to get last years months
			if($new_month < 1) {
				$new_month = 12 + $new_month;
				$new_year = $current_year - 1;
			} else {
				$new_year = $current_year;
			}
			// Get month name using mktime
			$timestamp = mktime(0,0,0,$new_month,1,$new_year);
			$count = $this->user_model
				->get_registered_users_date($new_month, $new_year);
			$months[] = array(
				"year" => $new_year,
				//"date" => date("F", $timestamp),
				"date" => $new_month,
				"count" => $count
				);
		}
		
		$javascript = 'var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];';
		
		$javascript .= 'var area = new Morris.Area({
			element   : "revenue-chart",
			resize    : true,
			data      : [ ';
			
		foreach($months as $d) {
		   	$javascript .= '{ y: "'.$d['year'].'-'.$d['date'].'", item1:' .$d['count'].'},';
		   }
		   		
		$javascript .= ' ],
			xkey      : "y",
			ykeys     : ["item1"],
			labels    : ["Item 1"],
			xLabelFormat: function(x) { 
				var month = months[x.getMonth()];
				return month;
			  },
			   dateFormat: function(x) {
					var month = months[new Date(x).getMonth()];
					return month;
				  },
			lineColors: ["#a0d0e0"],
			hideHover : "auto"
		  });';
		

		$stats = $this->home_model->get_home_stats();
		if($stats->num_rows() == 0) {
			$this->template->error(lang("error_24"));
		} else {
			$stats = $stats->row();
			if($stats->timestamp < time() - 3600 * 5) {
				$stats = $this->get_fresh_results($stats);
				// Update Row
				$this->home_model->update_home_stats($stats);
			}
		}


		$javascript .= ' var social_data = [
		    {
		        value: '.$stats->google_members.',
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "Google"
		    },
		    {
		        value: '.($stats->total_members - ($stats->google_members +
		         $stats->facebook_members + $stats->twitter_members)).',
		        color: "#39bc2c",
		        highlight: "#5AD3D1",
		        label: "'.lang("ctn_242").'"
		    },
		    {
		        value: '.$stats->facebook_members.',
		        color: "#2956BF",
		        highlight: "#FFC870",
		        label: "Facebook"
		    },
		    {
		        value: '.$stats->twitter_members.',
		        color: "#5BACD4",
		        highlight: "#7db864",
		        label: "Twitter"
		    }
		];';
		
		$javascript .= '
		var pieChartCanvas = $("#pieChart").get(0).getContext("2d")
    var pieChart       = new Chart(pieChartCanvas)
		var pieOptions     = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke    : true,
      //String - The colour of each segment stroke
      segmentStrokeColor   : "#fff",
      //Number - The width of each segment stroke
      segmentStrokeWidth   : 2,
      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout: 50, // This is 0 for Pie charts
      //Number - Amount of animation steps
      animationSteps       : 100,
      //String - Animation easing effect
      animationEasing      : "easeOutBounce",
      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate        : true,
      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale         : false,
      //Boolean - whether to make the chart responsive to window resizing
      responsive           : true,
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio  : true,
      //String - A legend template
      
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below. dode
	
    pieChart.Doughnut(social_data, pieOptions)
  /* Morris.js Charts */
  // Sales chart
		
		';
		


		$this->template->loadExternalJs(
			'<script type="text/javascript">'.$javascript.'</script>'
		);

		$online_count = $this->user_model->get_online_count();

		$pages = $this->home_model->get_recent_pages(5);

		$this->template->loadContent("hidepage/home/index.php", array(
			"new_members" => $new_members,
			"stats" => $stats,
			"online_count" => $online_count,
			"pages" => $pages
			)
		);
	}

	private function get_fresh_results($stats)
	{
		$data = new STDclass;

		$data->google_members = $this->user_model->get_oauth_count("google");
		$data->facebook_members = $this->user_model->get_oauth_count("facebook");
		$data->twitter_members = $this->user_model->get_oauth_count("twitter");
		$data->total_members = $this->user_model->get_total_members_count();
		$data->new_members = $this->user_model->get_new_today_count();
		$data->active_today = $this->user_model->get_active_today_count();

		return $data;
	}

	public function change_language()
	{
		$languages = $this->config->item("available_languages");
		if(!isset($_COOKIE['language'])) {
			$lang = "";
		} else {
			$lang = $_COOKIE["language"];
		}
		$this->template->loadContent("hidepage/home/change_language.php", array(
			"languages" => $languages,
			"user_lang" => $lang
			)
		);
	}

	public function change_language_pro()
	{
		$lang = $this->common->nohtml($this->input->post("language"));
		$languages = $this->config->item("available_languages");
		if(!in_array($lang, $languages, TRUE)) {
			$this->template->error(lang("error_25"));
		}

		setcookie("language", $lang, time()+3600*7, "/");
		$this->session->set_flashdata("globalmsg", lang("success_14"));
		redirect(site_url());
	}

}

?>

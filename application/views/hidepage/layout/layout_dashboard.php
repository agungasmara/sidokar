<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title><?php if(isset($page_title)) : ?><?php echo $page_title ?> - <?php endif; ?><?php echo $this->settings->info->site_name ?></title>
      <!-- Tell the browser to be responsive to screen width -->
      <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
      <?php if(isset($page_desc)) : ?>
      <meta name="description" content="<?php echo $page_desc ?>">
      <?php endif; ?>
      <!-- Bootstrap 3.3.7 -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/bootstrap/dist/css/bootstrap.min.css">   
      <!-- Bootstrap Switch -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>plugins/bootstrap-switch-master/dist/css/bootstrap3/bootstrap-switch.min.css">
      <!-- Font Awesome -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/font-awesome/css/font-awesome.min.css">
      <!-- Ionicons -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/Ionicons/css/ionicons.min.css">
       <!-- Select2 -->
<!--       <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/select2/dist/css/select2.min.css">  -->

      <!-- <script src="<?php echo $this->common->theme_hideend();?>plugins/js/vue.js"></script> -->  
      <!-- Bootstrap Selectize -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>plugins/selectize.js-master/dist/css/selectize.bootstrap3.css">
      <!-- Theme style -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/dist/css/AdminLTE.min.css">
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/dist/css/custom.css">
      <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/dist/css/skins/_all-skins.min.css">
      <!-- Morris chart -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/morris.js/morris.css">
     
      <!-- jvectormap -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/jvectormap/jquery-jvectormap.css">
      <!-- Date Picker -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">
      <!-- Daterange picker -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/bootstrap-daterangepicker/daterangepicker.css">
      <!-- Bootstrap Date time Picker -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme\bower_components\bootstrap-datetimepicker-master\build\css/bootstrap-datetimepicker.css">
      <!-- bootstrap wysihtml5 - text editor -->
      <link rel="stylesheet" href="<?php echo $this->common->theme_hideend();?>ltetheme/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
      <!-- Favicon: http://realfavicongenerator.net -->
      <link rel="apple-touch-icon" sizes="57x57" href="<?php echo $this->common->theme_hideend();?>images/favicon/apple-touch-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="<?php echo $this->common->theme_hideend();?>images/favicon/apple-touch-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $this->common->theme_hideend();?>images/favicon/apple-touch-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $this->common->theme_hideend();?>images/favicon/apple-touch-icon-76x76.png">
      <link rel="icon" type="image/png" href="<?php echo $this->common->theme_hideend();?>images/favicon/favicon-32x32.png" sizes="32x32">
      <link rel="icon" type="image/png" href="<?php echo $this->common->theme_hideend();?>images/favicon/favicon-16x16.png" sizes="16x16">
      <link rel="manifest" href="<?php echo $this->common->theme_hideend();?>images/favicon/manifest.json">
      <link rel="mask-icon" href="<?php echo $this->common->theme_hideend();?>images/favicon/safari-pinned-tab.svg" color="#5bbad5">
      <link rel="shortcut icon" href="<?php echo $this->common->theme_hideend();?>images/favicon/favicon.ico">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="msapplication-config" content="<?php echo base_url() ?>images/favicon/browserconfig.xml">
      <meta name="theme-color" content="#ffffff">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <!-- Google Font -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
      <?php echo $cssincludes ?>
   </head>
   <body class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
         <header class="main-header">
            <!-- Logo -->
            <a href="<?php echo site_url();?>" class="logo">
               <!-- mini logo for sidebar mini 50x50 pixels -->
               <span class="logo-mini"><b>A</b>DM</span>
               <!-- logo for regular state and mobile devices -->
               <span class="logo-lg"><b>Admin</b>Page</span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
               <!-- Sidebar toggle button-->
               <a href="<?php echo site_url();?>" class="sidebar-toggle" data-toggle="push-menu" role="button">
               <span class="sr-only">Toggle navigation</span>
               </a>
               <div class="navbar-custom-menu">
                  <ul class="nav navbar-nav">
                     <li class="dropdown user user-menu">
                        <a href="<?php echo site_url();?>" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="<?php echo base_url() ?><?php echo $this->settings->info->upload_path_relative ?>/<?php echo $this->user->info->avatar ?>" class="user-image" alt="User Image">
                        <span class="hidden-xs"><?php echo $this->user->info->username ?></span>
                        </a>
                        <ul class="dropdown-menu">
                           <!-- User image -->
                           <li class="user-header">
                              <img src="<?php echo base_url() ?><?php echo $this->settings->info->upload_path_relative ?>/<?php echo $this->user->info->avatar ?>" class="img-circle" alt="User Image">
                              <p>

                                 <?php echo $this->user->info->fullname ?>
                                 <small> <?php echo $this->user->info->email?></small>
                              </p>
                           </li>
                           <!-- Menu Footer-->
                           <li class="user-footer">
                              <div class="pull-right">
                                 <a href="<?php echo site_url("hideend/login/logout/" . $this->security->get_csrf_hash()) ?>" class="btn btn-default btn-flat">Sign Out</a>
                              </div>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </nav>
         </header>
         <!-- Left side column. contains the logo and sidebar -->
         <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
               <!-- Sidebar user panel -->
               <div class="user-panel">
                  <div class="pull-left image">
                     <img src="<?php echo base_url() ?><?php echo $this->settings->info->upload_path_relative ?>/<?php echo $this->user->info->avatar ?>" class="img-circle" alt="User Image">
                  </div>
                  <div class="pull-left info">
                     <p><?php echo $this->user->info->username ?></p>
                     <a href="<?php echo site_url()?>"><i class="fa fa-circle text-success"></i> Online</a>
                  </div>
               </div>

               <!-- /.search form -->
               <!-- sidebar menu: : style can be found in sidebar.less -->
               <ul class="sidebar-menu" data-widget="tree">
                  <li class="header">MAIN NAVIGATION</li>
                  <?php
                  //Role PETUGAS 
                  if($this->user->loggedin && isset($this->user->info->user_role_id) &&
                     ($this->user->info->admin_settings || $this->user->info->admin_members || $this->user->info->admin_payment)
                     
                     ) : ?>                  
                     <li class="<?php if(isset($activeLink['settings']['general'])) echo "active" ?>"><a href="<?php echo site_url("hideend/pengajuan/") ?>"><span class="glyphicon glyphicon-cog sidebar-icon"></span> Pengajuan PSP BMN</a></li> 
                     <li class="<?php if(isset($activeLink['settings']['general'])) echo "active" ?>"><a href="<?php echo site_url("hideend/pengajuan/status") ?>"><span class="glyphicon glyphicon-cog sidebar-icon"></span>Status Pengajuan PSP BMN</a></li>

                  <?php endif; ?>


                   <?php
                   //Role VERIFIKATOR
                   if($this->user->loggedin && isset($this->user->info->user_role_id) &&
                     ($this->user->info->admin)
                     
                     ) : ?>  
                     <li class="<?php if(isset($activeLink['settings']['general'])) echo "active" ?>"><a href="<?php echo site_url("hideend/verifikasi/status") ?>"><span class="glyphicon glyphicon-cog sidebar-icon"></span>Status Pengajuan PSP BMN</a></li>
                  <?php endif; ?>


               </ul>
            </section>
            <!-- /.sidebar -->
         </aside>
         <?php echo $content ?>
         <!-- CUT HERE!-->
         <footer class="main-footer">
            <div class="pull-right hidden-xs">
               <b>Version</b> 2.4.0
            </div>
            <strong>Copyright &copy; 2018 <a href="<?php echo site_url()?>">Bali Creactive DeV</a>.</strong> All rights
            reserved.
         </footer>
         <!-- Control Sidebar -->
         <aside class="control-sidebar control-sidebar-dark">
            <!-- Create the tabs -->
            <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
               <li><a href="<?php echo $this->common->theme_hideend();?>ltetheme/#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
               <li><a href="<?php echo $this->common->theme_hideend();?>ltetheme/#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
            </ul>

         </aside>
         <!-- /.control-sidebar -->
         <!-- Add the sidebar's background. This div must be placed
            immediately after the control sidebar -->
         <div class="control-sidebar-bg"></div>
      </div>
      <!-- ./wrapper -->
      <!-- jQuery 3 -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/jquery/dist/jquery.min.js"></script>
      <!-- jQuery UI 1.11.4 -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/jquery-ui/jquery-ui.min.js"></script>
      <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
      <script>
         $.widget.bridge('uibutton', $.ui.button);
      </script>
      <!-- Bootstrap 3.3.7 -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
      <!-- Boostrap Switch -->
      <script src="<?php echo $this->common->theme_hideend();?>plugins/bootstrap-switch-master/dist/js/bootstrap-switch.min.js"></script>
      <!-- Morris.js charts -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/raphael/raphael.min.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/morris.js/morris.min.js"></script>
      <!-- Sparkline -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"></script>

      <!-- jvectormap -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
      <!-- jQuery Knob Chart -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/jquery-knob/dist/jquery.knob.min.js"></script>
      <!-- daterangepicker -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/moment/min/moment.min.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
      <!-- datepicker -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>


      <!-- Bootstrap WYSIHTML5 -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
      <!-- Slimscroll -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
      <!-- FastClick -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/fastclick/lib/fastclick.js"></script>
      <!-- Selectize -->
      <!-- <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/select2/dist/js/select2.full.min.js"></script>  -->
      <script src="<?php echo $this->common->theme_hideend();?>plugins/selectize.js-master/dist/js/standalone/selectize.min.js"></script>
      <!-- AdminLTE App -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/dist/js/adminlte.min.js"></script>
      <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
      <!-- ChartJS -->
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/bower_components/Chart.js/Chart.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/dist/js/pages/dashboard.js"></script>
      <!-- AdminLTE for demo purposes -->
      
       
      <script src="<?php echo $this->common->theme_hideend()?>plugins/js//vue.js"></script>  
      <script src="<?php echo $this->common->theme_hideend();?>ltetheme/dist/js/demo.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>plugins/js/axios.min.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>plugins/js/pagination.js"></script>
      <script src="<?php echo $this->common->theme_hideend();?>plugins/js/vue-airbnb-style-datepicker.min.js"></script>
      <?php echo $jsincludes ?>
   </body>
</html>

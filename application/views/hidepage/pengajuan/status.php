<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" id="app">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Dashboard

            <small>Control panel</small>
        </h1>
        <ol class="breadcrumb">
            <li>
                <a href="#">
                    <i class="fa fa-dashboard"></i> Home
                </a>
            </li>
            <li class="active">Dashboard</li>
        </ol>
    </section>
    <!-- Main content -->
    <section class="content" id="tableVerifikasi" v-if="showVerifikasiWizardTable">
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
            <!-- Left col -->
            <section class="col-lg-12">
                <!-- Custom tabs (Charts with tabs)-->
                <div class="nav-tabs-custom">
                    <!-- Tabs within a box -->
                    <!-- quick email widget -->
                    <div class="box box-info">
                        <div class="box-header">
                            <div class="col-xs-4">
                                <h3 class="box-title">Rekap Seluruh Gaji</h3>
                            </div>
                            <div class="col-xs-7">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" id="form-search-input">
                                    <div class="input-group-btn">
                                        <input type="hidden" id="search_type" value="0">
                                        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                        </button>
                                        <ul class="dropdown-menu small-text" style="min-width: 90px !important; left: -90px;">
                                            <li>
                                                <a href="#" onclick="change_search(0)">
                                                    <span class="glyphicon glyphicon-ok" id="search-like"></span>
                                                    <?php echo lang("ctn_337") ?>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="change_search(1)">
                                                    <span class="glyphicon glyphicon-ok no-display" id="search-exact"></span>
                                                    <?php echo lang("ctn_338") ?>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="change_search(2)">
                                                    <span class="glyphicon glyphicon-ok no-display" id="user-exact"></span>
                                                    <?php echo lang("ctn_339") ?>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="change_search(3)">
                                                    <span class="glyphicon glyphicon-ok no-display" id="title-exact"></span>
                                                    <?php echo lang("ctn_401") ?>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="change_search(4)">
                                                    <span class="glyphicon glyphicon-ok no-display" id="summary-exact"></span>
                                                    <?php echo lang("ctn_402") ?>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="change_search(5)">
                                                    <span class="glyphicon glyphicon-ok no-display" id="category-exact"></span>
                                                    <?php echo lang("ctn_406") ?>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-1">
                                <div class="pull-right">
                                    <a href="<?php echo site_url("/hideend/pengajuan/") ?>" class="btn btn-primary">
                                        Add Pengajuan
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <table-status-pengajuan-pspbmn 
                            ref="form" 
                            v-on:send-data="getDataChoosePengajuan"
                            v-on:send-jenisform="getJenisForm"
                        />   
                        <!-- /.box-header -->
                        
                        
                        
                        <!-- /.box-body -->

                    </div>
                    <!-- /.box -->
                </div>
            </section>
            <!-- /.Left col -->
            <!-- right col (We are only adding the ID to make the widgets sortable)-->
        </div>
        <!-- /.row (main row) -->

    </section>
    <!-- /.content -->
    <section class="content" id="formWizardVerifikasi" v-if="showVerifikasiWizardForm">

        <div class="row">
            <div class="col-md-8" v-if="isShowFormKPKNL">
                <!-- Custom Tabs -->
                <hasil-pengajuan-pspbmn-kpknl 
                        :jenisform="jenisForm"
                        :tipepengajuan="jenisProses" 
                        :datapengajuan="choosePengajuan"                        
                        v-on:send-data="finishProsesVerifikasi"> 
                </hasil-pengajuan-pspbmn-kpknl>

                <!-- /.tab-content -->
            </div>
            <div class="col-md-8" v-if="isShowFormKANWIL">
                <!-- Custom Tabs -->
                
                <hasil-pengajuan-pspbmn-kanwil 
                        :jenisform="jenisForm"
                        :tipepengajuan="jenisProses" 
                        :datapengajuan="choosePengajuan"
                        v-on:send-data="finishProsesVerifikasi"> 
                </hasil-pengajuan-pspbmn-kanwil>

                <!-- /.tab-content -->
            </div>

            <div class="col-md-4">
                <sidebar-pspbmn> </sidebar-pspbmn>
            </div>
            <!-- nav-tabs-custom -->
        </div>
        <!-- /.col -->
    </section>

</div>
<!-- /.content-wrapper -->
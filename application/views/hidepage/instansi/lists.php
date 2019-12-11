<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" id="app">
    <input type="hidden" id="instansi" value="<?=$instansi?>">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1 v-if="nama_instansi">
            <div class="btn btn-primary">{{nama_instansi}}</div> 
        </h1> 

        <h1 v-else>
            Dashboard
        </h1>
        
    </section>
    <!-- Main content -->
    <section class="content" id="tableVerifikasi" v-if="showInstansiTable">
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
                            <div class="col-md-2">
                                <h3 class="box-title">Nama Instansi</h3>
                            </div>
                            <div class="col-xs-7">
                                <div class="">
                                    <input placeholder="Search"type="search" class="form-control" v-model="textSearch" @keyup="searchInstansi()" name="search">
                                </div>
                            </div>
                            <div class="col-md-1" style="margin-right: 5px">
                                <div class="pull-right">
                                    <a href="<?php echo site_url("/hideend/instansi/") ?>" class="btn btn-primary">
                                        Add Instansi
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <table-instansi 
                            ref="tableInstansi" 
                            v-on:send-data="getDatachooseInstansi"
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
   <section class="content" id="tableVerifikasi" v-if="showInstansiDetail">
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
                            <div class="col-md-4">
                                <h3 class="box-title">Dokumen Rencana Strategis</h3>
                            </div>
                            <div class="col-md-2">
                               <div class="input-group" style="width: 100%!important;">
                                    <vuejs-datepicker :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="periode_renstra_start" name="periode_gaji" Placeholder="Start Periode"
                                    @closed='showEndYear()'
                                    ></vuejs-datepicker>
                                </div>
                            </div>                            

                            <div class="col-md-1" style="height: 34px">
                                <div style="line-height: 34px;"><b>Until Year</b></div>
                            </div>
                             <div class="col-md-2">
                                <div class="input-group" style="width: 100%!important;">
                                    <vuejs-datepicker ref="endYearPicker" :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="periode_renstra_end" name="periode_gaji" Placeholder="End Periode" @closed='processRangeYear()'></vuejs-datepicker>
                                </div>
                            </div>
                            <div class="col-md-1" style="padding: 0">
                                <div class="pull-left">
                                    <a href="#" @click.prevent ="resetRangeYear()" class="btn btn-primary" style="width: 100%">
                                        Reset
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-1" style="padding: 0">
                                <div class="pull-left">
                                    <a href="#" @click.prevent="addResntraDocument()" class="btn btn-primary" style="width: 100%">
                                        Add
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <table-renstra 
                            ref="tablerenstra" 
                            :datarangeyear = "chooseRangeYear"
                            :datainstansi="chooseInstansi" 
                            v-on:send-data="getDataDocument"
                            v-on:send-jenisform="getJenisDocumentForm"
                        />   

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
   <section class="content" id="tableVerifikasi" v-if="showInstansiDetail">
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
                            <div class="col-md-4">
                                <h3 class="box-title">Dokumen Rencana Kerja</h3>
                            </div>
                            <div class="col-md-2">
                               <div class="input-group" style="width: 100%!important;">
                                    <vuejs-datepicker :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="periode_renja_start" name="periode_gaji" Placeholder="Start Periode"
                                    @closed='showEndYearRenja()'
                                    ></vuejs-datepicker>
                                </div>
                            </div>                            

                            <div class="col-md-1" style="height: 34px">
                                <div style="line-height: 34px;"><b>Until Year</b></div>
                            </div>
                             <div class="col-md-2">
                                <div class="input-group" style="width: 100%!important;">
                                    <vuejs-datepicker ref="endYearPickerRenja" :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="periode_renja_end" name="periode_gaji" Placeholder="End Periode" @closed='processRangeYearRenja()'></vuejs-datepicker>
                                </div>
                            </div>
                            <div class="col-md-1" style="padding: 0">
                                <div class="pull-left">
                                    <a href="#" @click.prevent ="resetRangeYearRenja()" class="btn btn-primary" style="width: 100%">
                                        Reset
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-1" style="padding: 0">
                                <div class="pull-left">
                                    <a href="#" @click.prevent ="addResntraDocument()" class="btn btn-primary" style="width: 100%">
                                        Add
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <table-renja 
                            ref="tablerenja"
                            :datarangeyear = "chooseRangeYear"   
                            :datainstansi="chooseInstansi" 
                            v-on:send-data="getDataDocument"
                            v-on:send-jenisform="getJenisDocumentForm"
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
   <!--  -->
    <section class="content" id="formWizardVerifikasi" v-if="showDocumentDetail">

        <div class="row">
                <!-- Custom Tabs -->
                <detail-document 
                        :datainstansi="chooseInstansi" 
                        :datadocument="chooseDocument"                       
                        :jenisdokumen="jenis_document"                        
                        v-on:send-data="finishProsesVerifikasi"
                        v-on:send-jenisform="getJenisDocumentForm"
                        v-on:back-data="backtoTable"
                        > 
                </detail-document>

                <!-- /.tab-content -->
            

        </div>
        <!-- /.col -->
    </section>

   

</div>
<!-- /.content-wrapper -->
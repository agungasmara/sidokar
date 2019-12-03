<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" id="app">

    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1 v-if="nama_instansi">
            <div class="btn btn-primary">{{nama_instansi}}</div> 
        </h1> 

        <h1 v-else>
            Dashboard
        </h1>
        
    </section>
    <!-- /.content -->
   <section class="content" id="tableVerifikasi" v-if="showUserTable">
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
                                <h3 class="box-title">User List</h3>
                            </div>
                                                    

                        
                             
                            <div class="col-md-1" style="padding: 0">
                                <div class="pull-left">
                                    <a href="#" @click.prevent="addResntraDocument()" class="btn btn-primary" style="width: 100%">
                                        Add
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <table-user 
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
   <!--  -->
    <section class="content" id="formWizardVerifikasi" v-if="showUserForm">

        <div class="row">
                <!-- Custom Tabs -->
                <detail-user 
                        :datainstansi="chooseInstansi" 
                        :datadocument="chooseDocument"                       
                        :jenisdokumen="jenis_document"                        
                        v-on:send-data="finishProsesVerifikasi"
                        v-on:send-jenisform="getJenisDocumentForm"
                        v-on:back-data="backtoTable"
                        > 
                </detail-user>

                <!-- /.tab-content -->
            

        </div>
        <!-- /.col -->
    </section>

   

</div>
<!-- /.content-wrapper -->
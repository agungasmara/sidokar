<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" id="app">

    <!-- Content Header (Page header) -->
    <section class="content-header">


        <h1 >
            Dashboard Managemen User
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
                            <div class="col-xs-8">
                                <div class="">
                                    <input placeholder="Search"type="search" class="form-control" v-model="textSearch" @keyup="searchUser()" name="search">
                                </div>
                            </div>                       


                        </div>
                        
                        <table-user 
                            ref="tableuser" 
                            v-on:user-data="chooseUser"
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
                        :userdata="chooseUserData"               
                        v-on:back-data="backtoTable"
                        > 
                </detail-user>

                <!-- /.tab-content -->
            

        </div>
        <!-- /.col -->
    </section>

   

</div>
<!-- /.content-wrapper -->
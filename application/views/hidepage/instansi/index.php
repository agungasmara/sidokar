<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            PSP BMN
            <small>Input Pengajuan</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li class="active">General</li>
        </ol>
    </section>
    <!-- Main content -->
    <section class="content" id="app">

        <div class="row">
            <div >
                <!-- Custom Tabs -->
                <input type="hidden" name="idPengajuan" id="idPengajuan" value="<?=$idPengajuan?>">
                <detail-penggajian v-on:send-index-step="getIndexFormStep"></detail-penggajian>
                <!-- /.tab-content -->
            </div>

           
            <!-- nav-tabs-custom -->
        </div>
            <!-- /.col -->
    </section>
</div>




<script type="text/x-template" id="userForm">
    <div>
    <div class="col-md-8">
                <div class="nav-tabs-custom">
                    <form-wizard :ref="'vuewizard'" shape="tab">
                        <wizard-step slot-scope="props" slot="step"  :tab="props.tab" :transition="props.transition" :index="props.index">
                        </wizard-step>
                        <h3 slot="title"></h3>
                        <tab-content icon="fa fa-cog" :before-change="beforeTab1Switch">
                         <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon margin">Detail User</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">

                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_petugas" v-model="userData.fullname" data-vv-scope="step1" >
                                                <span class="text-red">{{ errors.first('step1.nama_petugas') }}</span>
                                            </div>
                                        </div>                                        
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">jabatan</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_petugas" v-model="userData.jabatan" data-vv-scope="step1" >
                                                <span class="text-red">{{ errors.first('step1.nama_petugas') }}</span>
                                            </div>
                                        </div>                                   
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Nip</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_petugas" v-model="userData.nip" data-vv-scope="step1" >
                                                <span class="text-red">{{ errors.first('step1.nip') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Instansi</label>
                                            <div class="col-sm-8">
                                                 <vue-multiselect 
                                                        :allow-empty="false"
                                                        v-model="chooseInstansi" 
                                                        :options="option_instansi" 
                                                        :custom-label="nama_instansi" 
                                                        placeholder="Select one" 
                                                        track-by="nama" 
                                                        v-validate data-vv-rules="required" 
                                                        name="nama_instansi">
                                                    </vue-multiselect>
                                                <span class="text-red">{{ errors.first('step1.nama_instansi') }}</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    <!-- /.box-body -->

                                </div>



                            </div>
                        </tab-content>


                           

                        <template slot="footer" slot-scope="props">
                            <div class="wizard-footer-right2">

                                <wizard-button @click.native="saveUserData()" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" style="margin-right: 10px;">Save Data</wizard-button>
                                <wizard-button @click.native="backtoTable()" class="btn btn-success" >Back</wizard-button>
                            </div>  
                        </template>
                    </form-wizard>
                </div>
    </div>
    <div class="col-md-4">
        <div class="box box-default">
   
                <div v-if="1">
                    <div class="box-header with-border">
                        <i class="fa fa-bullhorn"></i>

                        <h3 class="box-title">Pengumuman!</h3>
                    </div>
                    <div class="box-body">
                        <div class="callout callout-danger">
                            <h4>Proses Form Renja dan Renstra</h4>

                            <p>Mohon diisi data petugas yang melaksanakan inputing userData secara lengkap. </p>
                        </div>
                    </div>
                </div>  
                    
         </div>
    </div>
  </div>
</script>

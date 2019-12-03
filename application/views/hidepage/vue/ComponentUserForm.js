<script type="text/x-template" id="documentForm">
    <div>
    <div class="col-md-8">
                <div class="nav-tabs-custom">
                    <form-wizard :ref="'vuewizard'" :start-index.sync="stepIndex" shape="tab">
                        <wizard-step slot-scope="props" slot="step"  :tab="props.tab" :transition="props.transition" :index="props.index">
                        </wizard-step>
                        <h3 slot="title"></h3>
                        <tab-content icon="fa fa-cog" :before-change="beforeTab1Switch">
                         <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon margin">Detail Document</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">

                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Dokumen</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_petugas" v-model="document.nama" data-vv-scope="step1" >
                                                <span class="text-red">{{ errors.first('step1.nama_petugas') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Tipe</label>
                                            <div class="col-sm-8">
                                                 <vue-multiselect 
                                                        :allow-empty="false"
                                                        v-model="tipedokumen" 
                                                        :options="option_tipedokumen" 
                                                        :custom-label="jenis_dokumen" 
                                                        placeholder="Select one" 
                                                        track-by="nama" 
                                                        v-validate data-vv-rules="required" 
                                                        name="jenis_dokumen"
                                                        @input="set_jenis_dokumen()">
                                                    </vue-multiselect>
                                                <span class="text-red">{{ errors.first('step1.jenis_dokumen') }}</span>
                                            </div>
                                        </div>
                                        
                                        <div v-if="true">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Softcopy</label>
                                                <div class="col-sm-10">
                                                     <button class="btn" :class="{'active btn-success':(parseInt(document.softcopy))}" @click="pickStatusDocumentSoftcopy('ada')">Ada</button>
                                                     <button class="btn" :class="{'active btn-success':(!parseInt(document.softcopy))}" @click="pickStatusDocumentSoftcopy('tidak ada')">Tidak</button>
                                                </div>                                                
                                            </div>                                           

                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Link Softcopy</label>
                                                <div class="col-sm-10" v-if="!isuploadUlangDocumentSoftcopy">
                                                    <div class="box-body2">
                                                        <a class="btn btn-block btn-social btn-bitbucket" :href="hrefFileDocumentSoftcopy" download>
                                                            <i class="fa fa-download"></i> {{hrefFileDocumentSoftcopy}}
                                                        </a>
                                                    </div>                                              
                                                    <button type="button" class="btn btn-success" @click="isuploadUlangDocumentSoftcopy=true;showUploadDocumentSoftcopy=true">
                                                            Upload Ulang
                                                    </button>
                                                </div> 


                                                <div class="col-sm-10" v-if="isuploadUlangDocumentSoftcopy">
                                                    <div v-if="showUploadDocumentSoftcopy">
                                                        <input type="file" id="fileSuratPermohon" ref="fileDocumentSoftcopy" v-validate="'required|size:2000'" name="fileDocumentSoftcopy" data-vv-scope="step2" accept="application/pdf,image/x-png,image/gif,image/jpeg,image/jpg">
                                                        <span class="text-red">{{ errors.first('step2.fileSuratPermohonName') }}</span>
                                                        <p class="help-block">Upload Document *.pdf or *.jpg or *.jpeg or *.png</p>
                                                    </div>
                                                    <div v-if="isprosesUploadDocumentSoftcopy">
                                                        <span class="text-red">Mohon Menunggu, Sedang Proses <vue-blink> Upload...</vue-blink></span>
                                                    </div>
                                                    <button type="button" class="btn btn-danger" @click="uploadFileDocumentSoftcopy();isprosesUploadDocumentSoftcopy=true;showUploadDocumentSoftcopy=false;isprosesUploadDocumentSoftcopy=false">
                                                            Upload File
                                                    </button>
                                                </div>

                                            </div>


                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Hardcopy</label>
                                                <div class="col-sm-5">
                                                     <button class="btn" :class="{'active btn-success':(parseInt(document.hardcopy))}" @click="pickStatusDocumentHardcopy('ada')">Ada</button>
                                                     <button class="btn" :class="{'active btn-success':(!parseInt(document.hardcopy))}" @click="pickStatusDocumentHardcopy('tidak')">Tidak</button>
                                                </div>
                                            </div>                                      

                                            
                                            
                                            <div class="form-group" v-if="tipedokumen.id==='1'">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Periode</label>
                                                <div class="col-sm-3">                          
                                                    <div class="input-group" style="width: 100%!important;">
                                                        <vuejs-datepicker :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="document.periode_start" name="periode_gaji" Placeholder="Start Year"
                                                        @closed='showEndYear()'
                                                        ></vuejs-datepicker>
                                                    </div>
                                                </div>
                                                <div class="col-md-1" style="height: 34px">
                                                    <div style="line-height: 34px;"><b>to</b></div>
                                                </div>
                                                <div class="col-sm-3">                          
                                                    <div class="input-group" style="width: 100%!important;">
                                                        <vuejs-datepicker ref="endYearPicker" :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="document.periode_end" name="periode_gaji" Placeholder="End Year"></vuejs-datepicker>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group" v-if="tipedokumen.id==='2'">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Tahun</label>
                                                <div class="col-sm-3">                          
                                                    <div class="input-group" style="width: 100%!important;">
                                                        <vuejs-datepicker :format="customFormatter" :minimum-view="'year'" input-class="form-control clearFormInput" :value="new Date()" v-model="document.periode_start" name="periode_gaji" Placeholder="Start Year"></vuejs-datepicker>
                                                    </div>
                                                </div>
                                            </div>
                                        

                                        </div>
                                    </div>
                                    <!-- /.box-body -->

                                </div>



                            </div>
                        </tab-content>


                           

                        <template slot="footer" slot-scope="props">
                            <div class="wizard-footer-right2">

                                <wizard-button @click.native="saveDocument();isSaveNext=0" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" style="margin-right: 10px;">Save Data</wizard-button>
                                <wizard-button @click.native="backtoTable()" class="btn btn-success" :style="styleback">Back</wizard-button>
                            </div>  
                        </template>
                    </form-wizard>
                </div>
    </div>
    <div class="col-md-4">
        <div class="box box-default">
   
                <div v-if="stepIndex=='0'">
                    <div class="box-header with-border">
                        <i class="fa fa-bullhorn"></i>

                        <h3 class="box-title">Pengumuman!</h3>
                    </div>
                    <div class="box-body">
                        <div class="callout callout-danger">
                            <h4>Proses Form Renja dan Renstra</h4>

                            <p>Mohon diisi data petugas yang melaksanakan inputing document secara lengkap. </p>
                        </div>
                    </div>
                </div>  
                    
         </div>
    </div>
  </div>
</script>

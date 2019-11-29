<script type="text/x-template" id="sidebarPengajuanWizardForm">
            
</script>
<script type="text/x-template" id="pspPengajuanWizardForm">
    <div>
    <div class="col-md-8">
                <div class="nav-tabs-custom">
                    <form-wizard :ref="'vuewizard'" :start-index.sync="stepIndex">
                        <wizard-step slot-scope="props" slot="step"  :tab="props.tab" :transition="props.transition" :index="props.index">
                        </wizard-step>
                        <h3 slot="title"></h3>
                        <tab-content title="Inital Input" icon="fa fa-user" :before-change="beforeTab1Switch">
                         <div class="box box-primary">

                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon margin">IDENTITAS PETUGAS</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Petugas</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_petugas" v-model="pengajuan.nama_petugas" data-vv-scope="step1">
                                                <span class="text-red">{{ errors.first('step1.nama_petugas') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Petugas</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control"  placeholder="Nomor Induk Pegawai" v-validate="'required'" name="nip_petugas" v-model="pengajuan.nip_petugas" data-vv-scope="step1">
                                                <span class="text-red">{{ errors.first('step1.nip_petugas') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan Petugas</label>
                                            <div class="col-sm-5">
                                                <input type="jabatan" class="form-control"  placeholder="Jabatan Petugas" v-validate="'required'" name="jabatan_petugas" v-model="pengajuan.jabatan_petugas" data-vv-scope="step1">
                                                <span class="text-red">{{ errors.first('step1.jabatan_petugas') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">No. Hp.</label>
                                            <div class="col-sm-5">
                                                <the-mask type="text" mask="(+62)################" class="form-control" v-validate="'required'" name="kontak_petugas" v-model="pengajuan.kontak_petugas" placeholder="Kontak Petugas" data-vv-scope="step1"> </the-mask>
                                                <span class="text-red">{{ errors.first('step1.kontak_petugas') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Email</label>
                                            <div class="col-sm-8">
                                                <input type="email" class="form-control"  placeholder="Email Petugas" v-validate="{ required: true, regex:/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }" name="email_petugas" v-model="pengajuan.email_petugas" data-vv-scope="step1">
                                                <span class="text-red">{{ errors.first('step1.email_petugas') }}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->

                                </div>
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">IDENTITAS SATKER</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Kementerian Lembaga</label>
                                            <div class="col-sm-8">
                                                <vue-multiselect 
                                                    v-model="pengajuan.kementerian_lembaga" 
                                                    :options="option_kementerian_lembaga" 
                                                    :custom-label="name_kementerian_lembaga" 
                                                    placeholder="Select one" 
                                                    label="name" 
                                                    track-by="nama_KL" 
                                                    v-validate data-vv-rules="required" 
                                                    name="KementerianLembaga">
                                                </vue-multiselect>
                                                <span class="text-red">{{ errors.first('step1.KementerianLembaga') }}</span>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Satker</label>
                                            <div class="col-sm-5">
                                                <input type="name" class="form-control" id="inputEmail3" placeholder="Nama Satuan Kerja" v-validate="'required'" name="satuan_kerja" v-model="pengajuan.satuan_kerja">
                                                <span class="text-red">{{ errors.first('step1.satuan_kerja') }}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->

                                </div>


                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">IDENTITAS BMN</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Jenis BMN</label>
                                            <div class="col-sm-5">
                                                <vue-multiselect 
                                                    :allow-empty="false" 
                                                    v-model="pengajuan.jenis_bmn" 
                                                    :options="option_jenis_bmn" 
                                                    :custom-label="nameJenisBMN" 
                                                    placeholder="Pilih Jenis BMN" 
                                                    label="name" track-by="name" 
                                                    v-validate data-vv-rules="required" 
                                                    name="JenisBMN"
                                                    data-vv-scope="step1"

                                                    >
                                                </vue-multiselect>

                                                <span class="text-red">{{ errors.first('step1.JenisBMN') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Jumlah Unit</label>
                                            <div class="col-sm-5">
                                                <input type="email" class="form-control"  placeholder="Jumlah Unit BMN" v-validate="'required|numeric'" name="jumlah_unit" v-model="pengajuan.jumlah_unit" data-vv-scope="step1">
                                                <span class="text-red">{{ errors.first('step1.jumlah_unit') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Total Nilai Perolehan</label>
                                            <div class="col-sm-5">
                                                <money  type="text" v-bind="money" class="form-control" v-validate="'required|numeric|min_value:100000'" name="totalnilai_bmn" v-model="pengajuan.totalnilai_bmn" placeholder="Total Nilai (Rp.)" data-vv-scope="step1"> </money>
                                                <span class="text-red">{{ errors.first('step1.totalnilai_bmn') }}</span>
                                            </div>
                                        </div>

                                        <div class="form-group" v-if="true">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Lokasi BMN (Kabupaten)</label>
                                            <div class="col-sm-5">
                                                <vue-multiselect 
                                                    v-model="pengajuan.kabupaten" 
                                                    :options="option_kabupaten" 
                                                    :custom-label="name_kabupaten" 
                                                    placeholder="Pilih Kabupaten" 
                                                    label="kabupaten" 
                                                    track-by="name" 
                                                    v-validate 
                                                    data-vv-rules="required" 
                                                    name="lokasiKabupaten"
                                                    data-vv-scope="step1">
                                                </vue-multiselect>

                                                <span class="text-red">{{ errors.first('step1.lokasiKabupaten') }}</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </tab-content>
                                                
                        <tab-content title="Proses PSPBMN" icon="fa fa-certificate" :before-change="beforeTab1SubSwitch">
                            <div class="callout callout-warning" v-if="notif100M">
                                <h4>Silahkan ajukan Permohonan anda kepada </h4>
                                <h1>Direktorat Jenderal Kekayaan Negara</h1>
                                <div class="row">
                                    <label class="col-sm-1">Kepada</label>
                                    <label class="col-sm-8">Dirjen Kekayaan Negara</label>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1">Alamat</label>
                                    <label class="col-sm-8">Kementerian Keuangan, Gedung Syafrudin Prawiranegara II Lantai. Jalan Lapangan Banteng No. 2-4, Ps. Baru, Kec. Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710</label>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1">Telepon</label>
                                    <label class="col-sm-8">(021) 1500 991</label>
                                </div>
                            </div>

                            <div class="callout callout-info" v-if="notif75M">
                                <h4>Silahkan ajukan Permohonan anda kepada </h4>
                                <h1>Direktorat Pengelolaan Kekayaan Negara dan Sistem Informasi</h1>
                                <div class="row">
                                    <label class="col-sm-1">Kepada</label>
                                    <label class="col-sm-8">Direktur PKNSI</label>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1">Alamat</label>
                                    <label class="col-sm-8">DJKN, Kementerian Keuangan. Gedung Syafrudin Prawiranegara II Lantai, Jalan Lapangan Banteng No. 2-4, Ps. Baru, Kec. Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710</label>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1">Telepon</label>
                                    <label class="col-sm-8">(021) 1500 991</label>
                                </div>
                            </div>

                            <div class="callout callout-success" v-if="notifProses">
                                <h4>Permohanan anda akan di proses oleh</h4>
                                <h1>{{areaProsesText}}</h1>
                                <p>Silakan klik tombol SAVE & NEXT dibawah ini!</p>
                            </div>
                        </tab-content>

                        <tab-content title="Input Dokumen" icon="fa fa-envelope-o" v-if="isShowOtherTabDJKN" :before-change="beforeTab2Switch">

                            <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">DOKUMEN PERMOHONAN</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan Pemohon</label>
                                            <div class="col-sm-8">
                                                <input type="name" class="form-control"  placeholder="isi dengan lengkap, Contoh: Kepala Kantor Pertanahan Maluku Tengah" v-validate="'required'" name="jabatan_pemohon" v-model="pengajuan.jabatan_pemohon" data-vv-scope="step2">
                                                <span class="text-red">{{ errors.first('step2.jabatan_pemohon') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Nomor Surat Permohonan</label>
                                            <div class="col-sm-5">
                                                <input type="name" class="form-control"  placeholder="Nomor Surat Pemohon" v-validate="'required'" name="noSurat_pemohon" v-model="pengajuan.noSurat_pemohon" data-vv-scope="step2">
                                                <span class="text-red">{{ errors.first('step2.noSurat_pemohon') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Tanggal Surat Permohonan</label>
                                            <div class="col-sm-5">
                                                <input type="jabatan" id="datepicker-input-trigger" :value="formatDates" class="form-control"  placeholder="Tanggal Surat" v-validate="'required'" name="tglSurat_pemohon" data-vv-scope="step2" />
                                                <airbnb-style-datepicker 
                                                    style="left:0!important" 
                                                    :trigger-element-id="'datepicker-input-trigger'" 
                                                    :mode="'single'" 
                                                    :date-one="pengajuan.tglSurat_pemohon" 
                                                    v-on:date-one-selected="function(val) { pengajuan.tglSurat_pemohon = val }" :months-to-show="1"
                                                    v-on:closed="onClosed" v-on:previous-month="onMonthChange" v-on:next-month="onMonthChange">
                                                </airbnb-style-datepicker>
                                                <span class="text-red">{{ errors.first('step2.tglSurat_pemohon') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Perihal Surat Permohonan</label>
                                            <div class="col-sm-10">
                                                <input type="nohape" class="form-control"  placeholder="Perihal Surat Permohonan" v-validate="'required'" name="perihalSurat_pemohon" v-model="pengajuan.perihalSurat_pemohon" data-vv-scope="step2">
                                                <span class="text-red">{{ errors.first('step2.perihalSurat_pemohon') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Upload Surat Permohonan</label>
                                            <div class="col-sm-10" v-if="!isuploadUlangFilePermohonan">
                                                <div class="box-body2">
                                                    <a class="btn btn-block btn-social btn-bitbucket" :href="hrefFileSuratPermohon" download>
                                                        <i class="fa fa-download"></i> {{hrefFileSuratPermohon}}
                                                    </a>
                                                </div>                                              
                                                <button type="button" class="btn btn-success" @click="isuploadUlangFilePermohonan=true;showformUploadPermohonan=true">
                                                        Upload Ulang
                                                </button>
                                            </div> 


                                            <div class="col-sm-10" v-if="isuploadUlangFilePermohonan">
                                                <div v-if="showformUploadPermohonan">
                                                    <input type="file" id="fileSuratPermohon" ref="fileSuratPermohon" v-validate="'required|size:2000'" name="fileSuratPermohonName" data-vv-scope="step2" accept="application/pdf,image/x-png,image/gif,image/jpeg,image/jpg">
                                                    <span class="text-red">{{ errors.first('step2.fileSuratPermohonName') }}</span>
                                                    <p class="help-block">Upload Document *.pdf or *.jpg or *.jpeg or *.png</p>
                                                </div>
                                                <div v-if="isprosesUploadPermohonan">
                                                    <span class="text-red">Mohon Menunggu, Sedang Proses Upload...</span>
                                                </div>
                                                <button type="button" class="btn btn-danger" @click="uploadFilePermohonan();isprosesUploadPermohonan=true;showformUploadPermohonan=false">
                                                        Upload File
                                                </button>
                                            </div>

                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Upload Daftar Rincian BMN (Format Exel)</label>
                                            <div class="col-sm-10" v-if="!isuploadUlangDaftarRincian">
                                                <div class="box-body2">
                                                    <a class="btn btn-block btn-social btn-bitbucket" :href="hrefFileDaftarRincian" download>
                                                        <i class="fa fa-download"></i> {{hrefFileDaftarRincian}}
                                                    </a>
                                                </div>                                              
                                                <button type="button" class="btn btn-success" @click="isuploadUlangDaftarRincian=true;showformUploadRincian=true">
                                                        Upload Ulang
                                                </button>
                                            </div> 
                                            <div class="col-sm-10" v-if="isuploadUlangDaftarRincian">
                                                <div class="col-sm-10" v-if="showformUploadRincian">
                                                    <input type="file" id="fileDaftarRincian" ref="fileDaftarRincian" v-validate="'required|size:2000'" name="fileDaftarRincianName" data-vv-scope="step2" accept="application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,image/x-png,image/gif,image/jpeg,image/jpg">
                                                    <span class="text-red">{{ errors.first('step2.fileDaftarRincianName') }}</span>
                                                </div>

                                                <div v-if="isprosesUploadRincian">
                                                    <span class="text-red">Mohon Menunggu, Sedang Proses Upload...</span>
                                                </div>
                                                <button type="button" class="btn btn-danger" @click="uploadFileRincian();isprosesUploadRincian=true;showformUploadRincian=false">
                                                        Upload File
                                                </button>
                                            </div>
                                            <div class="col-sm-5"  v-if="isuploadUlangDaftarRincian">
                                                <div class="box-body2">
                                                    <a class="btn btn-block btn-social btn-bitbucket" :href="downloadFileSampleRincianBMN" download>
                                                        <i class="fa fa-download"></i> Download contoh format Rincian BMN
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Upload Dokumen Kelengkapan</label>

                                            <div class="col-sm-10" v-if="!isuploadUlangDokumenKelengkapan">
                                                <div class="box-body2">
                                                    <a class="btn btn-block btn-social btn-bitbucket" :href="hrefFileDokumenKelengkapan" download>
                                                        <i class="fa fa-download"></i> {{hrefFileDokumenKelengkapan}}
                                                    </a>
                                                </div>                                              
                                                <button type="button" class="btn btn-success" @click="isuploadUlangDokumenKelengkapan=true;showformUploadDokumenKelengkapan=true">
                                                        Upload Ulang
                                                </button>
                                            </div> 

                                            <div class="col-sm-10" v-if="isuploadUlangDokumenKelengkapan">
                                                <div class="col-sm-10" v-if="showformUploadDokumenKelengkapan">
                                                    <input type="file" id="fileDokumenKelengkapan" ref="fileDokumenKelengkapan" v-validate="'required|size:2000'" name="fileDokumenKelengkapanName" data-vv-scope="step2" accept="application/pdf,image/x-png,image/gif,image/jpeg,image/jpg">
                                                    <span class="text-red">{{ errors.first('step2.fileDokumenKelengkapanName') }}</span>
                                                    <p class="help-block">Upload Document *.pdf or *.jpg or *.jpeg or *.png</p>
                                                </div>

                                                <div v-if="isprosesUploadDokumenKelengkapan">
                                                    <span class="text-red">Mohon Menunggu, Sedang Proses Upload...</span>
                                                </div>
                                                <button type="button" class="btn btn-danger" @click="uploadFileDokumenKelengkapan();isprosesUploadDokumenKelengkapan=true;isuploadUlangDokumenKelengkapan=true;showformUploadDokumenKelengkapan=false">
                                                        Upload File
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tab-content>
                        <tab-content title="Last step" icon="fa fa-check-circle" v-if="isShowOtherTabDJKN" :before-change="resetTab">
                            <div class="callout callout-success">
                                <h4>Terima Kasih</h4>
                                <h4>Permohonan Pengajuan PSP BMN anda telah dikirimkan.</h4>
                                <p>Kami akan segera memproses permohonan Anda.</p>
                            </div>
                            <div v-if="isIsiUlangKuisioner">
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">Mohon Mengisi Kuisioner</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <div class="col-sm-4">
                                                <div class="box-body2">
                                                    <a @click="setKuisioner('3')" class="btn btn-block" :class="{'btn-success':(pengajuan.kuisioner === '3')}" >
                                                                     <i class="fa  fa-smile-o fa-10x" ></i><br/>Sangat Memuaskan
                                                                </a>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="box-body2">
                                                    <a @click="setKuisioner('2')"  class="btn btn-block" :class="{'btn-success':(pengajuan.kuisioner === '2')}" >
                                                                     <i class="fa fa-meh-o fa-10x" ></i><br/> Biasa Saja
                                                                </a>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="box-body2">
                                                    <a @click="setKuisioner('1')"  class="btn btn-block" :class="{'btn-success':(pengajuan.kuisioner === '1')}" >
                                                                    <i class="fa fa-frown-o fa-10x" ></i><br/>Kurang Memuaskan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!isIsiUlangKuisioner">
                                <button type="button" style="width:100%" class="btn btn-danger" @click="isIsiUlangKuisioner=true">
                                                        Isi Ulang Kuisioner
                                </button>
                            </div>


                        </tab-content>
                           

                        <template slot="footer" slot-scope="props">
                            <div class="wizard-footer-right2">
                                <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab();" class="wizard-footer-right" :style="props.fillButtonStyle">Save & Next</wizard-button>
                                <wizard-button v-else @click.native="finishPengajuan();" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done & Upload Data' : 'Next'}}</wizard-button>

                                <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab();" class="btn btn-warning" :style="props.fillButtonStyle">Back</wizard-button>
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
                            <h4>IDENTITAS PETUGAS</h4>

                            <p>Mohon diisi data petugas yang melaksanakan inputing permohonan PSP secara lengkap. Kami akan mengirimkan notifikasi email atas progress PSP BMN yang diajukan</p>
                        </div>
                        <div class="callout callout-info">
                            <h4>IDENTITAS SATKER </h4>

                            <p>Pilih Nama Kementerian/Lembaga serta ketikkan Nama Satker secara lengkap.</p>
                        </div>
                        <div class="callout callout-warning">
                            <h4>PENGAJUAN BMN</h4>

                            <p>Pilih Jenis BMN, Jumlah Unit BMN dan Masukkan Total Nilai Perolehannya. Masukkan Nilai Perolehan sebelum Revaluasi BMN 2017-2018.</p>
                        </div> 
                    </div>
                </div>     
                <div v-else-if="stepIndex=='1'">
                    <div class="box-header with-border">
                        <i class="fa fa-bullhorn"></i>

                        <h3 class="box-title">Pengumuman!</h3>
                    </div>
                    <div class="box-body">
                        <div class="callout callout-danger">
                            <h4>Penting diingat!</h4>

                            <p>Mohon untuk memastikan Tujuan Surat dalam Surat Permohonan, apakah sudah sesuai dengan informasi di sebalah berikut.</p>
                        </div> 
                    </div>
                </div>        
                <div v-else-if="stepIndex=='2'">
                    <div class="box-header with-border">
                        <i class="fa fa-bullhorn"></i>

                        <h3 class="box-title">Pengumuman!</h3>
                    </div>
                    <div class="box-body">
                        <div class="callout callout-danger">
                            <h4>JABATAN PEMOHON</h4>

                            <p>Ketikkan Jabatan Pemohon secara lengkap, Contoh: Kepala Kantor Pertanahan Maluku Tengah, Sekretaris Jenderal Kementerian Agama, dll.</p>
                        </div>
                        <div class="callout callout-info">
                            <h4>UPLOAD SURAT PERMOHONAN </h4>

                            <p>Upload File Surat Permohonan dalam format PDF atau JPEG. (Max 2 MB) </p>
                        </div>
                        <div class="callout callout-warning">
                            <h4>UPLOAD DAFTAR RINCIAN BMN</h4>

                            <p>Upload File Daftar Rincian BMN dalam format XLS. File ini sangat membantu kami dalam memverifikasi berkas permohonan. Untuk format XLS dapat di download pada tombol yang tersedia.  (Max 2 MB)</p>
                        </div> 
                        <div class="callout callout-info">
                            <h4>UPLOAD DOKUMEN KELENGKAPAN</h4>

                            <p>Upload File Dokumen Kelengkapan Permohonan PSP dalam format PDF atau JPEG  (Max 2 MB). Dokumen Kelengkapan antara lain:</p>
                            <ol>
                                <li>
                                    Untuk BMN yang Memiliki Dokumen Kepemilikan, lampirkan:
                                    <ul>
                                        <li>Fotokopi Dokumen Kepemilikan, dan</li>
                                        <li>Surat keterangan pejabat struktural menyatakan kebenaran fotokopi tersebut</li>
                                    </ul>
                                </li>
                                <li>
                                    Untuk BMN yang tidak mempunyai Dokumen Kepemilikan (Selain Tanah dan Bangunan diatas Rp. 100 Juta), lampirkan:
                                    <ul>
                                        <li>Fotokopi  BAST perolehan barang dan dokumen lainnya, dan</li>
                                        <li>Surat keterangan pejabat struktural menyatakan kebenaran fotokopi tersebut</li>
                                    </ul>
                                </li>
                                <li>
                                    Untuk BMN yang tidak mempunyai Dokumen Kepemilikan, lampirkan:
                                    <ul>
                                        <li>SPTJ bermaterai bahwa barang tersebut adalah BMN dan digunakan untuk tugas dan fungsi</li>
                                        <li>Surat Kehilangan dari Kepolisian apabila Memiliki Dokumen Kepemilikan namun Hilang.</li>
                                    </ul>
                                </li>
                                <li>
                                    KIB
                                </li>
                                <li>
                                    Foto
                                </li>
                                <li>
                                    Fotocopy Surat Keputusan (dari Kementerian/Lembaga) tentang Pendelegasian Wewenang
                                </li>
                            </ol>
                        </div> 
                    </div>
                </div>        
                <div v-else-if="stepIndex=='3'">
                    <div class="box-header with-border">
                        <i class="fa fa-bullhorn"></i>

                        <h3 class="box-title">Pengumuman!</h3>
                    </div>
                    <div class="box-body">
                        <div class="callout callout-danger">
                            <h4>Terima Kasih!</h4>

                            <p>Terima kasih sudah menginput data PSP BMN</p>
                        </div>
                    </div>
                </div>   
                    
                </div>
    </div>
  </div>
</script>



<script type="text/x-template" id="pspTablePengajuan">
    <div>
                  <div class="box-body">
                            <table class="table is-bordered is-hoverable">
                                <thead class="text-white bg-dark">
                                    <th class="text-white">ID</th>
                                    <th class="text-white">No Surat</th>
                                    <th class="text-white">Tanggal Surat</th>
                                    <th class="text-white">Kementrian Lembaga</th>
                                    <th class="text-white">Status Pengajuan</th>
                                    <th class="text-white">Hasil Verifikasi</th>
                                    <th class="text-white">Action</th>
                                </thead>
                                <tbody class="table-light">
                                    <tr v-for="data in pengajuan" class="table-default">
                                        <td>{{data.id}}</td>
                                        <td v-if="data.noSurat_pemohon===''">Not Set</td>
                                        <td v-else>{{data.noSurat_pemohon}}</td> 
                                        <td>{{data.submitdate}}</td> 

                                        <td>{{data.kementerian_lembaga}}</td>
                                        <td>{{data.status_pengajuan}} 
                                        </td>
                                        <td>
                                            <div v-if="data.hasil_verifikasi!==null">
                                              <button type="button" 
                                                        class="btn" 
                                                        :class="{'btn-success':(data.hasil_verifikasi === 'Terbitkan KMK Dokumen')}" 
                                                        v-if="data.hasil_verifikasi === 'Terbitkan KMK Dokumen'">
                                                   {{data.hasil_verifikasi}}
                                                </button>
                                                <button type="button" 
                                                        class="btn" 
                                                        :class="{'btn-danger':(data.hasil_verifikasi === 'Butuh Kelengkapan Data')}" 
                                                        v-else-if="data.hasil_verifikasi === 'Butuh Kelengkapan Data'">
                                                   {{data.hasil_verifikasi}}
                                                </button>
                                                <button type="button" 
                                                        class="btn" 
                                                        :class="{'btn-warning':(data.hasil_verifikasi === 'Butuh Survey Lapangan')}" 
                                                        v-else-if="data.hasil_verifikasi === 'Butuh Survey Lapangan'">
                                                   {{data.hasil_verifikasi}}
                                                </button>
                                                <div v-else>
                                                    {{data.hasil_verifikasi}}
                                                </div>  
                                            </div>
                                            <div v-else>
                                                Belum Verifikasi
                                            </div>

                                        </td>
                                        <td>
                                            <button type="button" 
                                                    class="btn btn-warning" 
                                                    @click=
                                                        "gotoEditData(data.id)">

                                                Edit
                                            </button>

                                            <button type="button" 
                                                    class="btn btn-info" 
                                                    @click=
                                                        "selectPengajuan(data);getDataChoosePengajuan();selectJenisForm(data.hasil_verifikasi);getJenisForm()">

                                                Cek Hasil
                                            </button>

                                            
                                        </td>
                                    </tr>
                                    <tr v-if="emptyResult">
                                        <td colspan="9" rowspan="4" class="text-center h1">No Record Found</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination :current_page="currentPage" :row_count_page="rowCountPage" @page-update="pageUpdate" :total_users="totalData" :page_range="pageRange"></pagination>
    </div>
</script>


<script type="text/x-template" id="pspHasilPengajuanFormKANWIL">
    <div>
                <div class="nav-tabs-custom">
                    <form-wizard>
                        <wizard-step slot-scope="props" slot="step" :tab="props.tab" :transition="props.transition" :index="props.index">
                        </wizard-step>
                        <h3 slot="title"></h3>

                        <tab-content title="Input Dokumen" icon="fa fa-envelope-o" v-if="jenisForm.butuhkelengkapan" >

                            <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">SILAKAN Cek Kekurangan File dibawah ini Edit</h3>
                                </div>



                                <div class="form-horizontal">
                                <div class="box-body">
                                        <div v-for="(row, index) in daftarKekuranganData" >
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-3 control-label">Kekurangan File {{index+1}}</label>
                                                <div class="col-sm-9">
                                                    <input disabled type="text" class="form-control" placeholder="Masukkan Nama Data yang kurang" v-model="row.nama">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group" >
                                                <div class="col-sm-12 ">
                                                   <div class="box box-widget widget-user-2">
                                                        <div class="widget-user-header bg-yellow" v-if="!isEmptyDokumenKelengkapanFinal()">
                                                          <h3 class="widget-user-username">Silakan Download Dokumen Kurang Lengkap Data</h3>
                                                        </div>
                                                        <div class="widget-user-header bg-red" v-else>
                                                          <h3 class="widget-user-username" >Verifikator Belum Upload Dokumen</h3>
                                                        </div>
                                                        <div class="box-footer no-padding">
                                                          <ul class="nav nav-stacked" v-if="!isEmptyDokumenKelengkapanFinal()">
                                                            <li ><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Dokumen Verifikasi<span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                          </ul>
                                                        </div>

                                                      </div>
                                                </div>
                                        </div>

                                </div>

                                </div>
                            </div>
                        </tab-content>

                        <tab-content title="Input Dokumen" icon="fa fa-envelope-o" v-if="jenisForm.butuhsurvey" >

                            <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">PERLU SURVEY</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-3 control-label">Rencana Survei Lapangan?</label>
                                            <div class="col-sm-9">
                                               <input disabled type="text" class="form-control" placeholder="Masukkan Rencana" v-model="choosePengajuan.rencana_survey">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama CP Survei</label>
                                            <div class="col-sm-9">
                                               <input disabled type="text" class="form-control" placeholder="Masukkan Nama" v-model="choosePengajuan.nama_survey">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-3 control-label">Kontak CP Survei</label>
                                            <div class="col-sm-9">
                                               <input disabled type="text" class="form-control" placeholder="Masukkan Nama" v-model="choosePengajuan.cp_survey">
                                            </div>
                                        </div>

                                        <div class="form-group"  >
                                                <div class="col-sm-12 ">
                                                   <div class="box box-widget widget-user-2">
                                                        <div class="widget-user-header bg-yellow" v-if="!isEmptyDokumenSurveyFinal()">
                                                          <h3 class="widget-user-username">Silakan Download ND Survey Lapangan</h3>
                                                        </div>
                                                        <div class="widget-user-header bg-red" v-else>
                                                          <h3 class="widget-user-username" >Verifikator Belum Upload Dokumen</h3>
                                                        </div>
                                                        <div class="box-footer no-padding">
                                                          <ul class="nav nav-stacked" v-if="!isEmptyDokumenSurveyFinal()">
                                                            <li ><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Dokumen Verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                </div>
                                        </div>



                                    </div>

                                </div>
                            </div>
                        </tab-content>

                        <tab-content title="Input Dokumen" icon="fa fa-envelope-o" v-if="jenisForm.uploaddokumen" >

                            <div class="box box-primary">
                                <div class="form-group">
                                                <div class="col-sm-12 ">
                                                   <div class="box box-widget widget-user-2">
                                                        <div class="widget-user-header bg-green" v-if="!isEmptyDokumenCompleteFinal()">
                                                          <h3 class="widget-user-username">Silakan Download Dokumen Verifikasi Dibawah Ini</h3>
                                                        </div>
                                                        <div class="widget-user-header bg-red" v-else>
                                                          <h3 class="widget-user-username">Verifikastor Belum Upload Dokumen</h3>
                                                        </div>

                                                        <div class="box-footer no-padding" v-if="!isEmptyDokumenCompleteFinal()">
                                                          <ul class="nav nav-stacked">
                                                            <li ><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Dokumen Verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                        </div>
                                                      </div>

                                                </div>
                                        </div>
                            </div>
                        </tab-content>
                        <tab-content title="Last step" icon="fa fa-check-circle" v-if="(jenisForm.butuhkelengkapan||jenisForm.butuhsurvey||jenisForm.uploaddokumen)&&!isEmptyDokumenKelengkapanFinal()">
                            <div class="callout callout-success">
                                <h4>Terima Kasih</h4>
                                <h4>Permohonan Verifikasi Dokumen Telah Selesai dilakukan. Terima kasih sudah menggunakan sistem PSP BMN</h4>
                            </div>
                        </tab-content>

                        <tab-content title="Last step" icon="fa fa-check-circle" v-else>
                            <div class="callout callout-warning">
                                <h4>Mohon Menunggu</h4>
                                <h4>Permohonan Verifikasi Dokumen Belum Selesai Dilakukan, Mohon Menunggu</h4>
                            </div>
                        </tab-content>

                        <template slot="footer" slot-scope="props">
                            <div class="wizard-footer-right2">
                                <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Save & Next</wizard-button>
                                <wizard-button v-else @click.native="finishVerifikasiProses" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>

                                <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" class="btn btn-warning" :style="props.fillButtonStyle">Back</wizard-button>
                            </div>
                        </template>
                    </form-wizard>
                </div>

    </div>
</script>
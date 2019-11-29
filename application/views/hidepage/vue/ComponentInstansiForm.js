<script type="text/x-template" id="instansiForm">
    <div>
    <div class="col-md-8">
                <div class="nav-tabs-custom">
                    <form-wizard :ref="'vuewizard'" :start-index.sync="stepIndex">
                        <wizard-step slot-scope="props" slot="step"  :tab="props.tab" :transition="props.transition" :index="props.index">
                        </wizard-step>
                        <h3 slot="title"></h3>
                        <tab-content icon="fa fa-money" :before-change="beforeTab1Switch">
                         <div class="box box-primary">

                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon margin">PERIODE & JENIS GAJI</h3>
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Select Periode</label>
                                                <div>
                                                       <vuejs-datepicker :format="customFormatter" :minimum-view="'month'" input-class="form-control clearFormInput" :value="new Date()" v-model="instansi.periode_gaji" name="periode_gaji"></vuejs-datepicker>
                                                    <span class="text-red">{{ errors.first('step1.periode_gaji') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Jenis Penggajian</label>
                                                <div>
                                                    <vue-multiselect 
                                                        :allow-empty="false"
                                                        v-model="instansi.jenis_gaji_obj" 
                                                        :options="option_jenis_gaji" 
                                                        :custom-label="jenis_gaji_fn" 
                                                        placeholder="Select one" 
                                                        track-by="nama" 
                                                        v-validate data-vv-rules="required" 
                                                        name="jenis_gaji"
                                                        @input="set_jenis_gaji()">
                                                    </vue-multiselect>
                                                    <span class="text-red">{{ errors.first('step1.jenis_gaji') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon margin">IDENTITAS PEGAWAI</h3>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">

                                        <div class="form-group" v-if="isEditForm">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Pegawai</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_petugas" v-model="instansi.nama" data-vv-scope="step1" :disabled="true" >
                                                <span class="text-red">{{ errors.first('step1.nama_petugas') }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group" v-else>
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Select Pegawai</label>
                                            <div class="col-sm-8">
                                                <vue-multiselect 
                                                    ref="namaPegawai"
                                                    :allow-empty="false"
                                                    v-model="instansi.detailpegawai" 
                                                    :options="option_detail_pegawai" 
                                                    :custom-label="name_pegawai" 
                                                    placeholder="Select one" 
                                                    label="nama" 
                                                    track-by="nama" 
                                                    v-validate data-vv-rules="required" 
                                                    name="detailpegawai"
                                                    @input="setPotonganForm()">
                                                </vue-multiselect>
                                                <span class="text-red">{{ errors.first('step1.detailpegawai') }}</span>
                                            </div>
                                        </div>
                                        <div v-if="true">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Petugas</label>
                                                <div class="col-sm-5">
                                                    <input type="text" class="form-control"  placeholder="Nomor Induk Pegawai" v-validate="'required'" name="nip_petugas"  data-vv-scope="step1" value="112332324" :disabled="true">
                                                    <span class="text-red">{{ errors.first('step1.nip') }}</span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Golongan</label>
                                                <div class="col-sm-5">
                                                    <input type="jabatan" class="form-control"  placeholder="Jabatan Petugas" v-validate="'required'" name="golongan" v-model="instansi.golongan" data-vv-scope="step1" :disabled="true">
                                                    <span class="text-red">{{ errors.first('step1.golongan') }}</span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan</label>
                                                <div class="col-sm-5">
                                                    <input type="jabatan" class="form-control"  placeholder="Jabatan Petugas" v-validate="'required'" name="jabatan_petugas" v-model="instansi.jabatan" data-vv-scope="step1" :disabled="true">
                                                    <span class="text-red">{{ errors.first('step1.jabatan_petugas') }}</span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Gaji Pokok</label>
                                                <div class="col-sm-5">
                                                     <money  type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="gaji_pokok" v-model="instansi.gaji_pokok" placeholder="" data-vv-scope="step1" :disabled="true"> </money>
                                                    <span class="text-red">{{ errors.first('step1.gaji_pokok') }}</span>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Tunjangan Jabatan</label>
                                                <div class="col-sm-5">
                                                     <money  type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="tunjangan_jabatan" v-model="instansi.tunjangan_jabatan" placeholder="" data-vv-scope="step1" :disabled="true"> </money>
                                                    <span class="text-red">{{ errors.first('step1.tunjangan_jabatan') }}</span>
                                                </div>
                                            </div>
                                        

                                        </div>
                                    </div>
                                    <!-- /.box-body -->

                                </div>
                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">Potongan Gaji </h3> <div class="btn btn-success">{{label_jenis_gaji}} </div> 
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Kopri & Darma Wanita</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="kopri_dw" v-model="instansi.kopri_dw" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.kopri_dw') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Bank BPD</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="bank_bpd" v-model="instansi.bpd" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.bank_bpd') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Koprasi Melati</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="kop_melati" v-model="instansi.kop_melati" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.kop_melati') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Suka duka Naker</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="suka_duka" v-model="instansi.suka_duka" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.suka_duka') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Simp. Wajib + Voucher KPN</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="simp_voucher" v-model="instansi.simp_voucher" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.simp_voucher') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Cicilan Barang Kop. Daerah KPN</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="bank_bpd" v-model="instansi.cicilan_barang" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.bank_bpd') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Pinjaman Koperasi Daerah KPN</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="totalnilai_bmn" v-model="instansi.pinjaman_koperasi" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.gaji_pokok') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Arisan Dharma Wanita</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="bank_bpd" v-model="instansi.arisan_dw" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.bank_bpd') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Werdhi Sedana</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="totalnilai_bmn" v-model="instansi.werdhi_sedana" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.gaji_pokok') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Santunan PNS yg Meninggal</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="bank_bpd" v-model="instansi.santunan_meninggal" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.bank_bpd') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Pinjaman Koperasi Naker</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="totalnilai_bmn" v-model="instansi.pinjaman_kop_naker" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.gaji_pokok') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Simpanan Koperasi Naker</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="bank_bpd" v-model="instansi.simpanan_kop_naker" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.bank_bpd') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Tabungan SiMesra</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="totalnilai_bmn" v-model="instansi.tabungan_mesra" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.gaji_pokok') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">BPR Kanti</label>
                                                <div>
                                                   <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="bank_bpd" v-model="instansi.bpr_kanti" placeholder="" data-vv-scope="step1"></money>
                                                   <span class="text-red">{{ errors.first('step1.bank_bpd') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>

                                <div class="form-horizontal">
                                    <div class="box-body">
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Sinar Wangi TGLL</label>
                                                <div>
                                                     <money type="text" v-bind="money" class="form-control" v-validate="'required|numeric'" name="totalnilai_bmn" v-model="instansi.kop_sinar" placeholder="" data-vv-scope="step1"> </money>
                                                    <span class="text-red">{{ errors.first('step1.gaji_pokok') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Pilih Opsi</label>
                                                <div class="borderForm">
                                                       
                                                    <div class="checkbox">
                                                      <label>
                                                        <input type="checkbox" v-model="instansi.is_saveschema" >Update Skema Potongan ini untuk tiap bulan
                                                      </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- /.box-body -->
                                </div>


                                <div class="box-header with-border">
                                    <h3 class="box-title btn bg-maroon btn-flat margin">SISA PENDAPATAN </h3> <div class="btn btn-success">{{label_jenis_gaji}} </div>
                                </div>
                                <div class="form-horizontal">
                                    <div class="box-body">
                                        
                                        <div class="form-group">
                                            <div class="col-sm-12">

                                                <money type="text" v-bind="money" class="form-control" v-bind:class="{isNegatifclass : isNegatif}" style="height: 60px;font-size: 50px"  placeholder="Jumlah Unit BMN" v-validate="'required|numeric'" name="jumlah_unit" :value="valSisa" disabled="disabled"/>
                                            </div>
                                        </div>

                                        

                                    </div>

                                </div>

                            </div>
                        </tab-content>


                           

                        <template slot="footer" slot-scope="props">
                            <div class="wizard-footer-right2">

                                <wizard-button v-if="!isEditForm" @click.native="finishPenggajian();isSaveNext=1" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">Save & Next Pegawai</wizard-button>
                                <wizard-button @click.native="finishPenggajian();isSaveNext=0" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" style="margin-right: 10px;">Save Data</wizard-button>
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
                            <h4>INPUT GAJI PETUGAS</h4>

                            <p>Mohon diisi data petugas yang melaksanakan inputing instansi secara lengkap. </p>
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

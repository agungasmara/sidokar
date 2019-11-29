


<script type="text/x-template" id="pspVerifikasiWizardFormKANWIL">
    <div>
        <div class="col-md-8">
            <div class="nav-tabs-custom">
                <form-wizard :start-index.sync="stepIndex">
                    <wizard-step slot-scope="props" slot="step" :tab="props.tab" :transition="props.transition" :index="props.index">
                    </wizard-step>
                    <h3 slot="title"></h3>
                    <tab-content title="Inital Input" icon="fa fa-user" :before-change="beforeTab1SwitchKANWIL" v-if="jenisForm.verifikasi">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon margin">IDENTITAS PETUGAS KANWIL</h3>
                            </div>


                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Verifikator</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_verifikator" v-model="verifikasi.nama_verifikator" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_verifikator') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Verifikator</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_verifikator" v-model="verifikasi.nip_verifikator" placeholder="Masukkan NIP Verifikator" data-vv-scope="step1"> </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_verifikator') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">KEPALA SEKSI</h3>
                            </div>


                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan KASI KANWIL</label>
                                        <div class="col-sm-5">
                                            <vue-multiselect v-model="data_kepala_seksi_kanwil" :allow-empty="false" :options="option_data_kepala_seksi_kanwil" :custom-label="name_jabatan_kepala_seksi_kanwil" placeholder="Pilih Jabatan Kepala Seksi" label="Jabatan Kepala Seksi" track-by="jabatan"
                                                v-validate data-vv-rules="required" name="KepalaSeksi" @input="showStatusJabatanKasi=true;setTempJabatanKepalaSeksiKANWIL()" data-vv-scope="step1">
                                            </vue-multiselect>

                                            <span class="text-red">{{ errors.first('step1.KepalaSeksi') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group" v-if="showStatusJabatanKasi">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Status Jabatan</label>
                                        <div class="col-sm-5">
                                            <button class="btn" :class="{'active btn-success':(data_kepala_seksi_kanwil.status == 'definitif')}" @click="pickStatusJabatanKasiKANWIL('definitif')">Definitif</button>
                                            <button class="btn" :class="{'active btn-success':(data_kepala_seksi_kanwil.status == 'plt_plh')}" @click="pickStatusJabatanKasiKANWIL('plt_plh')"> Plt/Plh</button>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKasi">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Kepala Seksi</label>
                                        <div class="col-sm-5">
                                            <input type="name" class="form-control" placeholder="Masukkan Nama Kepala Seksi" v-validate="'required'" name="nama_kepala_seksi" v-model="data_kepala_seksi_kanwil.nama" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_kepala_seksi') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKasi">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Kepala Seksi</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_kepala_seksi" v-model="data_kepala_seksi_kanwil.nip" placeholder="Masukkan NIP Kepala Seksi" data-vv-scope="step1"> </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_kepala_seksi') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">KEPALA BIDANG</h3>
                            </div>



                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan KABID KANWIL</label>
                                        <div class="col-sm-5">
                                            <vue-multiselect v-model="data_kepala_bidang_kanwil" :options="option_data_kepala_bidang_kanwil" :allow-empty="false" :custom-label="name_jabatan_kepala_bidang_kanwil" placeholder="Pilih Jabatan Kepala bidang" label="Jabatan Kepala bidang" track-by="jabatan"
                                                v-validate data-vv-rules="required" name="Kepalabidang" @input="showStatusJabatanKabid=true;setTempJabatanKepalaBidangKANWIL()" data-vv-scope="step1">
                                            </vue-multiselect>



                                            <span class="text-red">{{ errors.first('step1.Kepalabidang') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group" v-if="showStatusJabatanKabid">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Status Jabatan</label>
                                        <div class="col-sm-5">
                                            <button class="btn" :class="{'active btn-success':(data_kepala_bidang_kanwil.status == 'definitif')}" @click="pickStatusJabatanKabidKANWIL('definitif')">Definitif</button>
                                            <button class="btn" :class="{'active btn-success':(data_kepala_bidang_kanwil.status == 'plt_plh')}" @click="pickStatusJabatanKabidKANWIL('plt_plh')"> Plt/Plh</button>
                                        </div>
                                    </div>



                                    <div class="form-group" v-if="showStatusJabatanKabid">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Kepala bidang</label>
                                        <div class="col-sm-5">
                                            <input type="name" class="form-control" placeholder="Masukkan Nama Kepala bidang" v-validate="'required'" name="nama_kepala_bidang" v-model="data_kepala_bidang_kanwil.nama" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_kepala_bidang') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKabid">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Kepala bidang</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_kepala_bidang" v-model="data_kepala_bidang_kanwil.nip" placeholder="Masukkan NIP Kepala bidang" data-vv-scope="step1"> </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_kepala_bidang') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>


                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">KEPALA KANWIL</h3>
                            </div>



                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan Kepala KANWIL</label>
                                        <div class="col-sm-5">
                                            <vue-multiselect v-model="data_kepala_kanwil" :options="option_data_kepala_kanwil" :allow-empty="false" :custom-label="name_jabatan_kepala_kanwil" placeholder="Pilih Jabatan Kepala KANWIL" label="Jabatan Kepala Kanwil" track-by="jabatan" v-validate data-vv-rules="required"
                                                name="Kepalakanwil" @input="showStatusJabatanKanwil=true;setTempJabatanKepalaKANWIL()" data-vv-scope="step1">
                                            </vue-multiselect>
                                            <span class="text-red">{{ errors.first('step1.Kepalakanwil') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group" v-if="showStatusJabatanKanwil">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Status Jabatan</label>
                                        <div class="col-sm-5">
                                            <button class="btn" :class="{'active btn-success':(data_kepala_kanwil.status == 'definitif')}" @click="pickStatusJabatanKANWIL('definitif')">Definitif</button>
                                            <button class="btn" :class="{'active btn-success':(data_kepala_kanwil.status == 'plt_plh')}" @click="pickStatusJabatanKANWIL('plt_plh')"> Plt/Plh</button>
                                        </div>
                                    </div>



                                    <div class="form-group" v-if="showStatusJabatanKanwil">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Kepala bidang</label>
                                        <div class="col-sm-5">
                                            <input type="name" class="form-control" placeholder="Masukkan Nama Kepala kanwil" v-validate="'required'" name="nama_kepala_kanwil" v-model="data_kepala_kanwil.nama" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_kepala_kanwil') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKanwil">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Kepala Kanwil</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_kepala_kanwil" v-model="data_kepala_kanwil.nip" placeholder="Masukkan NIP Kepala Kanwil" data-vv-scope="step1">
                                            </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_kepala_kanwil') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </tab-content>
                    <tab-content title="Pengecekan Dokumen" icon="fa fa-certificate" v-if="jenisForm.verifikasi">
                        <div class="box-header with-border">
                            <h3 class="box-title btn bg-maroon btn-flat margin">PROSES PENGECEKAN DOKUMEN</h3>
                        </div>
                        <div class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <div class="col-sm-4">
                                        <div class="box-body2">
                                            <a :href="hrefFileSuratPermohon" download class="btn btn-block btn-bitbucket btn-social ">
                                                            <i class="fa fa-download"></i> Download Surat Permohonan
                                                        </a>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="box-body2">
                                            <a :href="hrefFileDaftarRincian" download class="btn btn-block btn-social btn-bitbucket">
                                                            <i class="fa fa-download"></i> Download  Daftar Rician BMN 
                                                        </a>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="box-body2">
                                            <a :href="hrefFileDokumenKelengkapan" download class="btn btn-block btn-social btn-bitbucket">
                                                            <i class="fa fa-download"></i> Download Dokumen Kelengkapan 
                                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </tab-content>

                    <tab-content title="Input Dokumen" icon="fa fa-envelope-o" v-if="jenisForm.verifikasi" :before-change="beforeTab2SwitchKANWIL">

                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">CHECKLIST KELENGKAPAN</h3>
                            </div>


                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Jenis BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_jenis_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_jenis_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_jenis_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_jenis_bmn','tidak sesuai')">Tidak Sesuai</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Nilai BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_nilai_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_nilai_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_nilai_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_nilai_bmn','tidak sesuai')">Tidak Sesuai</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Surat Permohonan</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_surat_permohonan === 'sesuai')}" @click.prevent="checklistVerifikasi('check_surat_permohonan','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_surat_permohonan === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_surat_permohonan','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_surat_permohonan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_surat_permohonan','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Daftar Rincian Usulan BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_rincian_usulan_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_rincian_usulan_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_rincian_usulan_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_rincian_usulan_bmn','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_rincian_usulan_bmn === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_rincian_usulan_bmn','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">KIB</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_kib === 'sesuai')}" @click.prevent="checklistVerifikasi('check_kib','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_kib === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_kib','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_kib === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_kib','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Foto BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_foto_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_foto_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_foto_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_foto_bmn','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_foto_bmn === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_foto_bmn','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Fotocopy Surat Keputusan(dari Kementerian/Lembaga) tentang Pendelegasian Wewenang</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_sk_delegasi === 'sesuai')}" @click.prevent="checklistVerifikasi('check_sk_delegasi','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_sk_delegasi === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_sk_delegasi','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_sk_delegasi === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_sk_delegasi','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                    <div class="form-group" style="background-color:green;padding:30px">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label" style="color:white">Input Surat Keputusan tentang Pendelegasian Wewenang</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" placeholder="ex. Peraturan Pemerintah Pasal 1" v-validate="'required'" name="peraturan_pendelegasian_wewenang" v-model="verifikasi.peraturan_pendelegasian_wewenang_KL" data-vv-scope="step2">
                                            <span class="text-red">{{ errors.first('step2.peraturan_pendelegasian_wewenang') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Dokumen Kepemilikan</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_dokumen_kepemilikan === 'ada')}" @click.prevent="checklistVerifikasi('check_dokumen_kepemilikan','ada');isAdaDokumenKepemilikan=true">Ada</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_dokumen_kepemilikan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_dokumen_kepemilikan','tidak ada');isAdaDokumenKepemilikan=false">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="isAdaDokumenKepemilikan">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-4 control-label">Fotocopy Dokumen Kepemilikan</label>
                                            <div class="col-sm-8">
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_fc_dokumen_kepemilikan === 'sesuai')}" @click.prevent="checklistVerifikasi('check_fc_dokumen_kepemilikan','sesuai')">Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_fc_dokumen_kepemilikan === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_fc_dokumen_kepemilikan','tidak sesuai')">Tidak Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_fc_dokumen_kepemilikan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_fc_dokumen_kepemilikan','tidak ada')">Tidak Ada</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-4 control-label">Surat keterangan pejabat struktural menyatakan kebenaran fotokopi dokumen kepemilikan </label>
                                            <div class="col-sm-8">
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_kebenaran_fc_dokumen_kepemilikan === 'sesuai')}" @click.prevent="checklistVerifikasi('check_kebenaran_fc_dokumen_kepemilikan','sesuai')">Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_kebenaran_fc_dokumen_kepemilikan === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_kebenaran_fc_dokumen_kepemilikan','tidak sesuai')">Tidak Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_kebenaran_fc_dokumen_kepemilikan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_kebenaran_fc_dokumen_kepemilikan','tidak ada')">Tidak Ada</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-4 control-label">SPTJM bermaterai bahwa barang tersebut adalah BMN dan digunakan untuk tugas dan fungsi</label>
                                            <div class="col-sm-8">
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_sptjm_bermaterai === 'sesuai')}" @click.prevent="checklistVerifikasi('check_sptjm_bermaterai','sesuai')">Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_sptjm_bermaterai === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_sptjm_bermaterai','tidak sesuai')">Tidak Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_sptjm_bermaterai === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_sptjm_bermaterai','tidak ada')">Tidak Ada</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Catatan Khusus </label>
                                        <div class="col-sm-8">
                                            <textarea cols="50" rows="5" charswidth="23" v-model='verifikasi.noteDokumen'></textarea>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </tab-content>

                    <tab-content title="Hasil Verifikasi" icon="fa fa-certificate" :before-change="beforeTab3SwitchKANWIL" v-if="jenisForm.verifikasi">
                        <div class="box-header with-border">
                            <h3 class="box-title btn bg-maroon btn-flat margin">Hasil Verifikasi Dokumen</h3>
                        </div>
                        <div class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Alamat Kantor Pemohon</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.alamat_kantor_pemohon" v-validate="'required'" name="alamat_kantor_pemohon" data-vv-scope="step3">
                                        <span class="text-red">{{ errors.first('step3.alamat_kantor_pemohon') }}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-4" style="padding-left: 0px;padding-right: 0px">
                                        <div class="box-body2">
                                            <button class="btn btn-success" style="width:100%!important;padding-left: 0px;padding-right: 0px;border-radius:0px!important" @click="generateKMKDoc">
                                                            <i class="fa fa-check"></i> Terbitkan KMK
                                                        </button>
                                        </div>
                                    </div>
                                    <div class="col-sm-4" style="padding-left: 0px;padding-right: 0px">
                                        <div class="box-body2">
                                            <button class="btn btn-danger" @click="butuhKelengkapanData" style="width:100%!important;padding-left: 0px;padding-right: 0px;border-radius:0px!important">
                                                            <i class="fa fa-newspaper-o"></i> Butuh Kelengkapan Data 
                                                        </button>
                                        </div>
                                    </div>
                                    <div class="col-sm-4" style="padding-left: 0px;padding-right: 0px">
                                        <div class="box-body2">
                                            <button class="btn btn-warning" @click="butuhSurveyLapangan" style="width:100%!important;border-radius:0px!important;padding-left: 0px;padding-right: 0px">
                                                            <i class="fa fa-pie-chart"></i> Butuh Survei Lapangan 
                                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-horizontal" v-if="isButuhSurveyLapangan">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Rencana Survei Lapangan?</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Rencana" v-model="verifikasi.rencana_survey">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama CP Survei</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.nama_survey">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Kontak CP Survei</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.cp_survey">
                                    </div>
                                </div>



                                <div class="form-group">
                                    <div class="col-sm-12 ">
                                        <button class="btn active btn-success col-sm-12" @click.prevent="btnDataSurveyLapangan();showDocumentSurveyFinal=true">Generate Survey Document</button>
                                    </div>
                                </div>
                                <div class="form-group" v-if="showDocumentSurveyFinal">
                                    <div class="col-sm-12 ">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                <h3 class="widget-user-username">Silakan Download ND Survey Lapangan</h3>
                                            </div>
                                            <div class="box-footer no-padding">
                                                <ul class="nav nav-stacked">
                                                    <li><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Hasil verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileNDSSurveyLapangan" download><i class="fa fa-download"></i> Download Hasil File Survey Lapangan <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                </ul>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form-horizontal" v-if="isButuhKelengkapanData">
                            <div class="box-body">
                                <div v-for="(row, index) in daftarKekuranganData">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-3 control-label">Kekurangan File {{index+1}}</label>
                                        <div class="col-sm-8" style="padding-right:0px">
                                            <input type="text" class="form-control" placeholder="Masukkan Nama Data yang kurang" v-model="row.nama">
                                        </div>
                                        <div class="col-sm-1" style="padding-left:0px">
                                            <button class="btn btn-danger" @click.prevent="deleteRowKurangData(index)">X</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-3 pull-right">
                                        <button class="btn active btn-success" @click.prevent="addRowKurangData()">Add Kekurangan Data</button>

                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="col-sm-12 ">
                                        <button class="btn active btn-success col-sm-12" @click.prevent="btnGenerateKelengkapanDoc();showDocumentKekuranganFinal=true">Generate Kekurangan Data</button>
                                    </div>
                                </div>

                                <div class="form-group" v-if="showDocumentKekuranganFinal">
                                    <div class="col-sm-12 ">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                <h3 class="widget-user-username">Silakan Download ND Surat Kelengkapan Data</h3>
                                            </div>
                                            <div class="box-footer no-padding">
                                                <ul class="nav nav-stacked">
                                                    <li><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Hasil verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileNDSPermintaanKelengkapan" download><i class="fa fa-download"></i> Download ND dan Surat Kelengkapan Data <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form-horizontal" v-if="isGenerateKMKDoc">
                            <div class="box-body">
                                <div v-for="(row, index) in daftarTembusan">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama Tembusan {{index+1}}</label>
                                        <div class="col-sm-8" style="padding-right:0px">
                                            <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="row.nama">
                                        </div>
                                        <div class="col-sm-1" style="padding-left:0px">
                                            <button class="btn btn-danger" @click.prevent="deleteRow(index)">X</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-3 pull-right">
                                        <button class="btn active btn-success" @click.prevent="addRowTembusan()">Add Tembusan</button>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Jabatan Salinan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.jabatan_salinan">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama Salinan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.nama_salinan">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Nip Salinan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.nip_salinan">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-12 ">
                                        <button class="btn active btn-success col-sm-12" @click.prevent="btnGenerateKMKDoc();showDocumentVerifikasiFinal=true">Generate KMK Document</button>
                                    </div>
                                </div>
                                <div class="form-group" v-if="showDocumentVerifikasiFinal">
                                    <div class="col-sm-12 ">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                <h3 class="widget-user-username">Silakan Download Dokumen Verifikasi Dibawah Ini</h3>
                                            </div>
                                            <div class="box-footer no-padding">
                                                <ul class="nav nav-stacked">
                                                    <li><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Hasil verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileNDSPersetujuan" download><i class="fa fa-download"></i> Download ND dan Surat <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileKMK" download><i class="fa fa-download"></i> Download Dokumen KMK <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileSalinanKMK" download><i class="fa fa-download"></i> Download Salinan KMK <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </tab-content>



                    <tab-content title="Last step" icon="fa fa-check-circle">
                        <div class="callout callout-success">
                            <h4>Terima Kasih</h4>
                            <h4>Permohonan Verifikasi Dokumen Telah Selesai dilakukan.</h4>
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
        <div class="col-md-4">
            <div class="box box-default">
       
                    <div v-if="stepIndex=='0'">
                        <div class="box-header with-border">
                            <i class="fa fa-bullhorn"></i>

                            <h3 class="box-title">Pengumuman!</h3>
                        </div>
                        <div class="box-body">
                            <div class="callout callout-danger">
                                <h4>PROFIL VERIFIKATOR</h4>

                                <p>Mohon diisi data verifikator yang melaksanakan verifikasi permohonan PSP secara lengkap.</p>
                            </div>
                            <div class="callout callout-info">
                                <h4>IDENTITAS PEJABAT</h4>

                                <p>Berisi data Pejabat yang berwenang memproses PSP pada har ini. Ketikkan Nama dan NIP Pejabat apabila berstatus PLH/PLT.</p>
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
                                <h4>PROSES PENGECEKAN DOKUMEN</h4>

                                <p>Silahkan download seluruh dokumen yang telah diupload oleh Pemohon sebagai bahan melaksanakan verifikasi</p>
                            </div> 
                        </div>
                    </div>        
                    <div v-else-if="stepIndex=='2'">
                        <div class="box-header with-border">
                            <i class="fa fa-bullhorn"></i>

                            <h3 class="box-title">Pengumuman!</h3>
                        </div>
                        <div class="box-body">
                            <div class="callout callout-warning">
                                <h4>CHECKLIST KELENGKAPAN</h4>

                                <p>Mohon dilakukan pengecekan terhadap seluruh dokumen permohonan yang telah didownload sebelumnya, antara lain:</p>
                                <ol>
                                    <li>
                                        Jenis BMN, dipastikan kesesuaian jenis BMN yang akan di PSP dengan Surat Permohonan dan Daftar Rincian BMN;
                                       
                                    </li>
                                    <li>
                                        Nilai BMN, dipastikan kesesuaian nilai BMN yang akan di PSP dengan Surat Permohonan dan Daftar Rincian BMN;
                                    </li>
                                    <li>
                                       Surat Permohonan, dipastikan apakah Tujuan Surat sudah sesuai, dan hal-hal lainnya;
                                        
                                    </li>
                                    <li>
                                       Daftar Rincian Usulan BMN, dipastikan telah sesuai dengan format daftar rincian BMN yang diminta sebagai bahan pembuatan Lampiran KMK
                                    </li>
                                    <li>
                                        KIB, dipastikan kesesuaian dan kelengkapan KIB setiap NUPnya
                                    </li>
                                    <li>
                                       Foto BMN, dipastikan foto BMN sesuai dengan BMN yang akan di PSP
                                    </li>
                                    <li>
                                       Fotocopy Surat Keputusan tentang Pendelegasian Wewenang, dipastikan ada tidaknya pendelegasian weweanang dan mohon diinput Nomor Peraturan Pendelegasian Wewenang pada kolom yang telah disediakan
                                    </li>
                                    <li>
                                       Dokumen Kepemilikan:
                                       <ul>
                                           <li>
                                               Bila ada, pastikan fotocopy dilampirkan serta pastikan Surat Keterangan Kebenaran Dokumen telag sesuai.
                                           </li>
                                           <li>
                                               Bila tidak memiliki dokumen kepemilikan, pastikan SPTJM telah dilampirkan dan sesuai dengan format dalam PMK.
                                           </li>
                                       </ul>
                                    </li>
                                    <li>
                                       Catatan Khusus, silahkan ketikkan catatan khusus yang perlu disampaikan terkait hal-hal diatas yang dapat menunjang keputusan verifikasi.
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
                            <div class="callout callout-warning">
                                <h4>HASIL VERIFIKASI DOKUMEN</h4>

                                <p>Silahkan input Alamat Kantor Pemohon secara lengkap sebagai Tujuan Surat.</p>
                                <p>Pilihlah satu dari  tiga alternatif Keputusan Hasil Verifikasi, dan input beberapa hal diperlukan sebelum mengenerate dokumen hasil. Tiga alternatif tersebut yaitu:</p>
                                <ol>
                                    <li>
                                        Terbitkan KMK<br/>
                                        Mohon input Nama Tembusan sebagai pihak yang akan diberikan salinan KMK. Inputkan pihak SELAIN Menteri Keuangan, Pemohon, Direktorat PKNSI, Kanwil DJKN Papua, Papua Barat dan Maluku serta KPKNL bersangkutan.<br/>
                                        Jabatan, Nama dan NIP pejabat yang akan menandatangani Salinan KMK yang akan diterbitkan.                                       
                                    </li>
                                    <li>
                                        Butuh Kelengkapan Data<br/>
                                        Mohon input, data apa saja yang perlu diminta kembali atau butuh klarifikasi
                                    </li>
                                    <li>
                                       Butuh Survei Lapangan<br/>
                                       Mohon input jadwal rencana survey, misal “Tanggal 23 November 2019” atau “Minggu Ketiga bulan November 2019”
                                        
                                    </li>
                                    <li>
                                       Setelah input hal-hal diatas, silahkan generate dokumen dan dapat didownload.
                                        Dokumen yang dihasilkan dalam bentuk Word dan dapat diedit sesuai kebutuhan.

                                    </li>
                                </ol>
                            </div> 
                        </div>
                    </div>        
                    <div v-else-if="stepIndex=='4'">
                        <div class="box-header with-border">
                            <i class="fa fa-bullhorn"></i>

                            <h3 class="box-title">Pengumuman!</h3>
                        </div>
                        <div class="box-body">
                            <div class="callout callout-danger">
                                <p>Silahkan tandatangani seluruh hardcopy dokumen.</p>
                            </div>
                        </div>
                    </div>       
                    <div v-else-if="stepIndex=='5'">
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



<script type="text/x-template" id="pspVerifikasiWizardFormKPKNL">
    <div>
        <div class="col-md-8">
            <div class="nav-tabs-custom">
                <form-wizard :start-index.sync="stepIndex">
                    <wizard-step slot-scope="props" slot="step" :tab="props.tab" :transition="props.transition" :index="props.index">
                    </wizard-step>
                    <h3 slot="title"></h3>
                    <tab-content title="Inital Input" icon="fa fa-user" :before-change="beforeTab1SwitchKPKNL" v-if="jenisForm.verifikasi">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon margin">IDENTITAS PETUGAS KPKNL</h3>
                            </div>


                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Verifikator</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" placeholder="Nama" v-validate="'required'" name="nama_verifikator" v-model="verifikasi.nama_verifikator" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_verifikator') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Verifikator</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_verifikator" v-model="verifikasi.nip_verifikator" placeholder="Masukkan NIP Verifikator" data-vv-scope="step1"> </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_verifikator') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">KEPALA SEKSI</h3>
                            </div>


                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan KASI KPKNL</label>
                                        <div class="col-sm-5">
                                            <vue-multiselect v-model="data_kepala_seksi_kpknl" :allow-empty="false" :options="option_data_kepala_seksi_kpknl" :custom-label="name_jabatan_kepala_seksi_kpknl" placeholder="Pilih Jabatan Kepala Seksi" label="Jabatan Kepala Seksi" track-by="jabatan"
                                                v-validate data-vv-rules="required" name="KepalaSeksi" @input="showStatusJabatanKasi=true;setTempJabatanKepalaSeksiKPKNL()" data-vv-scope="step1">
                                            </vue-multiselect>

                                            <span class="text-red">{{ errors.first('step1.KepalaSeksi') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group" v-if="showStatusJabatanKasi">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Status Jabatan</label>
                                        <div class="col-sm-5">
                                            <button class="btn" :class="{'active btn-success':(data_kepala_seksi_kpknl.status == 'definitif')}" @click="pickStatusJabatanKasiKPKNL('definitif')">Definitif</button>
                                            <button class="btn" :class="{'active btn-success':(data_kepala_seksi_kpknl.status == 'plt_plh')}" @click="pickStatusJabatanKasiKPKNL('plt_plh')"> Plt/Plh</button>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKasi">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Kepala Seksi</label>
                                        <div class="col-sm-5">
                                            <input type="name" class="form-control" placeholder="Masukkan Nama Kepala Seksi" v-validate="'required'" name="nama_kepala_seksi" v-model="data_kepala_seksi_kpknl.nama" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_kepala_seksi') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKasi">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Kepala Seksi</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_kepala_seksi" v-model="data_kepala_seksi_kpknl.nip" placeholder="Masukkan NIP Kepala Seksi" data-vv-scope="step1"> </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_kepala_seksi') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">KEPALA KANTOR</h3>
                            </div>



                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Jabatan Kepala Kantor</label>
                                        <div class="col-sm-5">
                                            <vue-multiselect v-model="data_kepala_bidang_kpknl" :options="option_data_kepala_bidang_kpknl" :allow-empty="false" :custom-label="name_jabatan_kepala_bidang_kpknl" placeholder="Pilih Jabatan Kepala bidang" label="Jabatan Kepala bidang" track-by="jabatan"
                                                v-validate data-vv-rules="required" name="Kepalabidang" @input="showStatusJabatanKabid=true;setTempJabatanKepalaBidangKPKNL()" data-vv-scope="step1">
                                            </vue-multiselect>



                                            <span class="text-red">{{ errors.first('step1.Kepalabidang') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group" v-if="showStatusJabatanKabid">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Status Jabatan</label>
                                        <div class="col-sm-5">
                                            <button class="btn" :class="{'active btn-success':(data_kepala_bidang_kpknl.status == 'definitif')}" @click="pickStatusJabatanKabidKPKNL('definitif')">Definitif</button>
                                            <button class="btn" :class="{'active btn-success':(data_kepala_bidang_kpknl.status == 'plt_plh')}" @click="pickStatusJabatanKabidKPKNL('plt_plh')"> Plt/Plh</button>
                                        </div>
                                    </div>



                                    <div class="form-group" v-if="showStatusJabatanKabid">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">Nama Kepala Kantor</label>
                                        <div class="col-sm-5">
                                            <input type="name" class="form-control" placeholder="Masukkan Nama Kepala bidang" v-validate="'required'" name="nama_kepala_bidang" v-model="data_kepala_bidang_kpknl.nama" data-vv-scope="step1">
                                            <span class="text-red">{{ errors.first('step1.nama_kepala_bidang') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showStatusJabatanKabid">
                                        <label for="exampleInputEmail1" class="col-sm-2 control-label">NIP Kepala Kantor</label>
                                        <div class="col-sm-5">
                                            <the-mask type="text" mask="######## ###### # ###" class="form-control" v-validate="'required'" name="nip_kepala_bidang" v-model="data_kepala_bidang_kpknl.nip" placeholder="Masukkan NIP Kepala bidang" data-vv-scope="step1"> </the-mask>
                                            <span class="text-red">{{ errors.first('step1.nip_kepala_bidang') }}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </tab-content>
                    <tab-content title="Pengecekan Dokumen" icon="fa fa-certificate" v-if="jenisForm.verifikasi">
                        <div class="box-header with-border">
                            <h3 class="box-title btn bg-maroon btn-flat margin">PROSES PENGECEKAN DOKUMEN</h3>
                        </div>
                        <div class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <div class="col-sm-4">
                                        <div class="box-body2">
                                            <a :href="hrefFileSuratPermohon" download class="btn btn-block btn-bitbucket btn-social ">
                                                            <i class="fa fa-download"></i> Download Surat Permohonan
                                                        </a>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="box-body2">
                                            <a :href="hrefFileDaftarRincian" download class="btn btn-block btn-social btn-bitbucket">
                                                            <i class="fa fa-download"></i> Download  Daftar Rician BMN 
                                                        </a>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="box-body2">
                                            <a :href="hrefFileDokumenKelengkapan" download class="btn btn-block btn-social btn-bitbucket">
                                                            <i class="fa fa-download"></i> Download Dokumen Kelengkapan 
                                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </tab-content>

                    <tab-content title="Input Dokumen" icon="fa fa-envelope-o" :before-change="beforeTab2SwitchKPKNL" v-if="jenisForm.verifikasi">

                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title btn bg-maroon btn-flat margin">CHECKLIST KELENGKAPAN</h3>
                            </div>


                            <div class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Jenis BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_jenis_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_jenis_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_jenis_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_jenis_bmn','tidak sesuai')">Tidak Sesuai</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Nilai BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_nilai_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_nilai_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_nilai_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_nilai_bmn','tidak sesuai')">Tidak Sesuai</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Surat Permohonan</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_surat_permohonan === 'sesuai')}" @click.prevent="checklistVerifikasi('check_surat_permohonan','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_surat_permohonan === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_surat_permohonan','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_surat_permohonan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_surat_permohonan','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Daftar Rincian Usulan BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_rincian_usulan_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_rincian_usulan_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_rincian_usulan_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_rincian_usulan_bmn','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_rincian_usulan_bmn === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_rincian_usulan_bmn','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">KIB</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_kib === 'sesuai')}" @click.prevent="checklistVerifikasi('check_kib','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_kib === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_kib','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_kib === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_kib','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Foto BMN</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_foto_bmn === 'sesuai')}" @click.prevent="checklistVerifikasi('check_foto_bmn','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_foto_bmn === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_foto_bmn','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_foto_bmn === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_foto_bmn','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Fotocopy Surat Keputusan(dari Kementerian/Lembaga) tentang Pendelegasian Wewenang</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_sk_delegasi === 'sesuai')}" @click.prevent="checklistVerifikasi('check_sk_delegasi','sesuai')">Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_sk_delegasi === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_sk_delegasi','tidak sesuai')">Tidak Sesuai</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_sk_delegasi === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_sk_delegasi','tidak ada')">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group" style="background-color:green;padding:30px">
                                    <label for="exampleInputEmail1" class="col-sm-4 control-label" style="color:white">Input Peraturan Pemerintah Pendelegasian Wewenang</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" placeholder="ex. Peraturan Pemerintah Pasal 1" v-validate="'required'" name="peraturan_pendelegasian_wewenang" v-model="verifikasi.peraturan_pendelegasian_wewenang_KL" data-vv-scope="step2">
                                        <span class="text-red">{{ errors.first('step2.peraturan_pendelegasian_wewenang') }}</span>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Dokumen Kepemilikan</label>
                                        <div class="col-sm-8">
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_dokumen_kepemilikan === 'ada')}" @click.prevent="checklistVerifikasi('check_dokumen_kepemilikan','ada');isAdaDokumenKepemilikan=true">Ada</button>
                                            <button class="btn" :class="{'active btn-success':(verifikasi.check_dokumen_kepemilikan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_dokumen_kepemilikan','tidak ada');isAdaDokumenKepemilikan=false">Tidak Ada</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="isAdaDokumenKepemilikan">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-4 control-label">Fotocopy Dokumen Kepemilikan</label>
                                            <div class="col-sm-8">
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_fc_dokumen_kepemilikan === 'sesuai')}" @click.prevent="checklistVerifikasi('check_fc_dokumen_kepemilikan','sesuai')">Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_fc_dokumen_kepemilikan === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_fc_dokumen_kepemilikan','tidak sesuai')">Tidak Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_fc_dokumen_kepemilikan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_fc_dokumen_kepemilikan','tidak ada')">Tidak Ada</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-4 control-label">Surat keterangan pejabat struktural menyatakan kebenaran fotokopi dokumen kepemilikan </label>
                                            <div class="col-sm-8">
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_kebenaran_fc_dokumen_kepemilikan === 'sesuai')}" @click.prevent="checklistVerifikasi('check_kebenaran_fc_dokumen_kepemilikan','sesuai')">Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_kebenaran_fc_dokumen_kepemilikan === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_kebenaran_fc_dokumen_kepemilikan','tidak sesuai')">Tidak Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_kebenaran_fc_dokumen_kepemilikan === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_kebenaran_fc_dokumen_kepemilikan','tidak ada')">Tidak Ada</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-4 control-label">SPTJM bermaterai bahwa barang tersebut adalah BMN dan digunakan untuk tugas dan fungsi</label>
                                            <div class="col-sm-8">
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_sptjm_bermaterai === 'sesuai')}" @click.prevent="checklistVerifikasi('check_sptjm_bermaterai','sesuai')">Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_sptjm_bermaterai === 'tidak sesuai')}" @click.prevent="checklistVerifikasi('check_sptjm_bermaterai','tidak sesuai')">Tidak Sesuai</button>
                                                <button class="btn" :class="{'active btn-success':(verifikasi.check_sptjm_bermaterai === 'tidak ada')}" @click.prevent="checklistVerifikasi('check_sptjm_bermaterai','tidak ada')">Tidak Ada</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-4 control-label">Catatan Khusus </label>
                                        <div class="col-sm-8">
                                            <textarea cols="50" rows="5" charswidth="23" v-model='verifikasi.noteDokumen'></textarea>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </tab-content>

                    <tab-content title="Hasil verifikasi" icon="fa fa-certificate" :before-change="beforeTab3SwitchKPKNL" v-if="jenisForm.verifikasi">
                        <div class="box-header with-border">
                            <h3 class="box-title btn bg-maroon btn-flat margin">Hasil Verifikasi Dokumen</h3>
                        </div>

                        <div class="form-horizontal">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Alamat Kantor Pemohon</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.alamat_kantor_pemohon" v-validate="'required'" name="alamat_kantor_pemohon" data-vv-scope="step4">
                                        <span class="text-red">{{ errors.first('step4.alamat_kantor_pemohon') }}</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-4" style="padding-left: 0px;padding-right: 0px">
                                        <div class="box-body2">
                                            <button class="btn btn-success" style="width:100%!important;padding-left: 0px;padding-right: 0px;border-radius:0px!important" @click="generateKMKDoc">
                                                            <i class="fa fa-check"></i> Terbitkan KMK
                                                        </button>
                                        </div>
                                    </div>
                                    <div class="col-sm-4" style="padding-left: 0px;padding-right: 0px">
                                        <div class="box-body2">
                                            <button class="btn btn-danger" @click="butuhKelengkapanData" style="width:100%!important;padding-left: 0px;padding-right: 0px;border-radius:0px!important">
                                                            <i class="fa fa-newspaper-o"></i> Butuh Kelengkapan Data 
                                                        </button>
                                        </div>
                                    </div>
                                    <div class="col-sm-4" style="padding-left: 0px;padding-right: 0px">
                                        <div class="box-body2">
                                            <button class="btn btn-warning" @click="butuhSurveyLapangan" style="width:100%!important;border-radius:0px!important;padding-left: 0px;padding-right: 0px">
                                                            <i class="fa fa-pie-chart"></i> Butuh Survei Lapangan 
                                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-horizontal" v-if="isButuhSurveyLapangan">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Rencana Survei Lapangan?</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Rencana" v-model="verifikasi.rencana_survey">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama CP Survei</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.nama_survey">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Kontak CP Survei</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.cp_survey">
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="col-sm-12 ">
                                        <button class="btn active btn-success col-sm-12" @click.prevent="btnDataSurveyLapangan();showDocumentSurveyFinal=true">Generate Survey Document</button>
                                    </div>
                                </div>
                                <div class="form-group" v-if="showDocumentSurveyFinal">
                                    <div class="col-sm-12 ">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                <h3 class="widget-user-username">Silakan Download ND Survey Lapangan</h3>
                                            </div>
                                            <div class="box-footer no-padding">
                                                <ul class="nav nav-stacked">
                                                    <li><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Hasil verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileNDSSurveyLapangan" download><i class="fa fa-download"></i> Download Hasil File Survey Lapangan <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                </ul>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div class="form-horizontal" v-if="isButuhKelengkapanData">
                            <div class="box-body">
                                <div v-for="(row, index) in daftarKekuranganData">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-3 control-label">Kekurangan File {{index+1}}</label>
                                        <div class="col-sm-8" style="padding-right:0px">
                                            <input type="text" class="form-control" placeholder="Masukkan Nama Data yang kurang" v-model="row.nama">
                                        </div>
                                        <div class="col-sm-1" style="padding-left:0px">
                                            <button class="btn btn-danger" @click.prevent="deleteRowKurangData(index)">X</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-3 pull-right">
                                        <button class="btn active btn-success" @click.prevent="addRowKurangData()">Add Kekurangan Data</button>

                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="col-sm-12 ">
                                        <button class="btn active btn-success col-sm-12" @click.prevent="btnGenerateKelengkapanDoc();showDocumentKekuranganFinal=true">Generate Kekurangan Data</button>
                                    </div>
                                </div>

                                <div class="form-group" v-if="showDocumentKekuranganFinal">
                                    <div class="col-sm-12 ">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                <h3 class="widget-user-username">Silakan Download ND Surat Kelengkapan Data</h3>
                                            </div>
                                            <div class="box-footer no-padding">
                                                <ul class="nav nav-stacked">
                                                    <li><a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Hasil verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>
                                                    <li><a :href="hreffileNDSPermintaanKelengkapan" download><i class="fa fa-download"></i> Download ND dan Surat Kelengkapan Data <span class="pull-right badge bg-blue">1 Dokumen</span></a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="form-horizontal" v-if="isGenerateKMKDoc">
                            <div class="box-body">
                                <div v-for="(row, index) in daftarTembusan">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama Tembusan {{index+1}}</label>
                                        <div class="col-sm-8" style="padding-right:0px">
                                            <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="row.nama">
                                        </div>
                                        <div class="col-sm-1" style="padding-left:0px">
                                            <button class="btn btn-danger" @click.prevent="deleteRow(index)">X</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-3 pull-right">
                                        <button class="btn active btn-success" @click.prevent="addRowTembusan()">Add Tembusan</button>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Jabatan Salinan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.jabatan_salinan">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Nama Salinan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.nama_salinan">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="col-sm-3 control-label">Nip Salinan</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Masukkan Nama" v-model="verifikasi.nip_salinan">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-12 ">
                                        <button class="btn active btn-success col-sm-12" @click="btnGenerateKMKDoc();showDocumentVerifikasiFinal=true">Generate KMK Document</button>
                                    </div>
                                </div>
                                <div class="form-group" v-if="showDocumentVerifikasiFinal">
                                    <div class="col-sm-12 ">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                <h3 class="widget-user-username">Silakan Download Dokumen Verifikasi Dibawah Ini</h3>
                                            </div>
                                            <div class="box-footer no-padding">
                                                <ul class="nav nav-stacked">
                                                    <li>
                                                        <a :href="hreffileHasilVerifikasi" download><i class="fa fa-download"></i> Download Hasil verifikasi <span class="pull-right badge bg-blue">1 Dokumen</span></a>
                                                    </li>
                                                    <li>
                                                        <a :href="hreffileNDSPersetujuan" download><i class="fa fa-download"></i> Download ND dan Surat <span class="pull-right badge bg-blue">1 Dokumen</span></a>
                                                    </li>
                                                    <li>
                                                        <a :href="hreffileKMK" download><i class="fa fa-download"></i> Download Dokumen KMK <span class="pull-right badge bg-blue">1 Dokumen</span></a>
                                                    </li>
                                                    <li>
                                                        <a :href="hreffileSalinanKMK" download><i class="fa fa-download"></i> Download Salinan KMK <span class="pull-right badge bg-blue">1 Dokumen</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </tab-content>


                    <tab-content title="Last step" icon="fa fa-check-circle" :before-change="beforeTab4SwitchKPKNL">
                        <div class="callout callout-success">
                            <h4>Terima Kasih</h4>
                            <h4>Permohonan Verifikasi Dokumen Telah Selesai dilakukan.</h4>
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
        <div class="col-md-4">
            <div class="box box-default">
       
                    <div v-if="stepIndex=='0'">
                        <div class="box-header with-border">
                            <i class="fa fa-bullhorn"></i>

                            <h3 class="box-title">Pengumuman!</h3>
                        </div>
                        <div class="box-body">
                            <div class="callout callout-danger">
                                <h4>PROFIL VERIFIKATOR</h4>

                                <p>Mohon diisi data verifikator yang melaksanakan verifikasi permohonan PSP secara lengkap.</p>
                            </div>
                            <div class="callout callout-info">
                                <h4>IDENTITAS PEJABAT</h4>

                                <p>Berisi data Pejabat yang berwenang memproses PSP pada har ini. Ketikkan Nama dan NIP Pejabat apabila berstatus PLH/PLT.</p>
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
                                <h4>PROSES PENGECEKAN DOKUMEN</h4>

                                <p>Silahkan download seluruh dokumen yang telah diupload oleh Pemohon sebagai bahan melaksanakan verifikasi</p>
                            </div> 
                        </div>
                    </div>        
                    <div v-else-if="stepIndex=='2'">
                        <div class="box-header with-border">
                            <i class="fa fa-bullhorn"></i>

                            <h3 class="box-title">Pengumuman!</h3>
                        </div>
                        <div class="box-body">
                            <div class="callout callout-warning">
                                <h4>CHECKLIST KELENGKAPAN</h4>

                                <p>Mohon dilakukan pengecekan terhadap seluruh dokumen permohonan yang telah didownload sebelumnya, antara lain:</p>
                                <ol>
                                    <li>
                                        Jenis BMN, dipastikan kesesuaian jenis BMN yang akan di PSP dengan Surat Permohonan dan Daftar Rincian BMN;
                                       
                                    </li>
                                    <li>
                                        Nilai BMN, dipastikan kesesuaian nilai BMN yang akan di PSP dengan Surat Permohonan dan Daftar Rincian BMN;
                                    </li>
                                    <li>
                                       Surat Permohonan, dipastikan apakah Tujuan Surat sudah sesuai, dan hal-hal lainnya;
                                        
                                    </li>
                                    <li>
                                       Daftar Rincian Usulan BMN, dipastikan telah sesuai dengan format daftar rincian BMN yang diminta sebagai bahan pembuatan Lampiran KMK
                                    </li>
                                    <li>
                                        KIB, dipastikan kesesuaian dan kelengkapan KIB setiap NUPnya
                                    </li>
                                    <li>
                                       Foto BMN, dipastikan foto BMN sesuai dengan BMN yang akan di PSP
                                    </li>
                                    <li>
                                       Fotocopy Surat Keputusan tentang Pendelegasian Wewenang, dipastikan ada tidaknya pendelegasian weweanang dan mohon diinput Nomor Peraturan Pendelegasian Wewenang pada kolom yang telah disediakan
                                    </li>
                                    <li>
                                       Dokumen Kepemilikan:
                                       <ul>
                                           <li>
                                               Bila ada, pastikan fotocopy dilampirkan serta pastikan Surat Keterangan Kebenaran Dokumen telag sesuai.
                                           </li>
                                           <li>
                                               Bila tidak memiliki dokumen kepemilikan, pastikan SPTJM telah dilampirkan dan sesuai dengan format dalam PMK.
                                           </li>
                                       </ul>
                                    </li>
                                    <li>
                                       Catatan Khusus, silahkan ketikkan catatan khusus yang perlu disampaikan terkait hal-hal diatas yang dapat menunjang keputusan verifikasi.
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
                            <div class="callout callout-warning">
                                <h4>HASIL VERIFIKASI DOKUMEN</h4>

                                <p>Silahkan input Alamat Kantor Pemohon secara lengkap sebagai Tujuan Surat.</p>
                                <p>Pilihlah satu dari  tiga alternatif Keputusan Hasil Verifikasi, dan input beberapa hal diperlukan sebelum mengenerate dokumen hasil. Tiga alternatif tersebut yaitu:</p>
                                <ol>
                                    <li>
                                        Terbitkan KMK<br/>
                                        Mohon input Nama Tembusan sebagai pihak yang akan diberikan salinan KMK. Inputkan pihak SELAIN Menteri Keuangan, Pemohon, Direktorat PKNSI, Kanwil DJKN Papua, Papua Barat dan Maluku serta KPKNL bersangkutan.<br/>
                                        Jabatan, Nama dan NIP pejabat yang akan menandatangani Salinan KMK yang akan diterbitkan.                                       
                                    </li>
                                    <li>
                                        Butuh Kelengkapan Data<br/>
                                        Mohon input, data apa saja yang perlu diminta kembali atau butuh klarifikasi
                                    </li>
                                    <li>
                                       Butuh Survei Lapangan<br/>
                                       Mohon input jadwal rencana survey, misal “Tanggal 23 November 2019” atau “Minggu Ketiga bulan November 2019”
                                        
                                    </li>
                                    <li>
                                       Setelah input hal-hal diatas, silahkan generate dokumen dan dapat didownload.
                                        Dokumen yang dihasilkan dalam bentuk Word dan dapat diedit sesuai kebutuhan.

                                    </li>
                                </ol>
                            </div> 
                        </div>
                    </div>        
                    <div v-else-if="stepIndex=='4'">
                        <div class="box-header with-border">
                            <i class="fa fa-bullhorn"></i>

                            <h3 class="box-title">Pengumuman!</h3>
                        </div>
                        <div class="box-body">
                            <div class="callout callout-danger">
                                <p>Silahkan tandatangani seluruh hardcopy dokumen.</p>
                            </div>
                        </div>
                    </div>       
                    <div v-else-if="stepIndex=='5'">
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


<script type="text/x-template" id="pspHasilVerifikasiWizardForm">
    <div>
        <div class="nav-tabs-custom">
            <form-wizard>
                <wizard-step slot-scope="props" slot="step" :tab="props.tab" :transition="props.transition" :index="props.index">
                </wizard-step>
                <h3 slot="title"></h3>

                <tab-content title="Input Dokumen" icon="fa fa-envelope-o" :before-change="beforeTabHasilVerifikasi" v-if="jenisForm.butuhsurvey||jenisForm.butuhkelengkapan||jenisForm.uploaddokumen">

                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title btn bg-maroon btn-flat margin">UPLOAD DOKUMEN VERIFIKASI FINA OKE</h3>
                        </div>
                        <!-- /.box-header -->
                        <!-- form start -->
                        <div class="form-horizontal">
                            <div class="box-body">
                                <div>

                                        <div class="form-group">
                                            <label for="exampleInputEmail1" class="col-sm-2 control-label">Upload Dokumen Verifikasi</label>
                                            <div class="col-sm-10" v-if="!isuploadUlangDokumenVerifikasiFinal">
                                                <div class="box-body2">
                                                   <a class="btn btn-block btn-social btn-bitbucket" :href="hrefDokumenVerifikasiFinal" download>
                                                                <i class="fa fa-download"></i> {{hrefDokumenVerifikasiFinal}}
                                                            </a>
                                                </div>                                              
                                                <button type="button" class="btn btn-success" @click="isuploadUlangDokumenVerifikasiFinal=true;isShowformUploadDokumenVerifikasiFinal=true">
                                                        Upload Ulang
                                                </button>
                                            </div> 

                                            <div class="col-sm-10" v-if="isuploadUlangDokumenVerifikasiFinal">
                                                <div v-if="isShowformUploadDokumenVerifikasiFinal">
                                                    <input type="file" id="suratHasilVerifikasifinal" ref="dokumenVerifikasiFinal" v-validate="'required|size:2000'" name="dokumenVerifikasiFinal" data-vv-scope="step1" accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.msword">
                                                    <span class="text-red">{{ errors.first('step1.dokumenVerifikasiFinal') }}</span>
                                                    <p class="help-block">Upload Document *.docx or *.pdf</p>
                                                    
                                                </div>
                                                <div v-else>
                                                    <span class="text-red">Mohon Menunggu, Sedang Proses Upload...</span>
                                                </div>
                                                <button type="button" class="btn btn-danger" @click="uploadFileDokumenVerifikasiFinal();isShowformUploadDokumenVerifikasiFinal=false">
                                                        Upload File
                                                </button>
                                            </div>

                                            



                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </tab-content>


                <tab-content title="Last step" icon="fa fa-check-circle" :before-change="finishVerifikasiProses" v-if="jenisForm.butuhsurvey||jenisForm.butuhkelengkapan||jenisForm.uploaddokumen">
                    <div class="callout callout-success">
                        <h4>Terima Kasih</h4>
                        <h4>Permohonan Verifikasi Dokumen Telah Selesai dilakukan.</h4>
                    </div>
                </tab-content>                

                <tab-content title="Last step" icon="fa fa-check-circle" :before-change="finishVerifikasiProses" v-else>
                    <div class="callout callout-danger">
                        <h4>Belum Verifikasi</h4>
                        <h4>Mohon Dilakukan Proses Verifikasi Dokumen Terlebih Dahulu.</h4>
                    </div>
                </tab-content>

                <template slot="footer" slot-scope="props">
                                <div class="wizard-footer-right2">
                                    <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next Step</wizard-button>
                                    <wizard-button v-else @click.native="finishVerifikasiSendEmail();finishUploadHasil();;" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>

                                    <wizard-button v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" class="btn btn-warning" :style="props.fillButtonStyle">Back</wizard-button>
                                </div>
                            </template>
            </form-wizard>
        </div>

    </div>
</script>


<script type="text/x-template" id="pspTableVerifikasiWizard">
    <div>
                  <div class="box-body">
                            <table class="table is-bordered is-hoverable">
                                <thead class="text-white bg-dark">
                                    <th class="text-white">ID</th>
                                    <th class="text-white">No Surat</th>
                                    <th class="text-white">Tanggal & Jam Input</th>
                                    <th class="text-white">Nama Satker</th>
                                    <th class="text-white">Nama Verifikator</th>
                                    <th class="text-white">Hasil Verifikasi</th>
                                    <th class="text-white">Action</th>
                                </thead>
                                <tbody class="table-light">
                                    <tr v-for="data in pengajuan" class="table-default">
                                        <td>{{data.id}}</td>                                       
                                        <td v-if="data.noSurat_pemohon===''">Not Set</td>
                                        <td v-else>{{data.noSurat_pemohon}}</td> 
                                        <td>{{data.submitdate}}</td> 
                                        <td>{{data.satuan_kerja}}</td>
                                        <td>{{data.nama_petugas}} 
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
                                                    class="btn btn-success" 
                                                    @click=
                                                        "selectPengajuan(data);getDataChoosePengajuan();selectJenisForm('verifikasi');getJenisForm()">

                                                Verifikasi
                                            </button>

                                            <button type="button" 
                                                    class="btn btn-info" 
                                                    @click=
                                                        "selectPengajuan(data);getDataChoosePengajuan();selectJenisForm(data.hasil_verifikasi);getJenisForm();showHasilVerifikasi()">

                                                Upload Dok
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
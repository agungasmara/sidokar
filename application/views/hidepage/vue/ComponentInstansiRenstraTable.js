


<script type="text/x-template" id="renstraTable">
    <div>
                  <div class="box-body">
                            <table class="table is-bordered is-hoverable">
                                <thead class="text-white bg-dark">
                                    <th class="text-white">ID</th>
                                    <th class="text-white">Dokumen</th>
                                    <th class="text-white">Periode</th>
                                    <th class="text-white">Softcopy</th>
                                    <th class="text-white">Hardcopy</th>
                                    <th class="text-white">Action</th>
                                </thead>
                                <tbody class="table-light">
                                    <tr v-for="data in instansi" class="table-default">
                                        <td style="padding-left:0px">{{data.id}}</td>
                                        <td style="padding-left:0px">{{data.nama}}</td> 
                                        <td style="padding-left:0px">{{data.periode_start}} - {{data.periode_end}}</td> 
                                        <td style="padding-left:0px" v-if="parseInt(data.softcopy)">Ada</td> 
                                        <td style="padding-left:0px" v-else>Tidak Ada</td> 
                                        <td style="padding-left:0px" v-if="parseInt(data.hardcopy)">Ada</td> 
                                        <td style="padding-left:0px" v-else>Tidak Ada</td> 
                                        <td>

                                            <button type="button" 
                                                    class="btn btn-info" 
                                                    @click=
                                                        "selectDocumentRenstra(data);getDataDocumentRenstra();selectJenisForm(data.hasil_verifikasi);getJenisDocumentForm()">

                                                View Details
                                            </button>

                                            
                                        </td>
                                    </tr>
                                    <tr v-if="emptyResult">
                                        <td colspan="9" rowspan="4" class="text-center h1">No Record Found</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination 
                            :current_page="currentPage" 
                            :row_count_page="rowCountPage" 
                            @page-update="pageUpdate" 
                            :total_users="totalData" 
                            :page_range="pageRange">
                            
                            </pagination>
    </div>
</script>


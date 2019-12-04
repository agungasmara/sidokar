


<script type="text/x-template" id="userTable">
    <div>
                  <div class="box-body">
                            <table class="table is-bordered is-hoverable">
                                <thead class="text-white bg-dark">
                                    <th class="text-white">ID</th>
                                    <th class="text-white">Full Name</th>
                                    <th class="text-white">NIP</th>
                                    <th class="text-white">Assign</th>
                                    <th class="text-white">Action</th>
                                </thead>
                                <tbody class="table-light">
                                    <tr v-for="(data, index) in user" class="table-default">
                                        <td style="padding-left:0px">{{index+1}}</td>
                                        <td style="padding-left:0px">{{data.fullname}}</td> 
                                        <td style="padding-left:0px">{{data.nip}}</td> 
                                        <td style="padding-left:0px">{{data.nama_instansi}}</td> 
                                        <td>

                                            <button type="button" 
                                                    class="btn btn-info" 
                                                    @click="selectUser(data);getDetailUser()">

                                                Assign User
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


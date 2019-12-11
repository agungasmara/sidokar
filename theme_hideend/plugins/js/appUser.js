var datepickerOptions = {}
Vue.use(window.AirbnbStyleDatepicker, datepickerOptions)
Vue.use(VueFormWizard)
Vue.use(vuejsDatepicker)

Vue.use(VueBlink)
Vue.use(VeeValidate)
Vue.config.debug = true;

Vue.use(VMoney)
Vue.use(VueMultiselect)
Vue.component('vue-multiselect', window.VueMultiselect.default)

//dynamic url
let myUrl = window.location.origin+"/";

if(myUrl.includes("localhost")){
  var pathArray = window.location.pathname.split( '/' );
  myUrl += pathArray [1] + "/";
}



// Table
tableuser = {
            template: '#userTable',
            props: [],
            data() {
                 return {
                    url: myUrl,
                    user:[],
                    successMSG: '',
                    totalData:0,
                    currentPage: 0,
                    rowCountPage: 5,
                    pageRange: 2,
                    emptyResult:false,
                    chooseDocumentRenstra:{},
                    jenisForm:"",
                    chooseUser:{}
                    
                 }

            },
            created(){
                this.showAll()
            },
            methods:{


                     //START SEARCH
                    refresh(){
                        this.showAll(this.textSearch); //for preventing
                    },

                    showAll(textSearch){    
                        if(typeof textSearch === "undefined"){
                            this.textSearch = ""
                        }else{
                            this.textSearch = textSearch
                        }

                        console.log(textSearch)
                        let self = this
                        axios.post(this.url+"/hideend/userapp/showAll/"+this.textSearch).then(function(response){
                                 if(response.data.user == null){
                                        self.user = []
                                        console.log("error show all")
                                    }else{
                                        self.getData(response.data.user);
                                    }
                        })
                    },
                    getData(user){
                        this.emptyResult = false; // become false if has a record
                        this.totalData = user.length //get total of user
                        this.user = user.slice(this.currentPage * this.rowCountPage, (this.currentPage * this.rowCountPage) + this.rowCountPage); //slice the result for pagination
                        
                         // if the record is empty, go back a page
                        if(this.user.length == 0 && this.currentPage > 0){ 
                            console.log("if the record is empty, go back a page")
                            this.pageUpdate(self.currentPage - 1)
                            this.clearAll();  
                        }
                    },
                    pageUpdate(pageNumber){
                        this.currentPage = pageNumber; //receive currentPage number came from pagination template
                        this.refresh()  
                    },//END SEARCH                   
                    selectDocumentRenstra(data){
                        this.chooseDocumentRenstra = data
                    },
                    selectJenisForm(jenisForm){
                            this.jenisForm = "renstra"
                    },
                    selectUser(data){
                        this.chooseUser = data
                    },
                    getDetailUser(){
                         this.$emit('user-data', this.chooseUser)
                    }

        },
}// Table


        

detailUser =  {
            template: '#userForm',
            props: ['userdata'],
            components: {
                    vuejsDatepicker,
                    'vue-blink': VueBlink
            },
            data() {
                 return {
                    url: myUrl,
                    userData:{
                       id:"",
                       fullname:"",
                       nip:"", 
                       jabatan:"",
                       nama_instansi:"", 
                       id_instansi:"",
                    }, 
                    chooseInstansi:{},
                    option_instansi:[],                      
                }
            },      
            created(){
                this.getInstansi()
                this.setData()
            },
            methods:{

                getInstansi(){
                    let self = this
                    axios.post(this.url+"/hideend/instansi/showAll").then(function(response){
                        if(response.data.instansi !== null){
                            self.option_instansi = response.data.instansi
                        }
                    })
                },
                nama_instansi({nama}) {

                    return `${nama}`
                },
                setData(){

                },
                setData(){
                    this.userData = this.userdata
                    this.chooseInstansi={"id":this.userData.id_instansi,"nama":this.userData.nama_instansi}
                    
                },
                jenis_user({nama}) {

                    return `${nama}`
                },
                name_pegawai({nama}) {

                    return `${nama}`
                },
                formData(obj) {
                    var formData = new FormData();
                    for (var key in obj) {
                        formData.append(key, obj[key]);
                    }
                    return formData;
                },
                showDate (date) {
                   this.date = date
                },
                backtoTable(){
                    this.clearForm()
                    let valueHide ={
                                    showInstansiDetail : true,                               
                                    showInstansiTable : false,                                   
                                    showDocumentDetail : false                                    
                                }
                    this.$emit('back-data', valueHide)
                },
                clearForm(){
                     this.document.id= ""
                     this.document.nama= ""
                     this.document.file_hardcopy= ""
                     this.document.file_softcopy= ""
                     this.document.hardcopy= ""
                     this.document.periode_end= ""
                     this.document.periode_end= ""
                     this.document.periode_start= ""
                     this.document.softcopy= ""  
                     this.isEditForm=0

                },
                saveUserData() {
                       this.updateData()                   
                },
                updateData(){
                    let self = this;
                   
                    let link = this.url + "/hideend/userapp/update_user"
            
                    this.userData.id_instansi = this.chooseInstansi.id
                    this.userData.nama_instansi = this.chooseInstansi.nama
                    let formData = this.formData(this.userData);
                    axios.post(link, formData).then(function(response) {
                        if (response.data.error) {
                            console.log(response.data.msg);
                        } else {
                            console.log('Update Success')                            
                            self.backtoTable()
                        }
                    })
                },
                clearInstansiData() {
                    this.resetTab()
                    window.location.href = myUrl + 'hideend/pengajuan/status';
                },
                resetTab() {

                   this.$refs.vuewizard.reset()
                   this.errors.clear()
                },

                beforeTab1Switch: function() {
                    return true
                },
                backtoTable(value){
                    let valueHide ={
                        showUserForm : false,
                        showUserTable : true,

                    }
                    this.$emit('back-data', valueHide)
                },
        

        },
    }





var v = new Vue({
    el: '#app',
    components: {
        'table-user': tableuser,
        'detail-user':detailUser,
        vuejsDatepicker
    },
    data: {
        url: myUrl,
        showUserTable:true,
        showUserForm:false,
        chooseInstansi:{},
        chooseUserData:{},
        textSearch:""
   

    },

    methods: {
        searchUser(){
            this.$refs.tableuser.showAll(this.textSearch)
        },
        showTable(){
            this.showUserTable=true
            this.showUserForm=false
        },
        showForm(){            
            this.showUserTable=false
            this.showUserForm=true
        },
        chooseUser(value){
            this.showForm()
            this.chooseUserData = value
        },
        getDataDocument(value){

        },
        finishProsesVerifikasi(value){

        },
        backtoTable(value){
            this.showUserForm = value.showUserForm
            this.showUserTable = value.showUserTable

        },
        
  




    }
})
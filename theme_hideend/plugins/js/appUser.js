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
userTable = {
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
                    
                 }

            },
            created(){
                this.showAll(this.datainstansi.id)
            },
            methods:{
                    showAll(id){ 
                        let self = this
                        let link = this.url+"/hideend/user/showAll"
                        this.user={}
                        axios.post(link).then(function(response){
                                 if(response.data.user == null){
                                        console.log("error show all")
                                        self.emptyResult=true
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
                            this.pageUpdate(self.currentPage - 1)
                            this.clearAll();  
                        }
                    },
                    pageUpdate(pageNumber){
                        this.currentPage = pageNumber; //receive currentPage number came from pagination template
                        this.refresh()  
                    },
                    selectDocumentRenstra(data){
                        this.chooseDocumentRenstra = data
                    },
                    selectJenisForm(jenisForm){
                            this.jenisForm = "renstra"
                    },
                    getDataDocumentRenstra(){
                         this.$emit('send-data', this.chooseDocumentRenstra)
                    },
                    getJenisDocumentForm(){
                         this.$emit('send-jenisform', "renstra")
                    }

        },
}// Table




detailUser =  {
            template: '#documentForm',
            props: ['datadocument','datainstansi','jenisuser'],
            components: {
                    vuejsDatepicker,
                    'vue-blink': VueBlink
            },
            data() {
                 return {
                    url: myUrl,
                    document:{
                        file_hardcopy:"",
                        file_softcopy:"",
                        hardcopy:0,
                        nama:"",
                        periode_end:"",
                        periode_start:"",
                        softcopy:0,
                    },    
                

                    
                    
                }

            },      
            created(){
                this.setDocument()
                this.cekDocument()
            },      
            computed:{


               hrefFileDocumentSoftcopy: function () {
                            // `this` points to the vm instance
                            return this.url+'/uploads/'+this.document.file_softcopy
                            //return this.url
                        },
                hrefFileDocumentHardcopy: function () {
                            // `this` points to the vm instance
                            return this.url+'/uploads/'+this.document.file_hardcopy
                            //return this.url
                        },
            },
            methods:{
                setDocument(){
                    if(typeof this.datadocument.id !== "undefined" && this.datadocument.id !=="" ){
                        console.log("masuk kaga?")
                        this.isEditForm= 1
                        this.document = this.datadocument

                        if(this.jenisuser==="renstra"){
                            this.tipeuser={"id":"1","nama":"Rencana Strategis (Renstra)"}
                        }else{
                            this.tipeuser={"id":"2","nama":"Rencana Kerja (Renja)"}
                        }

                    }else{
                        this.isEditForm= 0
                        this.tipeuser={"id":"1","nama":"Rencana Strategis (Renstra)"}
                    }
                },
                set_jenis_user(){

                },
                pickStatusDocumentSoftcopy(value){
                        console.log(value)
                        this.document.softcopy=(value==="ada")?1:0;
                },
                pickStatusDocumentHardcopy(value){
                        this.document.hardcopy=(value==="ada")?1:0;
                },
                uploadFileDocumentSoftcopy: function(e) {
                    let formData = new FormData();
                    if(typeof this.$refs.fileDocumentSoftcopy !== 'undefined'){
                       this.fileSoftcopy = this.$refs.fileDocumentSoftcopy.files[0];  
                       formData.append('fileSoft', this.fileSoftcopy);  
                    }   


                    if (typeof this.$refs.fileDocumentSoftcopy !== 'undefined') {

                        let self = this
                        let ax = axios.post(this.url + '/hideend/instansi/uploadFile', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                            .then(function(response) {
                                if(!response.error){
                                    response.data.file.forEach((item, index)=>{
                                        self.isuploadUlangDocumentSoftcopy=false
                                        if(response.data.tipe[index]==="fileSoft"){
                                            self.document.file_softcopy = item
                                        }
                                    })
                                }else{
                                    self.isuploadUlangDocumentSoftcopy=false
                                    self.isprosesUploadDocumentSoftcopy=false
                                    self.showUploadDocumentSoftcopy=true
                                }
                            })
                            .catch(function(error) {
                                self.isuploadUlangDocumentSoftcopy=false
                                self.isprosesUploadDocumentSoftcopy=false
                                self.showUploadDocumentSoftcopy=true

                                console.log(error);
                            });
                    }

                },
                cekDocument(){
                    this.document.id_instansi = this.datainstansi.id
                    if(typeof this.datadocument !== "undefined"){
                            this.isuploadUlangDocumentSoftcopy=(!parseInt(this.datadocument.softcopy))?true:false
                            this.showUploadDocumentSoftcopy=this.isuploadUlangDocumentSoftcopy
                            this.isuploadUlangDocumentHardcopy=(!parseInt(this.datadocument.hardcopy))?true:false
                            this.showUploadDocumentHardcopy=this.isuploadUlangDocumentHardcopy

                    }
                },
                showEndYear(){
                    let date =  this.document.periode_start
                    this.document.periode_end = new Date(new Date(date).setFullYear(new Date(date).getFullYear() + 5))
                    this.$refs.endYearPicker.showCalendar();
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
                setInstansi(){

                   
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
                saveDocument() {
                    if(this.isEditForm){
                       this.updateData()
                    }else{
                        console.log("add")
                        this.addData()
                    }
                   
                },
                customFormatter(date) {
                    return moment(date).format('YYYY');
                },   
                updateData(){
                    let self = this;
                   
                    let link        
                    this.document.periode_start = this.customFormatter(this.document.periode_start)
                    if(this.tipeuser.id=='1'){
                        link = this.url + "/hideend/renstra/update_document"
                        this.document.periode_end = this.customFormatter(this.document.periode_end)
                    }else{
                        link = this.url + "/hideend/renja/update_document"                        
                        this.document.periode_end = this.document.periode_start
                    }
                    
                    let formData = this.formData(this.document);
                    axios.post(link, formData).then(function(response) {
                        if (response.data.error) {
                            console.log(response.data.msg);
                        } else {
                            console.log('Update Success')                            
                            self.backtoTable()
                        }
                    })
                },
                addData(){
                    let self = this;
                    let link        
                    this.document.periode_start = this.customFormatter(this.document.periode_start)
                    if(this.tipeuser.id=='1'){
                        link = this.url + "/hideend/renstra/insert_document"
                        this.document.periode_end = this.customFormatter(this.document.periode_end)
                    }else{
                        link = this.url + "/hideend/renja/insert_document"
                        this.document.periode_end = this.document.periode_start
                    }
                    var formData = this.formData(this.document);
                    axios.post(link, formData).then(function(response) {
                        if (response.data.error) {
                            console.log(response.data.msg);
                        } else {
                            if (response.data.error) {
                                console.log(response.data.msg);
                            } else {
                                console.log('Insert Success')                            
                                self.backtoTable()
                            }    
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
                finishVerifikasiProses(){
                    this.isShowUploadWizardForm = false;
                    this.isShowVerifikasiForm = false;
                    let valueHide ={
                                    isShowFormKANWIL : false                                    
                                }
                    this.$emit('send-data', valueHide)
                },
                beforeTab4SwitchKANWIL: function() {

                    return true
                },
                beforeTab1Switch: function() {

                    return true
                }

        },
    }





var v = new Vue({
    el: '#app',
    components: {
        'table-user': userTable,
        'detail-user':detailUser,
        vuejsDatepicker
    },
    data: {
        url: myUrl,
    
   

    },

    methods: {
  




    }
})
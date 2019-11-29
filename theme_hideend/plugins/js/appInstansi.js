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
tableRenstra = {
            template: '#renstraTable',
            props: ['datainstansi'],
            data() {
                 return {
                    url: myUrl,
                    instansi:[],
                    emptyResult: false,
                    successMSG: '',
                    totalData:0,
                    currentPage: 0,
                    rowCountPage: 5,
                    pageRange: 2,
                    chooseDocumentRenstra:{},
                    jenisForm:{
                        'verifikasi':false,
                        'uploaddokumen':false,
                        'butuhsurvey':false,
                        'butuhkelengkapan':false,
                    },
                    
                 }

            },
            created(){
                this.showAll(this.datainstansi.id)
            },
            methods:{
                    gotoEditData(id){
                        window.location.href = myUrl + 'hideend/instansi/index/'+id;  
                    },
                    refresh(){
                        this.showAll(); //for preventing
                    },
                    showAll(id){ 
                        let self = this
                        axios.post(this.url+"/hideend/renstra/showAll/"+id).then(function(response){
                                 if(response.data.dokumen == null){
                                        console.log("error show all")
                                    }else{
                                        self.getData(response.data.dokumen);
                                    }
                        })
                    },
                    getData(instansi){
                        this.emptyResult = false; // become false if has a record
                        this.totalData = instansi.length //get total of user
                        this.instansi = instansi.slice(this.currentPage * this.rowCountPage, (this.currentPage * this.rowCountPage) + this.rowCountPage); //slice the result for pagination
                        
                         // if the record is empty, go back a page
                        if(this.instansi.length == 0 && this.currentPage > 0){ 
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
                            this.jenisForm.document = "renstra"
                    },
                    getDataDocumentRenstra(){
                         this.$emit('send-data', this.chooseDocumentRenstra)
                    },
                    getJenisDocumentForm(){
                         this.$emit('send-jenisform', this.jenisForm)
                    }

        },
}// Table

// Table
tableRenja = {
            template: '#renjaTable',
            data() {
                 return {
                    url: myUrl,
                    instansi:[],
                    emptyResult: false,
                    successMSG: '',
                    totalData:0,
                    currentPage: 0,
                    rowCountPage: 5,
                    pageRange: 2,
                    chooseInstansi:{},
                    jenisForm:{
                        'verifikasi':false,
                        'uploaddokumen':false,
                        'butuhsurvey':false,
                        'butuhkelengkapan':false,
                    },
                    
                 }

            },
            created(){
                this.showAll()
            },
            methods:{
                    gotoEditData(id){
                        window.location.href = myUrl + 'hideend/instansi/index/'+id;  
                    },
                    refresh(){
                        this.showAll(); //for preventing
                    },
                    showAll(){ 
                        console.log("masuk renja")
                        let self = this
                        axios.post(this.url+"/hideend/renja/showAll").then(function(response){
                                 if(response.data.dokumen == null){
                                        console.log("error show all")
                                    }else{
                                        self.getData(response.data.dokumen);
                                    }
                        })
                    },
                    getData(instansi){
                        this.emptyResult = false; // become false if has a record
                        this.totalData = instansi.length //get total of user
                        this.instansi = instansi.slice(this.currentPage * this.rowCountPage, (this.currentPage * this.rowCountPage) + this.rowCountPage); //slice the result for pagination
                        
                         // if the record is empty, go back a page
                        if(this.instansi.length == 0 && this.currentPage > 0){ 
                            this.pageUpdate(self.currentPage - 1)
                            this.clearAll();  
                        }
                    },
                    pageUpdate(pageNumber){
                        this.currentPage = pageNumber; //receive currentPage number came from pagination template
                        this.refresh()  
                    },
                    selectinstansi(data){
                        this.chooseInstansi = data
                    },
                    selectJenisForm(jenisForm){
                        if(jenisForm==='verifikasi'){
                            this.jenisForm.verifikasi = true
                            this.jenisForm.uploaddokumen = false
                            this.jenisForm.butuhsurvey = false
                            this.jenisForm.butuhkelengkapan = false
                        }

                    },
                    getDatachooseInstansi(){
                         this.$emit('send-data', this.chooseInstansi)
                    },
                    getJenisForm(){
                         this.$emit('send-jenisform', this.jenisForm)
                    }

        },
}// Table


tableInstansi = {
            template: '#instansiTable',
            data() {
                 return {
                    url: myUrl,
                    instansi:[],
                    emptyResult: false,
                    successMSG: '',
                    totalData:0,
                    currentPage: 0,
                    rowCountPage: 5,
                    pageRange: 2,
                    chooseInstansi:{},
                    jenisForm:{
                        'verifikasi':false,
                        'uploaddokumen':false,
                        'butuhsurvey':false,
                        'butuhkelengkapan':false,
                    },
                    
                 }

            },
            created(){
                this.showAll()
            },
            methods:{
                    gotoEditData(id){
                        window.location.href = myUrl + 'hideend/instansi/index/'+id;  
                    },
                    refresh(){
                        this.showAll(); //for preventing
                    },
                    showAll(){ 
                        let self = this
                        axios.post(this.url+"/hideend/instansi/showAll").then(function(response){
                                 if(response.data.instansi == null){
                                        console.log("error show all")
                                    }else{
                                        self.getData(response.data.instansi);
                                    }
                        })
                    },
                    getData(instansi){
                        this.emptyResult = false; // become false if has a record
                        this.totalData = instansi.length //get total of user
                        this.instansi = instansi.slice(this.currentPage * this.rowCountPage, (this.currentPage * this.rowCountPage) + this.rowCountPage); //slice the result for pagination
                        
                         // if the record is empty, go back a page
                        if(this.instansi.length == 0 && this.currentPage > 0){ 
                            this.pageUpdate(self.currentPage - 1)
                            this.clearAll();  
                        }
                    },
                    pageUpdate(pageNumber){
                        this.currentPage = pageNumber; //receive currentPage number came from pagination template
                        this.refresh()  
                    },
                    selectinstansi(data){
                        this.chooseInstansi = data
                    },
                    selectJenisForm(jenisForm){
                        if(jenisForm==='verifikasi'){
                            this.jenisForm.verifikasi = true
                            this.jenisForm.uploaddokumen = false
                            this.jenisForm.butuhsurvey = false
                            this.jenisForm.butuhkelengkapan = false
                        }

                    },
                    getDatachooseInstansi(){
                         this.$emit('send-data', this.chooseInstansi)
                    },
                    getJenisForm(){
                         this.$emit('send-jenisform', this.jenisForm)
                    }

        },
        }



detailDocument =  {
            template: '#documentForm',
            props: ['datadocument','datainstansi'],
            components: {
                    vuejsDatepicker,
                    'vue-blink': VueBlink
            },
            data() {
                 return {
                    url: myUrl,
                    document:this.datadocument,          
                    showDocumentVerifikasiFinal:false,         
                    showDocumentKekuranganFinal:false,         
                    showDocumentSurveyFinal:false,    
                    styleback:"background-color: green; border-color: green; color: white",    
                    stepIndex:0,      
                    date: {
                        from: null,
                        to: null,
                        month: null,
                        year: null
                    },    
                    label_jenis_gaji:"",
                    isNegatif: false,
                    money: {
                        decimal: ',',
                        thousands: '.',
                        prefix: 'Rp ',
                        suffix: '',
                        precision: 0,
                        masked: false /* doesn't work with directive */
                      },
                    datepicker:"",
                    option_detail_pegawai: [],
                    option_jenis_gaji: [],
                    isEditForm:false,
                    isSaveNext:0,
                    periode_renstra_start:0,
                    periode_renstra_end:0,
                    isuploadUlangDocumentSoftcopy:false,
                    isuploadUlangDocumentHardcopy:false,
                    isprosesUploadDocumentSoftcopy:false,
                    isprosesUploadDocumentHardcopy:false,
                    fileSoftcopy:"",
                    fileHardcopy:"",

                    
                    
                }

            },      
            created(){
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
                pickStatusDocumentSoftcopy(value){
                        this.document.softcopy=(value==="ada")?1:0;
                },
                pickStatusDocumentHardcopy(value){
                        this.document.hardcopy=(value==="ada")?1:0;
                },
                 uploadFileDocumentHardcopy: function(e) {
                    let formData = new FormData();
                    if(typeof this.$refs.fileDocumentHardcopy !== 'undefined'){
                       this.fileHardcopy = this.$refs.fileDocumentHardcopy.files[0];  
                       formData.append('fileHard', this.fileHardcopy);  
                    }   


                    if (typeof this.$refs.fileDocumentHardcopy !== 'undefined') {

                        let self = this
                        let ax = axios.post(this.url + '/hideend/instansi/uploadFile', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                            .then(function(response) {
                                if(!response.error){
                                    response.data.file.forEach((item, index)=>{
                                        self.isuploadUlangDocumentHardcopy=false
                                        if(response.data.tipe[index]==="fileHard"){
                                            self.document.file_hardcopy = item
                                        }
                                    })
                                }else{
                                    self.isuploadUlangDocumentHardcopy=false
                                    self.isprosesUploadDocumentHardcopy=false
                                    self.showUploadDocumentHardcopy=true
                                }
                            })
                            .catch(function(error) {
                                self.isuploadUlangDocumentHardcopy=false
                                self.isprosesUploadDocumentHardcopy=false
                                self.showUploadDocumentHardcopy=true

                                console.log(error);
                            });
                    }

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
                    this.$refs.endYearPicker.showCalendar();
                },
                jenis_gaji_fn({nama}) {

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
                customFormatter(date) {
                    return moment(date).format('YYYY');
                },   
                showDate (date) {
                   this.date = date
                },
                backtoTable(){
                    let valueHide ={
                                    showInstansiDetail : false,                               
                                    showInstansiTable : true                                    
                                }
                    this.$emit('back-data', valueHide)
                },
                setInstansi(){

                   
                },
                saveDocument() {                    

                    if(typeof this.datadocument!=='undefined'){
                       this.updateData()
                    }else{
                        this.addData()
                    }


                },
                updateData(){
                    let self = this;
                    var formData = this.formData(this.document);
                    axios.post(this.url + "/hideend/renstra/update_document", formData).then(function(response) {
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
                    var formData = this.formData(this.document);
                    axios.post(this.url + "/hideend/renstra/insert_document", formData).then(function(response) {
                        if (response.data.error) {
                            console.log(response.data.msg);
                        } else {
                            console.log('Insert Success')     
                            if(self.isSaveNext){
                                //self.$refs.vuewizard.reset()
                                 window.location.href = myUrl + 'hideend/instansi/';

                            }else{
                                window.location.href = myUrl + 'hideend/instansi/lists';
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
        'table-instansi': tableInstansi,
        'table-renstra': tableRenstra,
        'table-renja': tableRenja,
        'detail-document':detailDocument,
        vuejsDatepicker
    },
    data: {
        url: myUrl,
        verifikasi:{},
        jenisForm:{
                        'verifikasi':false,
                        'uploaddokumen':false,
                        'butuhsurvey':false,
                        'butuhkelengkapan':false,
                    },

        isShowFormKANWIL: false,
        isShowFormKPKNL: false,           
        indexFormWizard:0,
        chooseInstansi:{},
        emptyResult: false,
        successMSG: '',
        totalData:0,
        tpBtn: 0,
        isDisabled: 1,
        enableEnquiry: false,
        inputDateOne: '',
        inputDateTwo: '',
        sundayFirst: false,
        alignRight: false,
        trigger: false,
        showInstansiDetail: false,
        showInstansiTable: true,
        showDocumentDetail: false,
        periode_renja_start: "",
        periode_renstra_start: "",
        periode_renstra_end: "",
        nama_instansi: "",
        chooseDocument:{},

    },

    methods: {
        getJenisDocumentForm(value){

            this.jenis_document = this.nama_instansi
        },
        getDataDocument(value) {
            
            this.chooseDocument = value
            this.chooseDocument.nama_instansi = this.nama_instansi
            this.chooseDocument.id_instansi = this.id_instansi
            this.showInstansiDetail = false
            this.showInstansiTable = false
            this.showDocumentDetail = true
           
        },
        showEndYear(){
            this.$refs.endYearPicker.showCalendar();
        },
        testConsole(){
            console.log("masuk")
        },
        customFormatter(date) {
                    return moment(date).format('YYYY');
                },   
        getIndexFormStep(data) {
            console.log("getIndexFormStep")
            console.log(data.step+1)            
            console.log("---getIndexFormStep")
            this.indexFormWizard = data.step+1
        },
        backtoTable(value){
            this.showInstansiDetail = value.showInstansiDetail
            this.showInstansiTable = value.showInstansiTable

        },
        finishProsesVerifikasi(value) {
            this.showInstansiDetail = value.showInstansiDetail
            this.showInstansiTable = value.showInstansiTable
        },
        getJenisForm(value) {
            this.jenisForm = value
        },
        getDatachooseInstansi(value) {
            this.nama_instansi = value.nama
            this.chooseInstansi = value
            this.showInstansiDetail = true
            this.showInstansiTable = false
           
        },
       
        getDataVerifikasi:function(){
            axios.post(this.url + "/hideend/verifikasi/checkDocumentVerifikasi/"+this.chooseInstansi.id).then(function(response) {                 
                    if (response.data.dokumen) {
                        v.verifikasi =  response.data.dokumen[0]
                    
                    }
                })  
        },







    }
})
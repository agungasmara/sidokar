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
            props: ['datainstansi','datarangeyear'],
            data() {
                 return {
                    url: myUrl,
                    dokumen:[],
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

                    deleteDocument(data){
                        console.log(data)
                        self = this
                        link = this.url+"/hideend/renstra/remove_document/"+data.id
                        axios.post(link).then(function(response){
                                 if(response.data.error){
                                        console.log("error show all")
                                        self.emptyResult=true
                                    }else{
                                        self.dokumen = []
                                        self.showAll(data.id_instansi)
                                    }
                            })  
                    },         
                    gotoEditData(id){
                        window.location.href = myUrl + 'hideend/instansi/index/'+id;  
                    },
                    refresh(){
                        this.showAll(); //for preventing
                    },
                    showAll(id){ 
                        let idElement = document.getElementById('instansi').value
                        if(idElement!==""){
                            id = idElement
                        }
                        let self = this
                        let link = ''
                        if(Object.entries(this.datarangeyear).length === 0 && this.datarangeyear.constructor === Object){
                            link = this.url+"/hideend/renstra/showAll/"+id

                            console.log(link)
                           
                        }else{
                            let start = this.datarangeyear.start_year
                            let end = this.datarangeyear.end_year
                            link = this.url+"/hideend/renstra/showAll/"+id+"/"+start+"/"+end
                           
                        } 
                        this.dokumen={}
                        axios.post(link).then(function(response){
                                 if(response.data.dokumen == null){
                                        console.log("error show all")
                                        self.emptyResult=true
                                    }else{
                                        self.getData(response.data.dokumen);
                                    }
                            })  
                      
                    },
                    getData(dokumen){
                        this.emptyResult = false; // become false if has a record
                        this.totalData = dokumen.length //get total of user
                        this.dokumen = dokumen.slice(this.currentPage * this.rowCountPage, (this.currentPage * this.rowCountPage) + this.rowCountPage); //slice the result for pagination
                        
                         // if the record is empty, go back a page
                        if(this.dokumen.length == 0 && this.currentPage > 0){ 
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

// Table
tableRenja = {
            template: '#renjaTable',            
            props: ['datainstansi','datarangeyear'],
            data() {
                 return {
                    url: myUrl,
                    dokumen:[],
                    successMSG: '',
                    totalData:0,
                    currentPage: 0,
                    rowCountPage: 5,
                    pageRange: 2,
                    chooseInstansi:{},
                    emptyResult:false,
                    jenisForm:""
                    
                 }

            },
            created(){
                this.showAll(this.datainstansi.id)
            },
            methods:{

                    deleteDocument(data){
                        console.log(data)
                        self = this
                        link = this.url+"/hideend/renja/remove_document/"+data.id
                        axios.post(link).then(function(response){
                                 if(response.data.error){
                                        console.log("error show all")
                                        self.emptyResult=true
                                    }else{
                                        self.showAll(data.id_instansi)
                                    }
                            })  
                    },    

                    selectJenisForm(jenisForm){
                            this.jenisForm = "renja"
                    },
                    gotoEditData(id){
                        window.location.href = myUrl + 'hideend/instansi/index/'+id;  
                    },
                    refresh(){
                        this.showAll(); //for preventing
                    },
                    showAll(id){ 

                        let idElement = document.getElementById('instansi').value
                        if(idElement!==""){
                            id = idElement
                        }
                        let self = this
                        let link = ''
                        if(Object.entries(this.datarangeyear).length === 0 && this.datarangeyear.constructor === Object){
                            link = this.url+"/hideend/renja/showAll/"+id
                           
                        }else{
                            let start = this.datarangeyear.start_year_renja
                            let end = this.datarangeyear.end_year_renja
                            link = this.url+"/hideend/renja/showAll/"+id+"/"+start+"/"+end
                           
                        } 
                        this.dokumen={}
                        axios.post(link).then(function(response){
                                 if(response.data.dokumen == null){
                                        console.log("error show all")
                                        self.emptyResult=true
                                    }else{
                                        self.getData(response.data.dokumen);
                                    }
                            })  
                      
                    },
                    getData(dokumen){
                        this.emptyResult = false; // become false if has a record
                        this.totalData = dokumen.length //get total of user
                        this.dokumen = dokumen.slice(this.currentPage * this.rowCountPage, (this.currentPage * this.rowCountPage) + this.rowCountPage); //slice the result for pagination
                        
                         // if the record is empty, go back a page
                        if(this.dokumen.length == 0 && this.currentPage > 0){ 
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
                    getJenisDocumentForm(){
                         this.$emit('send-jenisform', "renja")
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
                        axios.post(this.url+"/hideend/instansi/showAll/"+this.textSearch).then(function(response){
                                 if(response.data.instansi == null){
                                        self.instansi = []
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
                            console.log("if the record is empty, go back a page")
                            this.pageUpdate(self.currentPage - 1)
                            this.clearAll();  
                        }
                    },
                    pageUpdate(pageNumber){
                        this.currentPage = pageNumber; //receive currentPage number came from pagination template
                        this.refresh()  
                    },//END SEARCH
                    gotoEditData(id){
                        window.location.href = myUrl + 'hideend/instansi/index/'+id;  
                    },
                    refresh(){
                        this.showAll(); //for preventing
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
            props: ['datadocument','datainstansi','jenisdokumen'],
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
                    isEditForm:0,
                    isSaveNext:0,
                    periode_start:0,
                    periode_end:0,
                    isuploadUlangDocumentSoftcopy:false,
                    isuploadUlangDocumentHardcopy:false,
                    isprosesUploadDocumentSoftcopy:false,
                    isprosesUploadDocumentHardcopy:false,
                    fileSoftcopy:"",
                    fileHardcopy:"",
                    tipedokumen:{},
                    option_tipedokumen:[{"id":"1","nama":"Rencana Strategis (Renstra)"},
                                        {"id":"2","nama":"Rencana Kerja (Renja)"}],
                

                    
                    
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

                    ///
                    if(typeof this.datadocument.id !== "undefined" && this.datadocument.id !=="" ){
                        console.log("masuk kaga?")
                        this.isEditForm= 1
                        this.document = this.datadocument

                        if(this.jenisdokumen==="renstra"){
                            this.tipedokumen={"id":"1","nama":"Rencana Strategis (Renstra)"}
                        }else{
                            this.tipedokumen={"id":"2","nama":"Rencana Kerja (Renja)"}
                        }

                    }else{
                        this.isEditForm= 0
                        this.tipedokumen={"id":"1","nama":"Rencana Strategis (Renstra)"}
                    }
                },
                set_jenis_dokumen(){

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
                jenis_dokumen({nama}) {

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
                    if(this.tipedokumen.id=='1'){
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
                    if(this.tipedokumen.id=='1'){
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
        'table-instansi': tableInstansi,
        'table-renstra': tableRenstra,
        'table-renja': tableRenja,
        'detail-document':detailDocument,
        vuejsDatepicker
    },
    data: {
        url: myUrl,
        verifikasi:{},
        jenisForm:{},
        idInstansi: "",
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
        showDocumentDetail: false,
        showInstansiTable: true,
        showDocumentDetail: false,
        periode_renja_start: "",
        periode_renja_end: "",
        periode_renstra_start: "",
        periode_renstra_end: "",
        nama_instansi: "",
        jenis_document: "",
        chooseDocument:{},
        chooseRangeYear:{},
        textSearch:"",

    },    
    created(){
        this.cekInstansiId()
    },

    methods: {

        searchInstansi(){
             this.$refs.tableInstansi.showAll(this.textSearch)
        },
        showInstansi(id){ 
            let self = this
            axios.post(this.url+"/hideend/instansi/showAll/"+id).then(function(response){

                if(response.data.instansi === null){
                    console.log("error show instansi")
                }else{
                    let data = response.data.instansi

                    console.log("data")
                    console.log(data)
                    self.nama_instansi = data[0].nama
                    self.chooseInstansi = data[0]
                    console.log("this.chooseInstansi");
                    console.log(self.chooseInstansi);
                }
            })
        },
        cekInstansiId(){
            this.idInstansi = document.getElementById('instansi').value
            if(this.idInstansi!==""){
                this.showInstansiTable=false
                this.showInstansiDetail=true
                this.showDocumentDetail=false

                this.showInstansi(this.idInstansi)

               
               

            }
            
        },
        addResntraDocument(value){

            this.showDetailForm()
        },        

        getJenisDocumentForm(value){

            this.jenis_document = value
        },
        showDetailForm(){
            this.showInstansiDetail = false
            this.showInstansiTable = false
            this.showDocumentDetail = true   
        },
        getDataDocument(value) {
            
            this.chooseDocument = value
            this.chooseDocument.nama_instansi = this.nama_instansi
            this.chooseDocument.id_instansi = this.id_instansi
            this.showDetailForm()
           
        },
        resetRangeYearRenja(){
            this.periode_renja_start =''
            this.periode_renja_end =''
            this.chooseRangeYear.start_year_renja =''
            this.chooseRangeYear.end_year_renja =''
            this.$refs.tablerenja.showAll(this.chooseInstansi.id)
        },
        resetRangeYear(){
            this.periode_renstra_start =''
            this.periode_renstra_end =''
            this.chooseRangeYear.start_year =''
            this.chooseRangeYear.end_year =''
            this.$refs.tablerenstra.showAll(this.chooseInstansi.id)
        },
        processRangeYearRenja(){
            this.chooseRangeYear.start_year_renja = this.customFormatter(this.periode_renja_start)
            this.chooseRangeYear.end_year_renja = this.customFormatter(this.periode_renja_end)
            this.$refs.tablerenja.showAll(this.chooseInstansi.id)
        },
        processRangeYear(){
            this.chooseRangeYear.start_year = this.customFormatter(this.periode_renstra_start)
            this.chooseRangeYear.end_year = this.customFormatter(this.periode_renstra_end)
            this.$refs.tablerenstra.showAll(this.chooseInstansi.id)
        },
        showEndYearRenja(){
            let date =  this.periode_renja_start
            this.periode_renja_end = new Date(new Date(date).setFullYear(new Date(date).getFullYear() + 1))
            this.$refs.endYearPickerRenja.showCalendar();
        },
        showEndYear(){
            let date =  this.periode_renstra_start
            this.periode_renstra_end = new Date(new Date(date).setFullYear(new Date(date).getFullYear() + 5))
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
            this.showDocumentDetail = value.showDocumentDetail

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
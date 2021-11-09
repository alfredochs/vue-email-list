Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        msj: "Benvenuto",
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emailContainer: [],
        emaiDaUrl: "",
        contatore: 0
    },
    methods: {
        generaEmail() {
            let tempContainer = [];

            for (let index = 0; index < 10; index++) {
                axios.get(this.url).then((ajaxResponse) => {

                    // ajaxResponse = risposta di axios alla chiamata ajax. E' un oggetto che contiene vari dati,
                    // tra cui la chiave "data", che conterrà la risposta ricevuta dal server.

                    this.contatore++;
                    const rispotaUrl = ajaxResponse.data;
                    this.emaiDaUrl = rispotaUrl.response;

                    tempContainer.push(this.emaiDaUrl);
                    if (this.contatore === 10) {
                        this.emailContainer = tempContainer;
                        console.log(this.contatore);
                    }

                });
            }

        }
    },
    mounted() {

        // for (let index = 0; index < 10; index++) {

        //     axios.get(this.url).then((ajaxResponse) => {

        //         // ajaxResponse = risposta di axios alla chiamata ajax. E' un oggetto che contiene vari dati,
        //         // tra cui la chiave "data", che conterrà la risposta ricevuta dal server.

        //         const rispotaUrl = ajaxResponse.data;
        //         this.emaiDaUrl = rispotaUrl.response;

        //         this.emailContainer.push(this.emaiDaUrl);
        //     });
        // }
    }
});
Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        msj: "Benvenuto",
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emailContainer: [],
        emaiDaUrl: "",
    },
    methods: {

    },
    mounted() {

        for (let index = 0; index < 10; index++) {

            axios.get(this.url).then((ajaxResponse) => {

                // ajaxResponse = risposta di axios alla chiamata ajax. E' un oggetto che contiene vari dati,
                // tra cui la chiave "data", che conterrà la risposta ricevuta dal server.

                const rispotaUrl = ajaxResponse.data;
                this.emaiDaUrl = rispotaUrl.response;

                this.emailContainer.push(this.emaiDaUrl);
            });
        }
    }
});
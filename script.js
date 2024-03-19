const { createApp } =Vue;

createApp({
  data() {
    return {
      //email: "ilaria@ciao.it",
      risposta:{
        data: {
          response: " ",
        }
      },
      emailList:[], //array per contenere gli indirizzi email generati
      title:'',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail' , //variabile apiUrl , nostro endpoint
    }
  },

  methods: {
    getApi() {
      axios.get(this.apiUrl)
        .then((risposta) => {
          console.log('DATI ARRIVATI', risposta.data);
          console.log(risposta.data);
          console.log('---->', risposta.data.response);
          this.emailList.push(risposta.data.response);
        })
        .catch(errore => {
          console.log('MESSAGGIO DI ERRORE');
          console.log(errore.message);
        })
    },
    generateEmails() {
      for (let i = 0; i < 10; i++) {
        this.getApi();
    }
  },
  },
  mounted() {
  //   this.getApi();
  //   console.log('qui sono prima dell\'arrivo dei dati');
  // },
    // Genera 10 indirizzi email all'avvio dell'applicazione
    this.generateEmails();
  }
}).mount('#app');



// data è il contenuto della risposta che DOBBIAMO SEMPRE (perche ogni volta è diverso) studiare perché non sappiamo prima come è fatto
// this.title diventa 'OK' se risposta.data.response === true
// this.title = risposta.data.success ? 'OK!' : 'NOOO!';
//this.email = risposta.data.response; //qui mi assicuro che ci sia coerenza semantico - logica



// methods: {
  //  funzione di chiamata
  //     getApi(){
  //       axios.get(this.apiUrl +`?min=${min}&max=${max}&items=${items}`)
  //       .then((risposta)=>{
  //         console.log(risposta);
  //       })
  //       .catch((errore)=>{
  //         console.log(errore);
  //       })
  //     }
  //   },
  // }).mount('#app')
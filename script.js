const { createApp } =Vue;

createApp({
  data() {
    return {
      
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail' , //variabile apiUrl , nostro endpoint
    }
  },
  methods: {
//  funzione di chiamata
    getApi(){
      axios.get(this.apiUrl +`?min=${min}&max=${max}&items=${items}`)
      .then((risposta)=>{
        console.log(risposta);
      })
      .catch((errore)=>{
        console.log(errore);
      })
    }
  },
}).mount('#app')


//   methods: {
//     getApi(){

//       axios.get(this.apiUrl) //qui richiamo con this l'apiUrl (endpoint)
//       .then((risposta)=>{
//         console.log('DATI ARRIVATI');
//         console.log(risposta.data);
//         // data è il contenuto della risposta che DOBBIAMO SEMPRE (perche ogni volta è diverso) studiare perché non sappiamo prima come è fatto
//         // if(risposta.data.response)
//         console.log('---->', risposta.data.response)
//         // this.title diventa 'OK' se risposta.data.response === true
//         this.title = risposta.data.response ? 'OK!' : 'NOOO!'
//       })
//       .catch(errore => {
//         console.log('MESSAGGIO DI ERRORE');
//         console.log(errore.message);

//       })
//     }
//   },
//   mounted() {
//     this.getApi();
//     console.log('qui sono prima dell\'arrivo dei dati')
//   },
// }).mount('#app')

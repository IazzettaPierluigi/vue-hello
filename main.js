//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Non voglio più vedere JS plain'
        }
    }
}).mount('#app')
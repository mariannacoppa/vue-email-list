const { createApp } = Vue;

createApp({
    data() {
        return {
            email: null,
            arrayResult: null
        }
    },
    methods: {
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                this.email = resp.data.response;
                console.log(this.arrayResult);
            });
        }
    }
}).mount('#app');
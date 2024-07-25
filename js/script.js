const { createApp } = Vue;

createApp({
    data() {
        return {
            email: null,
            mail: null
        }
    },
    methods: {
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                this.email = resp.data.response;
                console.log(this.email);
            });
        },
        getTenEmails() {
            for (let i = 0; i < 11; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.mail.push(resp.data.response);
                });
            }
        }
    }
}).mount('#app');
const { createApp } = Vue;

createApp({
    data() {
        return {
            email: null,
            emails: []
        }
    },
    methods: {
        getTenEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.emails.push(resp.data.response);
                    console.log(this.emails);
                });
            }
        }
    }
}).mount('#app');
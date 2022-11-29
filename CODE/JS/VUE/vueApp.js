let vueApp = Vue.createApp({
    data(){
        return{
            quotes,
        };
    },

    provide(){
        return{
            quotes: this.quotes,
        };
    },
});

vueApp.component(`page-header`,{
    template:`
        <header>
            <h1>{{title}}</h1>
            <p>{{desc}}</p>
        </header>
    `,

    props:[`title`,`desc`],
});

vueApp.component(`content-a`,{
    template:`
        <div class="content-a">
            <fieldset>
                <legend>اختر رقم</legend>
                <input type="number" min="0" :max="quotes.length - 1" v-model="userNumber">
            </fieldset>

            <fieldset>
                <legend> اختر لون الملاحظة</legend>
                <input type="color" v-model="color">
            </fieldset>

            <div>
                <p :style="{color:color}">{{alertN}}</p>
            </div>
        </div>
    `,

    data(){
        return{
            userNumber: 0,
            color: this.color,
        };
    },

    computed:{
        alertN(){
            return this.quotes[this.userNumber];
        }
    },

    inject:[`quotes`],

});

vueApp.mount(`#vueApp`);
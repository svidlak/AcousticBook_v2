<template>
    <div class="container">
        <div class="row padder">
            <div class="col-xs-6 text-center">
                <h1>Acoustic Book</h1>
                <h3>For Acoustics, by Acoustics...</h3>
            </div>

            <div class="col-xs-offset-2 col-xs-4 text-center">
                <transition name="flip" mode="out-in">
                    <app-login v-if="show" @changeView="show = !show" key="login"></app-login>
                    <app-register v-else @changeView="show = !show" key="register"></app-register>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'

export default {
    data(){
        return {
            show: true,
        }
    },
    components: {
        appLogin: Login,
        appRegister: Register
    },
    beforeCreate(){
        console.log(this.$cookie.get('token'));
        // redirect
    }

}
</script>

<style>
body{
    background-image: url('/src/assets/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
}

.regLogForm {
    /*height: 500px;*/
    background-color:rgba(0, 0, 0, 0.5);
}

.regLogForm div {
    padding: 0 50px
}

form{
    padding-top: 80px;
}

.padder{
    padding-top: 140px;
}

.flip-enter{
    /*transform: rotateY(0deg);*/
}

.flip-enter-active{
    animation: flip-in 0.5s ease-out forwards;
}

.flip-leave{
    /*transform: rotateY(0deg);*/
}

.flip-leave-active{
    animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out{
    from {
        transform: rotateY(0deg);
    }

    to{
        transform: rotateY(90deg);
    }
}

@keyframes flip-in{
    from {
        transform: rotateY(90deg);
    }

    to{
        ransform: rotateY(0deg);
    }
}
</style>

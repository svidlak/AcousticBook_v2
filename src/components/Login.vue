<template>
    <div class="regLogForm">
        <form>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" v-model="user.username">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" v-model="user.password">
            </div>
            <input type="button" value="Login Now" class="btn btn-success" @click.prevent="login">
        </form><br/><br/>

        <p>Not acoustic yet?</p>
        <a @click="changeView"><p>Register Now!</p></a><br/><br/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        changeView(){
            this.$emit('changeView')
        },
        login(){
            this.$http.get('https://acousticbook-34337.firebaseio.com/users.json').then(response => {
                return response.json();
            }).then( (resp)=>{
                let dbid = this.user.username;
                let replacer = dbid.replace("@", "AT");
                let corectid = replacer.replace(".", "DOT");
                let x = 0;
                for(var value in resp){
                    if(value == corectid){
                        for(var newvalue in resp[value]){
                            if(resp[value][newvalue].password1 == this.user.password){
                                this.$cookie.set('token', corectid, '1Y');
                            }
                        }
                    }
                }
            })
        }
    }
  
}
</script>

<style>
a:hover{
    cursor: pointer;
    text-decoration: none; 
}
</style>

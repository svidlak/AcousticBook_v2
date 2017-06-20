<template>
    <div class="regLogForm">
        <form>
            <div class="form-group">
                <label for="fname">First Name:</label>
                <input type="text" class="form-control" id="fname" v-model="newUserData.fname">
            </div>
            <div class="form-group">
                <label for="lname">Last Name:</label>
                <input type="text" class="form-control" id="lname" v-model="newUserData.lname">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" v-model="newUserData.email">
            </div>
            <div class="form-group">
                <label for="dob">Birth Date:</label>
                <input type="date" class="form-control" id="dob" v-model="newUserData.dob">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" v-model="newUserData.password1">
            </div>
            <div class="form-group">
                <label for="pwd2">Confirm Password:</label>
                <input type="password" class="form-control" id="pwd2" v-model="newUserData.password2">
            </div>
            <input type="button" value="Register" class="btn btn-success" @click.prevent="register">
        </form>
        <p>Have account already?</p>
        <a @click="changeView"><p>Login Now!</p></a><br/><br/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newUserData: {
                fname: '',
                lname: '',
                email: '',
                dob: '',
                password1: '',
                password2: '',
            },
        }
    },
    methods: {
        changeView(){
            this.$emit('changeView')
        },
        register(){
            if(this.newUserData.password1 != this.newUserData.password2){
                console.log('passwords dont match')
                return;
            }

            let dbid = this.newUserData.email;
            let replacer = dbid.replace("@", "AT");
            let corectid = replacer.replace(".", "DOT");
           
            this.$http.post('https://acousticbook-34337.firebaseio.com/users/'+corectid+'.json', this.newUserData).then(response => {
                this.$cookie.set('token', corectid, '1Y');
                
            }, error => {
                console.log(error);
            })
        }
    }
}
</script>

<template>
    <div class="reference">
        <div class="ref-header">
            <i class="fas fa-terminal fa-4x"></i>
            <h2>{{headerTitle}}</h2>
        </div>
        <div class="ref-detail">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="(refree, ref) in contacts" v-bind:key="ref">
                    <div class="card">
                        <img v-bind:src="require(`../assets/${refree.picture}.png`)" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ refree.firstName }} {{ refree.lastName }}</h5>
                            <p class="card-text">
                                <i class="fa fa-mobile" aria-hidden="true"></i><span class="person">{{ refree.phone }}</span><br />
                                <i class="fa fa-envelope" aria-hidden="true"></i><span class="person">{{ refree.email }}</span>
                            </p>
                            <button type="button" class="btn" @click="getRefreeEmail(refree)">Ask {{ refree.firstName }}!</button>
                        </div>
                    </div>
                </div>
                <div class="modal" id="emailPopup">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{{popUpTitle}}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="exit()"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-2">
                                        <label for="fromEmail" class="form-label">From Email</label>
                                        <input type="email" class="form-control form-control-sm" id="fromEmail" v-bind:value="from_email" v-bind:disabled="email_disabled">
                                    </div>
                                    <div class="mb-2">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" class="form-control form-control-sm" id="name" v-bind:value="from_name">
                                    </div>
                                    <div class="mb-2">
                                        <label for="toEmail" class="form-label">To Email</label>
                                        <input type="email" class="form-control form-control-sm" id="toEmail" v-bind:value="refree">
                                    </div>
                                    <div class="mb-1">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea class="form-control" id="message" rows="3" v-model="email_content"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary" @click="sendEmail()">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReferenceJson from '../assets/jsonfiles/reference.json'

export default {
    name: "Reference",
    data() {
        return {
            headerTitle: "Reference",
            popUpTitle: "Send Email",
            yest: [
                {
                    firstName: "Wendy",
                    lastName: "Lim",
                    phone: "0131212345",
                    email: "wendy@test.com",
                    picture: "ronaldo"
                },
                {
                    firstName: "Geok Moi",
                    lastName: "Chua",
                    phone: "0131212345",
                    email: "jeggy05@gmail.com",
                    picture: "messi"
                },
                {
                    firstName: "Priya",
                    lastName: "Kanesan",
                    phone: "0131212345",
                    email: "priya@test.com",
                    picture: "mbappe"
                }
            ],
            contacts: ReferenceJson,
            refree: null,
            from_email: null,
            from_name: null,
            email_disabled: true,
            error: null,
            email_content: ""
        }
    },
    methods: {
       getRefreeEmail: function(person){
           this.getClientConfirmation(person.firstName);
           this.refree = person.email;
       },
       getClientConfirmation: async function(name){
           var allowGoogleLogin = confirm("In order to ask you may need to sign in to your Google Account, are you sure?");
           if(allowGoogleLogin){
               await this.clientLogin();
               if(this.from_email != null){
                   window.$('#emailPopup').modal('show');
               } else {
                   alert("I think your login to Google Account is failed due to error " + this.error +" therefore you may call "+ name + " directly");
               }
           } else {
               alert("You may directly contact "+ name);
           }
       },
       clientLogin: async function(){
           // need to use async and await to grab the value of promise and parked it under a variable
            var userSignedIn  = await this.$gapi.isSignedIn().then((value) => { return value; });

            if(userSignedIn){
                var granted = await this.checkgrantedScopes();
                if(!granted.getGrantedScopes().includes("email profile")){
                    this.$gapi.grant({
                        scope: 'https://mail.google.com/'
                    }).then((value) => { return value; }).catch((error) => { this.error = error.error; });
                }
            } else {
                await this.$gapi.login().then((value) => { userSignedIn = true; return value; }).catch((error) => { this.error = error.error; });
            }

            var user = await this.fetchCurrentUserData();
            console.log(userSignedIn);
            if(user != null && userSignedIn){
                this.from_email = user.getEmail();
                this.from_name = user.getName();
            }
       },
       checkgrantedScopes: async function(){
           var granted = await this.$gapi.grant().then((value) => { return value; }).catch((error) => { this.error = error.error; });
           return granted;
       },
       fetchCurrentUserData: async function(){
           var current_user = await this.$gapi.getCurrentUser().then((value) => { return value; }).catch((error) => { this.error = error.error; });

           return current_user.getBasicProfile();
       },
       sendEmail: async function(){
           var message = "From: "+this.from_email+"\r\n" +
           "To: "+this.refree+"\r\n" +
           "Subject: Possible future candidate inquiry from Referral\r\n\r\n" + this.email_content ;

           var encodedMessage = btoa(message);

           var gapiClient = await this.$gapi.getGapiClient().then((value) => { return value; }).catch((error) => { return error.error; });
            // need to handle when gapiClient variable have error instead of gapi object
           gapiClient.client.request({
               'path': 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
               'method': 'POST',
               'headers': {
                   'Content-Type' : 'application/json'
               },
               'body': {
                   'raw': encodedMessage
               }
           }).then(() => { return this.closePopUp(true); }).catch((error) => { return this.closePopUp(false, error.result.error.status); });
       },
       closePopUp: function(success, message=null){
           if(success){
               alert("Your email is successfully sent! You may cross check your inbox");
           } else {
               alert("Your email is failed to send due to "+ message);
           }

           this.exit();
       },
       exit: function(){
           window.$('#emailPopup').modal('hide');
           this.from_email = null;
           this.from_name = null;
           this.email_content= "";
       }
    }
}
</script>


<style scoped>

h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 90px;
    display: inline-block;
    margin-left: 20px;
    color: white;
}

button {
    background-color: #c0e218;
    display: block;
    margin: 0 auto;
    color: #1b1717;
}

button:hover {
    background-color: #0d6efd;
    color: #fff;
}

.reference {
    background-color: #1b1717;
    padding: 20px 0;
}

.ref-header {
    padding: 0 20px 20px 20px;
    text-align: center;
}

.fa-terminal {
    color: #c0e218;
}

.ref-detail {
    margin: 3% 5% 0;
}

.card {
    border-width: 0;
    background-color: #1b1717;
    color: #fffbdf;
}

.card-title {
    text-align: center;
}

.card-text {
    padding: 10px 80px;
    line-height: 1.2;
}

.card-img-top {
    height: 100px;
    width: 100px;
    margin: auto;
    border: 2px solid #c0e218;
    border-radius: 50%;
}

.fa-mobile {
    width: 16px;
}

.person {
    margin-left: 25px;
}

.btn-close, .btn-close:hover {
    background-color: transparent;
}

</style>

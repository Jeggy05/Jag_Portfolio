<template>
    <div class="contact">
        <div class="contact-header">
            <i class="fas fa-terminal fa-4x"></i>
            <h2>{{title}}</h2>
        </div>
        <div class="contact-detail">
            <div class="main-container">
                <h3>{{textOne}}</h3>
                <small class="text-muted">{{textTwo}}</small>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="" target="_self"><i class="fas fa-envelope fa-2x"></i><p>jeggy05@gmail.com</p></a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/Jeggy05" target="_blank"><i class="fab fa-github fa-2x"></i><p>Jeggy05</p></a>
                    </div>
                    <div class="col">
                        <a href="https://www.instagram.com/jag_birz1107/?hl=en" target="_blank"><i class="fab fa-instagram fa-2x"></i><p>Birz1107</p></a>
                    </div>
                    <div class="col">
                        <a href="https://my.linkedin.com/in/jagbir-singh-1a4001154" target="_blank"><i class="fab fa-linkedin fa-2x"></i><p>Jagbir</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Contact",
            textOne: "Would you like to know more about me?",
            textTwo: "Let's get in touch!"
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
}

a {
    padding: 10px 15px;
    font-family: 'Acme', sans-serif;
    font-size: 1em;
    text-decoration: none;
    color: inherit;
}

h3 {
    font-size: 1em;
}

p {
    margin-left: 10%;
}

.contact {
    background-color: #fffbdf;
    padding: 20px 0;
}

.contact-header {
    padding: 0 20px 20px 20px;
    text-align: center;
}

.fa-terminal {
    color: #c0e218;
}

.contact-detail {
    margin: 0 5%;
}

.main-container {
    margin-bottom: 10%;
    text-align: center;
    font-size: 3em;
}

.container {
    width: 50%;
    margin-bottom: 20px;
}

.col {
    text-align: center;
    color: #bb371a;
}

.col:hover {
    color: #c0e218;
    cursor: pointer;
}
</style>
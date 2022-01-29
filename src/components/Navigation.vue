<template>
    <div class="navigation">
        <img src="../assets/Jag_Birz.png" alt="Jagbir's picture">
        <nav class="container-fluid">
            <div class="navbar">
                <span class="navbar-brand mb-0 h1"><span class="alpha">ℑ</span>agbir Singh Wander</span>
                <ul class="nav-item">
                    <li><a href="#">Home</a></li>
                    <li><a v-on:click="navigate('education')" href="#education">Education</a></li>
                    <li><a v-on:click="navigate('experience')" href="#experience">Experience</a></li>
                    <li><a v-on:click="navigate('skills')" href="#skills">Skills</a></li>
                    <li><a v-on:click="navigate('reference')" href="#reference">Reference</a></li>
                    <li><a v-on:click="navigate('contact')" href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div class="intro">
            <p>Hello, I'm <span>Jagbir!</span></p>
            <p>I'm a <span>QA Engineer</span> but passionate about development</p>
            <!--<p><span>Never underestimate a person that is determined to learn even if he have no qualification</span></p>-->
        </div>
        <figure class="text-center">
            <blockquote class="blockquote">
                <p>Never underestimate a person that is determined to learn.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Jagbir
            </figcaption>
        </figure>
        <i class="las la-star star-one"></i>
        <i class="las la-star star-two"></i>
        <i class="las la-star star-three"></i>
        <i class="las la-star star-four"></i>
        <i class="las la-star star-five"></i>
        <i class="las la-star star-six"></i>
    </div>
</template>

<style scoped>

li {
    display: inline;
    padding: 12px;
}

a {
    color: white;
    text-decoration: none;
}

a:hover{
    color: #c0e218;
}

span {
    color: #c0e218;
    font-style: bold;
}

img {
    position: absolute;
    top: 10%;
    left: 55%;
    width: 45%; /* 600px */
    height: 90%;
    opacity: 0.7;
}

p {
    line-height: 1.2em;
}

figure {
    color: white;
    position: absolute;
    bottom: 5%;
    left: 18%;
}

blockquote {
    font-size: 1em;
}

.navigation{
    background-color: #1b1717;
    padding-bottom: 45%;
    padding-top: 2%;
    position: relative;
}

/* #5b6d5b */
.navbar {
    margin: 1% 0;
}

.container-fluid {
    position: fixed;
    top: 0;
}

.container-fluid.scrolled {
    background-color: #1b1717;
    z-index: 1;
    border-bottom: 2px #c0e218 solid;
}

.navbar-brand{
    margin-left: 5%;
    font-family: 'Unlock', cursive;
    color: white;
}

.nav-item{
    margin-right: 10%;
}

.intro{
    width: 35%;
    height: 15%;
    position: absolute;
    top: 200px;
    left: 200px;
    font-family: 'Karantina', cursive;
    font-size: 3rem;
    color:whitesmoke;
}

.name {
    font-size: 1.3rem;
}

.alpha {
    font-size: 2.2rem;
    font-weight: bold;
}

.la-star{
    color: #c0e218;
    position: absolute;
}

.star-one{
    left: 10%;
    top: 20%;
}

.star-two{
    left: 50%;
    top: 30%;
}

.star-three{
    left: 70%;
    bottom: 70%;
}

.star-four{
    left: 60%;
    bottom: 40%;
}

.star-five{
    left: 40%;
    bottom: 20%;
}

.star-six{
    left: 5%;
    bottom: 10%;
}
</style>

<script>
import $ from 'jquery'

export default {
    name: 'Navigation',
    methods: {
        scroll: function(){
            $(window).scroll(function(){
                $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
            });
        },
        navigate: function(section){
            var sec = "."+section;
            var location = $(sec).offset().top-65;
            window.scrollTo(0, location);
        }
    },
    mounted() {
        document.addEventListener('scroll', this.scroll);
    }
}
</script>

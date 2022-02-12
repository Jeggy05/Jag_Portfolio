<template>
    <div class="experience">
        <div class="exp-header">
            <i class="fas fa-terminal fa-4x"></i>
            <h2>{{headerTitle}}</h2>
        </div>
        <div class="exp-detail">
            <a v-on:click="previousSlide"><i class="fas fa-chevron-left fa-4x"></i></a>
            <transition-group :name="back? 'slideback' : 'slide'" tag="div">
            <div class="exp" v-for="n in experience.length" v-bind:key="n" v-show="experience[n-1].visible">
                <p class="img"><img v-bind:src="require(`../assets/${experience[n-1].pictureName}.png`)" alt="Abss logo"></p>
                <p><span class="exp-line">Company:</span> {{experience[n-1].company}}</p>
                <p><span class="exp-line">Year:</span> {{experience[n-1].year}}</p>
                <p><span class="exp-line">Industry:</span> {{experience[n-1].industry}}</p>
                <p><span class="exp-line">Position:</span> {{experience[n-1].position}}</p>
                <p><span class="exp-line">Responsibilities:</span> </p>
                <div>
                    <ol>
                        <li v-for="a in 1" v-bind:key="a">{{experience[n-1].responsibilities[a-1]}}</li>
                    </ol>
                    <a type="button" class="btn btn-link" data-toggle="modal" data-target="#experienceModalCenter" v-if="show_exp" v-on:click="show_exp=!show_exp">
                        See more...
                    </a>
                </div>
            </div>
            </transition-group>
            <a v-on:click="nextSlide"><i class="fas fa-chevron-right fa-4x"></i></a>
        </div>
        <div class="modal fade" id="experienceModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{{popUpTitle}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" v-on:click="show_exp=!show_exp">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <li v-for="b in experience[slide].responsibilities.length" v-bind:key="b">{{experience[slide].responsibilities[b-1]}}</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 90px;
    display: inline-block;
    margin-left: 20px;
    color: white;
}

a:hover {
    cursor: pointer;
}

ol {
    margin-bottom: 0;
}

p {
    line-height: 0.8em;
}

img {
    width: 15%;
    height: 45px;
}

.img {
    text-align: right;
}

.experience {
    width: 100%;
    height: 590px;
    padding: 20px 0;
    background-color: #1b1717;
}

.exp-header {
    padding: 0 20px 20px 20px;
    margin-left: 30%;
}

.exp-detail {
    position: relative;
    height: 350px;
}

.fa-terminal {
    color: #c0e218;
}

.fa-chevron-left {
    position: absolute;
    top: 40%;
    left: 10%;
    color: #c0e218;
}

.exp {
  background-color: #fffbdf;
  width: 50%;
  border: 2px solid #c0e218;
  display: inline-block;
  padding: 50px;
  position: absolute;
  left: 25%;
}

.exp-line {
    font-weight: bold;
    font-size: 1.1rem;
}

.fa-chevron-right {
    width: 10%;
    position: absolute;
    top: 40%;
    right: 10%;
    color: #c0e218;
}

.modal-title {
    color:#c0e218;
    font-family: 'Unlock', cursive;
}

.modal-header {
    background-color: #1b1717;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
  transition: 1s;
}
.slideback-enter {
  transform: translate(-100%, 0);
}
.slideback-leave-to {
  transform: translate(100%, 0);
}

</style>

<script>
import $ from 'jquery'
import ExperienceJson from '../assets/jsonfiles/experience.json'

export default {
    name: 'Experience',
    data() {
        return {
            headerTitle: "Experience",
            popUpTitle: "Experience Details",
            show_exp: true,
            slide: 0,
            back: false,
            experience: ExperienceJson
        }
    },
    methods: {
        nextSlide: function(){
            this.back = false;
            $('a').hide();
            this.experience[this.slide].visible = false;
            if(this.slide == this.experience.length-1)
            {
                this.slide = 0;
            }
            else
            {
                this.slide++;
            }
            $('a').fadeIn(3000);
            this.experience[this.slide].visible = true;
        },
        previousSlide: function(){
            this.back = true;
            $('a').hide();
            this.experience[this.slide].visible = false;
            if(this.slide == 0)
            {
                this.slide = this.experience.length-1;
            }
            else
            {
                this.slide--;
            }
            $('a').fadeIn(3000);
            this.experience[this.slide].visible = true;
        },
        olla: function(x){
            console.log(x);
        }
    }
}

</script>

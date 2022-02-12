<template>
    <div class="education">
        <div class="edu-header">
            <i class="fas fa-terminal fa-4x"></i>
            <h2>{{ headerTitle }}</h2>
        </div>
        <div class="edu-detail">
            <div class="line-head"></div>
            <p class="year">{{ yearsOfEducation[0] }}</p>
            <div class="line"></div>
            <p class="year">{{ yearsOfEducation[1] }}</p>
            <div class="line"></div>
            <p class="year">{{ yearsOfEducation[2] }}</p>
            <div class="line-head"></div>
            <div :class="[css.card, css.animate, educations[list-1].type]" v-for="list in educations.length" v-bind:key="list">
                <div class="card-body">
                    <h5 class="card-title">{{ educations[list-1].title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ educations[list-1].place }}</h6>
                    <p class="card-text">{{ educations[list-1].description }}</p>
                    <a type="button" class="btn btn-link" data-toggle="modal" data-target="#educationModalCenter" v-on:click="showEduDetails(list-1)">
                        Click here to see more...
                    </a>
                </div>
            </div>
            <!--<div class="card spm animate__animated" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">Sijil Pelajaran Malaysia</h5>
                    <h6 class="card-subtitle mb-2 text-muted">SMK Cheras Jaya</h6>
                    <p class="card-text">I manage to get 8A 2B in my SPM and been the best student of year 2010</p>
                    <a type="button" class="btn btn-link" data-toggle="modal" data-target="#educationModalCenter" v-on:click="showEduDetails(1)">
                        Click here to see more...
                    </a>
                </div>
            </div>
            <div class="card diploma animate__animated" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">Diploma In Aeroplane Engineering</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Admal Aviation College</h6>
                    <p class="card-text">My CGPA was 3.74 and I have been listed in Dean List twice in my entire diploma journey!</p>
                    <a type="button" class="btn btn-link" data-toggle="modal" data-target="#educationModalCenter" v-on:click="showEduDetails(2)">
                        Click here to see more...
                    </a>
                </div>
            </div>-->
        </div>
        <div class="modal fade" id="educationModalCenter" tabindex="-1" role="dialog" aria-labelledby="education" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="educationDetails">{{popUpTitle}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <li v-for="list in edu_details.length" v-bind:key="list">{{edu_details[list-1]}}</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'Education',
    data() {
        return{
            headerTitle: "Education",
            popUpTitle: "Awards & Achievements",
            show_edu: false,
            yearsOfEducation: [2008, 2010, 2014],
            css: {
                card: "card",
                animate: "animate__animated"
            },
            achievements: [
                {
                    details: [
                        "AWARD OF EXCELLENCE IN MID-YEAR EXAMINATION – Top Student In History Subject Form 3"
                    ]
                },
                {
                    details: [
                        "AWARD OF EXCELLENCE IN FINAL YEAR EXAMINATION - 1st Place in 4 Bestari",
                        "AWARD OF EXCELLENCE IN FINAL YEAR EXAMINATION – Top Student In Additional Mathematics Subject Form 4",
                        "AWARD OF EXCELLENCE IN SPM 2010 – 8A’s"
                    ]
                },
                {
                    details: [
                        "CEO AWARD OF ADMAL AVIATION COLLEGE"
                    ]
                }
            ],
            edu_details: [],
            educations: [
                {
                    type: "pmr",
                    title: "Penilaian Menengah Rendah",
                    place: "SMK Cheras Jaya",
                    description: "I manage to get 3A 3B 1C in my PMR result"
                },
                {
                    type: "spm",
                    title: "Sijil Pelajaran Malaysia",
                    place: "SMK Cheras Jaya",
                    description: "I manage to get 8A 2B in my SPM and been the best student of year 2010"
                },
                {
                    type: "diploma",
                    title: "Diploma In Aeroplane Engineering",
                    place: "Admal Aviation College",
                    description: "My CGPA was 3.74 and I have been listed in Dean List twice in my entire diploma journey!"
                }
            ]
        }
    },
    methods: {
        isScrolledIntoView: function (elem){
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        },
        cardMove: function(){
            var a = document.getElementsByClassName('animate__animated');
            [...a].forEach(element => {
                if(this.isScrolledIntoView(element)){
                    $(element).addClass('animate__shakeX');
                }
                else {
                    $(element).removeClass('animate__shakeX');
                }
            });
        },
        showEduDetails: function(num){
            this.edu_details = this.achievements[num].details;
        }
    },
    mounted() {
        document.addEventListener('scroll', this.cardMove);
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

.education {
    width: 100%;
    padding: 20px 0;
    background-color: #fffbdf;
}

.edu-header {
    padding: 0 20px 20px 20px;
    margin-left: 30%;
}

.fa-terminal {
    color: #c0e218;
}

.edu-detail{
    position: relative;
}

.line-head {
    border-left: 2px solid black;
    height: 80px;
    width: 5px;
    margin: 0 auto;
}

.line {
    border-left: 2px solid black;
    height: 150px;
    width: 5px;
    margin: 0 auto;
}

.year {
    display: block;
    width: 30px;
    margin: 10px auto;
}

.card {
    background-color: #1b1717;
    color: white;
    position: absolute;
    width: 25rem;
}

.pmr {
    top: 20px;
    left: 15%;
}

.spm {
    top: 200px;
    right: 15%;
}

.diploma {
    bottom: 0;
    left: 15%;
}

</style>



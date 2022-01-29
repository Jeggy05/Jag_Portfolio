<template>
    <div class="skills">
        <div class="skills-header">
            <i class="fas fa-terminal fa-4x"></i>
            <h2>Skills</h2>
        </div>
        <div class="skills-detail">
            <div class="container" v-for="n in skills.length" v-bind:key="n">
                <Progressbar v-bind:percentage="skills[n-1].percentage" v-bind:label="skills[n-1].name" v-bind:skills="skills"></Progressbar>
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
}

.skills {
    background-color: #fffbdf;
    padding: 20px 0;
}

.skills-header {
    padding: 0 20px 20px 20px;
    text-align: center;
}

.fa-terminal {
    color: #c0e218;
}

.skills-detail {
    margin: 0 10% 0 10%;
}

.container {
  width: 50%;
  height: 90px;
  display: inline-grid;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
}
</style>

<script>
import Progressbar from './Progressbar'
import SkillsJson from '../assets/jsonfiles/skills.json'

export default{
    name: 'Skills',
    components: {
        Progressbar
    },
    data() {
        return {
            yests: [
                {
                    name: "HTML",
                    percentage: 30
                },
                {
                    name: "CSS",
                    percentage: 50
                },
                {
                    name: "JAVASCRIPT",
                    percentage: 60
                },
                {
                    name: "PHP",
                    percentage: 60
                },
                {
                    name: "C#",
                    percentage: 60
                },
                {
                    name: "SQL",
                    percentage: 75
                },
                {
                    name: "SELENIUM",
                    percentage: 85
                }
            ],
            skills: SkillsJson
        }
    }
}
</script>

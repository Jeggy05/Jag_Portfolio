<template>
    <div class="progress-bar">
        <div class="info">
            <label class="label">{{label}}</label>
            <p class="percentage">{{percentage}}%</p>
        </div>
        <div class="background-bar"></div>
        <transition appear @before-appear="beforeEnter" @after-appear="enter">
            <div class="tracker-bar"></div>
        </transition>
    </div>
</template>

<style lang="scss">
$greydark: #c0cac9;
$black: #333;
$screen: #eff3f4;
$pink:  #ff298a;
$grey: #dedfe0;

.active {
  label {
    color: $pink !important;
  }
  .tracker-bar {
    background: $pink !important;
  }
}
.progress-bar {
  width: 100%;
  background-color: #fffbdf;
  label {
    color: #1b1717;
    font-weight: bolder;
  }
  .info {
    font-size: 17px;
    justify-content: space-between;
    display: flex;
    color: #1b1717;
    text-transform: uppercase;
    .percentage {
      font-weight: bolder;
    }
  }
  .background-bar {
    background: #1b1717;
    width: 100%;
    height: 5px;
  }

  .tracker-bar {
    background: #c0e218;
    height: 5px;
    width: 0;
    transition: width 0.5s linear;
    margin-top: -5px;
  }
}
</style>

<script>
import $ from 'jquery'

export default {
    name: 'Progressbar',
    props: {
        percentage: Number,
        label: String,
        skills: Array
    },
    methods: {
        beforeEnter(el){
            el.style.width = 0;
        },
        enter(el, num){
          el.style.width = `${num}%`;
          el.style.transition = `width 1s linear`
        },
        isScrolledIntoView(elem){
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        },
        move(){
          var b = document.getElementsByClassName('tracker-bar');
          //var c = document.getElementsByClassName('percentage'); c[i].innerText;
          
          for(var i=0; i < b.length; i++)
          {
            this.performAnimation(b[i], this.skills[i].percentage);
          }
        },
        performAnimation(ele, num){
          if(this.isScrolledIntoView(ele)){
              this.enter(ele, num);
          } else {
            this.beforeEnter(ele);
          }
        }
    },
    mounted() {
      document.addEventListener('scroll', this.move);
    }
}
</script>

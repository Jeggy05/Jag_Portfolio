<template>
  <div id="app">
    <Navigation></Navigation>
    <Education></Education>
    <Experience></Experience>
    <Skills></Skills>
    <References></References>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import References from './components/References.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Education,
    Experience,
    Skills,
    References,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  scroll-behavior: smooth;
}
</style>

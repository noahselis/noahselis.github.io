<template>
  <NavBar />
  <Jumbotron />
  <CTA />
  <Cards />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Jumbotron from "./components/Jumbotron.vue";
import CTA from "./components/CTA.vue";
import Cards from "./components/Cards.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Jumbotron,
    CTA,
    Cards,
    Footer,
  },
};
</script>

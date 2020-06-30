<template>
  <div id="app">
    <Loader v-if="showLoader" />
    <Navbar />
    <router-view class="container" @onAsync="val => (showLoader = val)" />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
export default {
  components: { Navbar, Footer, Loader },
  data() {
    return {
      showLoader: false
    };
  }
};
</script>
<style lang="scss">
@import "@/scss/_tokens.scss";

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f4f4;
}

.container {
  height: 100%;
  padding: $spacing-large 10% 0;
}
</style>

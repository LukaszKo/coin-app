<template>
  <div id="app">
    <Navbar />
    <router-view class="container" />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: { Navbar, Footer }
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

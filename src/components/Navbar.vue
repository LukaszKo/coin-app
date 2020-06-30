<template>
  <nav>
    <router-link tag="a" to="/?page=1" v-slot="{ navigate, href }">
      <a :href="href">
        <img
          class="mr-3"
          @click="navigate"
          src="../assets/logo.png"
          alt="left arrow"
        />
      </a>
    </router-link>
    <router-link v-for="item in menu" :key="item.label" :to="item.to">
      {{ item.label }}
    </router-link>
  </nav>
</template>
<script>
import { menu } from "@/constants.js";
export default {
  data() {
    return {
      menu
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/_tokens.scss";

$navbarHeight: 50px;

nav {
  height: $navbarHeight;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 $spacing-large;

  img {
    margin-right: $spacing-large;
  }

  a {
    color: #fff;
    padding: $spacing-medium;
    margin: 0 $spacing-medium;
    text-decoration: none;

    &.router-link-active {
      color: #fff;
      border-bottom: $spacing-x-small solid white;
    }

    &:hover {
      color: #36c7e6;
    }
  }
}
</style>

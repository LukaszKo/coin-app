<template>
  <footer>
    <img class="mr-3" src="../assets/footerLogo.png" alt="footer" />
    <div class="links">
      <router-link
        class="links__item"
        v-for="item in menu"
        :key="item.label"
        :to="item.to"
      >
        {{ item.label | uppercase }}
      </router-link>
    </div>
  </footer>
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
<style lang="scss">
@import "@/scss/_tokens.scss";

footer {
  display: flex;
  justify-content: space-between;
  padding: $spacing-large 10%;
}

.links {
  &__item {
    margin: 0 $spacing-medium;
    color: #a9aaac;
    text-decoration: none;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: #36c7e6;
    }
  }
}
</style>

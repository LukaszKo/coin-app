<template>
  <div>
    <Header>
      <router-link tag="a" to="/" v-slot="{ navigate, href }">
        <a :href="href">
          <img
            class="mr-3"
            @click="navigate"
            src="../assets/left-arrow.png"
            alt="left arrow"
          />
        </a>
      </router-link>
    </Header>
    <div class="content">
      <div class="content__logo">
        <img
          class="content__logo__img mr-3"
          src="../assets/icon.png"
          alt="icon"
        />
        <div class="">
          <div>
            <span class="strong">{{ item.name | uppercase }}</span>
            {{ item.symbol }}
          </div>
          <img class="mr-3" src="../assets/star.png" alt="star" />
        </div>
      </div>
      <div class="content__table"></div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  props: ["id"],
  components: { Header },
  data() {
    return {
      item: {}
    };
  },
  async created() {
    const { data } = await axios.get(`tickers/${this.id}`);
    this.item = data;
  }
};
</script>
<style lang="scss">
@import "@/scss/_tokens.scss";

.content {
  min-height: 70vh;
  margin: $spacing-large 0;

  &__text {
    display: flex;
  }

  &__logo {
    display: flex;

    &__img {
      width: 100px;
      height: 100%;
    }
  }
}
</style>

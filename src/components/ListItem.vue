<template>
  <div class="item" @click="$emit('click')">
    <div class="item__col item__col--with-icon">
      <img class="mr-3" src="../assets/star.png" alt="star" />
      <img class="mr-3" src="../assets/icon.png" alt="icon" />
      <div class="item__col__title">
        <span class="strong">{{ item.name | uppercase }}</span>
        <span class="mt-2">{{ item.symbol | uppercase }}</span>
      </div>
    </div>
    <div class="item__col strong">
      {{ item.quotes.USD.price | fixed(3) | currency }}
    </div>
    <div class="item__col">{{ item.quotes.BTC.price }}</div>
    <div class="item__col">{{ item.quotes.ETH.price }}</div>
    <div class="item__col">
      {{ item.quotes.USD.market_cap }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_tokens.scss";

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 10px 0;

  @include breakpoint-down(sm) {
    display: block;
  }

  &__col {
    flex: 1;
    padding: $spacing-x-small;

    &__title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &--with-icon {
      display: flex;
      align-items: center;
    }
  }
}
</style>

<template>
  <div class="table__content__item" @click="$emit('click')">
    <div class="table__content__col table__content__col--with-icon">
      <img class="mr-3" src="../assets/star.png" alt="star" />
      <img class="mr-3" src="../assets/icon.png" alt="icon" />
      <div class="d-flex">
        <span class="strong">{{ item.name | uppercase }}</span>
        <span class="mt-2">{{ item.symbol | uppercase }}</span>
      </div>
    </div>
    <div class="table__content__col strong">
      {{ item.quotes.USD.price | fixed(3) | currency }}
    </div>
    <div class="table__content__col">{{ item.quotes.BTC.price }}</div>
    <div class="table__content__col">{{ item.quotes.ETH.price }}</div>
    <div class="table__content__col">
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

.table {
  &__content {
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background-color: white;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      margin: 10px 0;
    }
    &__col {
      flex: 1;
      padding: $spacing-x-small;

      &--with-icon {
        display: flex;
        align-items: center;
      }
    }
  }
}

.d-flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

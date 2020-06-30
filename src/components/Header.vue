<template>
  <div class="header">
    <slot />
    <div class="searchbox">
      <SearchInput placeholder="Search" />
      <img src="../assets/search.png" />
    </div>
  </div>
</template>
<script>
import SearchInput from "@/components/SearchInput";
export default {
  components: { SearchInput }
};
</script>
<style lang="scss" scoped>
@import "@/scss/_tokens.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.searchbox {
  display: flex;

  img {
    margin-left: $spacing-small;
  }
}
</style>

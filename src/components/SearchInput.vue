<template>
  <input :value="value" @input="$emit('input', $event.target.value)" />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/_tokens.scss";

input {
  outline: none;
  border: none;
  padding: $spacing-small $spacing-medium;
  color: #bfbfc0;
}
</style>

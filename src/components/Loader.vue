<template>
  <div class="linear-activity">
    <div class="indeterminate"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/_tokens.scss";

.linear-activity {
  overflow: hidden;
  width: 100%;
  height: $spacing-x-small;
  background-color: #b3e5fc;
}

.indeterminate {
  position: relative;
  width: 100%;
  height: 100%;
}

.indeterminate:before {
  content: "";
  position: absolute;
  height: 100%;
  background-color: #03a9f4;
  animation: indeterminate_first 1.5s infinite ease-out;
}

.indeterminate:after {
  content: "";
  position: absolute;
  height: 100%;
  background-color: #4fc3f7;
  animation: indeterminate_second 1.5s infinite ease-in;
}

@keyframes indeterminate_first {
  0% {
    left: -100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
}

@keyframes indeterminate_second {
  0% {
    left: -150%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
}
</style>

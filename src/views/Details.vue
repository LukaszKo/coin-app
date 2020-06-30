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
    <section class="panel" v-if="!isFetching">
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
          <div>Fav this icon</div>
          <div>Digital Currency</div>
          <div>Anonymity</div>
        </div>
      </div>
      <div class="content__list">
        <div class="content__list__grid">
          <div class="strong">
            {{ item.quotes.USD.price | currency }} USD
            <span class="text-color--green">(+10,85%)</span>
          </div>
          <div class="text-color--red strong">-23.3%</div>
          <div class="text-color--red strong">-0.3%</div>
          <div class="text-color--red strong">-27%</div>
          <div class="text-color--green strong">+92%</div>
          <div class="text-color--green strong">+678%</div>
          <div>
            0.000000069 BTC
            <span class="text-color--red">(-92.23%)</span>
          </div>
          <div class="text-color--red strong">-43.4%</div>
          <div class="text-color--green strong">+17%</div>
          <div class="text-color--green strong">+0.7%</div>
          <div class="text-color--green strong">+47%</div>
          <div class="text-color--green strong">+2 687%</div>
          <div>0.000023 ETH <span class="text-color--green">(+0.1%)</span></div>
          <div class="text-color--red strong">-23.3%</div>
          <div class="text-color--red strong">-0.3%</div>
          <div class="text-color--red strong">-27%</div>
          <div class="text-color--green strong">+17%</div>
          <div class="text-color--green strong">+1 687%</div>
        </div>
      </div>
    </section>
    <section class="panel">
      <div>
        <div>Coin details</div>
        <div class="panel__details">
          <span>Started</span>
          <span>2017 Jan 09</span>
          <span>Working product</span>
          <span>yes</span>
          <span>Org. Structure</span>
          <span>Centralized</span>
          <span>Transactions(24h)</span>
          <span>20</span>
          <span>Proof Type</span>
          <span>Proof of Work</span>
        </div>
      </div>
      <div>
        <div>Stock chart</div>
        <img src="../assets/chart.png" alt="chart" />
      </div>
    </section>
    <section class="panel">
      <div>
        <div>Video</div>
        <img src="../assets/video.png" alt="video" />
      </div>
      <div>
        <div>Team</div>
        <img src="../assets/team.png" alt="video" />
      </div>
    </section>
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
      item: {},
      isFetching: false
    };
  },
  async created() {
    try {
      this.isFetching = true;
      this.$emit("onAsync", true);
      const { data } = await axios.get(`tickers/${this.id}`);
      this.item = data;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      this.isFetching = false;
      this.$emit("onAsync", false);
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/_tokens.scss";

.content {
  margin: $spacing-large 0;
  display: flex;

  &__text {
    display: flex;
  }

  &__logo {
    display: flex;
    min-width: 400px;

    &__img {
      width: 100px;
      height: 100px;
    }
  }

  &__list {
    margin-left: $spacing-x-large;
    justify-content: flex-end;
    width: 100%;
    &__headers {
      display: flex;
      & > div {
        flex: auto;
        padding: $spacing-small;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;

      & > div {
        padding: $spacing-small;
      }
    }
  }
}

.panel {
  display: flex;
  justify-content: space-between;
  margin: $spacing-large 0;

  @include breakpoint-down(md) {
    flex-wrap: wrap;
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #36c7e6;
    color: white;
    padding: $spacing-small;

    span {
      border-bottom: 1px solid white;
      padding: $spacing-small;
    }
  }
}
</style>

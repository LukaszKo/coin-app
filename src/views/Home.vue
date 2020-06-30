<template>
  <div>
    <Header>
      <div class="title">
        <h3>Etam eniam dolor epsilon</h3>
        <span>{{ count }} crypto coins</span>
      </div>
    </Header>

    <div class="list">
      <div class="list__headers">
        <div
          class="list__headers__item"
          v-for="header in tableHeaders"
          :key="header"
        >
          {{ header }}
        </div>
      </div>
      <div class="list__content">
        <ListItem
          v-for="(item, index) in listWithPagination"
          :key="item.id + index"
          :item="item"
          @click="goToEditPage(item.id)"
        />
      </div>
    </div>
    <div class="next-page">
      <img @click="next" src="../assets/nextPage.png" alt="next page" />
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import Header from "@/components/Header";

import axios from "axios";
export default {
  name: "Home",
  components: { ListItem, Header },
  data() {
    return {
      tableHeaders: [
        "Nazwa",
        "Cena USD",
        "Cena BTC",
        "Cena ETH",
        "Market Cap(24h)(USD)"
      ],
      list: [],
      all: [],
      page: 0,
      ITEMS_LIMIT: 10
    };
  },
  computed: {
    count() {
      return this.all.length;
    },
    nextPackageLimit() {
      return this.page ? (this.page + 1) * this.ITEMS_LIMIT : this.ITEMS_LIMIT;
    },
    previousPackageLimit() {
      return this.page * this.ITEMS_LIMIT;
    },
    listWithPagination() {
      return this.all.filter(
        (item, index) =>
          index >= this.previousPackageLimit && index < this.nextPackageLimit
      );
    }
  },
  created() {
    const page = this.$router.currentRoute.query.page;
    if (page) {
      this.page = page - 1;
    }
    this.getTickers();
  },
  methods: {
    async getTickers() {
      try {
        this.$emit("onAsync", true);
        const { data } = await axios.get("tickers?quotes=USD,BTC,ETH");
        this.all = data;
        this.updateQuery();
        // eslint-disable-next-line no-useless-catch
      } catch (error) {
        throw error;
      } finally {
        this.$emit("onAsync", false);
      }
    },
    goToEditPage(id) {
      this.$router.push({ name: "Details", params: { id } });
    },
    next() {
      this.page++;
      this.updateQuery();
    },
    updateQuery() {
      this.$router.replace({ query: { page: this.page + 1 } }).catch(() => {});
    },
    updateList() {
      this.list = this.all.slice(
        this.ITEMS_LIMIT * this.page,
        this.ITEMS_LIMIT
      );
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/_tokens.scss";

.title {
  text-align: left;
}

.list {
  margin: $spacing-large 0;
  min-height: 70vh;
  &__headers {
    display: flex;
    justify-content: space-between;

    @include breakpoint-down(sm) {
      display: block;
    }

    &__item {
      flex: 1;
      padding: $spacing-small;
      font-weight: 600;
    }
  }

  &__content {
    margin: $spacing-small 0 $spacing-large;
  }
}
.next-page {
  display: flex;
  justify-content: flex-end;
}
</style>

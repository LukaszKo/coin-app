<template>
  <div>
    <Header>
      <div class="title">
        <h3>Etam eniam dolor epsilon</h3>
        <span>{{ count }} crypto coins</span>
      </div>
    </Header>

    <div class="list">
      <div class="table__headers">
        <div
          class="table__headers__item"
          v-for="header in tableHeaders"
          :key="header"
        >
          {{ header }}
        </div>
      </div>
      <div class="table__content">
        <ListItem
          v-for="(item, index) in paginatedList"
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
      limit: 10
    };
  },
  computed: {
    count() {
      return this.all.length;
    },
    limited() {
      return this.page ? (this.page + 1) * 10 : 10;
    },
    paginatedList() {
      return this.all.filter(
        (item, index) => index >= this.page * 10 && index < this.limited
      );
    }
  },
  async created() {
    const page = this.$router.currentRoute.query.page;
    if (page) {
      this.page = page - 1;
    }

    const { data } = await axios.get("tickers?quotes=USD,BTC,ETH");
    this.all = data;
    this.updateQuery();
  },
  methods: {
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
      this.list = this.all.slice(this.limit * this.page, this.limit);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/_tokens.scss";

.title {
  text-align: left;
}

.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.list {
  margin: $spacing-large 0;
  min-height: 70vh;
}

.table {
  &__headers {
    display: flex;
    justify-content: space-between;

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

<template>
  <div class="main-view two-column">
    <!-- 导航 -->
    <ul class="layout guide-view">
      <li><nuxt-link to="/">首页 </nuxt-link>»</li>
      <li><h1>最新文章</h1></li>
    </ul>
    
    <section class="layout">
      <section class="content-view">
        <!-- 最新文章 -->
        <module-article-new v-if="list.length > 0" :article="list[0]" />

        <!-- 往期文章 -->
        <module-article-prev :list="prevList">
          <template slot="title">
            <h2 class="module-title-custom">最近的{{ prevList.length }}篇文章</h2>
          </template>
        </module-article-prev>
      </section>

      <aside class="aside-view">
        <!-- 分类 -->
        <module-type-list :types="types" />
      </aside>
      <div class="clearfix"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    prevList() {
      if (this.list.length == 0) return []
      return this.list.slice(1, this.list.length)
    }
  },
  async asyncData({ $axios, params }) {
    let [listRst, typeRst] = await Promise.all([
      $axios.$get(`web/article/list?type=${params.type}&page=1&size=21`),
      $axios.$get('web/type/list'),
    ]);
    return { list: listRst?.data?.list || [], types: typeRst?.data };
  },
}
</script>

<style scoped lang="scss">
.module-title-custom{
  font-family: "Trebuchet MS", Arial, "Lucida Grande", Verdana, Lucida, Helvetica, sans-serif;
}
</style>
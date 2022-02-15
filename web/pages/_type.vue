<template>
  <div class="main-view two-column">
    <!-- 导航 -->
    <ul class="layout guide-view">
      <li><nuxt-link to="/">首页 </nuxt-link>»</li>
      <li><nuxt-link to="/article/">分类 </nuxt-link>»</li>
      <li><h1>{{ typeInfo.name }}</h1></li>
    </ul>

    <section class="layout">
      <section class="content-view">
        <!-- 往期文章 -->
        <template v-for="date in dateKeys">
          <module-article-prev :list="sortedList[date]">
            <template slot="title">
              <h3>{{ date }}年</h3>
            </template>
            <template slot-scope="scope">
              <li class="article-list-li">
                <a :href="'/article/' + scope.article._id">{{ scope.article.title }}<p>（ {{ $dayjs(scope.article.createAt).format('YYYY.MM.DD') }} ）</p></a>
              </li>
            </template>
          </module-article-prev>
        </template>
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
  head() {
    return {
      title: '分类：' + this.typeInfo.name + ' - 郭晓波的博客'
    }
  },
  computed: {
    sortedList() {
      if (this.list.lenght == 0) return {}
      // {'2022': []}
      let newDict = {}
      this.list.forEach(article => {
        const year = this.$dayjs(article.createAt).format('YYYY')
        let list = newDict[year] || []
        list.push(article)
        newDict[year] = list
      })
      return newDict
    },
    dateKeys() {
      return Object.keys(this.sortedList).sort((a, b) => b - a)
    }
  },
  async asyncData({ $axios, params }) {
    let [listRst, typeRst, typeInfoRst] = await Promise.all([
      $axios.$get(`web/article/list?type=${params.type}`),
      $axios.$get('web/type/list'),
      $axios.$get('web/type/detail/' + params.type)
    ]);
    return { list: listRst?.data?.list || [], types: typeRst?.data, typeInfo: typeInfoRst?.data };
  },
}
</script>

<style lang="scss" scoped>
.article-list-li{
  padding-left: 20px; position: relative; display: block !important;
  &::before{content: ''; display: block; width: 4px; height: 4px; position: absolute; left: 10px; top: 13px; background: $color-normal;}
  a{
    color: $color-normal !important; text-decoration: underline; display: table !important;
    p{display: inline-block; color: $color-light;}
  }
}
</style>
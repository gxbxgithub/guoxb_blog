<template>
  <div class="main-view one-column">
    <!-- 导航 -->
    <ul class="layout guide-view">
      <li><nuxt-link to="/">首页 </nuxt-link>»</li>
      <li><nuxt-link to="/article/">分类 </nuxt-link>»</li>
      <li>{{ article.title }}</li>
    </ul>
    <div class="layout">
      <div class="module-view article-view">
        <div class="module-title">
          <h1>{{ article.title }}</h1>
        </div>
        <p class="article-type">分类：<nuxt-link :to="'/' + article.typeInfo.shortName + '/'">{{ article.typeInfo.name }}</nuxt-link></p>
        <p class="article-time">日期：{{ $dayjs(article.createAt).format('YYYY年M月D日') }}</p>
        <div class="code-view" v-html="$md.render(article.content)" v-highlight></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title + ' - 郭晓波的博客'
    }
  },
  async asyncData({ $axios, params }) {
    let result = await $axios.$get("web/article/detail/" + params.id);
    return { article: result.data };
  },
}
</script>

<style scoped lang="scss">
.article-view{
  .module-title{
    font-size: 28px; font-weight: bold; line-height: 2em; border-bottom-width: 2px;
    font-family: "Trebuchet MS", Arial, "Lucida Grande", Verdana, Lucida, Helvetica, sans-serif;
  }
  .article-type, .article-time{
    color: $color-middle; margin: 1em 0;
    a{color: $color-middle; &:hover{color: $color-theme;}}
  }
}
</style>
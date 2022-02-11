<template>
  <div class="main-view two-column">
    <section class="layout">
      <section class="content-view">
        <!-- 最新文章 -->
        <module-article-new :article="list[0]" />

        <!-- 往期文章 -->
        <module-article-prev :list="prevList">
          <template slot="more">
            <nuxt-link class="more-link" to="/article/">更多文章 »</nuxt-link>
          </template>
        </module-article-prev>
      </section>

      <aside class="aside-view">
        <div class="info-view">
          <h1>郭晓波的博客</h1>
          <p>天行健 君子以自强不息</p>
        </div>
      </aside>
      <div class="clearfix"></div>
    </section>

  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    prevList() {
      return this.list.slice(1, this.list.length)
    }
  },
  async asyncData({ $axios }) {
    let result = await $axios.$get("web/article/list");
    if (!result) return { list: [] };
    return { list: result.data.list };
  },
};
</script>


<style lang="scss" scope>
// 个人信息
.info-view{
  font-family: "Trebuchet MS",Arial,"Lucida Grande",Verdana,Lucida,Helvetica,sans-serif;
  color: #fff; text-align: center; line-height: 30px;
  background: $color-normal;
  padding: $width-space 0;
  h1{
    font-size: 20px; font-weight: 500;
  }
  p{
    font-size: 14px; margin-top: 20px;
  }
}
</style>
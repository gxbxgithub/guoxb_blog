<template>
  <div class="module-view asset-view">
    <h2 class="asset-title">{{ article.title }}</h2>
    <p class="asset-tags">分类：<nuxt-link :to="'/' + article.typeInfo.shortName + '/'">{{ article.typeInfo.name }}</nuxt-link></p>
    <div class="asset-content">
      <p class="asset-body" v-html="article.intro"></p>
      <a class="asset-more-link" :href="'/article/' + article._id">阅读全文 »</a>
    </div>
    <div class="asset-footer">
      <p class="time">{{ $dayjs(article.createAt).format('YYYY年M月D日') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleArticleNew',
  props: {
    article: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped lang="scss">
.asset-view{
  .asset-title{
    padding-bottom: 10px;
    font-family: "Trebuchet MS",Arial,"Lucida Grande",Verdana,Lucida,Helvetica,sans-serif;
    font-size: 24px; font-weight: 500;
    border-bottom: 1px solid $color-line;
    text-align: justify; line-height: 30px;
  }
  .asset-tags{
    font-size: 16px; line-height: 30px; text-align: right;
    color: $color-middle;
    a{color: $color-theme;}
  }
  .asset-content{
    font-size: 16px; line-height: 26px; margin-top: 10px;
    .asset-more-link{
      margin-top: 10px; display: inline-block; color: $color-theme;
      &:hover{text-decoration: underline;}
    }
  }
  .asset-footer{
    margin-top: 5px;
    .time{font-size: 14px;}
  }
}
</style>
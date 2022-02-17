<template>
  <div class="module-view previous-view">
    <div class="module-title">
      <slot name="title">
        <h3>往期文章</h3>
      </slot>
    </div>
    <ul>
      <template v-for="(item, index) in list">
        <slot :article="item">
          <li>
            <span>{{ $dayjs(item.createAt).format('YYYY.MM.DD') }}</span>
            <nuxt-link :to="'/article/' + item._id + '.html'">{{ item.title }}</nuxt-link>
          </li>
        </slot>
      </template>
    </ul>
    <slot name="more"></slot>
  </div>
</template>

<script>
export default {
  name: 'ModuleArticlePrev',
  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped lang="scss">
.previous-view{
  ul{
    margin-top: 10px;
    li{
      display: flex;
      line-height: 30px;
      span{
        width: 96px; position: relative;
        color: $color-light; display: inline-block;
        &::after{content: '»'; display: block; position: absolute; right: 0; top: 50%; transform: translateY(-50%);}
      }
      a{
        @include manyLine(); color: $color-middle;
        flex: 1; margin-left: 5px; text-align: justify;
        &:hover{color: $color-normal;}
      }
    }
  }
  .more-link{
    margin-top: 10px; display: inline-block; color: $color-theme;
    &:hover{text-decoration: underline;}
  }
}
</style>
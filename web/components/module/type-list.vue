<template>
  <div class="module-view types-view">
    <div class="module-title">
      <h2>分类</h2>
    </div>
    <ul>
      <li v-for="type in types" :key="type._id"><nuxt-link :to="'/' + type.shortName + '/'">{{ type.name }}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ModuleTypeList',
  props: {
    types: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped lang="scss">
.types-view{
  ul{
    margin-top: 10px;
    li{
      margin-left: 20px;
      font-size: 14px; line-height: 30px; list-style-type: square;
      a{text-decoration: underline; &:hover{color: $color-theme;}}
    }
  }
}
</style>
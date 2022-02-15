<template>
  <div class="menu-view" :style="{height: $store.state.menuShown ? '100%' : '0'}" @click="hideMenu">
    <div class="panel-view" :class="$store.state.menuShown ? 'show' : 'hide'">
      <div class="info-view">
        <h1>郭晓波的博客</h1>
        <p>天行健 君子以自强不息</p>
      </div>
      <div class="module-view types-view">
        <div class="module-title">
          <h2>分类</h2>
        </div>
        <ul>
          <li v-for="type in types" :key="type._id">
            <nuxt-link :to="'/' + type.shortName + '/'">{{ type.name }}</nuxt-link>（{{ type.count }}）
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: []
    }
  },
  methods: {
    hideMenu() {
      this.$store.commit('ShowMenu', false)
    }
  },
  async created() {
    let types = await this.$store.dispatch('loadTypes')
    this.types = types
  }
};
</script>

<style scoped lang="scss">
.menu-view{
  width: 100%; position: fixed; z-index: 9999; left: 0; top: 46px; bottom: 0; background: rgba($color: #000000, $alpha: 0.5);
  .panel-view{
    width: 60%; height: 100%; position: fixed; left: -60%; overflow-y: scroll; -webkit-overflow-scrolling: touch;
    background: #fff;
    // box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    -webkit-transition: -webkit-transform 0.3s ease-in-out; transition: transform 0.3s ease-in-out;
    &.show{-webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0);}
    &.hide{-webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0);}
  }
}

// 个人信息
.info-view {
  font-family: "Trebuchet MS", Arial, "Lucida Grande", Verdana, Lucida,
    Helvetica, sans-serif;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background: $color-normal;
  padding: $width-space 0;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    margin-top: 20px;
  }
}
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
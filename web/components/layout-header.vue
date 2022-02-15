<template>
  <header class="header-view">
    <div class="panel">
      <button @click="showMenu">
        <svg t="1644893325287" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3525"><path d="M170.666667 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3526" fill="#eeeeee"></path><path d="M170.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3527" fill="#eeeeee"></path><path d="M170.666667 810.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3528" fill="#eeeeee"></path><path d="M896 778.666667H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM362.666667 245.333333h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM896 480H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="3529" fill="#eeeeee"></path></svg>
      </button>
      <nuxt-link to="/">郭晓波的博客</nuxt-link>
    </div>
    <div class="place"></div>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader",
  methods: {
    showMenu() {
      const menuShown = this.$store.state.menuShown
      this.$store.commit('ShowMenu', !menuShown)
    }
  },
};
</script>

<style scoped lang="scss">
.header-view{
  width: 100%; height: 3px; background: $color-normal;
  .panel{
    display: none; overflow: hidden; width: 100%; height: 46px; box-sizing: border-box; background: $color-normal; padding: 8px 15px 8px 0;
    button{height: 30px; padding: 0 10px 0 15px; background: transparent; float: left;}
    .icon{display: block; width: auto; height: 24px;}
    a{font-size: 16px; color: #fff; line-height: 30px; float: left;}
  }
  .place{display: none; height: 46px;}
}
// mobile 适配
@media screen and (max-width: 639px) {
  .header-view{
    height: auto;
    .panel, .place{display: block;}
    .panel{
      position: fixed; z-index: 999;
    }
  }
}
</style>
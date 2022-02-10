<template>
  <footer class="footer-view">
    <p>
      <a href="https://beian.miit.gov.cn/" target="__blank">京ICP备18006757号-1</a>
      <svg t="1644484315708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3908" width="48" height="48"><path d="M504.951 511.98c93.49 0 169.28-74.002 169.28-165.26 0-91.276-75.79-165.248-169.28-165.248-93.486 0-169.287 73.972-169.279 165.248-0.001 91.258 75.793 165.26 169.28 165.26z m77.6 55.098H441.466c-120.767 0-218.678 95.564-218.678 213.45V794.3c0 48.183 97.911 48.229 218.678 48.229H582.55c120.754 0 218.66-1.78 218.66-48.229v-13.77c0-117.887-97.898-213.45-218.66-213.45z" p-id="3909" fill="#666666"></path></svg>
      郭晓波的博客
    </p>
    <p>Email: gxbxemail@163.com</p>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style lang="scss" scoped>
.footer-view{
  padding-bottom: 30px;
  p{
    display: flex; justify-content: center; align-items: center; font-size: 14px; color: $color-middle; text-align: center;
    a{font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif; text-decoration: underline; color: $color-middle;}
    .icon{width: 22px; margin: 0 5px;}
  }
}
</style>
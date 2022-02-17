// highlight.js  代码高亮指令
// import Hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'; // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
import Vue from 'vue'

// 需要哪些语言直接手动引入，不再直接通过 import Hljs from 'highlight.js' 引入所有语言。
var hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('http', require('highlight.js/lib/languages/http'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

let Highlight = {};
// 自定义hig配置
// 自定义插件
Highlight.install = function (Vue) {
  const func = function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      // 1.创建ul节点
      let ul = document.createElement("ul");
      // 2.根据换行符获取行数，根据获取的行数生成行号
      let rowCount = block.outerHTML.split('\n').length;
      for (let i = 1; i < rowCount; i++) {
        //创建li节点，创建文本节点
        let li = document.createElement("li")
        let text = document.createTextNode(i)
        //为li追加文本节点，将li加入ul
        li.appendChild(text)
        ul.appendChild(li)
      }
      // 3.给行号添加类名
      ul.className = 'pre-numbering'
      // 4.将ul节点加到 代码块
      block.parentNode.appendChild(ul)
      hljs.highlightBlock(block)
    })
  }

  // 自定义指令 v-highlight
  Vue.directive('highlight', {
    inserted: func,
    componentUpdated: func
  })
};

Vue.use(Highlight);
export default Highlight;
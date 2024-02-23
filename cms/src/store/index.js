import { createStore } from 'vuex'

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modulesFiles = import.meta.globEager('./*.store.js')
const modules = Reflect.ownKeys(modulesFiles).reduce((modules, modulePath) => {
  // ./setting.store.js => setting
  const moduleName = modulePath.replace(/^\.\/(.*)\.store\.\w+$/, '$1')
  const moduleValue = modulesFiles[modulePath]
  modules[moduleName] = moduleValue.default
  return modules
}, {})

const store = createStore({
  state: () => ({}),
  modules
})

export default store



/** - for webpack settings, use 'require.context'
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
 */
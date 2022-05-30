import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

// import { mergeAppConfigWithDefaults } from '@obewds/vue-component-helpers'
// import appTwConfig from '../obewds.tw.config.json'




// import { ObewdsTwPlugin } from './plugin'





const app = createApp(App)

// const tw = mergeAppConfigWithDefaults(appTwConfig)

// app.config.globalProperties.$tw = tw

// app.provide('tw', tw)






// app.use(ObewdsTwPlugin, {
//     tw: tw
// })






app.provide('globals', {
    classes: {
        btn: 'inline text-white rounded px-2 py-1 shadow',
        h2: 'text-lg font-bold',
    },
    strings: {
        more: 'more things',
        less: 'less things',
    },
    styles: {
        btn: 'background-color:#42b983;',
    },
})

app.mount('#app')

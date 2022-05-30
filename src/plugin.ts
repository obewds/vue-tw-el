import { App, Plugin } from 'vue'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

interface ObewdsTwConfigInterface {
    tw: typeof ObewdsTwConfig
}

export const ObewdsTwPlugin: Plugin = {
    install: (app: App, options: ObewdsTwConfigInterface) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$tw = options.tw
    }
}
import { getCurrentInstance } from 'vue'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

export function getAppObewdsTw (): typeof ObewdsTwConfig {
    const vm = getCurrentInstance()
    console.log('vm:')
    console.log(vm)
    return vm && vm.appContext.config.globalProperties.$tw ? vm.appContext.config.globalProperties.$tw : {}
}
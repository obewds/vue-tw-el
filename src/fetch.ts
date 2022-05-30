import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
import { mergeAppConfigWithDefaults } from '@obewds/vue-component-helpers'

const rootConfigFile = '../obewds.tw.config.json'

let output = {}


try {

    let userConfig = import('../obewds.tw.config.json')
    output = mergeAppConfigWithDefaults(userConfig)
    console.log('rootConfigFile was found and accessed!')

} catch (error) {

    output = ObewdsTwConfig
    console.log('rootConfigFile was not found!')
    // console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
    
}

/*
let clientConfig: typeof ObewdsTwConfig = import('../obewds.tw.config.json')
    .catch( (e) => {
        output = ObewdsTwConfig
        Promise.reject("Module ../obewds.tw.config.json not found.")
    })
    .then( (module) => {
        output = clientConfig
        console.log("Module ../obewds.tw.config.json was found!")
    })
*/










export default output

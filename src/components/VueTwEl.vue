<!--script lang="ts">

    import { extractValidPalettes } from '@obewds/vue-component-helpers'
    import { ObewdsTwConfig as tempConfig } from '@obewds/obewds-tw-config'

    // const tw = Object.keys( this.tw ).length > 0 ? this.tw : tempConfig

    export default {
        // inject: ['tw'],
        inject: {
            tw: {
                from: 'tw',
                // default: tempConfig,
            }
        },
        data() {
            return {
                tw: Object.keys( this.tw ).length > 0 ? this.tw : tempConfig,
                defaultBgPalettes: this.tw ? extractValidPalettes(this.tw, 'bg') : [],
            }
        },
        methods: {

            getInjectedTwConfig() {
                return tw
            },

            getBgPaletteKeys() {
                return this.tw ? extractValidPalettes(this.tw, 'bg') : []
            },

        }
    }

</script-->


<!--script setup lang="ts">

	//import { inject } from 'vue'
    //import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    //const tw = inject( 'tw', ObewdsTwConfig, true )

    // normal script, executed in module scope (only once)
    // runSideEffectOnce()

    // declare additional options
    
    export default {
        // inheritAttrs: false,
        // customOptions: {}
        inject: {
            twConfig: {
                from: 'tw',
                default: ObewdsTwConfig
            }
        },
        provide() {
            return {
                tw: tw
            }
        }
    }

</script-->


<!--script lang="ts">

	import { inject } from 'vue'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    export default {
        setup() {
            const tw = inject( 'tw', ObewdsTwConfig, true )
            return { tw }
        },
    }

</script,-->


<!--script lang="ts">

    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    export default {
        // inject: {
        //     twConfig: {
        //         from: 'tw',
        //         default: () => ObewdsTwConfig
        //     }
        // },
        inject: ['tw'],
        props: {
            tw: {
                default(): typeof ObewdsTwConfig {
                    return this.tw
                }
            }
        },
        methods: {
            getAppTwConfig(): typeof ObewdsTwConfig {
                return this.tw
            }
        },
        expose: ['getAppTwConfig']
    }

</!script-->

<!--
<script lang="ts">

    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    type ObewdsTwConfigType = typeof ObewdsTwConfig

    let appTwConfig: ObewdsTwConfigType

    try {
        appTwConfig = await require('../../obewds.tw.config.json')
        // do something
    } catch (e) {
        appTwConfig = ObewdsTwConfig
        console.log('No ./obewds.tw.config.json file was found, so only default ObewdsTwConfig Tailwind classes are available for use in OBE:WDS components and their Tailwind CSS classes.')
        // do something else
    }

    console.log('appTwConfig:')
    console.log(appTwConfig)

    //export twConfig as twConfigData

    // try {
        /*
        if (fs.existsSync('../../obewds.tw.config.json')) {
            twConfig = import('../../obewds.tw.config.json')
            .then( (data) => {
                return data
            })
            .catch( (err) => {
                return ObewdsTwConfig
                console.log(err)
            })
        }
        */
    // } catch(err) {
        // console.error(err)
    // }

    // export twConfig

    export default {
        inject: ['tw'],
        props: {
            bgPalette: {
                type: String,
                default: 'default',
                validator: (prop: string): boolean => ([
                    ...validPaletteProps( 'bg', mergeAppConfigWithDefaults( this.tw ) )
                ]).includes(prop),
            },
        },
    }

</script>
-->

<!--
<script lang="ts">

    let tw = Object.keys( inject( 'tw', {} ) ).length > 0 ? inject<typeof ObewdsTwConfig>('tw') : ObewdsTwConfig

</script>
-->


<script setup lang="ts">

	import { computed, inject } from 'vue'
    import { extractValidPalettes, getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor, mergeAppConfigWithDefaults, validPaletteProps } from '@obewds/vue-component-helpers'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { VueEl } from '@obewds/vue-el'


    import appTwConfig from '../../obewds.tw.config.json'


    // console.log('twConfig:')
    // console.log(twConfig)

    /*interface PropsInterface {
        bgPalette: string
        bgColor: string
        borderPalette: string
        borderColor?: string
        tag: string
        text?: string
        textPalette: string
        textColor: string
    }*/
    

    /*
    const props = defineProps({
        bgPalette: {
            type: String,
            default: 'default',
            validator: (prop: string): boolean => ([
                ...validPaletteProps( 'bg', mergeAppConfigWithDefaults( appTwConfig ) )
            ]).includes(prop),
        },
        bgColor: {
            type: String,
            default: 'default',
        },
        borderPalette: {
            type: String,
            default: 'default',
            validator: (prop: string): boolean => ([
                ...validPaletteProps( 'border', mergeAppConfigWithDefaults( appTwConfig ) )
            ]).includes(prop),
        },
        borderColor: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            default: '',
        },
        textPalette: {
            type: String,
            default: 'default',
            validator: (prop: string): boolean => ([
                ...validPaletteProps( 'text', mergeAppConfigWithDefaults( appTwConfig ) )
            ]).includes(prop),
        },
        textColor: {
            type: String,
            default: 'default',
        },
    })
    */

    const props = withDefaults(
        defineProps<{
            bgPalette?: string
            bgColor?: string
            borderPalette?: string
            borderColor?: string
            tag: string
            text?: string
            textPalette?: string
            textColor?: string
        }>(), {
            bgPalette: 'default',
            bgColor: 'default',
            borderPalette: 'default',
            borderColor: '',
            textPalette: 'default',
            textColor: 'default',
        }
    )

    const tw = Object.keys( inject( 'tw', {} ) ).length > 0 ? inject<typeof ObewdsTwConfig>('tw') : ObewdsTwConfig
    // const tw = inject<typeof ObewdsTwConfig>( 'tw', ObewdsTwConfig, false )

    let colorClasses = computed( () => {

        let output: string[] = []

        output.push( getBgPaletteColor( tw, props.bgPalette, props.bgColor ) )

        output.push( getBorderPaletteColor( tw, props.borderPalette, props.borderColor ) )

        output.push( getTextPaletteColor( tw, props.textPalette, props.textColor ) )

        return output.join(' ')
        
    })

</script>


<template>

    <VueEl
        :tag="tag"
        :text="text"
        :class="colorClasses"
    >
        <slot/>
    </VueEl>

</template>

<!--script lang="ts">

    import { defineComponent } from 'vue'
	import { Prop, SetupContext } from 'vue'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    export default defineComponent({
        setup(props: Prop<object>, context: SetupContext){
            console.log('context:')
            console.log(context)
        },
        mounted(): void {
            //console.log('this.$tw:')
            //console.log(this.$tw)
        }
    })

</script-->

<!--script setup lang="ts">

	import { computed, inject } from 'vue'
    import { getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor } from '@obewds/vue-component-helpers'
    import { VueEl } from '@obewds/vue-el'

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

    let colorClasses = computed( () => {

        let output: string[] = []

        output.push( getBgPaletteColor( tw, props.bgPalette, props.bgColor ) )

        output.push( getBorderPaletteColor( tw, props.borderPalette, props.borderColor ) )

        output.push( getTextPaletteColor( tw, props.textPalette, props.textColor ) )

        return output.join(' ')
        
    })

</script-->

<script lang="ts">

	import { computed, defineComponent, getCurrentInstance } from 'vue'
    import { getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor, mergeAppConfigWithDefaults, validPaletteProps } from '@obewds/vue-component-helpers'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { VueEl } from '@obewds/vue-el'


    // import fetchedOutput from '../fetch'
    // console.log("fetchedOutput:")
    // console.log(fetchedOutput)
    // console.log("validPaletteProps('bg', fetchedOutput):")
    // console.log(validPaletteProps('bg', fetchedOutput))


    // import { getAppObewdsTw } from '../composable'
    // const test = getCurrentInstance()?.appContext.config.globalProperties.$tw || {}
    // console.log('test:')
    // console.log(test)


    import appTwConfig from '../../obewds.tw.config.json'
    const testTw = mergeAppConfigWithDefaults(appTwConfig)
    console.log('testTw:')
    console.log(testTw)
    console.log("validPaletteProps('bg', testTw):")
    console.log(validPaletteProps('bg', testTw))


    export default defineComponent({

        components: { VueEl },

        props: {
            bgPalette: {
                type: String,
                default: 'default',
                validator: (prop: string) => ([
                    // ...validPaletteProps('bg', ObewdsTwConfig),
                    // ...validPaletteProps('bg', fetchedOutput)
                    ...validPaletteProps('bg', testTw)
                ]).includes(prop),
            },
            bgColor: {
                type: String,
                default: 'default',
            },
            borderPalette: {
                type: String,
                default: 'default',
                validator: (prop: string) => ([
                    // ...validPaletteProps('border', ObewdsTwConfig),
                    // ...validPaletteProps('border', fetchedOutput)
                    ...validPaletteProps('border', testTw)
                ]).includes(prop),
            },
            borderColor: {
                type: String,
                default: 'default',
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
                validator: (prop: string) => ([
                    // ...validPaletteProps('text', ObewdsTwConfig),
                    // ...validPaletteProps('text', fetchedOutput)
                    ...validPaletteProps('text', testTw)
                ]).includes(prop),
            },
            textColor: {
                type: String,
                default: 'default',
            },
        },

        setup ( props, context ) {

            // const instance = getCurrentInstance()
            const tw = getCurrentInstance()?.appContext.config.globalProperties?.$tw || ObewdsTwConfig

            // const test = validPaletteProps('bg', tw)
            // console.log('test:')
            // console.log(test)

            // const tw = instance && instance.appContext.config.globalProperties.$tw ? 
            //     <typeof ObewdsTwConfig>instance.appContext.config.globalProperties.$tw : {}
            
            // const tw = Object.keys( inject( 'tw', {} ) ).length > 0 ? inject<typeof ObewdsTwConfig>('tw') : ObewdsTwConfig

            let colorClasses = computed( () => {

                let output: string[] = []

                output.push( getBgPaletteColor( testTw, props.bgPalette, props.bgColor ) )

                output.push( getBorderPaletteColor( testTw, props.borderPalette, props.borderColor ) )

                output.push( getTextPaletteColor( testTw, props.textPalette, props.textColor ) )

                return output.join(' ')
                
            })

            return { colorClasses }

        },

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

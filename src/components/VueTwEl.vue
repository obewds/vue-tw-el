<script setup lang="ts">

	import { computed, inject } from 'vue'
    import { getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor } from '@obewds/vue-component-helpers'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
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

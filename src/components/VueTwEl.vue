<script setup lang="ts">

	import { computed, inject } from 'vue'
    import { getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor } from '@obewds/vue-component-helpers'
	import { VueEl } from '@obewds/vue-el'
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

    const props = defineProps({
        bgPalette: {
            type: String,
            default: 'default',
        },
        bgColor: {
            type: String,
            default: 'default',
        },
        borderPalette: {
            type: String,
            default: 'default',
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
        },
        textColor: {
            type: String,
            default: 'default',
        },
    })

    const tw = Object.keys( inject( 'tw', {} ) ).length > 0 ? inject<typeof ObewdsTwConfig>('tw') : ObewdsTwConfig

    let colorClasses = computed( () => {

        let output = []

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

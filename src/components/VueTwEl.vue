<script setup lang="ts">

	import { computed, inject } from 'vue'
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

    type ObewdsTwConfigType = typeof ObewdsTwConfig

    const tw = Object.keys(inject('tw', {})).length > 0 ? inject<ObewdsTwConfigType>('tw') : ObewdsTwConfig

    let compoClasses = computed(() => {

        let output = ''

        output += tw && tw?.text?.palettes?.[props.textPalette]?.colors?.[props.textColor] ? 
                    tw.text.palettes[props.textPalette].colors[props.textColor] + ' ' : ''

        output += tw && tw?.bg?.palettes?.[props.bgPalette]?.colors?.[props.bgColor] ? 
                    tw.bg.palettes[props.bgPalette].colors[props.bgColor] + ' ' : ''

        output += tw && tw?.border?.palettes?.[props.borderPalette]?.colors?.[props.borderColor] ? 
                    tw.border.palettes[props.borderPalette].colors[props.borderColor] + ' ' : ''

        return output.trim()
        
    })

</script>


<template>

    <VueEl
        :tag="tag"
        :text="text"
        :class="compoClasses"
    >
        <slot/>
    </VueEl>

</template>

<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import VueTwEl from '@/components/VueTwEl.vue'

    const tw = {
        span: 'px-2 py-1',
        flex: 'flex justify-center flex-wrap space-x-4 px-4 py-3',
    }

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">

         <VueTwEl tag="div" text="VueTwEl's with a default bg palette"/>

        <div :class="tw.flex">

            <VueTwEl tag="span" text="(div) default" bg-color="default" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) primary" bg-color="primary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) secondary" bg-color="secondary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) error" bg-color="error" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) success" bg-color="success" :class="tw.span"/>
        
        </div>

         <VueTwEl tag="div" text="VueTwEl's with a console bg palette"/>

        <div :class="tw.flex">

            <VueTwEl tag="span" text="(div) default" bg-palette="console" bg-color="default" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) primary" bg-palette="console" bg-color="primary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) secondary" bg-palette="console" bg-color="secondary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) error" bg-palette="console" bg-color="error" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) success" bg-palette="console" bg-color="success" :class="tw.span"/>
        
        </div>

         <VueTwEl tag="div" text="VueTwEl's with a monochromatic bg palette"/>

        <div :class="tw.flex">

            <VueTwEl tag="span" text="(div) default" bg-palette="monochromatic" bg-color="default" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) primary" bg-palette="monochromatic" bg-color="primary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) secondary" bg-palette="monochromatic" bg-color="secondary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) error" bg-palette="monochromatic" bg-color="error" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) success" bg-palette="monochromatic" bg-color="success" :class="tw.span"/>
        
        </div>

         <VueTwEl tag="div" text="VueTwEl's with a pastel bg palette"/>

        <div :class="tw.flex">

            <VueTwEl tag="span" text="(div) default" bg-palette="pastel" bg-color="default" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) primary" bg-palette="pastel" bg-color="primary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) secondary" bg-palette="pastel" bg-color="secondary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) error" bg-palette="pastel" bg-color="error" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) success" bg-palette="pastel" bg-color="success" :class="tw.span"/>
        
        </div>

         <VueTwEl tag="div" text="VueTwEl's with a default text palette"/>

        <div :class="tw.flex">

            <VueTwEl tag="span" text="(div) default" text-color="default" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) primary" text-color="primary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) secondary" text-color="secondary" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) error" text-color="error" :class="tw.span"/>

            <VueTwEl tag="span" text="(div) success" text-color="success" :class="tw.span"/>
        
        </div>

         <VueTwEl tag="div" text="VueTwEl's with a default border palette"/>

        <div :class="tw.flex">

            <VueTwEl tag="span" text="(div) default" border-color="default" :class="[tw.span, 'border']"/>

            <VueTwEl tag="span" text="(div) primary" border-color="primary" :class="[tw.span, 'border']"/>

            <VueTwEl tag="span" text="(div) secondary" border-color="secondary" :class="[tw.span, 'border']"/>

            <VueTwEl tag="span" text="(div) error" border-color="error" :class="[tw.span, 'border']"/>

            <VueTwEl tag="span" text="(div) success" border-color="success" :class="[tw.span, 'border']"/>
        
        </div>

    </div>

</template>

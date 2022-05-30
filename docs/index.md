---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# @obewds/vue-tw-el

Welcome to the docs page for OBE:WDS's `VueTwEl.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-tw-el --save-dev
```




## Tailwind CSS Integration

This component is dependent on Tailwind CSS and the [@obewds/obewds-tw-config](https://obewds.github.io/obewds-tw-config) package that drives a lot of the features of this component. So you'll want to be sure you have the most recent version of the [@obewds/obewds-tw-config](https://obewds.github.io/obewds-tw-config) package when getting started and first bringing this compoent into a project.


::: warning IS IT INSTALLED???
The [@obewds/obewds-tw-config](https://obewds.github.io/obewds-tw-config) package is installed if you have an `obewds.tw.config.json` file in your root directory! However, you can also safely run the [@obewds/obewds-tw-config](https://obewds.github.io/obewds-tw-config) package's [update command](https://obewds.github.io/obewds-tw-config/#updating-config-versions), which will install a fresh default file if one is not found in your project root!

So if it's installed, you'll want to [Update Your Config File](https://obewds.github.io/obewds-tw-config/#updating-config-versions).

If it's not installed, then you'll want to [Install the Config File](https://obewds.github.io/obewds-tw-config/#config-file-installation).
:::

Don't forget, you'll also want to ensure you've:

* Handled your [Tailwind Config Setup](https://obewds.github.io/obewds-tw-config/#tailwind-config-setup) for the `@obewds/obewds-tw-config` package
* Ensured you've included your new `obewds.tw.config.json` file into your current app's global context

::: info IN-APP CONTEXTS
Dealing with the `obewds.tw.config.json` file is detailed in the [App Config Setup](https://obewds.github.io/obewds-tw-config/#app-config-setup) section of the `@obewds/obewds-tw-config` package docs.
:::







## Importing




### Template syntax

```html{2}
<template>
    <VueTwEl tag="..."/>
</template>
```




### Script setup syntax

```html{2}
<script setup lang="ts">
    import { VueTwEl } from '@obewds/vue-tw-el'
</script>
```




### Composition API syntax

```html{3,6}
<script lang="ts">
    import { defineComponent } from 'vue'
    import { VueTwEl } from '@obewds/vue-tw-el'

    export default defineComponent({
        components: { VueTwEl }
    })
</script>
```




## Props

### bgPalette

:white_check_mark: Type `String`  
:x: Not Required  
:x: Does Not Validate

```html{2}
<template>
    <VueTwEl tag="div" bg-palette="default"/>
</template>
```

<br>

### bgColor

:white_check_mark: Type `String`  
:x: Not Required  
:x: Does Not Validate

```html{2}
<template>
    <VueTwEl tag="div" bg-color="default"/>
</template>
```

<br>

### borderPalette

:white_check_mark: Type `String`  
:x: Not Required  
:x: Does Not Validate

```html{2}
<template>
    <VueTwEl tag="div" border-palette="default"/>
</template>
```

<br>

### borderColor

:white_check_mark: Type `String`  
:x: Not Required  
:x: Does Not Validate

```html{2}
<template>
    <VueTwEl tag="div" border-color="default"/>
</template>
```

<br>

### tag

Detailed in the [@obewds/vue-el](https://obewds.github.io/vue-el/#tag) docs.

<br>

### text

Detailed in the [@obewds/vue-el](https://obewds.github.io/vue-el/#text) docs.

<br>

### textPalette

:white_check_mark: Type `String`  
:x: Not Required  
:x: Does Not Validate

```html{2}
<template>
    <VueTwEl tag="div" text-palette="default"/>
</template>
```

<br>

### textColor

:white_check_mark: Type `String`  
:x: Not Required  
:x: Does Not Validate

```html{2}
<template>
    <VueTwEl tag="div" text-color="default"/>
</template>
```

<br>




## Slots

### #default

Detailed in the [@obewds/vue-el](https://obewds.github.io/vue-el/#default) docs.

<br>





## Uninstall

```bash
npm uninstall @obewds/vue-tw-el
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->

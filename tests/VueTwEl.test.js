// ./tests/VueTwEl.test.js


import { mount } from '@vue/test-utils'
import VueTwEl from '../src/components/VueTwEl.vue'
import obewdsTwConfig from '../obewds.tw.config.json'



test('VueTwEl.vue component mounts successfully', async () => {

    expect(VueTwEl).toBeTruthy()

})



test('VueTwEl.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueTwEl, {
        props: {
            tag: 'div',
            text: testString,
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueTwEl.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueTwEl, {
        props: {
            tag: 'div',
        },
        slots: {
            default: testStrLiteral,
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})



test('VueTwEl.vue component accepts injects provided "tw" data', async () => {

    const testStr = 'test text'

    const wrapper = mount(VueTwEl, {
        global: {
            provide: {
                'tw': obewdsTwConfig,
            },
        },
        props: {
            tag: 'div',
            text: testStr,
            bgColor: 'primary',
            borderColor: 'primary',
            textColor: 'primary',
        },
    })

    expect(wrapper.html()).toContain(testStr)
    
})



test('VueTwEl.vue component does not return classes with invalid props provided with "tw" data', async () => {

    const wrapper = mount(VueTwEl, {
        global: {
            provide: {
                'tw': obewdsTwConfig,
            },
        },
        props: {
            tag: 'div',
            bgColor: 'unknown',
            borderColor: 'unknown',
            textColor: 'unknown',
        },
    })

    expect(wrapper.html()).toContain('class=""')
    
})



test('VueTwEl.vue component uses default tw classes if provided global "tw" data is empty', async () => {

    const wrapper = mount(VueTwEl, {
        global: {
            provide: {
                'tw': {},
            },
        },
        props: {
            tag: 'div',
            bgColor: 'primary',
        },
    })

    console.log('wrapper.html():')
    console.log(wrapper.html())

    expect(wrapper.html()).toContain('bg-blue')
    
})

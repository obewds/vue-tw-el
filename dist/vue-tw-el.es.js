import { defineComponent, inject, computed, openBlock, createBlock, unref, normalizeClass, withCtx, renderSlot } from "vue";
import { getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor } from "@obewds/vue-component-helpers";
import { ObewdsTwConfig } from "@obewds/obewds-tw-config";
import { VueEl } from "@obewds/vue-el";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    bgPalette: { default: "default" },
    bgColor: { default: "default" },
    borderPalette: { default: "default" },
    borderColor: { default: "" },
    tag: null,
    text: null,
    textPalette: { default: "default" },
    textColor: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const tw = Object.keys(inject("tw", {})).length > 0 ? inject("tw") : ObewdsTwConfig;
    let colorClasses = computed(() => {
      let output = [];
      output.push(getBgPaletteColor(tw, props.bgPalette, props.bgColor));
      output.push(getBorderPaletteColor(tw, props.borderPalette, props.borderColor));
      output.push(getTextPaletteColor(tw, props.textPalette, props.textColor));
      return output.join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(VueEl), {
        tag: __props.tag,
        text: __props.text,
        class: normalizeClass(unref(colorClasses))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["tag", "text", "class"]);
    };
  }
});
export { _sfc_main as VueTwEl };

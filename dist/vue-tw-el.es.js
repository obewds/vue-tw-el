import { defineComponent as d, inject as r, computed as s, openBlock as f, createBlock as n, unref as a, normalizeClass as c, withCtx as g, renderSlot as C } from "vue";
import { getBgPaletteColor as m, getBorderPaletteColor as p, getTextPaletteColor as i } from "@obewds/vue-component-helpers";
import { ObewdsTwConfig as x } from "@obewds/obewds-tw-config";
import { VueEl as b } from "@obewds/vue-el";
const j = /* @__PURE__ */ d({
  __name: "VueTwEl",
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
  setup(l) {
    const t = l, o = Object.keys(r("tw", {})).length > 0 ? r("tw") : x;
    let u = s(() => {
      let e = [];
      return e.push(m(o, t.bgPalette, t.bgColor)), e.push(p(o, t.borderPalette, t.borderColor)), e.push(i(o, t.textPalette, t.textColor)), e.join(" ");
    });
    return (e, P) => (f(), n(a(b), {
      tag: l.tag,
      text: l.text,
      class: c(a(u))
    }, {
      default: g(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["tag", "text", "class"]));
  }
});
export {
  j as VueTwEl
};

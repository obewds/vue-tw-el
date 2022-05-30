import { defineComponent, getCurrentInstance, computed, resolveComponent, openBlock, createBlock, normalizeClass, withCtx, renderSlot } from "vue";
import { mergeAppConfigWithDefaults, validPaletteProps, getBgPaletteColor, getBorderPaletteColor, getTextPaletteColor } from "@obewds/vue-component-helpers";
import { ObewdsTwConfig } from "@obewds/obewds-tw-config";
import { VueEl } from "@obewds/vue-el";
const anchor = {
  base: ""
};
const bg = {
  base: "",
  palettes: {
    test: {
      colors: {
        "default": "bg-yellow-500"
      }
    },
    console: {
      colors: {
        "default": "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
        error: "text-pink-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
        primary: "text-cyan-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
        secondary: "text-orange-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
        success: "text-lime-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
      }
    },
    "default": {
      colors: {
        "default": "",
        error: "text-white bg-pink-500 dark:bg-pink-600",
        primary: "text-white bg-cyan-500 dark:bg-cyan-600",
        secondary: "text-white bg-orange-500 dark:bg-orange-600",
        success: "text-white bg-lime-500 dark:bg-lime-600"
      }
    },
    monochromatic: {
      colors: {
        "default": "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
        error: "text-pink-800 bg-pink-200 dark:bg-pink-800 dark:text-pink-200",
        primary: "text-cyan-800 bg-cyan-200 dark:bg-cyan-800 dark:text-cyan-200",
        secondary: "text-orange-800 bg-orange-200 dark:bg-orange-800 dark:text-orange-200",
        success: "text-lime-800 bg-lime-300 dark:bg-lime-800 dark:text-lime-300"
      }
    },
    pastel: {
      colors: {
        "default": "text-black bg-gray-100 dark:bg-gray-200",
        error: "text-black bg-pink-200 dark:bg-pink-300",
        primary: "text-black bg-cyan-200 dark:bg-cyan-300",
        secondary: "text-black bg-orange-200 dark:bg-orange-300",
        success: "text-black bg-lime-300 dark:bg-lime-400"
      }
    }
  }
};
const border = {
  base: "",
  palettes: {
    test: {
      colors: {
        "default": "border-yellow-500"
      }
    },
    "default": {
      colors: {
        "": "",
        "default": "border-gray-200 dark:border-gray-600",
        error: "border-pink-600 dark:border-pink-300",
        primary: "border-cyan-600 dark:border-cyan-300",
        secondary: "border-orange-600 dark:border-orange-300",
        success: "border-lime-600 dark:border-lime-300"
      }
    }
  }
};
const text = {
  base: "",
  palettes: {
    test: {
      colors: {
        "default": "text-yellow-500"
      }
    },
    "default": {
      colors: {
        "default": "",
        error: "text-pink-500 dark:text-pink-300",
        primary: "text-cyan-500 dark:text-cyan-300",
        secondary: "text-orange-500 dark:text-orange-300",
        success: "text-lime-600 dark:text-lime-300"
      }
    }
  }
};
var appTwConfig = {
  anchor,
  bg,
  border,
  text
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const testTw = mergeAppConfigWithDefaults(appTwConfig);
console.log("testTw:");
console.log(testTw);
console.log("validPaletteProps('bg', testTw):");
console.log(validPaletteProps("bg", testTw));
const _sfc_main = defineComponent({
  components: { VueEl },
  props: {
    bgPalette: {
      type: String,
      default: "default",
      validator: (prop) => [
        ...validPaletteProps("bg", testTw)
      ].includes(prop)
    },
    bgColor: {
      type: String,
      default: "default"
    },
    borderPalette: {
      type: String,
      default: "default",
      validator: (prop) => [
        ...validPaletteProps("border", testTw)
      ].includes(prop)
    },
    borderColor: {
      type: String,
      default: "default"
    },
    tag: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ""
    },
    textPalette: {
      type: String,
      default: "default",
      validator: (prop) => [
        ...validPaletteProps("text", testTw)
      ].includes(prop)
    },
    textColor: {
      type: String,
      default: "default"
    }
  },
  setup(props, context) {
    var _a, _b;
    ((_b = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.config.globalProperties) == null ? void 0 : _b.$tw) || ObewdsTwConfig;
    let colorClasses = computed(() => {
      let output = [];
      output.push(getBgPaletteColor(testTw, props.bgPalette, props.bgColor));
      output.push(getBorderPaletteColor(testTw, props.borderPalette, props.borderColor));
      output.push(getTextPaletteColor(testTw, props.textPalette, props.textColor));
      return output.join(" ");
    });
    return { colorClasses };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueEl = resolveComponent("VueEl");
  return openBlock(), createBlock(_component_VueEl, {
    tag: _ctx.tag,
    text: _ctx.text,
    class: normalizeClass(_ctx.colorClasses)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["tag", "text", "class"]);
}
var VueTwEl = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { VueTwEl };

declare const _default: import("vue").DefineComponent<{
    bgPalette: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    borderPalette: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    textPalette: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    colorClasses: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    bgPalette: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    borderPalette: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    textPalette: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    text: string;
    bgPalette: string;
    bgColor: string;
    borderPalette: string;
    borderColor: string;
    textPalette: string;
    textColor: string;
}>;
export default _default;

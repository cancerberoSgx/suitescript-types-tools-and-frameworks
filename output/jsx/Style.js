define(["require", "exports", "./createElement", "../misc/misc"], function (require, exports, createElement_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Render the <style> tag with all classes and styles inside. */
    exports.Style = function (props) {
        function indent(n) {
            return props.renderConfig && props.renderConfig.indent ? misc_1.indent(n) : '';
        }
        return createElement_1.ReactLike.createElement("style", null, Object.keys(props.classes).map(function (c) {
            /* class selector */
            return indent(1) + "." + c + " {\n      " + Object.keys(props.classes[c]).map(function (p) {
                /* property values */
                return "" + indent(2) + p + ": " + props.classes[c][p] + ";";
            }).join("\n") + "\n      " + indent(1) + "}";
        }).join(';\n'));
    };
});

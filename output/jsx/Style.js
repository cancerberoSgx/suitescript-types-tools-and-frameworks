define(["require", "exports", "./createElement", "../misc/misc"], function (require, exports, createElement_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** build a styles and classnames from a class styles mapped object so is easy to type-check classnames and use them  */
    function Styles(styles) {
        var classes = {};
        Object.keys(styles).forEach(function (k) {
            classes[k] = k;
        });
        return {
            styles: styles, classes: classes
        };
    }
    exports.Styles = Styles;
    /** Render the <style> tag with all classes and styles inside. */
    exports.Style = function (props) {
        function indent(n) {
            return props.renderConfig && props.renderConfig.indent ? misc_1.indent(n) : '';
        }
        return createElement_1.ReactLike.createElement("style", null, Object.keys(props.classes).map(function (c) {
            /* class selector */
            return indent(1) + "." + c + (props.classes[c] && props.classes[c].selectorPostfix ? props.classes[c].selectorPostfix : '') + " {\n      " + Object.keys(props.classes[c]).map(function (p) {
                /* property values */
                return "" + indent(2) + p + ": " + props.classes[c][p] + ";";
            }).join("\n") + "\n      " + indent(1) + "}";
        }).join(';\n'));
    };
});

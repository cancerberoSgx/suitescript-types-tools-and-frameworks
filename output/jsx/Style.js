define(["require", "exports", "./createElement", "../misc/misc"], function (require, exports, createElement_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Render the <style> tag with all classes and styles inside. Usage example:
    ```
    const fieldTable: ClassRule = {
      selectorPostfix: ' td',
      border: '1px solid #aaaaaa',
      padding: '2px'
    }
    const sublistFieldTable: ClassRule = {
      ...fieldTable,
      fontSize: '0.95em',
      border: '1px solid #ededed'
    }
    const messageFromRedirect: ClassRule = {
      border: '2px solid green'
    }
    const { styles, classes } = Styles({ fieldTable, sublistFieldTable, messageFromRedirect})
    return <div>
      <Style classes={styles}></Style>
      <p className={classes.messageFromRedirect}>{props.msg}</p>
        ```
    */
    exports.Style = function (props) {
        function indent(n) {
            return props.renderConfig && props.renderConfig.indent ? misc_1.indent(n) : '';
        }
        function fixProperty(s) {
            var t;
            while (t = /([A-Z])/.exec(s)) {
                s = s.substring(0, t.index) + '-' + t[1].toLowerCase() + s.substring(t.index + 1, s.length);
            }
            return s;
        }
        return createElement_1.ReactLike.createElement("style", null, Object.keys(props.classes).map(function (c) {
            return indent(1) + "." + c + (props.classes[c] && props.classes[c].selectorPostfix ? props.classes[c].selectorPostfix : '') + " {" + Object.keys(props.classes[c]).filter(function (p) { return p !== 'selectorPostfix'; }).map(function (p) { return "\n" + indent(2) + fixProperty(p) + ": " + props.classes[c][p] + ";"; }).join("") + "\n}";
        }).join('\n'));
    };
    /** build a styles and classnames from a class styles mapped object so is easy to type-check classnames and use them . See `Style` for usage example */
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
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchTypesOperatorSupportValues = { text: ['contains', 'doesNotContain', 'doesNotStartWith', 'empty', 'hasKeywords', 'is', 'isNot', 'notEmpty', 'startsWith'],
        integer: ['between', 'empty', 'equalTo', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'notBetween', 'notEmpty', 'notEqualTo', 'notGreaterThan', 'notGreaterThanOrEqualTo', 'notLessThan', 'notLessThanOrEqualTo'],
        checkbox: ['equalTo', 'is'],
        date: ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within'],
        textarea: ['contains', 'doesNotContain', 'doesNotStartWith', 'empty', 'hasKeywords', 'is', 'isNot', 'notEmpty', 'startsWith'],
        select: ['anyOf', 'noneOf'],
        float: ['between', 'empty', 'equalTo', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'notBetween', 'notEmpty', 'notEqualTo', 'notGreaterThan', 'notGreaterThanOrEqualTo', 'notLessThan', 'notLessThanOrEqualTo'],
        richtext: ['contains', 'doesNotContain', 'doesNotStartWith', 'empty', 'hasKeywords', 'is', 'isNot', 'notEmpty', 'startsWith'],
        image: ['anyOf', 'noneOf'],
        currency: ['between', 'empty', 'equalTo', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'notBetween', 'notEmpty', 'notEqualTo', 'notGreaterThan', 'notGreaterThanOrEqualTo', 'notLessThan', 'notLessThanOrEqualTo'],
        datetime: ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within'],
        period: ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within'],
        percent: ['between', 'empty', 'equalTo', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'notBetween', 'notEmpty', 'notEqualTo', 'notGreaterThan', 'notGreaterThanOrEqualTo', 'notLessThan', 'notLessThanOrEqualTo'],
        currency2: ['between', 'empty', 'equalTo', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'notBetween', 'notEmpty', 'notEqualTo', 'notGreaterThan', 'notGreaterThanOrEqualTo', 'notLessThan', 'notLessThanOrEqualTo'],
        multiselect: ['allOf', 'anyOf', 'noneOf', 'notAllOf']
    };
});

"use strict";
var miniDebuggerAvailableFunctions = [
    {
        name: 'LOG',
        doc: 'prints given arguments pretty and push them into the log array so they are available in the results page',
        params: [{
                name: '...args',
                type: 'any[]'
            }],
        returns: { value: 'void' }
    },
    {
        name: 'printValueForLog',
        doc: 'returns a pretty representation of given value, used by LOG()',
        params: [{
                name: 'value',
                type: 'any'
            }], returns: { value: 'string' }
    },
];

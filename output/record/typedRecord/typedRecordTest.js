define(["require", "exports", "./typedRecordFactory"], function (require, exports, typedRecordFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedRecordTest() {
        // const ref = {id: 33, type: 'commercecategory'}
        // const r = load({id: 33, type: 'commercecategory'})
        // const c = new commercecategoryRecordImpl(ref)
        // c.fields.addtohead = 'hi'
        var c = typedRecordFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        console.log(c.fields.created + ", " + c.fields.lastmodified + ", " + c.fields.primaryparent + ", " + c.fields.name);
        c.fields.name = c.fields.name + '_changed';
        c.save();
        var c2 = typedRecordFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        // const lins = c2.sublists.subcategories.line(1)
        // c.nsRecord.sublist
        console.log("" + c2.fields.name);
        // const s: string | undefined = c.sublists.items.line(0). 
        var c3 = typedRecordFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        var oo = c3.sublists.items.get('descriptionoverride', 0);
        console.log('1' + oo);
        c3.sublists.items.line(0).descriptionoverride = '00';
        c3.save();
        c3 = typedRecordFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        console.log('2' + oo);
        c3.sublists.items.lines[0].descriptionoverride = '123';
        c3.save();
        c3 = typedRecordFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        console.log('3' + oo);
        c3.sublists.items.lines.map(function (line, index) {
            console.log('map1' + line.descriptionoverride);
        });
        c3.sublists.items.lines = [
            { descriptionoverride: 'sdf' }
        ];
        c3.save();
        c3 = typedRecordFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        c3.sublists.items.lines.map(function (line, index) {
            console.log('map' + line.descriptionoverride);
        });
    }
    exports.typedRecordTest = typedRecordTest;
});

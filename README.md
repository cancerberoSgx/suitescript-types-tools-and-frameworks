# Miscellaneous SuiteScript 2.0 high level utilities and APIs

(mostly oriented to Commerce)

# What

 * SuiteScript 2.0 types thanks to project @hitc/netsuite-types
 * basic developer tools to watch/build/deploy changes (`npm run dev`)
 * Besides the types, this package contains some useful tools that can be imported and used from pure JavaScript projects.

# Usage

 * `npm run build` will generate usable SuiteScript 2.0 .files that you can copy to your project and import it (if you are working with pure .js)
 * `npm run dev` to develop:

# Usage details: 

If you are working with TypeScript, then is better to clone this repository, start your feature in src/ and import the utilities. Just make sure that:
 * Configure account, target folder, role, applicationId, etc in ./config.js file (this information is needed to deploy the generated scripts to NetSuite)
 * the first time you run it it will ask you for your email / password and this information will be stored in $(HOME)/netsuite_creds.js
will:
 * make sure all your imports are relative, i.e : `import { copySublist } from '../record/copy/copySublist';`
 * import SuiteScript types like this: `import * as record from 'N/record';`
 * don't make radical changes in tsconfig.json since it needs that particular configuration in order the emitted .js to work
 * you will need to create the output folder structure manually in the file cabinet (by default SuiteScript folder) and upload script entry point manually.
 * ./src/suitelet-sample1.ts is a SuiteLet entry point example
 * ./src/user-event-sample1.ts is a user event entry point example 

# Limitations
 
 * You need to respect current tsconfig.json
 * always import files using **exact relative names**: 
   * Don't use index.ts shortcut, i.e: `from "../some/folder/index"` will work . `from "../some/folder"` wont
   configure your editor to always create/suggest/fix imports as relatives, for example in vscode settings: "Typescript › Preferences: Import Module Specifier. Preferred path style for auto imports. == RELATIVE" 
 * you can use all ecma syntax features but promises/await/async since NetSuite don't support setTimeout()

# Status

 * Record utilities: copyFields, copySublist, copySublists, 
 * Commerce: copyCategory, moveCategory, removeCategory : to copy/move a category to another parent or remove it
 * spec utilities : write TDD like with jasmine/jest/mocha using describe(), expect(), it() etc. Very basic but working support to test your code IN NetSuite and in node.js
 * HttpResponse logger so is easy to debug when using SuiteLet, RestLet.

# Objectives (short term)

 * API to move/copy/remove categories (and all descendants)
 * API to complex query items, example: all items that belong to categories A and B and which custom field C contains the string "D"

# Objectives (long term)

 * long term: administer all the aspects of a catalog (items, categories, facets, reviews, lists, etc)
 * higher level Record interface wrapping current Record. Then subclasses for Item, Category, etc


# TODO

 * maybe we can create an API that we can use to access filesystem, instead of suitetalk, like mkdir -p , write, read, globs, etc
 * be able to run specs (jasmine/jest like API if possible)
 * create folder structure in file cabinet automatically
 * upload the entry point script at last to prevent errors. 
 * (for devtools) we could separate tslib.js so emitted files are smaller
 * fix credentials storing at $(HOME)/netsuite_creds.js - always ask for password and never save it.
 * research: browserify and have a single .js bundle? this would simplify the deploy ? Dont' know
 * mode script entry point examples (schedule, restlet, client)
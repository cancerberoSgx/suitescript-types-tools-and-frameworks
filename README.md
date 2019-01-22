Miscellaneous SuiteScript 2.0 high level utilities 

(mostly loriented to SuiteCommerce catalogs)

# Usage

`npm run build` will generate usable SuiteScript 2.0 .files that you can copy to your project and import it (if you are working with pure .js)

If you are working with TypeScript, then is better to clone this repo, start your feature in src/ and import the utilities. Just make sure that:

 * use `npm run dev` to develop:
 * Configure account, target folder, role, applicationId, etc in ./config.js file (this information is needed to deploy the generated scripts to netsuite)
 * the first time you run it it will ask you for your email / password and this information will be stored in $(HOME)/netsuite_creds.js
will:
 * make sure all your imports are relative, i.e : `import { copySublist } from '../record/copy/copySublist';`
 * import SuiteScript types like this: `import * as record from 'N/record';`
 * don't make radical changes in tsconfig.json since it needs that particular configuration in order the emitted .js to work
 * you will need to create the output folder structure manually in the file cabinet (by default SuiteScript folder) and upload script entry point manually.

 * ./src/suitelet-sample1.ts is a SuiteLet entry point example



# TODO

 * create folder structure in file cabinet automatically
 * upload the entry point script at last to prevent errors. 
 * (for devtools) we could separate tslib.js so emitted files are smaller
 * fix credentials storing at $(HOME)/netsuite_creds.js - always ask for password and never save it.
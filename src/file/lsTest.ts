import { ls } from './ls';
export function lsTest() {
  ls({ root: '5226', rootAbsoluteName: '/SuiteScripts/DeployExtensions/AwaLabs' })
    .sort((a, b) => a.absoluteName.localeCompare(b.absoluteName))
    .forEach(f => {
      console.log(`${f.absoluteName} ${f.type} ${f.id} ${f.parent}`);
    });
}

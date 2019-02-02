import { AbstractFile, FileType, AbstractConfig, FilePredicate, Folder } from './types';
import { list } from '../search/typedSearch/typedSearchOperations';
import { find } from '../misc/misc';

export function ls(config: Config): AbstractFile[] {
  const { root = '@NONE@', type, rootAbsoluteName = '/' } = config

  let fileResults: AbstractFile[] = type === 'file' || !type ?
    list({
      type: 'file',
      columns: ['name', 'folder'],
      filters: [
        {
          name: 'folder',
          operator: 'anyOf',
          values: root
        }
      ]
    }).map(r => {
      const name = r.getValue('name')!
      const parent = r.getValue('folder')
      const file = {
        type: "file",
        id: r.id,
        name,
        parent,
        absoluteName: name
      } as AbstractFile
      return file
    }) : []

  // now we get the folders folders (since fileResults has all descendants not only direct children)
  const folderIds = fileResults.filter(f => f.parent !== root)
    .map(f => f.parent)
    // .concat([root]) // add root just in case
    .filter((i, index, arr) => i && arr.indexOf(i) === index) as string[] // dedup
  let folderResults: AbstractFile[] = type === 'folder' || !type ?
    getFolders(folderIds) : []

  const files = folderResults.concat(fileResults)
  buildAbsoluteNames(files, config)
  return files
}

function getFolders(folderIds: string[]): AbstractFile[] {
  return list({
    type: 'folder',
    columns: ['name', 'parent'],
    filters: [
      {
        name: 'internalid',
        operator: 'anyOf',
        values: folderIds
      }
    ]
  }).map(r => {
    const name = r.getValue('name')!;
    const parent = r.getValue('parent')!;
    const folder = {
      type: "folder",
      id: r.id,
      name,
      parent,
      absoluteName: name
    } as AbstractFile;
    return folder;
  });
}

let cc = 0
function buildMissingFolders(files: AbstractFile[], config: Config) {
  let withNoParent = files.filter(f => f.parent && !find(files, p => p.id === f.parent))//.map(f=>{id: f.idf.parent}).filter(i=>i!==undefined) as string[]
  // console.log(`withNoParent ${withNoParent.length}`);
  // // return
  // // const missingParentIds = withNoParent.map(f => f.parent) as string[]
  if (withNoParent.length>1) {
    getFolders(withNoParent.map(f => f.parent) as string[]).forEach((p, i) => {
      if (!find(files, f => f.id === p.id)) {
        files.push(p)
      }
    })
  }
  // withNoParent = files.filter(f => f.parent && !find(files, p => p.id === f.parent))
  // console.log(`withNoParent ${withNoParent.length}`);
  //  if (withNoParent.length>1) {
  //   getFolders(withNoParent.map(f => f.parent) as string[], config.rootAbsoluteName).forEach(p => {
  //     if (!find(files, f => f.id === p.id)) {
  //       files.push(p)
  //     }
  //   })
  // }
  const missingCount = files.filter(f => f.parent && !find(files, p => p.id === f.parent)).length
  if(missingCount>1&&cc<3){
    console.log('buildMissingFolders '+missingCount);  
    cc++  
    buildMissingFolders(files, config)
  }
  return
}

function buildAbsoluteNames(files: AbstractFile[], config: Config) {
  buildMissingFolders(files, config)
  files.forEach(f => {
    const pname = getParentAbsoluteName(f, files, config.rootAbsoluteName)
    f.absoluteName = pname + '/' + f.name
  })
}
function getParentAbsoluteName(f: AbstractFile, allFiles: AbstractFile[], rootAbsoluteName: string): string {
  if (!f.parent) {
    return rootAbsoluteName
  }
  const parent = find(allFiles, p => p.id === f.parent)
  if (!parent) {

    // console.log(`Warning, file parent not found: ${f.name} ${f.id}`)
    return rootAbsoluteName + '/unknown' + counter++
  }
  if (!parent.absoluteName) {
    return getParentAbsoluteName(parent, allFiles, rootAbsoluteName)
  }
  return parent.absoluteName.indexOf(rootAbsoluteName)===0 ? parent.absoluteName : rootAbsoluteName+'/'+parent.absoluteName
}
let counter = 0

interface Config extends AbstractConfig {
  type?: FileType
  filter?: FilePredicate
}

export function lsTest() {
  ls({ root: '5226', rootAbsoluteName: '/SuiteScripts/DeployExtensions/AwaLabs' })
    .sort((a, b) => a.absoluteName.localeCompare(b.absoluteName))
    .forEach(f => {
      console.log(`${f.absoluteName} ${f.type} ${f.id} ${f.parent}`);

    })
}
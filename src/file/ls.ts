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

  const directChildren = fileResults.filter(f => f.parent === root)

  // now we get the folders folders (since fileResults has all descendants not only direct children)
  const folderIds = fileResults.filter(f => f.parent !== root)
    .map(f => f.parent)
    // .concat([root]) // add root just in case
    .filter((i, index, arr) => i && arr.indexOf(i) === index) as string[] // dedup
  let folderResults: AbstractFile[] = type === 'folder' || !type ?
    list({
      type: 'folder',
      columns: ['name'],
      filters: [
        {
          name: 'internalid',
          operator: 'anyOf',
          values: folderIds
        }
      ]
    }).map(r => {
      const name = r.getValue('name')!
      const folder = {
        type: "folder",
        id: r.id,
        name,
        parent: root,
        absoluteName: name
      } as AbstractFile
      return folder
    }) : []

  const files = folderResults.concat(fileResults)
  buildAbsoluteNames(files, rootAbsoluteName)
  return files
}

function buildAbsoluteNames(files: AbstractFile[], rootAbsoluteName: string) {
  files.forEach(f => {
    const pname = getParentAbsoluteName(f, files, rootAbsoluteName)
    f.absoluteName = pname + '/' + f.name
  })
}
function getParentAbsoluteName(f: AbstractFile, allFiles: AbstractFile[], rootAbsoluteName: string): string {
  if (!f.parent) {
    return rootAbsoluteName
  }
  const parent = find(allFiles, p => p.id === f.parent)
  if (!parent || !parent.absoluteName) {
    // console.log(`Warning, file parent not found: ${f.name} ${f.id}`)
    return rootAbsoluteName+'/unknown'+counter++
  }
  if (!parent.absoluteName) {
    return getParentAbsoluteName(parent, allFiles, rootAbsoluteName)
  }
  return parent.absoluteName
}
let counter = 0

interface Config extends AbstractConfig {
  type?: FileType
  filter?: FilePredicate
}

export function lsTest() {
  ls({ root: '3742', rootAbsoluteName: '/SuiteScripts/DeployExtensions' })
  .sort((a, b)=>a.absoluteName.localeCompare(b.absoluteName))
  .forEach(f => {
    console.log(`${f.absoluteName} ${f.type} ${f.id} ${f.parent}`);

  })
}
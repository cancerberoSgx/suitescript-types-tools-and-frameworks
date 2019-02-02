export interface AbstractFile {
  id: string
  parent?: string
  name: string
  type: FileType
  absoluteName: string
}
export type FileType = 'file'|'folder'

export interface Folder extends AbstractFile {
  type: 'folder'
}

export interface File extends AbstractFile {
  type: 'file'
}

export interface AbstractConfig {
  root?: string
  rootAbsoluteName?: string
}
export type FilePredicate = (f:AbstractFile)=>boolean
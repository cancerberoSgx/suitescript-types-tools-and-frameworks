import * as file from 'N/file';
import { ReactLike } from "../../jsx/createElement";
import { find } from '../../search/typedSearch/typedSearchOperations';
import { App, Route } from '../app';
import { redirect } from 'N/redirect';

export function serveFileRoute(app: App): Route {
  return {
    name: 'serveFile',
    handler(o) {
      const { name, folderId } = o.params
      let fileId: string|undefined = o.params.fileId
      const outputMode: 'content'|'url'|'redirectToUrl' = o.params.outputMode || 'content'
      // let contents : string|undefined
      if(!fileId && name && folderId){
        const result = find({
          type: 'file',
          columns: [{name: 'name'}, {name: 'folder'}],
          filters: [
            { name: 'name', values: name,  operator: 'contains' },
          {name: 'folder', values:folderId, operator: 'anyOf'}
        ]
        }, r => true);
        if (result) {
          fileId = result.id
        }
      }
      if(fileId){
        const fileObject = file.load({id: fileId})
        if(fileObject){
          if(outputMode==='url'){
            return fileObject.url
          }
          else if(outputMode==='redirectToUrl'){
            return redirect({url: fileObject.url}) 
          }
          else {
            return fileObject.getContents()
          }
          
        }
      }
      // if(contents){
      //   return contents
      // }
      // else{
        return <div>File {name} {folderId} not found</div>;
      // }
    }
  };
}

// export function addFile(config: {})

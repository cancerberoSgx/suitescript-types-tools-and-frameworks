import { RecordId } from '../record/recordRef';
import { AbstractFile, AbstractConfig } from './types';

// glob(parentFolder, '**/*.js') will return a list of all files/folders matching the glob

interface Config extends AbstractConfig{
  glob: string
}

export function glob(config: Config): AbstractFile[] {
throw 1
}
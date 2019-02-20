import { currentHistory } from './applicationSetup';
import { ReactWrapper } from 'enzyme';
import { wait } from './waitUtil';

export
async function navigate(wrapper:ReactWrapper, path: string) {
  currentHistory!.push(path);
  await wait(10);
  wrapper.update();
}


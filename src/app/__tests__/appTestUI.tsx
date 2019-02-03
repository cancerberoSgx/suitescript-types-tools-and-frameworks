import { ReactLike } from "../../jsx/createElement";
import { ReactLikeChild } from '../../jsx/jsx';
import { RenderLinkOptions, fetchAndRenderHtmlFragmentHandlerString, RenderFragmentOptions } from '../app';

interface Class extends Partial<CSSStyleDeclaration> { }
interface IClasses {
  [k: string]: Class
  button: Class,
  primaryButton: Class
}
function getStyles() {
  const button: Class = {
    border: '2px solid pink',
    padding: '5px'
  };
  // this class extends another:
  const primaryButton: Class = {
    ...button,
    color: 'red',
    fontWeight: 'bolder'
  };
  const styles: IClasses = {
    button,
    primaryButton
  };
  return styles;
}

// const Button = (props: {
//   className?: 'button' | 'primaryButton';
//   children?: ReactLikeChild | ReactLikeChild[];
// }) => <button className={props.className || ''}></button>;

interface FetchAndRenderHtmlFragment extends RenderLinkOptions {
  selector: string
}
interface MainPageProps {
  userName: String
  categories: { name: string, id: string }[]
  // fetchAndRenderHtmlFragment(options: FetchAndRenderHtmlFragment): void
}

declare function fetchAndRenderHtml(config: RenderFragmentOptions):void

const MainPage = (props: MainPageProps, children: ReactLikeChild[]) => {
  // const h = props.fetchAndRenderHtmlFragment;
  return <article>
    <script>{fetchAndRenderHtmlFragmentHandlerString()}</script>
    <h1>Welcome {props.userName}</h1>
    <p>Search for categories by name: 
      <input id="categoryName" placeholder="parent" value="parent"></input>
    <button onClick={e => fetchAndRenderHtml({
      routeName: 'findCategory',
      params: { categoryName: document.querySelector<HTMLInputElement>('#categoryName')!.value },
      selector: '#results'
    })}>search</button></p>
    <button onClick={e => fetchAndRenderHtml({
      routeName: 'listCategories',
      params: {},
      selector: '#resultsList'
    })}>list all categories</button>
    <p>Result by name: </p>
    <div id="results"></div>
    <p>Result list all </p>
    <div id="resultsList"></div>
  </article>
}

export function renderMainPage(props: MainPageProps): string {
  return ReactLike.render(<MainPage userName={props.userName} categories={props.categories} 
    // fetchAndRenderHtmlFragment={props.fetchAndRenderHtmlFragment}
    ></MainPage>)
}

interface C{
  name?: string, parent?: string, url?: string, id?: string
}
interface LC {
cats: C[]
}
const ListCategories = (props: LC)=> <ul>
  {props.cats.map(c=><li>{c.name} {c.url} parent: {c.parent} id: {c.id}</li>)}
</ul>

export function renderListCategories(props: LC): string {
  return ReactLike.render(<ListCategories cats={props.cats}     ></ListCategories>)
}
// {name: ''/* document.querySelector('#categoryName').value as string */}
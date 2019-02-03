import { ReactLike } from "../../jsx/createElement";
import { ReactLikeChild } from '../../jsx/jsx';
import { RenderLinkOptions, RenderFragmentOptions } from "../browserCode";

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

interface MainPageProps {
  userName: String
  categories: { name: string, id: string }[]
  renderLink(config: RenderLinkOptions): string
}

declare function fetchAndRenderHtml(config: RenderFragmentOptions): void
// declare function buildLink(config: RenderLinkOptions): string

export const MainPage = (props: MainPageProps, children: ReactLikeChild[]) => {
  return <article>
    <h1>Welcome {props.userName}</h1>
    Interesting links: <ul>
      <li><a href={props.renderLink({ routeName: 'recordView', params: { id: '7', type: 'commercecategory' } })}>category 7 record view</a></li>
    </ul>
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




interface Category {
  name?: string, parent?: string, url?: string, id?: string
}
interface CategoryList {
  renderLink(config: RenderLinkOptions): string
  cats: Category[]
}
export const CategoryList = (props: CategoryList) => <ul>
  {props.cats.map(c => <li>
    {c.name} {c.url} parent: {c.parent} id: {c.id}
    <a href={props.renderLink({ routeName: 'recordView', params: { id: c.id + '', type: 'commercecategory' } })}>link</a>
  </li>)}
</ul>
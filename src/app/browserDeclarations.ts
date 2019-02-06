interface RenderLinkOptions{
  routeName: string;
  params: {[k:string]:any};
}

interface RenderFragmentOptions extends RenderLinkOptions {
  selector: string;
}

declare function buildRouteUrl(config: RenderLinkOptions): string;

declare function getBindInputValue<T extends InputValue= InputValue, InputValue extends string | number | Date | boolean | string[] | number[] =  string | number | Date | boolean | string[] | number[], ElType extends HTMLInputElement&HTMLSelectElement = HTMLInputElement&HTMLSelectElement>(listenerElementOrInputElementOrKeyOrInputElementSelector: ElType|string, config?: {
  asString?: boolean,
}): T | undefined
declare function getBindData<T>(key: string): T | undefined
declare function getBindDataOrThrow<T>(key: string): T

declare function fetchAndRenderHtml(config: RenderFragmentOptions): void

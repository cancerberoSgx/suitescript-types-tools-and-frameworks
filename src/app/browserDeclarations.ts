interface RenderLinkOptions{
  routeName: string;
  params: {[k:string]:any};
}
declare function buildRouteUrl(config: RenderLinkOptions): string;
declare function getBindInputValue<T extends string | number | Date = string>(listenerEl: HTMLElement, config?: {
  dateAsString?: boolean
  // isSelect?: boolean
}): T | undefined;
declare function getStoreData<T>(listenerEl: HTMLElement): T | undefined;

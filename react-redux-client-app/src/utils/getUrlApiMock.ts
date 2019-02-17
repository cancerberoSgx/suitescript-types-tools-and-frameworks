export function getUrlApiMock(method: string, url: string): string {
  if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__type=item') && url.includes('__app__seeValues=true') && url.includes('__app__showSublistLines=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=463&__app__type=inventoryitem&__app__seeValues=true&__app__showSublistLines=true.json`;
  }
  else if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__type=item') && !url.includes('__app__seeValues=true') && !url.includes('__app__showSublistLines=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=463&__app__type=inventoryitem.json`;
  }
  else if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__type=item') && url.includes('__app__seeValues=true') && url.includes('__app__showSublistLines=true') && url.includes('__app__showAllFields=true')) {
    url = `ajaxResponseMocks/__app__routeParamName__app__routeParamName=recordViewJson&__app__id=463&__app__type=inventoryitem&__app__showAllFields=true&__app__seeValues=true&__app__showSublistLines=true.json`;
  }
  else if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__seeValues=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=2&__app__type=commercecategory&__app__seeValues=true.json`;
  }
  else if (url.includes('__app__routeParamName=recordViewJson') && !url.includes('__app__seeValues=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=2&__app__type=commercecategory.json`;
  }
  else if (url.includes('__app__routeParamName=listRecordTypesJson')) {
    url = `ajaxResponseMocks/__app__routeParamName=listRecordTypesJson&__app__type=commercecategory&__app__pageSize=5.json`;
  }
  else if (url.includes('__app__routeParamName=searchViewJson')) {
    url = `ajaxResponseMocks/__app__routeParamName=searchViewJson&__app__type=item&__app__pageSize=16.json`;
  }
  return url
}

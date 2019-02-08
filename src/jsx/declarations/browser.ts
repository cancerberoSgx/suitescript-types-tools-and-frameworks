
declare function getBindInputValue<T extends InputValue, InputValue extends string | number | Date | boolean | string[] | number[] =  string | number | Date | boolean | string[] | number[], ElType extends HTMLInputElement&HTMLSelectElement = HTMLInputElement&HTMLSelectElement>(listenerElementOrInputElementOrKeyOrInputElementSelector: ElType|string, config?: {
  asString?: boolean,
}): T | undefined

declare function getBindData<T>(key: string): T | undefined

declare function getBindDataOrThrow<T>(key: string): T

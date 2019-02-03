
export type StatelessComponentProps<P> = (Readonly<{ children?: JSX.Element }> & Readonly<P> )

export interface IStatelessComponent<P={}> {
  readonly props: StatelessComponentProps<P>
  render(): JSX.Element
}

/** 
 * let declare custom tag components with classes instead of functions. 
 * Notice that differently than React's, it doesn't ake any sense to support state in SuiteScript 
 * back end's scripts (suitelet, restlet, etc). 
 * 
 * TODO: what about client scripts ?  
 */

export class StatelessComponent<P={}> implements IStatelessComponent<P> {
  constructor(public readonly props:  StatelessComponentProps<P>){
    this.props = props
  }
  render(): JSX.Element {
    throw new Error('Not Implemented')
  }
}


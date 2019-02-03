
export type StatelessComponentProps<P> = (Readonly<{ children?: JSX.Element }> & Readonly<P> )

export interface IStatelessComponent<P={}> {
  readonly props: StatelessComponentProps<P>
  render(): JSX.Element
}

/** 
 * Let declare custom tag components with classes instead of just functions or variables.
 *  
 * Notice that differently than React's, it doesn't make any sense to support component's state in SuiteScript 
 * back end's scripts (suitelet, restlet, etc) so it's no included. TODO: what about client scripts ?  
 */

export class StatelessComponent<P={}> implements IStatelessComponent<P> {
  constructor(public readonly props:  StatelessComponentProps<P>){
    this.props = props
  }
  render(): JSX.Element {
    throw new Error('Not Implemented')
  }
}


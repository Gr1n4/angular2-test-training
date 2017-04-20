export interface IAppState {
  counter: number
}

export function rootReducer(state: IAppState, action: {type: string, payload: any}): IAppState {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state);
      return {counter: state.counter + 1}
    default:
      return state;
  }
}

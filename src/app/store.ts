export interface IAppState {
  counter: number
}

export function rootReducer(state: IAppState, action: {type: string, payload: object}): IAppState {
  switch (action.type) {
    case 'INCREMENT':
      return {counter: state.counter + 1}
    default:
      return state;
  }
}

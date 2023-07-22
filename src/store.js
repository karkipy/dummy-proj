import { createStore, combineReducers } from 'redux';
import { createSelector, createReducer, createHydrator, schema, record } from '@sharingapples/redux';


const user = record('user');
const roomboard = record('profile');
const project = record('dashboard');


const roomBoardItemsList = schema('roomBoardItemsList', 1);


const appState = {
  user,
  roomboard,
  project,
  roomBoardItemsList,
}

const hydrator = createHydrator(appState, () =>{
});
const reducer = hydrator.enhanceReducer(combineReducers(createReducer(appState)));
const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT_REQUEST') {
      // for all keys defined in your persistConfig(s)
      state = {
        'homepage': state.homepage,
      };
  }
  return reducer(state, action);
};
export const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

async function hydrateStore() {

}

hydrateStore();


export const getState = store.getState;
export const dispatch = store.dispatch;
export const useSelector = createSelector(appState, store, (a, b) => a === b);
export const userRecord = user.getActor(dispatch);
export const roomboardRecord = roomboard.getActor(dispatch);
export const projectRecord = project.getActor(dispatch);
export const roomBoardItemsListSchema = roomBoardItemsList.getAction();




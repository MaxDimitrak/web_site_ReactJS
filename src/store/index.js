import { createStore } from 'redux';
import {addUserNameReducer} from './addUserNameReducer'


export const store = createStore(addUserNameReducer)
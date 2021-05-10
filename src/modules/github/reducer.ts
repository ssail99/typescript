import {createReducer} from 'typesafe-actions'
import { getUserProfileAsync } from './action';
import { AsyncState, createAsyncReducer, transformToArray } from './reducerUtil';
import { GithubAction, GithubState } from './types'


const initialState:GithubState={
    userProfile: AsyncState.initial()
};
const github = createReducer<GithubState, GithubAction>
(initialState).handleAction(transformToArray(getUserProfileAsync), createAsyncReducer(getUserProfileAsync, 'userProfile'));


export default github

import { ActionType } from 'typesafe-actions'
import { GithubProfile } from '../../api/github';
import * as actions from './action'
import { AsyncState } from './reducerUtil';

export type GithubAction = ActionType<typeof actions>;
export type GithubState = {
    userProfile : AsyncState<GithubProfile, Error>;};

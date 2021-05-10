
import {Dispatch} from 'redux';

import {PayloadActionCreator} from 'typesafe-actions'
type AnyPromiseCreator =(...params: any[])=>Promise<any>;
type AnyAsyncActionCreator ={ request:
    PayloadActionCreator<any,any>,success:PayloadActionCreator<any,any>,failure:PayloadActionCreator<any,any>}

export default function createAsyncThunk<
A extends AnyAsyncActionCreator,
F extends AnyPromiseCreator>
(ansyActioncreator:A,  promiseCreator:F ) {
    type Params = Parameters<F>;
    return function thunk(...params:Params){
        return async(dispath:Dispatch)=>{
            const {request, success, failure}= ansyActioncreator;
            dispath(request(undefined));
            try{
                dispath(success(request))
            }
            catch(e){
                dispath(failure(e))

            }
        }
    }

}
import { ActionType, getType, PayloadActionCreator } from "typesafe-actions"

export type AsyncState <T,E =any>={
    loading :boolean;
    data: T |null;
    error : E| null;


}

export const AsyncState ={
    initial:<T,E>(initialData?:T): AsyncState<T,E> =>({
        loading:false,
        data:initialData || null,
        error:null

    }),
    load:<T,E>(data?:T): AsyncState<T,E> =>({
        loading:true,
        data: data || null,
        error:null

    }),
    success:<T,E>(data:T): AsyncState<T,E> =>({
        data,
        loading:false,
        error:null

    }),
    error:<T,E>(error:E): AsyncState<T,E> =>({
        error,
        loading:false,
        data: null,

    })
}

type AnyAsyncActionCreator ={ request:any,success:PayloadActionCreator<any,any>,failure:PayloadActionCreator<any,any>}
export function transformToArray<AC extends AnyAsyncActionCreator>(asyncActionCreator:AC){
    const {request, success, failure} =asyncActionCreator;
    return [request, success, failure]
}

export function createAsyncReducer<S, AC extends AnyAsyncActionCreator ,K extends keyof S>(asyncActionCreator:AC, key:K){
    return (state:S, action :ActionType<AC>)=>{
        const [request, success, failure] = transformToArray(asyncActionCreator).map(getType);

        switch(action.type){
            case request:
                return{
                    ...state,
                    [key]:AsyncState.load()
                };
            case success:
                return{
                    ...state,
                    [key]:AsyncState.success(action.payload)
                };
            case failure:
                return{
                    ...state,
                    [key]:AsyncState.error(action.payload)
                };    
            default: return state

    }
    }

}


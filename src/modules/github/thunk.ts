import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./action";

export function getUserProfileThunk (username:string){
    return async(dispath:Dispatch)=>{
        const {request, success, failure}=getUserProfileAsync;
        dispath(request());
        try {
            const userProfile = await getUserProfile(username);
            dispath(success(userProfile));

        }
        catch(e){
            dispath(failure(e));
        }
    };
}
import { type } from "@testing-library/user-event/dist/type";
import { types } from "./types";

export function asyncGetOffensiveQuoteAction(name){
    return async function(dispatch){

        dispatch({type:types.LOADING})

        try{
            const response = await fetch(`https://api.agify.io/?name=${name}`)
            const data = await response.json()
            dispatch({
                type:types.SUCCESS,
                payload:{
                    id: data.count,
                    name: data.name,
                    age: data.age
                }
            })
        } catch(e){
            dispatch({
                type:types.FAIL,
                payload:'Failed to find age'
            })
        }

    }
}


export function changeInputAction(name){
    return{
        type: types.VALUE,
        payload: name
    }
}
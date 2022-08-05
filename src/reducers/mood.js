import {CHANGE_MOOD} from "../constants/action-types-constants"

const mood=(state="happy", action)=>{


    switch(action.type)
    {
      case CHANGE_MOOD:
         return action.mood
         
       default:
         return state
    }
}

export {mood};
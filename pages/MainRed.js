const Initial=0
export const Mainred=(state=Initial,action)=>{
    switch(action.type)
    {
        case "Inc":
            {
                return state+action.val
                break;
            }
        case "Dec":{
            return state+action.val
            break
        }

        default: return state
        
    }

}
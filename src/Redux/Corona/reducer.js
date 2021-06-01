import { CORONA_API_CALL_FAIL, CORONA_API_CALL_REQUEST, CORONA_API_CALL_SUCCESS,
     FILTER_CORONA_DATA} from "./actionType"
     import { SAVE_DATA_LS } from "../Economy/actionType"
const initState = {

    isLoading: false,
    isError: false,
    data: [],
    filter_data: [],
    sort_view: []
}

const coronaReducer = ( state = initState, { type, payload } ) => {
    
    switch(type){

        case CORONA_API_CALL_REQUEST:{

            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case CORONA_API_CALL_SUCCESS: {

            return{
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }

        case CORONA_API_CALL_FAIL: {

            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case FILTER_CORONA_DATA:{
            const newData = state.data.filter((item) => {
                if(item.image != null){
                    return item
                }
            })
            return{
                ...state,
                filter_data: [...state.filter_data , newData]
            }
        }

        case SAVE_DATA_LS:{
          localStorage.setItem("corona", JSON.stringify(state.filter_data))

            return{
                ...state
            }
        }

        default:
            return state
    }
}

export {coronaReducer}
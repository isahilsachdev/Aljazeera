import { OPINION_API_CALL_FAIL, OPINION_API_CALL_REQUEST, OPINION_API_CALL_SUCCESS,
     FILTER_OPINION_DATA} from "./actionType"
     import { SAVE_DATA_LS } from "../Economy/actionType"
const initState = {

    isLoading: false,
    isError: false,
    data: [],
    filter_data: [],
    sort_view: []
}

const opinionReducer = ( state = initState, { type, payload } ) => {

    console.log("from reducer  ", type, state.data)

    switch(type){

        case OPINION_API_CALL_REQUEST:{

            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case OPINION_API_CALL_SUCCESS: {

            return{
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }

        case OPINION_API_CALL_FAIL: {

            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case FILTER_OPINION_DATA:{
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
          localStorage.setItem("opinion", JSON.stringify(state.filter_data))

            return{
                ...state
            }
        }

        default:
            return state
    }
}

export {opinionReducer}
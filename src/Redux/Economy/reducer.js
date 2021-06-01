import { ECONOMY_API_CALL_FAIL, ECONOMY_API_CALL_REQUEST, ECONOMY_API_CALL_SUCCESS,
     FILTER_ECO_DATA, SAVE_DATA_LS} from "./actionType"

const initState = {

    isLoading: false,
    isError: false,
    data: [],
    filter_data: [],
}

const economyReducer = ( state = initState, { type, payload } ) => {

    switch(type){

        case ECONOMY_API_CALL_REQUEST:{

            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case ECONOMY_API_CALL_SUCCESS: {

            return{
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }

        case ECONOMY_API_CALL_FAIL: {

            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case FILTER_ECO_DATA:{
            const newData = state.data.filter((item) => {
                if(item.image != null){
                    return item
                }
            })
            return{
                ...state,
                filter_data: newData
            }
        }

        case SAVE_DATA_LS:{
           localStorage.setItem("eco", JSON.stringify(state.data))

            return{
                ...state
            }
        }

        default:
            return state
    }
}

export {economyReducer}
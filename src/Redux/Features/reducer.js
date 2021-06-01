import { FEATURES_API_CALL_FAIL, FEATURES_API_CALL_REQUEST, FEATURES_API_CALL_SUCCESS, FILTER_FEA_DATA, SAVE_DATA_FEA_LS } from "./actionType"

const initState = {
    fea_filter_data: [],
    fea_data: [],
    isLoading: false,
    isError: false
}

const featuresReducer = ( state = initState,  { type, payload } ) => {

    switch(type){

        case FEATURES_API_CALL_REQUEST:{

            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case FEATURES_API_CALL_SUCCESS: {

            return{
                ...state,
                isLoading: false,
                isError: false,
                fea_data: payload
            }
        }

        case FEATURES_API_CALL_FAIL: {

            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case FILTER_FEA_DATA:{
            const newData = state.fea_data.filter((item) => {
                if(item.image != null){
                    return item
                }
            })
            return{
                ...state,
                fea_filter_data: newData
            }
        }

        case SAVE_DATA_FEA_LS: {

            localStorage.setItem("fea", JSON.stringify(state.fea_data))

            return{
                ...state
            }
        }

        default:
            return state
    }
}

export {featuresReducer}
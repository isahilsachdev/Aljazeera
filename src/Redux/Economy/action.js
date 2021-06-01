import { ECONOMY_API_CALL_FAIL, ECONOMY_API_CALL_REQUEST, ECONOMY_API_CALL_SUCCESS, FILTER_ECO_DATA, SAVE_DATA_LS} from "./actionType"
import Axios from "axios"


const saveDataInLocalStorage = () => {

    return{
        type: SAVE_DATA_LS
    }
}

const economyCallRequest = () => {

    return{
        type: ECONOMY_API_CALL_REQUEST
    }
}

const economyCallSuccess = (payload) => {

    return{
        type: ECONOMY_API_CALL_SUCCESS,
        payload
    }
}

const economyCallFail = () => {

    return{

        type: ECONOMY_API_CALL_FAIL
    }
}

const filterEcoData = () => {

    return{
        type: FILTER_ECO_DATA
    }
}

const getEconomyData = () => dispatch => {

    dispatch( economyCallRequest() )

    return Axios.get(process.env.REACT_APP_BASE_URL, {
    })
    .then((res) => {
        dispatch( economyCallSuccess(res.data) )
        return { success: true }
    })
    .catch((err) => {
        dispatch( economyCallFail() )
        return { success: false }
    })
}

const incViewCount = (data) => dispatch => {

    const payload = {
        view: data.view
    }
    const url = process.env.REACT_APP_BASE_URL
    return Axios.patch(`${url}/${data.id}`, payload)
    .then((res) => {
        return {success: true}
    })
    .catch((err) => {
        dispatch( economyCallFail() )
        return {success: false}
    })
}

export { getEconomyData, filterEcoData, saveDataInLocalStorage, incViewCount}
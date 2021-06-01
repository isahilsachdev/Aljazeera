import { FEATURES_API_CALL_FAIL, FEATURES_API_CALL_REQUEST, FEATURES_API_CALL_SUCCESS, FILTER_FEA_DATA, SAVE_DATA_FEA_LS } from "./actionType"
import Axios from "axios"


const saveDataInLocalStorageFea = () => {

    return{
        type: SAVE_DATA_FEA_LS
    }
}

const featuresCallRequest = () => {

    return{
        type: FEATURES_API_CALL_REQUEST
    }
}

const featuresCallSuccess = (payload) => {

    return{
        type: FEATURES_API_CALL_SUCCESS,
        payload
    }
}

const featuresCallFail = () => {

    return{

        type: FEATURES_API_CALL_FAIL
    }
}

const filterFeaData = () => {

    return{
        type: FILTER_FEA_DATA
    }
}

const getfeaturesData = () => dispatch => {

    dispatch( featuresCallRequest() )

    return Axios.get(process.env.REACT_APP_FEATURES_URL, {
    })
    .then((res) => {
        dispatch( featuresCallSuccess(res.data) )
        return { success: true }
    })
    .catch((err) => {
        dispatch( featuresCallFail() )
        return { success: false }
    })
}

const incFeaViewCount = (data) => dispatch => {

    const payload = {
        view: data.view
    }
    const url = process.env.REACT_APP_FEATURES_URL
    return Axios.patch(`${url}/${data.id}`, payload)
    .then((res) => {
        return {success: true}
    })
    .catch((err) => {
        dispatch( featuresCallFail() )
        return {success: false}
    })
}

export { getfeaturesData, filterFeaData, saveDataInLocalStorageFea, incFeaViewCount}
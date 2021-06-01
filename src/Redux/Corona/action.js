import { CORONA_API_CALL_FAIL, CORONA_API_CALL_REQUEST, CORONA_API_CALL_SUCCESS, FILTER_CORONA_DATA, SAVE_DATA_LS} from "./actionType"
import Axios from "axios"


const saveDataInLocalStorage = () => {

    return{
        type: SAVE_DATA_LS
    }
}

const coronaCallRequest = () => {

    return{
        type: CORONA_API_CALL_REQUEST
    }
}

const coronaCallSuccess = (payload) => {

    return{
        type: CORONA_API_CALL_SUCCESS,
        payload
    }
}

const coronaCallFail = () => {

    return{

        type: CORONA_API_CALL_FAIL
    }
}

const filterCoronaData = () => {

    return{
        type: FILTER_CORONA_DATA
    }
}

const getCoronaData = () => dispatch => {

    dispatch( coronaCallRequest() )

    return Axios.get(process.env.REACT_APP_BASE2_URL, {
    })
    .then((res) => {
        console.log(res)
        dispatch( coronaCallSuccess(res.data) )
        return { success: true }
    })
    .catch((err) => {
        console.log(err)
        dispatch( coronaCallFail() )
        return { success: false }
    })
}

const incViewCount = (data) => dispatch => {

    const payload = {
        view: data.view
    }
    const url2 = process.env.REACT_APP_BASE2_URL
    console.log(url2)
    return Axios.patch(`${url2}/${data.id}`, payload)
    .then((res) => {
        dispatch( getCoronaData() )
        console.log(res )

        return {success: true}
    })
    .catch((err) => {
        dispatch( coronaCallFail() )
        return {success: false}
    })
}

export { getCoronaData, filterCoronaData, saveDataInLocalStorage, incViewCount}
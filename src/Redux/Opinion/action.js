import { OPINION_API_CALL_FAIL, OPINION_API_CALL_REQUEST, OPINION_API_CALL_SUCCESS, FILTER_OPINION_DATA, SAVE_DATA_LS} from "./actionType"
import axios from "axios"


const saveDataInLocalStorage = () => {

    return{
        type: SAVE_DATA_LS
    }
}

const opinionCallRequest = () => {

    return{
        type: OPINION_API_CALL_REQUEST
    }
}

const opinionCallSuccess = (payload) => {

    return{
        type: OPINION_API_CALL_SUCCESS,
        payload
    }
}

const opinionCallFail = () => {

    return{

        type: OPINION_API_CALL_FAIL
    }
}

const filterOpinionData = () => {

    return{
        type: FILTER_OPINION_DATA
    }
}

const getOpinionData = () => dispatch => {

    dispatch( opinionCallRequest() )

    return axios.get("https://fast-lake-64955.herokuapp.com/opinion", {
    })
    .then((res) => {
        console.log(res)
        dispatch( opinionCallSuccess(res.data) )
        return { success: true }
    })
    .catch((err) => {
        console.log(err)
        dispatch( opinionCallFail() )
        return { success: false }
    })
}

const incViewCount = (data) => dispatch => {

    const payload = {
        view: data.view
    }
    const url3 = "https://fast-lake-64955.herokuapp.com/opinion"
    console.log(url3)
    return axios.patch(`${url3}/${data.id}`, payload)
    .then((res) => {
        dispatch( getOpinionData() )
        console.log(res )

        return {success: true}
    })
    .catch((err) => {
        dispatch( opinionCallFail() )
        return {success: false}
    })
}

export { getOpinionData, filterOpinionData, saveDataInLocalStorage, incViewCount}
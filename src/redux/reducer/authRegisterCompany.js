const initialState = {
    loading: false,
    data: {},
    error: null,
    isRegister: false
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "REGISTER_COMPANY_REQUEST":
            return {...state, loading: true}
        case "REGISTER_COMPANY_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isRegister:false}
        case "REGISTER_COMPANY_SUCCESS":
            return {...state, loading: false, data:action.payload, error: null, isRegister:true}           
        default:
            return state
    }
}

export default Fetch
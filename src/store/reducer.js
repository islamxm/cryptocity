import Cookies from "js-cookie";



const initState = {
    lang: 'en',
    token: Cookies.get('cryptocity-lk-token') ? Cookies.get('cryptocity-lk-token') : null ,
    userInfo: null
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LANG':
  
            return {
                ...state,
                lang: action.lang
            }
        case 'TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'USER_INFO':
            return {
                ...state,
                userInfo: action.userInfo
            }
        default:
            return state;
    }
}

export default reducer;
import Cookies from "js-cookie";



const initState = {
    lang: 'en',
    token: Cookies.get('cryptocity-lk-token') ? Cookies.get('cryptocity-lk-token') : null ,
    userInfo: null,
    mobMenu: false
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
        case 'MOB_MENU':
            return {
                ...state,
                mobMenu: action.bool
            }
        default:
            return state;
    }
}

export default reducer;
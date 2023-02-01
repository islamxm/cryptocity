const initState = {
    lang: 'en'
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LANG':
  
            return {
                ...state,
                lang: action.lang
            }
        default:
            return state;
    }
}

export default reducer;
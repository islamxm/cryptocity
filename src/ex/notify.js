import {toast} from 'react-toastify';
import {VscError} from 'react-icons/vsc';
import {AiOutlineCheckCircle,  AiOutlineInfoCircle} from 'react-icons/ai';

const types = {
    error: 'ERROR',
    success: 'SUCCESS',
    info: 'INFO'
}


const switchType = (type) => {
    switch(type) {
        case types.error:
            return {
                icon: <VscError color='red'/>,
                themeColor: 'red'
            }
        case types.success:
            return {
                icon: <AiOutlineCheckCircle color='green'/>,
                themeColor: 'green'
            }
        case types.info:
            return {
                icon: <AiOutlineInfoCircle color="var(--aqua)"/>,
                themeColor: 'var(--aqua)'
            }
        default:
            return {
                icon: null,
                themeColor: 'var(--aqua)'
            }
    }
}


const notify = (text, type = types.success) => {
    toast(text, {
        icon: switchType(type)?.icon,
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        progressStyle: {
            backgroundColor: switchType(type)?.themeColor
        } ,
        style: {
            borderRadius: 15,
            backgroundColor: 'var(--light_bg)',
            padding: 15
        },
    })
}

export default notify;
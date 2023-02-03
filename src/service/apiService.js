import endpoints from "./endpoints";

const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
}


class apiService {

    registration = async (body) => {
        try {
            let res = await fetch(endpoints.registration, {
                method: 'POST',
                body: JSON.stringify(body),
                headers,
                // mode: 'no-cors'
            })
            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    // registrationConfirm = async () => {
    //     try {
    //         let res = await fetch(endpoints.registrationConfirm, {
    //             method: 'POST',
    //             headers
    //         })

    //         return await res.json()
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    auth = async (body) => {
        try {
            let res = await fetch(endpoints.auth, {
                method: 'POST',
                body:JSON.stringify(body),
                // headers
            })

            return await res.text();
        } catch(err) {
            console.log(err)
        }
    }

    resetPass = async (body) => {
        try {
            let res = await fetch(endpoints.resetPassword, {
                method: 'POST',
                body: JSON.stringify(body),
                headers
            }) 
            return await res.json()
        } catch(err) {
            console.log(err)
        }
    } 
}

export default apiService;
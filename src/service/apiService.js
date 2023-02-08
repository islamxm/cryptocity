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
                // headers,
                // mode: 'no-cors'
            })
            return await res.text()
        } catch(err) {
            console.log(err)
        }
    }

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

    logout = async (token) => {
        try {
            let res = await fetch(endpoints.logout, {
                method: 'POST',
                body: JSON.stringify({
                    UserToken: token
                }),
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


    getUserBalance = async (token) => {
        try {
            let res = await fetch(`${endpoints.getUserBalance}`, {
                method: 'POST',
                // headers: {
                //     ...headers,
                // },
                body: JSON.stringify({
                    UserToken: token
                })
            })

            return await res.json();
        } catch(err) {
            console.log(err)
        }
    } 

    getReferals = async (token) => {
        try {
            let res = await fetch(endpoints.getReferals, {
                method: 'POST',
                body: JSON.stringify({
                    UserToken: token
                })
            })
            return await res.json();
        } catch(err) {
            console.log(err)
        }
    }

    collectRef = async (token) => {
        try {
            let res = await fetch(endpoints.collectRef, {
                method: 'POST',
                body: JSON.stringify({
                    UserToken: token
                })
            })
            return await res.text()
        } catch(err) {
            console.log(err)
        }
    }
}

export default apiService;
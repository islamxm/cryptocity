import endpoints from "./endpoints";
import checAuth from "./checkAuth";
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
            const r = await checAuth(res);
            return r?.text()

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

            const r = await checAuth(res);
            return r?.text()
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
            const r = await checAuth(res);
            return r?.text()
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
            const r = await checAuth(res);
            return r?.json()
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

            const r = await checAuth(res);
            return r?.json()
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
            const r = await checAuth(res);
            return r?.json()
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
            const r = await checAuth(res);
            return r?.text()
        } catch(err) {
            console.log(err)
        }
    }

    // Вот url: https://cryptocitygame.ru/merchant/merchant/index.php
    // Передавал GET-запрос, в headers указывал: X-Requested-With = XMLHttpRequest
    // Тип данных application/json

    // В теле запроса указывал:

    // {
    //     "currency":"TRX",
    //     "amount":"6",
    //     "order":7739,
    //     "date":"12.02.2023, 18:17:36"
    // }

    // в ответ придёт:
    // {
    //     "result": true,
    //     "amount": "6",
    //     "currency": "TRX",
    //     "order": 7740,
    //     "date": "12.02.2023, 18:17:36",
    //     "address": "TNq8xP49P7tdw9MurRsUQy1YgVwJxprGk6",
    //     "txn_id": "TNq8xP49P7tdw9MurRsUQy1YgVwJxprGk6"
    // }

    // createPay = async (currency, amount, order, date) => {
    //     try {
    //         let res = await fetch(endpoints.createPay + `?currency=${currency}&amount=${amount}&order=${order}&date=${date}`, {
    //             method: 'GET',
    //             headers: {
    //                 "X-Requested-With": "XMLHttpRequest"
    //             }
    //         })

    //         return await res.json();
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    createTransaction = async (body) => {
        try {
            let res = await fetch(endpoints.createTransaction, {
                method: 'POST',
                // headers,
                body: JSON.stringify(body)
            })

            const r = await checAuth(res);
            return r?.json();
            
        } catch(err) {
            console.log(err)
        }
    }

    createPay = async (body) => {
        try {
            let res = await fetch(endpoints.payment, {
                method: 'POST',
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify(body)
            })  
            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }
}

export default apiService;

const BASE_DOMAIN = 'https://cryptocitygame.ru/';
const PATH = `${BASE_DOMAIN}Libs/PersonalCabinet/`;


const endpoints = {
    registration: `${PATH}Registration.php`,
    registrationConfirm: `${PATH}RegistrationConfirm.php`,
    auth: `${PATH}Authorization.php`,
    logout: `${PATH}LogOut.php`,
    resetPassword: `${PATH}ResetPassword.php`,
    getUserBalance: `${PATH}GetUserBalance.php`,
    getReferals: `${PATH}GetReferrals.php`,
    collectRef: `${PATH}CollectReferralsReward.php`,
    createPay: `${BASE_DOMAIN}/merchant/merchant/index.php`,
    createTransaction: `${PATH}CreateTransaction.php`,
    payment: `${PATH}Payment/index.php`,
}
    
export default endpoints;
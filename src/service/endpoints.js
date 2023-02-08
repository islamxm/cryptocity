
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
    collectRef: `${PATH}CollectReferralsReward.php`
}

export default endpoints;
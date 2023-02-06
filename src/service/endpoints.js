
const BASE_DOMAIN = 'https://cryptocitygame.ru/';
const PATH = `${BASE_DOMAIN}Libs/PersonalCabinet/`;


const endpoints = {
    registration: `${PATH}Registration.php`,
    registrationConfirm: `${PATH}RegistrationConfirm.php`,
    auth: `${PATH}Authorization.php`,
    resetPassword: `${PATH}ResetPassword.php`,
    getUserBalance: `${PATH}GetUserBalance.php`
}

export default endpoints;
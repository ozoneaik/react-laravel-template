import axiosClient from "../axios.js";

// API ลงทะเบียน
export const signUpApi = (name, email, password, password_confirmation, onPassed) => {
    axiosClient.post('/signup', {name, email, password, password_confirmation,})
        .then(({data, status}) => {
            console.log(data, status);
            onPassed(data, status);
        }).catch((error) => {
            console.log(error.response.data.message, error.response.status);
            onPassed(error.response.data, error.response.status);
        }
    );
}

// API เข้าสู่ระบบ
export const signInApi = (email, password, onPassed) => {
    axiosClient.post('/signin', {email, password})
        .then(({data, status}) => {
            console.log(data, status);
            onPassed(data, status);
            onPassed(data, status);
        }).catch((error) => {
            console.log(error.response.data.message, error.response.status);
            onPassed(error.response.data, error.response.status);
        }
    );
}

// API ออกจากระบบ
export const signOutApi = (onPassed) => {
    axiosClient.post('/signout')
        .then(({data, status}) => {
            console.log(data, status);
            onPassed(data, status);
        }).catch((error) => {
            console.log(error.response.data.message, error.response.status);
            onPassed(error.response.data, error.response.status);
        }
    );
}

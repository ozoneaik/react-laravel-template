import axiosClient from "../axios.js";

export const profileApi = (onPassed) => {
    axiosClient.get('/me')
        .then(({data, status}) => {
            onPassed(data, status)
        }).catch((error) => {
            onPassed(error.response.data, error.response.status);
        }
    );
}

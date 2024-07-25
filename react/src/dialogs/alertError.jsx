import Swal from "sweetalert2";

import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
export const alertError = (title='เกิดข้อผิดพลาด',text) => {
    MySwal.fire({
        icon : 'error',
        title,
        text,
    }).then(r => {
        console.log('alert error', r);
    });
}

import Swal from "sweetalert2";

import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
export const alertSuccess = (title='สำเร็จ', text='ออกจากระบบสำเร็จ') => {
    MySwal.fire({icon: "success", title, text})
        .then(r => {
            console.log('alert Success', r);
        });
}

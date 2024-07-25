import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
export const alertsQuestions = (title, text, onPassed) => {
    MySwal.fire({
        icon: "question",
        title : <span style={{fontWeight : "bold",textDecoration : "underline"}}>Test</span>,
        text,
        showCancelButton: true,
        confirmButtonText : 'ตกลง',
    }).then((result) => {
        if (result.isConfirmed) {
            onPassed(true);
        }
    })
}

import { toast } from "react-toastify";

const toastMessage = (message) =>
  toast(message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  });

export default toastMessage;

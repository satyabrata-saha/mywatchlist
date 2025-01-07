import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Status = () => {
  const toastMessage = (message) =>
    toast(message, {
      theme: "dark",
      autoClose: 2000,
      position: "bottom-right",
    });

  return (
    <div>
      Status
      <ToastContainer />
    </div>
  );
};

export default Status;

import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../context";
const StripeCallback = () => {
  const {
    state: { user },
    dispatch
  } = useContext(Context);

  useEffect(() => {
    if (user) {
        console.log(user);
      axios.post("/api/get-account-status").then((res) => {
       dispatch({
        type: "LOGIN",
        payload :res.data,
        
       })

       window.localStorage.setItem("user",JSON.stringify(res.data));
      window.location.href = "/instructor";
      });
    }
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
          color: "red",
        }}
      >
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default StripeCallback;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../resources/default-layout.css";

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("moneytrack-user_info"));
  const navigate = useNavigate();

  return (
    <>
      <div className="layout">
        <div className="header d-flex justify-content-between align-items-center">
          <div>
            <h1 className="logo">MONEY TRACK</h1>
          </div>
          <div className="header-user">
            <div>{user?.name}</div>
            <i
              className="ri-logout-box-r-line header-logout"
              onClick={() => {
                localStorage.removeItem("moneytrack-user_info");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>

        <div className="content">{props.children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;

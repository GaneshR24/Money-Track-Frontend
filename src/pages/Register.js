import React from "react";
import { useState, useEffect } from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";
import Logo from "../../src/logo/Logo_4.jpg";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post(
        "https://moneytrack-app.onrender.com/api/users/register",
        values
      );
      message.success("Registration Successfull");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("moneytrack-user_info")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="auth-layout">
        <div className="auth-conatiner">
          <div className="auth-header">
            <div>
              <img src={Logo} alt="logo" className="auth-header-logo" />
            </div>
            <h1 className="auth-header-title">Welcome to MoneyTrack</h1>
            <p className="auth-header-subtitle">Create your account</p>
          </div>
          <div className="auth-body">
            <Form layout="vertical" onFinish={onFinish} className="auth-form">
              <Form.Item label="Name" name="name" className="input-field">
                <Input
                  type="text"
                  placeholder="Name"
                  className="input-control"
                />
              </Form.Item>
              <Form.Item label="Email" name="email" className="input-field">
                <Input
                  type="email"
                  placeholder="Email"
                  className="input-control"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="input-field"
              >
                <Input
                  type="password"
                  placeholder="Password"
                  className="input-control"
                />
              </Form.Item>
              <button className="btn-submit mt-2" type="submit">
                <span className="btn-text">REGISTER</span>
              </button>
            </Form>
            <p className="text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="link-text-center">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      {loading && <Spinner />}
    </>
  );
};

export default Register;

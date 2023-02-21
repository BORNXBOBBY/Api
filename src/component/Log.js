import React from "react";
import { useState } from "react";
import "./Log.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Log() {
  const [userName, setUserName] = useState();
  const [Password, setPassword] = useState();

  var navigate = useNavigate();
  const handleLoginData = (e) => {
    e.preventDefault();
    if (userName === "Bobby123" && Password === "1234") {
      // alert("login");
      navigate("/");
    } else {
      // alert('not login')
      navigate("/log");
    }
  };
  return (
    <>
      <Navbar />
      <form
        onSubmit={(e) => handleLoginData(e)}
        style={{ marginTop: "15vh", background: "white", height: "400px" }}
      >
        <label for="name">
          Username:
        </label>
        <input  onChange={(e) => setUserName(e.target.value)} type="text" id="name" name="user_name" />

        <label  for="password">
          Password:
        </label>
        <input onChange={(e) => setPassword(e.target.value)}
          style={{ backgroundColor: "cyan", padding: "15px" }}
          type="password"
          id="password"
          name="user_password"
        />

        <button
          type="submit"
          className="hov"
          style={{
            margin: "auto",
            background: "black",
            width: "50%",
            border: "red 5px solid",
            borderRadius: "40px",
            padding: "10px",
            marginTop: "10px",
            color: "white",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

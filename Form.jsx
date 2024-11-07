import React from "react";
import "./form.css";

function login() {
  const [emails, setEmails] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [data, steData] = React.useState([]);

  const formSubmint = (e) => {
    e.preventDefault();

    setEmails("");
    setPass("");
    if (emails === "zia123" && pass === "zia123") {
      alert("login successfull email and password");
      steData([...data, { emails, pass }]);
    } else {
      alert("not valide email and pass");
    }
    console.log(data);
  };
  function emailsChange(e) {
    setEmails(e.target.value);
  }
  function passChange(e) {
    setPass(e.target.value);
  }

  return (
    <>
      <div className="form">
        <div className="formHeader">
          <div className="formBox">
            <h1>login from </h1>
            <input
              className="inputStyling"
              type="email"
              placeholder="email.com"
              value={emails}
              onChange={emailsChange}
            />
            <br></br>
            <input
              className="inputStyling"
              type="password"
              placeholder="password"
              value={pass}
              onChange={passChange}
            />
            <br></br>

            <button className="btn" onClick={formSubmint}>
              submint
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;

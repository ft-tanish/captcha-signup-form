import "./App.css";
import { useState, useEffect } from "react";
import useCaptcha from "./useCaptcha";

function App() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha, captchaInput, setCaptchaInput, captchaValid, setCaptchaValid, handleCaptchaInput, generateCaptcha] = useCaptcha();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaValid) {
      alert("Sign up successful!");
      setUsername("");
      setEmail("");
      setPassword("");
      setCaptcha("");
      setCaptchaInput("");
      setCaptchaValid(false);
      generateCaptcha();
    } else {
      alert("Invalid captcha");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange=
            {(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group captcha">
          <label htmlFor="captcha-label">Captcha</label>
          <label htmlFor="captcha">{captcha}</label>
          <input
            type="text"
            id="captcha"
            value={captchaInput}
            onChange={handleCaptchaInput}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={!captchaValid}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default App;


import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faLock, faPlus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = ({ username, password, setUsername, setPassword, handleRegister, showPassword, togglePasswordVisibility }) => {

  return (
    <div className="auth-form">
      <h2>Create a new account</h2>
      <div className="input-container">
        <Input
          label="Username"
          type="text"
          value={username}
          setValue={setUsername}
          icon={faUser}
          className="input-element"
        />
      </div>
      <div className="input-container password-input">
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          setValue={setPassword}
          icon={faLock}
          className="input-element"
        />
        {(
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      <Button
        label="Sign Up"
        className="sign-in-button"
        onClick={handleRegister}
        icon={faPlus}
      />
    </div>
  );
};

export default Register;

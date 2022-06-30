import React, { useState, useContext } from "react";
import { AuthContext } from '../../context/authContext/AuthContext';
import { TextInput, Button, Modal } from '@mantine/core';
import { At, Eye } from 'tabler-icons-react';
import { login } from "../../context/authContext/apiCalls";
import Register from "../Register/Register";

const Login = ({ opened, setOpened }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);
  const [registerOpened, setRegisterOpened] = useState(false);

  // The handleLogin function uses the login API call from context,
  // the email and password are passed in to verify.
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    setOpened(false);
  }

  // The showRegister function will close the login modal,
  // and then open the register modal.
  const showRegister = () => {
    setOpened(false)
    setRegisterOpened(true);
  }
  
  return (
    <>

    <Register
    registerOpened={registerOpened}
    setRegisterOpened={setRegisterOpened}
    />
    
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title="Login To Your Account"
    size="lg"
    >

      <TextInput
      placeholder="Enter your email"
      label="Email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      size="md"
      icon={<At size={14} />}
      required
      />

      <TextInput
      placeholder="Enter your password"
      label="Password"
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      size="md"
      icon={<Eye size={14} />}
      type="password"
      required
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button type="Submit" size="sm" onClick={handleLogin} disabled={isFetching} style={{ marginRight: '5px' }} color="gray">Login</Button>
        <Button type="Submit" size="sm" onClick={() => showRegister()} color="indigo">Not A User?</Button>
      </div>
      
    </Modal>
    </>
  )
}

export default Login;
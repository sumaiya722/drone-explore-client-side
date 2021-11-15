// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useContexts from '../../Components/hooks/useContexts.js';

const Login = () => {
  const { authInfo } = useContexts();
  const { googleSignIn } = authInfo;

  const { newUser, setNewUser,login } = authInfo;
  // const [newUser, setNewUser] = useState({})
  function inputChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    const extractedUser = { ...newUser }
    extractedUser[name] = value;
    setNewUser(extractedUser);
    // console.log(newUser)
  }
  function logInHandler(e) {
    login()
    e.target.reset()
    e.preventDefault()
  }
    return (
        <>
            <Container style={{
                height: "calc(100vh -56px)",
                display: "flex",
                alignItems: "center",
            justifyContent:"center"
        }}>
          <img className="m-4 p-4" src="data:image/jpeg;base64,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" alt="" />
                <div style={{maxWidth:"500px",width:'100%'}} >
                    <h2 >Login</h2>
                    <Form onSubmit={logInHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={inputChangeHandler} name='email' type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={inputChangeHandler} type="password" name='password' placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" className="w-100" type="submit">
    Login
  </Button>
                    </Form>
                    <p>New user? <Link to='/signup'>Register now</Link></p>
                    <p className="text-center">----------------------or-------------------</p>
                    <button onClick={googleSignIn} className="btn btn-primary w-50 ">Login with Google</button>
               </div>
            </Container>
        </>
    );
};

export default Login;
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
// import {auth,provider} from '../firebase';
// import {signInWithPopup} from 'firebase/auth';
// import { async } from "@firebase/util";

// const Containers=styled.div`
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   height:calc(100vh - 56px);
//   color:${({theme})=>theme.text}
// `;

// const Wrapper=styled.div`
//   display:flex;
//   align-items:center;
//   flex-direction: column;
//   background-color:${({theme})=>theme.bgLighter};
//   border:1px solid ${({theme})=>theme.soft};
//   padding:20px 50px;
//   gap:10px;
// `;

// const Title=styled.h1`
//   font-size:24px;
// `;

// const SubTitle=styled.h2`
//   font-size:20px;
//   font-weight:300;
// `;

// const Input=styled.input`
//   border:1px solid ${({theme})=>theme.soft};
//   border-radius:3px;
//   padding:5px;
//   background-color:transparent;
//   width:100%;
//   color: ${({ theme }) => theme.text};
// `;

// const Button=styled.button`
//   border-radius:3px;
//   border:none;
//   padding:5px 15px;
//   font-weight:500;
//   cursor:pointer;
//   background-color:${({theme})=>theme.soft};
//   color:${({theme})=>theme.textSoft}

// `;

// const More=styled.div`
// display: flex;
// margin-top: 10px;
// font-size: 12px;
// color: ${({ theme }) => theme.textSoft};
// `;


// const Links=styled.div`
//   margin-left: 40px;
// `;

// const Linke = styled.span`
//   margin-left: 20px;
// `;


// const Signin = () => {

//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const dispatch=useDispatch()

//   const navigate=useNavigate()


// const handleLogin = async (e) => {
//   e.preventDefault();
//   dispatch(loginStart()); // Dispatching action to indicate login start
//   try {
//     // Try to sign in as a regular user
//     const res = await axios.post('/api/auth/signin', { name, password });
//     console.log(res.data);
//     dispatch(loginSuccess(res.data)); // Dispatching action upon successful login
//   } catch (error) {
//     // If regular user sign-in fails, attempt admin sign-in
//     try {
//       const adminRes = await axios.post('/api/auth/adminsignin', { name, password });
//       console.log(adminRes.data);
//       dispatch(loginSuccess(adminRes.data)); // Dispatching action upon successful admin login
//     } catch (error) {
//       dispatch(loginFailure()); // Dispatching action upon login failure
//     }
//   }
// };


// // const handleSignup= async (e) => {
// //     // dispatch(loginStart())
// //     try {
// //       // axios.post('/api/auth/signin',{Username,password})
// //       axios.post('/api/auth/signup',{name,password,email})
// //       .then((res)=>{
// //           console.log(res.data);
// //           console.log("signup successfully");
// //       }).catch((err)=>{
// //             console.log(err);
// //             // dispatch(loginFailure());
// //         })
// //     } catch (error) {
// //       //
// //     }  
// // }

//   const signInWithGoogle= async ()=>{
//     dispatch(loginStart())
//     signInWithPopup(auth,provider)
//     .then((result)=>{
//       console.log(result);
//       axios.post("/api/auth/google",{
//         name:result.user.displayName,
//         email:result.user.email,
//         img:result.user.photoURL,
//       }).then((res)=>{
//         dispatch(loginSuccess(res.data))
//       })
//     })
//     .catch((error)=>{
//       dispatch(loginFailure())
//     });
//   };

  
//   const handlesignups=async (e)=>{
//     navigate(`/signup`);
// }

//   return (
//     <Containers>
//       <Wrapper>
//         <Title>
//           Sign In
//         </Title>
//         <SubTitle>To continue to </SubTitle>
//         <Input placeholder='username'
//           onChange={(e)=>setName(e.target.value)}
//         />
//         <Input type='password' placeholder='password'
//           onChange={(e)=>setPassword(e.target.value)}
//         />
//         <Button
//           onClick={handleLogin}
//         >Sign in</Button>
//         <Button onClick={signInWithGoogle}>SignIn with Google</Button>
        
//         <More>
//         English(usa)
//         <Links>
//           <Linke>Help</Linke>
//           <Linke>Privecy</Linke>
//           {/* <Link to="signup" style={{textDecoration:"none",color:"inherit"}}>
//               Signup
//           </Link> */}
//           <p>
//             Already have an account?<Button onClick={handlesignups}>Sign up Here</Button>
//           </p>
          
//         </Links>
//       </More>
//       </Wrapper>
      
//     </Containers>
//   )
// }

// export default Signin;


import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import  {useNavigate}  from 'react-router-dom';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color:${({theme})=>theme.text}
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  color:${({theme})=>theme.text}
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  width: 100%;
  margin-bottom: 10px;
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;
  color: white;
`;

const More = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-top: 10px;
`;

const UseLinks=styled.span`
  color:blue;
`;

const LinkText = styled.span`
  margin-left: 10px;
`;

const Message = styled.p`
  margin-top: 20px;
  color: ${({ theme, type }) => (type === 'error' ? theme.error : theme.success)};
`;



const Signin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); // State to manage message content
  const dispatch = useDispatch();
  const navigate=useNavigate()


  const [GiveMessage, setGiveMessage] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginStart());

  //   try {
  //     const res = await axios.post('/api/auth/signin', { name, password });
  //     dispatch(loginSuccess(res.data));
  //     setMessage({ text: 'Sign in successful', type: 'success' }); // Set success message
  //   } catch (error) {
  //     dispatch(loginFailure());
  //     setMessage({ text: 'Invalid username or password', type: 'error' }); // Set error message
  //   }
  // };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart()); // Dispatching action to indicate login start
    try {
      // Try to sign in as a regular user
      const res = await axios.post('/api/auth/signin', { name, password });
      console.log(res.data);
      dispatch(loginSuccess(res.data)); // Dispatching action upon successful login
      setGiveMessage(name,"login successfully");
    } catch (error) {
      // If regular user sign-in fails, attempt admin sign-in
      // Redirect to appropriate page after successful login
      if (name === "Admin") {
        navigate(`/AdminHome`);
      } else {
        navigate(`/`); // Redirect to home page for regular users
      }
      setGiveMessage(error);
      try {
        const adminRes = await axios.post('/api/auth/adminsignin', { name, password });
        console.log(adminRes.data);
        dispatch(loginSuccess(adminRes.data)); // Dispatching action upon successful admin login
        setGiveMessage(name,"login successfully");

        if(name==="Admin"){
          navigate(`/AdminHome`);
        }
      } catch (error) {
        dispatch(loginFailure()); // Dispatching action upon login failure
        setGiveMessage(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios.post('/api/auth/google', {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        }).then((res) => {
          dispatch(loginSuccess(res.data));
          setMessage({ text: 'Sign in successful', type: 'success' }); // Set success message
        });
      })
      .catch((error) => {
        dispatch(loginFailure());
        setMessage({ text: 'Google sign-in failed', type: 'error' }); // Set error message
      });
  };

  const handlesignups=async (e)=>{
    navigate(`/signup`);
  } 

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To continue to your account</SubTitle>
        {message && <Message type={message.type}>{message.text}</Message>} {/* Render message if exists */}
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/ForgotPassword">Forgot Password?</Link>
        <Button onClick={handleLogin}>Sign In</Button>
        <GoogleButton onClick={signInWithGoogle}>Sign In with Google</GoogleButton>
        {GiveMessage && <p style={{ color: 'green', textAlign: 'center' }}>{GiveMessage}</p>}
        <More>
          <p>
            Don't have an account? <UseLinks onClick={handlesignups}>Sign up Here</UseLinks>
          </p>
          <Links>
            <LinkText>Help</LinkText>
            <LinkText>Privacy</LinkText>
          </Links>
        </More>
      </Wrapper>
    </Container>
  );
};

export default Signin;

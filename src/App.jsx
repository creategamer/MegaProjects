import styled, { ThemeProvider } from "styled-components"
import Menu from "./componenets/Menu";
import Navbar from "./componenets/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Video from './pages/Video';
import Signin from "./pages/Signin";
import Help from "./pages/Help";
import Blogs from "./pages/Blogs";
import Bloging from "./pages/Bloging";
import UploadBlogs from "./pages/UploadBlogs";
import Tweet from "./pages/Tweet";
import { useSelector } from 'react-redux';
import AdminHome from "./Admin/AdminHome";
import FeedbackPage from "./pages/Feedback";
import ProfilePage from "./pages/Profile";
import AdminProfile from "./Admin/AdminProfile";
import AdminUserPanel from "./Admin/UserProfile";
import BasicControls from "./Admin/BasicControls";
import Subscription from "./pages/Subscription";
import Library from "./Libraray/Library";
import Tweets from "./Tweets/Tweets";
import Signup from "./pages/Signup";
import History from "./History/History";
import Search from "./pages/Search";
import SubscribedVideo from "./subscribedVideo/SubscribedVideo";
import NewsComponent from "./News/NewsComponets";
import Music from "../../mediahub/models/Music";
import MusicComponents from "./Music/MusicComponents";
import UploadMusic from "./Music/UploadMusic";
import MusicPart from "./Music/MusicPart";
import ForgotPassword from "./componenets/ForgotPassword";


const Container=styled.div`
  display:flex;
`;

const Main= styled.div`
  flex:7;
  background-color:${({theme})=>theme.bg};
  
`;
const Wrapper=styled.div`
  padding:22px 96px;
`;

function App() {
  
  const [darkMode,setDarkMode]=useState(true)

  const { currentUser } = useSelector((state) => state.user);

  return(
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
  <Container>
    <BrowserRouter>    
    <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Main>
      <Navbar/>
      <Wrapper>
        <Routes>
          <Route path="/">
              <Route index  element={<Home type="random"/>} />
              <Route path="trends" element={<Home type="trend"/>} />
              {/* <Route path="subscriptions" element={<Home type="sub"/>} /> */}
              <Route path="Help" element={<Help/>}/>
              <Route path="signup" element={<Signup />} /> {/* Move Signup route outside of Signin route */}
              
              {/* <Route
                    path="signin"
                    element={currentUser ? <Home type="random"/> : <Signin />}
              > */}

              <Route
                path="signin"
                element={
                  currentUser ? (
                    currentUser.name === "Admin" ? (
                      <AdminHome/>
                    ) : (
                      <Home type="random" />
                    )
                  ) : (
                    <Signin />
                  )
                }
              >

              </Route>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="bloging">
              {/* blog/find */}
              <Route path=":id" element={<Bloging/>} />    
            </Route>
            <Route path="uploadBlogs" element={<UploadBlogs/>}/>
            <Route path="video">
              {/* videos find/find */}
              <Route path=":id" element={<Video/>} />    
            </Route>
            {/* <Route path="tweet" element={<Tweet/>}/> */}
            <Route path="tweet" element={<Tweets/>}/>
            <Route path="ForgotPassword" element={<ForgotPassword/>}/>
            
            <Route path="tweet" element={<Tweets/>}/>
            <Route path="music" element={<MusicComponents/>}/>
            <Route path="musicPart">
              {/* music/find */}
              <Route path=":id" element={<MusicPart/>} />    
            </Route>
            <Route path="uploadmusic" element={<UploadMusic/>}/>
            
            <Route path="News" element={<NewsComponent/>}/>

            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="subs" element={<Subscription/>}/>
            {/* <Route path="Library" element={<Library/>}/> */}
            <Route path="Library" element={<SubscribedVideo/>}/>
            <Route path="history" element={<History/>}/>
                
            <Route path="feedback" element={<FeedbackPage/>}/>
            
            <Route path="AdminHome" element={<AdminHome/>}/>
            
            <Route path="UserProfile" element={<AdminUserPanel/>}/>
            <Route path="AdminProfile" element={<AdminProfile/>}/>
            <Route path="basicControls" element={<BasicControls/>}/>
            <Route path="search" element={<Search/>} />
          </Route>
        </Routes>
      </Wrapper>
    </Main>
    </BrowserRouter>
  </Container>

  </ThemeProvider>
  )
}

export default App;

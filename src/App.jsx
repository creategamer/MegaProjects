import styled, { ThemeProvider } from "styled-components"
import Menu from "./componenets/Menu";
import Navbar from "./componenets/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from './pages/Video.jsx';
import Signin from "./pages/Signin.jsx";
import Help from "./pages/Help.jsx";
import Blogs from "./pages/Blogs.jsx";
import Bloging from "./pages/Bloging.jsx";
import UploadBlogs from "./pages/UploadBlogs.jsx";
import Tweet from "./pages/Tweet.jsx";
import { useSelector } from 'react-redux';
import AdminHome from "./Admin/AdminHome.jsx";
import FeedbackPage from "./pages/Feedback.jsx";
import ProfilePage from "./pages/Profile.jsx";
import AdminProfile from "./Admin/AdminProfile.jsx";
import AdminUserPanel from "./Admin/UserProfile.jsx";
import BasicControls from "./Admin/BasicControls.jsx";
import Subscription from "./pages/Subscription.jsx";
import Library from "./Libraray/Library.jsx";
import Tweets from "./Tweets/Tweets.jsx";
import Signup from "./pages/Signup.jsx";
import History from "./History/History.jsx";
import Search from "./pages/Search.jsx";
import SubscribedVideo from "./subscribedVideo/SubscribedVideo.jsx";
import NewsComponent from "./News/NewsComponets.jsx";
// import Music from "../../mediahub/models/Music";
import MusicComponents from "./Music/MusicComponents.jsx";
import UploadMusic from "./Music/UploadMusic.jsx";
import MusicPart from "./Music/MusicPart.jsx";
import ForgotPassword from "./componenets/ForgotPassword.jsx";


const Container = styled.div`
  display:flex;
`;

const Main = styled.div`
  flex:7;
  background-color:${({ theme }) => theme.bg};
  
`;
const Wrapper = styled.div`
  padding:22px 96px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  {/* <Route path="subscriptions" element={<Home type="sub"/>} /> */}
                  <Route path="Help" element={<Help />} />
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
                          <AdminHome />
                        ) : (
                          <Home type="random" />
                        )
                      ) : (
                        <Signin />
                      )
                    }
                  >

                  </Route>
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="bloging">
                    {/* blog/find */}
                    <Route path=":id" element={<Bloging />} />
                  </Route>
                  <Route path="uploadBlogs" element={<UploadBlogs />} />
                  <Route path="video">
                    {/* videos find/find */}
                    <Route path=":id" element={<Video />} />
                  </Route>
                  {/* <Route path="tweet" element={<Tweet/>}/> */}
                  <Route path="tweet" element={<Tweets />} />
                  <Route path="ForgotPassword" element={<ForgotPassword />} />

                  <Route path="tweet" element={<Tweets />} />
                  <Route path="music" element={<MusicComponents />} />
                  <Route path="musicPart">
                    {/* music/find */}
                    <Route path=":id" element={<MusicPart />} />
                  </Route>
                  <Route path="uploadmusic" element={<UploadMusic />} />

                  <Route path="News" element={<NewsComponent />} />

                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="subs" element={<Subscription />} />
                  {/* <Route path="Library" element={<Library/>}/> */}
                  <Route path="Library" element={<SubscribedVideo />} />
                  <Route path="history" element={<History />} />

                  <Route path="feedback" element={<FeedbackPage />} />

                  <Route path="AdminHome" element={<AdminHome />} />

                  <Route path="UserProfile" element={<AdminUserPanel />} />
                  <Route path="AdminProfile" element={<AdminProfile />} />
                  <Route path="basicControls" element={<BasicControls />} />
                  <Route path="search" element={<Search />} />
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

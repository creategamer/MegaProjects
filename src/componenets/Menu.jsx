import React from 'react'
import styled from "styled-components"
import logos from "../img/mediahub5.png"

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
// import { FaMusic } from "react-icons/fa6";
// import { MdOutlineSportsSoccer } from "react-icons/md";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { TbMovie } from "react-icons/tb";
// import { FaRegNewspaper } from "react-icons/fa";
// import { MdLiveTv } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { VscReport } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBookReader } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { HiOutlineSaveAs } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

const Container=styled.div`
    flex:1;
    background-color:${({theme})=>theme.bgLighter};
    height:100vh;
    color:${({theme})=>theme.text};
    font-size:14px;
    position:sticky;
    top:0;
`;

const Wrapper=styled.div`
    padding:18px 26px;

`;

const Logo = styled.div`
    font-size: 22px;
    font-weight: bold;
    // color: ${({ theme }) => theme.logoColor};
    color:#8000ff;
    text-shadow: 4px 6px 8px rgba(0, 0, 2, 0.3); /* Add a subtle text shadow */
    transition: transform 0.3s ease; /* Add transition effect on hover */
    cursor: pointer;
    padding-bottom:25px;

  &:hover {
    transform: scale(1.05); /* Scale up slightly on hover */
  
    }
`;

const Img=styled.img`
    height:35px;
    width:130px;
`;

const Item=styled.div`
    display:flex;
    align-items:center;
    gap:19px;
    cursor:pointer;
    padding:7px 0px;
    font-weight:bold;

    &:hover{
        background-color:${({theme})=>theme.soft}
    }
`;

const Hr=styled.hr`
    margin:15px 0px;
    border:0.5px solid ${({theme})=>theme.soft};

`;
const Login=styled.div`

`;

const Button=styled.button`
    padding:5px 15px;
    background-color:transparent;
    border:1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius:3px;
    font-weight:500;
    margin-top:10px;
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:5px;
`;


const Title=styled.h2`
    font-size:14px;
    font-weight:500;
    color:#aaaaaa;
    margin-bottom:20px;
`




function Menu({darkMode,setDarkMode}) {

    const {currentUser}=useSelector((state)=>state.user)

        return (
            <Container>
                <Wrapper>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>Media Hub</Logo>
                    </Link>

                    {currentUser ? (
                        <>
                            {currentUser.name === "Admin" ? (
                            <Link to="/AdminHome" style={{ textDecoration: "none", color: "inherit" }}>
                                <Item>
                                <IoHomeOutline />Admin Home
                                </Item>
                            </Link>
                            ) : (
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                <Item>
                                <IoHomeOutline /> Home
                                </Item>
                            </Link>
                            )}
                        </>
                        ) : (
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <Item>
                            <IoHomeOutline /> Home
                            </Item>
                        </Link>
                    )}

                    {currentUser ? (
                        <div>
                            {currentUser.name === "Admin" ?  (
                                <>
                                {/* <Link to="UserProfile" style={{textDecoration:"none",color:"inherit"}}>
                                    <Item>
                                        <IoHomeOutline />User Profile
                                    </Item>
                                </Link> */}
                                </>
                            ) : (
                                <>
                                <Link to="trends" style={{textDecoration:"none",color:"inherit"}}>
                                    <Item>
                                        <MdOutlineExplore />
                                            Trending 
                                    </Item>
                                </Link>
                                </>
                            )}                                    
                        </div>
                        ) : (
                            <>
                            <Link to="trends" style={{textDecoration:"none",color:"inherit"}}>
                                <Item>
                                    <MdOutlineExplore />
                                        Trending 
                                    </Item>
                                </Link>
                            </>
                    )}

                    {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <>
                                        <Link to="AdminProfile" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <CgProfile />Admin profile
                                            </Item>
                                        </Link>
                                        </>
                                        ) : (
                                            <>
                                            <Link to="subs" style={{textDecoration:"none",color:"inherit"}}>
                                                <Item>
                                                <ImProfile /> User profile
                                                </Item>
                                            </Link>
                                            </>
                                            )}                                    
                                </div>
                                    ) : (
                                    <></>
                )}

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <>
                                        <Link to="basicControls" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                                <FaUsersBetweenLines />Basic Controls
                                            </Item>
                                        </Link>
                                        <Hr/>
                                        </>
                                        ) : (
                                            <>
                                            <Link to="Library" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                                <MdOutlineVideoLibrary /> Subscription
                                            </Item>
                                            </Link>
                                            </>
                                            )}                                    
                                </div>
                                    ) : (<>
                                        {/* <Link to="Library" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                                <MdOutlineVideoLibrary /> Subscription
                                            </Item>
                                            </Link> */}
                                            </>
                )}

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (<></>
                                        // <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                                        //     <Item>
                                        //         <IoHomeOutline />Admin 
                                        //     </Item>
                                        // </Link>
                                        ) : (
                                            <>
                                            <Link to="history" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <HiOutlineSaveAs /> Like & Saved
                                            </Item>
                                        </Link>
                                            <Hr/>
                                            </>
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                        {/* <Link to="history" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <HiOutlineSaveAs /> Like & saved
                                            </Item>
                                        </Link> */}
                                        <Hr/>
                                        </>
                )}

                {!currentUser &&  
                    <>
                        <Login>
                            Sign in to like videos,comments and subscribe.
                            <Link to="signin" style={{textDecoration:"none"}}>
                                <Button><FaRegUserCircle />SIGN IN</Button>
                            </Link>

                        </Login>
                        <Hr/>        
                    </>
                }
                

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (<>
                                            <Link to="blogs" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <FaBookReader />
                                                    Blogs 
                                            </Item>
                                        </Link>
                                        </>
                                            )}                                    
                                </div>
                                    ) : (<>
                                        <Link to="blogs" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <FaBookReader />
                                                    Blogs 
                                            </Item>
                                        </Link>
                                        </>
                )}

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (
                                            <>
                                            <Link to="uploadBlogs" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <FaUpload />
                                                    Upload Blogs
                                            </Item>
                                            </Link>
                                            <Hr/>  
                                            </>  
                                            )}                                    
                                </div>
                                    ) : (<>
                                        {/* <Link to="uploadBlogs" style={{textDecoration:"none",color:"inherit"}}>
                                        <Item>
                                        <FaUpload />
                                                Upload Blogs
                                        </Item>
                                        </Link>
                                        <Hr/>   */}
                                        </>
                )}

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (<>
                                            <Link to="music" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                                <CiMusicNote1 />
                                                    Music 
                                            </Item>
                                        </Link>
                                        </>
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                        <Link to="music" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <CiMusicNote1 />
                                                    Music
                                            </Item>
                                        </Link>
                                        </>
                )}

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (<>
                                            <Link to="uploadMusic" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <PiMusicNotesPlusFill />
                                                    Upload Music
                                            </Item>
                                            </Link>
                                            <Hr/>  
                                            </>
                                            )}                                    
                                </div>
                                    ) : (
                                    <>
                                        {/* <Link to="uploadMusic" style={{textDecoration:"none",color:"inherit"}}>
                                        <Item>
                                        <PiMusicNotesPlusFill />
                                                Upload Music
                                        </Item>
                                        </Link> */}
                                    </>
                )}

                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (
                                            <>
                                            <Link to="tweet" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <FaUsersBetweenLines />
                                                    Community 
                                            </Item>
                                            </Link>
                                            
                                        </>   
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                            {/* <Link to="tweet" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <FaUsersBetweenLines />
                                                    Tweet 
                                            </Item>
                                            </Link> */}
                                            
                                        </>
                )}


                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (
                                            <>
                                            <Link to="News" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <IoNewspaperOutline />
                                                    News
                                            </Item>
                                            </Link>
                                            <Hr/>
                                        </>   
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                            <Link to="News" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <IoNewspaperOutline />
                                                    News 
                                            </Item>
                                            </Link>
                                            <Hr/>   
                                        </>
                )}    
                
                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (
                                            <>
                                            <Link to="profile" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <CgProfile />
                                                    Edit Profile
                                            </Item>
                                            </Link>
                                            <Hr/>
                                        </>   
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                            
                                        </>
                )}  
                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (
                                            <>
                                            <Link to="feedback" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                            <VscFeedback />

                                                Feedback
                                            </Item>
                                            </Link>
                                        </>   
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                            {/* <Link to="feedback" style={{textDecoration:"none",color:"inherit"}}>
                                                <Item>
                                                <VscFeedback />

                                                    Feedback
                                                </Item>
                                            </Link> */}
                                        </>
                )}  

                {/* {currentUser ? (
                    <div>
                        {currentUser.name === "Admin" ?  (
                            <div></div>
                            ) : (
                            <>
                            <Link to="Help" style={{textDecoration:"none",color:"inherit"}}>
                            <Item>
                                <CiSettings /> Help
                            </Item>
                            </Link>
                            </>   
                        )}                                    
                    </div>
                        ) : (
                            <>
                                <Link to="Help" style={{textDecoration:"none",color:"inherit"}}>
                                    <Item>
                                        <CiSettings /> Help
                                    </Item>
                                </Link>
                            </>
                )}   */}


                {currentUser ? (
                                <div>
                                    {currentUser.name === "Admin" ?  (
                                        <div></div>
                                        ) : (
                                            <>
                                            {/* <Link to="profile" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                                <IoIosHelpCircleOutline /> Help
                                            </Item>
                                            </Link>                                             */}
                                        </>   
                                            )}                                    
                                </div>
                                    ) : (
                                        <>
                                            {/* <Link to="profile" style={{textDecoration:"none",color:"inherit"}}>
                                            <Item>
                                                <IoIosHelpCircleOutline /> Help
                                            </Item>
                                            </Link>
                                             */}
                                        </>
                )}  


                    {/* Add other menu items */}

                    <Item onClick={() => setDarkMode(!darkMode)}>
                        <MdOutlineLightMode /> {darkMode ? "Light" : "Dark"} Mode
                    </Item>
                </Wrapper>
            </Container>

          );            
};

export default Menu;

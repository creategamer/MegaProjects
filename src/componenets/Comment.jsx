// import React from 'react';
// import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { format } from 'timeago.js';

// const Container = styled.div`
//     display: flex;
//     gap: 10px;
//     margin: 30px 0px;
// `;

// const Avatar = styled.img`
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
// `;

// const Details = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     color: ${({ theme }) => theme.text};
// `;


// const Text = styled.span`
//     font-size: 14px;
// `;

// const Comment = ({ comment }) => {

//     const {currentUser}=useSelector((state)=>state.user);
//     console.log(currentUser);
//     console.log("this is comments");
//     console.log(comment.userId);
//     return (
//         <Container>
//             {/* <Avatar src={comment.user.img} /> */}
//             <Details>
//                 {/* Check if currentUser matches comment userId */}
//                 {currentUser._id === comment.userId ? (
//                     <>
//                     <Text>{currentUser.name}:: {comment.desc}  -{format(currentUser.createdAt)}</Text>
                    
//                     </>
//                 ) : (
//                     <Text>{comment.desc}</Text>
//                 )}
//             </Details>
//         </Container>
//     );
// };

// export default Comment;
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';
import { FaRegCircleUser } from "react-icons/fa6";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 20px 0;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const StyledIcon = styled(FaRegCircleUser)`
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  color:${({theme})=>theme.textSoft}; /* Example: Change color to red */
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Name = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
`;

const CommentText = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
`;

const Timestamp = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
`;

const Comment = ({ comment }) => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <Container>
            
            {currentUser.img ? (
                            <Avatar src={currentUser._id === comment.userId ? currentUser.img : '/default-avatar.jpg'} alt="Avatar" />
                                ) : (
                                //<FaRegCircleUser  /> // Adjust icon size based on type
                                <StyledIcon /> // Adjust icon size and color based on your requirements
            )}
            
            <Details>
                <Name>{currentUser._id === comment.userId ? "you" : currentUser.name}</Name>
                <CommentText>{comment.desc}</CommentText>
                <Timestamp>{format(comment.createdAt)}</Timestamp>
            </Details>
        </Container>
    );
};

export default Comment;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Comment from './Comment';
import { FaRegCircleUser } from "react-icons/fa6";

const Containers = styled.div``;

const NewComments = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const StyledIcon = styled(FaRegCircleUser)`
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  color:${({theme})=>theme.textSoft}; /* Example: Change color to red */
`;

const Input = styled.input`
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;

const Comments = ({ videoId }) => {
    const { currentUser } = useSelector((state) => state.user);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/api/comments/${videoId}`);
                setComments(res.data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        fetchComments();
    }, [videoId]);

    const handleAddComment = async () => {
        try {
            await axios.post('/api/comments', { desc: newComment, videoId });
            setNewComment(''); // Clear input after adding comment
            // Fetch comments again to update the list
            const res = await axios.get(`/api/comments/${videoId}`);
            setComments(res.data);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <Containers>
            <NewComments>
                
                {currentUser.img ? (
                            <Avatar src={currentUser.img} alt='image not found' />
                                ) : (
                                //<FaRegCircleUser  /> // Adjust icon size based on type
                                <StyledIcon /> // Adjust icon size and color based on your requirements
                            )}

                <Input
                    placeholder='Add a comment...'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Comment</button>
            </NewComments>
            {/* Render comments */}
            {comments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
            ))}
        </Containers>
    );
};

export default Comments;

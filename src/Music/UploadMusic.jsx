import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from './../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`;

const Title = styled.h1`
    text-align: center;
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;

const Desc = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;

const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textsoft};
`;

const Label = styled.label`
    font-size: 14px;
`;

// const UploadBlogs = () => {
//     const [img, setImg] = useState(null);
//     const [audio, setAudio] = useState(null);
//     const [imgPerc, setImgPerc] = useState(0);
//     const [audioPerc, setAudioPerc] = useState(0);
//     const [inputs, setInputs] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setInputs((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const uploadFile = (file, urlType, setProgress) => {
//         const storage = getStorage(app);
//         const fileName = new Date().getTime() + file.name;
//         const storageRef = ref(storage, fileName);
//         const uploadTask = uploadBytesResumable(storageRef, file);

//         uploadTask.on(
//             'state_changed',
//             (snapshot) => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 setProgress(Math.round(progress));
//             },
//             (error) => {
//                 console.error('Error uploading file:', error);
//             },
//             () => {
//                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                     setInputs((prev) => ({
//                         ...prev,
//                         [urlType]: downloadURL,
//                     }));
//                 });
//             }
//         );
//     };

//     useEffect(() => {
//         if (img) {
//             uploadFile(img, 'imgUrl', setImgPerc);
//         }
//         if (audio) {
//             uploadFile(audio, 'audioUrl', setAudioPerc);
//         }
//     }, [img, audio]);

//     // const handleUpload = async (e) => {
//     //     e.preventDefault();
//     //     // Add validation for required fields (title, desc, etc.)
//     //     try {
//     //         console.log(inputs);

//     //         // const res = await axios.post('/api/music', { ...inputs }, {
//     //         //     headers: {
//     //         //         // Add your authentication token or credentials here
//     //         //         // Example: Authorization: 'Bearer YOUR_TOKEN'
//     //         //     }
//     //         // });
//     //         // const res = await axios.post('/api/music', { ...inputs });  
//     //         const res = await axios.post('/api/music', { ...inputs });
//     //         console.log(res.data);
            
//     //     } catch (error) {
//     //         console.error('Error uploading blog:', error);
//     //     }
//     // };
//     const handleUpload=async (e)=>{
//         e.preventDefault();
//         // const res=await axios.post("/api/vidoes",{...inputs,tags})//at that points i think api used 
        
//         console.log("all input we get that ");
//         console.log(inputs);
        
//         try {
//             const res = await axios.post('/api/music', { ...inputs });
//             console.log(res.data);
//         } catch (error) {
//             console.error('Error uploading music:', error);
//         }
//         // .then((res) => {
//         //     console.log(res.data);
//         //     // res.status === 200 && navigate(`/bloging/${res.data._id}`);
//         // })
//         // .catch((error)=>{
//         //     console.log(error);
//         //     console.log("error on uploading");
//         // })
//     }

//     return (
//         <Wrapper>
//             <Title>Upload a New Music</Title>
//             <Input type="text" placeholder="Singer name" name="singer" onChange={handleChange} />
//             <Input type="text" placeholder="Song name" name="songsname" onChange={handleChange} />
//             <Desc placeholder="Description" rows={5} name="desc" onChange={handleChange} />
//             <Label>Image:</Label>
//             {imgPerc > 0 ? `Uploading: ${imgPerc}%` : <Input type="file" name="imgUrl" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />}
//             <Label>Audio:</Label>
//             {audioPerc > 0 ? `Uploading: ${audioPerc}%` : <Input type="file" name='audio' accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} />}
//             <Button onClick={handleUpload}>Upload</Button>
//         </Wrapper>
//     );
// };

// export default UploadBlogs;


const UploadBlogs = () => {
    const [img, setImg] = useState(null);
    const [audio, setAudio] = useState(null);
    const [imgPerc, setImgPerc] = useState(0);
    const [audioPerc, setAudioPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.currentUser); // Assuming you have user state in Redux

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const uploadFile = (file, urlType, setProgress) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(Math.round(progress));
            },
            (error) => {
                console.error('Error uploading file:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => ({
                        ...prev,
                        [urlType]: downloadURL,
                    }));
                });
            }
        );
    };

    useEffect(() => {
        if (img) {
            uploadFile(img, 'imgUrl', setImgPerc);
        }
        if (audio) {
            uploadFile(audio, 'audioUrl', setAudioPerc);
        }
    }, [img, audio]);

    const handleUpload = async (e) => {
        e.preventDefault();

        // Append the current user ID to the inputs
        const inputsWithUserId = {
            ...inputs,
            userId: currentUser._id, // Assuming currentUser has the user ID
        };

        try {
            console.log("uploading see data");
            console.log(inputsWithUserId);
            const res = await axios.post('/api/music', inputsWithUserId);
            console.log(res.data);
            // Optionally navigate to another page upon successful upload
            // res.status === 200 && navigate(`/bloging/${res.data._id}`);
        } catch (error) {
            console.error('Error uploading music:', error);
        }
    };

    return (
        <Wrapper>
            <Title>Upload a New Music</Title>
            <Input type="text" placeholder="Singer name" name="singer" onChange={handleChange} />
            <Input type="text" placeholder="Song name" name="songsname" onChange={handleChange} />
            <Desc placeholder="Description" rows={5} name="desc" onChange={handleChange} />
            <Label>Image:</Label>
            {imgPerc > 0 ? `Uploading: ${imgPerc}%` : <Input type="file" name="imgUrl" accept="image/*" onChange={(e) => setImg(e.target.files[0])} />}
            <Label>Audio:</Label>
            {audioPerc > 0 ? `Uploading: ${audioPerc}%` : <Input type="file" name='audioUrl' accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} />}
            <Button onClick={handleUpload}>Upload</Button>
        </Wrapper>
    );
};

export default UploadBlogs;

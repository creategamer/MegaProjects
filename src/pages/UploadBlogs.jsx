import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



// const Container=styled.div`
//     width:100%;
//     height:100%;
//     position:absolute;
//     top:0;
//     left:0;
//     background-color:#00000a7;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `;

const Wrapper=styled.div`
    width:90%;
    height:90%;
    background-color:${({theme})=>theme.bgLighter};
    color:${({theme})=>theme.text};
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:20px;
    position:relative;
`;
const Close=styled.div`
    position:absolute;
    top:10px;
    right:10px;
    cursor:pointer;

`;
const Title=styled.h1`
    text-align:center;

`;

const Input=styled.input`
    border:1px solid ${({theme})=>theme.soft};
    color:${({theme})=>theme.text};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
`;

const Desc=styled.textarea`
    border:1px solid ${({theme})=>theme.soft};
    color:${({theme})=>theme.text};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
`;

const Button=styled.button`
    border-radius:3px;
    border:none;
    padding:10px 20px;
    font-weight:500;
    cursor:pointer;
    background-color:${({theme})=>theme.soft};
    color:${({theme})=>theme.textsoft};
`;

const Label=styled.label`
    font-size:14px;
`;


const UploadBlogs = ({setOpen}) => {

    const [img,setImg]=useState(undefined);
    const [imgPerc,setImgPerc]=useState(0);
    const [inputs,setInputs]=useState({});

    const navigate=useNavigate()


    const handleChange=(e)=>{
        setInputs((prev)=>{
            return {...prev,[e.target.name]: e.target.value};
        });
    };



      const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //console.log('Upload is ' + progress + '% done');
                setImgPerc(Math.round(progress));
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setInputs((prev) => {
                        return { ...prev, [urlType]: downloadURL };
                    });
                });
            }
        );
    };
    
    useEffect(()=>{
        img && uploadFile(img , "imgUrl")
    },[img])

    const handleUpload=async (e)=>{
        e.preventDefault();
        // const res=await axios.post("/api/vidoes",{...inputs,tags})//at that points i think api used 
        
        console.log("all input we get that ");
        console.log(inputs.data);
        // Include 'imgUrl' field in the data being sent to the server
        // const { ImageUrl, ...restInputs } = inputs;
        // axios.post("/api/vidoes", { ...restInputs, imgUrl: ImageUrl, tags })
        await axios.post("/api/blog",{...inputs})
        .then((res) => {
            console.log(res.data);
            res.status === 200 && navigate(`/bloging/${res.data._id}`);
        })
        .catch((error)=>{
            console.log(error);
            console.log("error on uploading");
        })
    }


  return (
    <>
        
            <Wrapper>
                <Title>Upload a New Blog</Title>    
                
                
                <Input 
                    type="text" 
                    placeholder='Title' 
                    name='title'
                    onChange={handleChange} 
                />
                
                <Desc  
                    placeholder='Description' 
                    rows={5}   
                    name='desc'
                    onChange={handleChange} 
                />

                <Desc  
                    placeholder='Brief Description' 
                    rows={22}   
                    name='briefdesc'
                    onChange={handleChange} 
                />
                
                <Label>Image:</Label>
                
                {imgPerc > 0 ? (
                    "uploading:" +imgPerc
                ) : (
                <Input 
                    type='file' 
                    accept='image/*'  
                    onChange={(e)=>setImg(e.target.files[0])} 
                />
                )}
                
                <Button onClick={handleUpload}>Upload</Button>
            </Wrapper>    
         
    </>
  )
}

export default UploadBlogs

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiVideoUploadLine } from "react-icons/ri";
import Upload from './Upload';
import { logout } from '../redux/userSlice';
import { FaRegCircleUser } from "react-icons/fa6";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
`;

const Search = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  outline: none;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

// Styled component for icon
const StyledIcon = styled(FaRegUserCircle)`
  width: 25px;
  height: 50px;
  color: ${({ theme }) => theme.textSoft}; // Adjust icon color based on your requirements
`;


function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate(`/signin`)
    dispatch(logout());
  };

  const handleSearch = () => {
    navigate(`/search?q=${q}`);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <SearchInput
              type="text"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchButton onClick={handleSearch}>
              <IoMdSearch />
            </SearchButton>
          </Search>
          {currentUser ? (
            <User>
              <RiVideoUploadLine onClick={() => setOpen(true)} />
              
              {currentUser.img ? (
                <Avatar src={currentUser.img} />
                ) : (
                  // <FaRegCircleUser  /> // Adjust icon size based on type
                <StyledIcon /> // Adjust icon size and color based on your requirements
              )}

              {currentUser.name}
              <button onClick={handleLogout}>Logout</button>
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <FaRegUserCircle />
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
}

export default Navbar;

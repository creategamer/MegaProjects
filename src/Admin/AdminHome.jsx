// import React, { useEffect, useState } from 'react'
// import { styled } from 'styled-components';
// import AdminCard from './AdminCard';
// import axios from "axios"


// const Container=styled.div`

// `;

// const AdminHome = () => {

//   const [alluser, setAllUser] = useState([]);

//   useEffect(() => {
//     axios
//       .get('/api/admin/admin/users')
//       .then(res => {
//         setAllUser(res.data);
//         console.log('set data all user response');
//         console.log(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []); // Add an empty dependency array to run the effect only once

//   return (
//     <>
//       <Container>
//         {/* Map over alluser and render AdminCard for each user */}
//         {alluser.map(allusers => (
//           <AdminCard key={allusers._id} allusers={allusers} />
//         ))}
//       </Container>
//     </>
//   )
// }

// export default AdminHome


//secound code


import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import AdminCard from './AdminCard';
import axios from "axios"


const Container=styled.div`

`;

const AdminHome = () => {

  const [alluser, setAllUser] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/admin/admin/users');
      setAllUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  

  const handleDeleteUser = (allusersId) => {
    // Update state to remove the deleted user
    console.log("this is user id");
    setAllUser(prevUsers => prevUsers.filter(allusers => allusers._id !== allusersId));
  };

  // useEffect(() => {
  //   axios
  //     .get('/api/admin/admin/users')
  //     .then(res => {
  //       setAllUser(res.data);
  //       console.log('set data all user response');
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []); // Add an empty dependency array to run the effect only once

  return (
    <>
      <Container>
        {/* Map over alluser and render AdminCard for each user */}
        {alluser.map(allusers => (
          <AdminCard key={allusers._id} userData={allusers} allusers={allusers} onDelete={handleDeleteUser} />
        ))}
      </Container>
    </>
  )
}

export default AdminHome


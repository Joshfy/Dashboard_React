import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden; /* Esto ocultará cualquier contenido que se salga del contenedor */
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  background-color: #141414; 


`;

const UserCard = styled.div`
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  width: 300px;
  background-color: #c4b180;
  box-shadow: 0 0 5px #d9b14c, 0 0 20px #d9b14c, 0 0 30px #d9b14c;



`;

const UserImage = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UserData = ({ user }) => {
  return (
    <UserCard>
      <UserImage src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <div>
        <strong>{`${user.name.title} ${user.name.first} ${user.name.last}`}</strong>
      </div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Location: {`${user.location.city}, ${user.location.country}`}</div>
    </UserCard>
  );
};

export const ListClient = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=5&results=10&seed=abc');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setUserList(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {userList.map((user, index) => (
        <UserData key={index} user={user} />
      ))}
    </Container>
  );
};


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Title, Button } from '@mantine/core';
import UsersFavStations from './UsersFavStations';

const ProfileStations = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [favorites, setFavorites] = useState([]);
  
  // Using params below to get the user ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`http://localhost:3001/api/users/find/${params.userId}`);
      const data = response.data.info;
      setName(data.firstName);
      setFavorites(data.savedStations);
    }
    getUserData();
  }, [params.userId]);

  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
        <Title order={3}>
        {favorites.length <= 0 ? <>{name} doesn't have any favorites yet 💔</> : <>{name}'s Favorite Stations</>}
        </Title>
      </div>
      <UsersFavStations />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        {favorites.length <= 0 ? <></> : <><Button size="sm" color="indigo">Load More</Button></>}
      </div>
    </>
  )
}

export default ProfileStations;
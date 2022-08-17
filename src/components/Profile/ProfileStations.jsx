import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Title, Button } from '@mantine/core';
import UsersStations from './UsersStations';

const ProfileStations = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [stations, setStations] = useState([]);
  
  // Using params below to get the user ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`https://voltaic-app.herokuapp.com/api/users/find/${params.userId}`);
      const data = response.data.info;
      setName(data.firstName);
      setStations(data.addedStations);
    }
    getUserData();
  }, [params.userId]);

  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
        <Title order={3}>
          {stations.length <= 0 ? <>{name} hasn't added any stations yet 😕</> : <>Charging Stations Added By {name} ⚡️</>}
        </Title>
      </div>
      <UsersStations />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        {stations.length <= 0 ? <></> : <><Button size="sm" color="indigo">Load More</Button></>}
      </div>
    </>
  )
}

export default ProfileStations;
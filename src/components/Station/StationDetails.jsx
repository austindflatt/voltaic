import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image } from '@mantine/core';

const StationDetails = () => {
  const params = useParams();
  const [name, setName] = useState('');
  
  // Using params below to get the stations ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getStationData = async () => {
      const response = await axios.get(`http://localhost:3001/api/stations/find/${params.stationId}`);
      const data = response.data.payload;
      setName(data.name);
      console.log(response)
    }
    getStationData();
  }, [params.stationId]);

  return (
    <>
    <div style={{ width: 500 }}>
      <Image
        radius="md"
        src="https://photos.plugshare.com/photos/687091.jpg"
        alt="Random unsplash image"
      />
    </div>
    <p>{name}</p>
    <p>station address</p>
    </>
  )
}

export default StationDetails;
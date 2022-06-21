import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image } from '@mantine/core';

const StationDetails = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');

  // Using params below to get the stations ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getStationData = async () => {
      const response = await axios.get(`http://localhost:3001/api/stations/find/${params.stationId}`);
      const data = response.data.payload;
      setName(data.name);
      setImage(data.image);
      setAddress(data.address);
      console.log(response)
    }
    getStationData();
  }, [params.stationId]);

  return (
    <>
    <div style={{ width: 500 }}>
      <Image
        radius="md"
        src={image}
        alt={name}
      />
    </div>
    <p>{name}</p>
    <p>{address}</p>
    </>
  )
}

export default StationDetails;
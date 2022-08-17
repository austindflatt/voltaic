import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StationCard from '../Stations/StationCard'
import { SimpleGrid } from '@mantine/core';
import axios from 'axios';

const UsersStations = () => {
  const params = useParams();
  const [stations, setStations] = useState([]);

  // Using params below to get the user ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`https://voltaic-app.herokuapp.com/api/users/find/${params.userId}`);
      const data = response.data.info;
      setStations(data.addedStations);
    }
    getUserData();
  }, [params.userId]);

  return (
  <>
    <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 2 },
      { maxWidth: 'sm', cols: 1 },
    ]}>
      {
        stations
        .map((station, idx) => {
          return (
            <StationCard
            key={idx}
            chargerName={station.name}
            image={station.image}
            payment={station.paymentRequired}
            checkIns={station.checkIns.length}
            favorites={station.favorites.length}
            stationType={station.homeCharger}
            rating={station.rating}
            id={station._id}
            />
          )
        })
      }
    </SimpleGrid>
  </>
  )
}

export default UsersStations;
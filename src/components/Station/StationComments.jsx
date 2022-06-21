import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createStyles, Text, Avatar, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

function StationComments() {
  const { classes } = useStyles();
  const params = useParams();
  const [checkins, setCheckins] = useState([]);

  // Using params below to get the stations ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getStationData = async () => {
      const response = await axios.get(`http://localhost:3001/api/stations/find/${params.stationId}`);
      const data = response.data.payload;
      setCheckins(data.checkIns);
      console.log(response)
    }
    getStationData();
  }, [params.stationId]);

  return (
    <div style={{ marginTop: '10px' }}>
      <h1>{checkins.length} Check Ins</h1>
      <Group>
        <Avatar src='https://www.austinflatt.com/images/headshot.webp' alt='Austin' radius="xl" />
        <div>
          <Text size="sm">Austin</Text>
          <Text size="xs" color="dimmed">
            Posted 10 mins ago
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        This is a review for this station
      </Text>
    </div>
  );
}

export default StationComments
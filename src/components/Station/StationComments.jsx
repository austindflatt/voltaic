import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createStyles, Text, Title, Avatar, Group, Paper, Image, SimpleGrid } from '@mantine/core';

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
    <div style={{ marginTop: '20px' }}>
      <Title order={1} style={{ marginBottom: '20px' }}>{checkins.length} Check Ins</Title>
      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'sm', cols: 1 },
    ]}>
      <Paper shadow="xs" p="md">
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
        This was a great location! Plenty of chargers
      </Text>
      <Image
      className={classes.body}
      radius="md"
      src='https://photos.plugshare.com/photos/484494.jpg'
      alt={null}
      height='200px'
      width='350px'
      />
      </Paper>
      </SimpleGrid>
    </div>
  );
}

export default StationComments
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createStyles, Text, Title, Button, Avatar, Group, Paper, Image, SimpleGrid, Anchor } from '@mantine/core';
import CheckInModal from './CheckInModal';

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
  const [checkInOpened, setCheckInOpened] = useState(false);

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

  const showCheckInModal = () => {
    setCheckInOpened(true);
  }

  return (
    <>

    <CheckInModal
    checkInOpened={checkInOpened}
    setCheckInOpened={setCheckInOpened}
    />

    <div style={{ marginTop: '20px' }}>
      <Title order={1} style={{ marginBottom: '20px' }}>{checkins.length} Check Ins</Title>
      <Button color="green" onClick={() => showCheckInModal()}>
        Check In
      </Button>
      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'sm', cols: 1 },
    ]}>
      {
        checkins
        .map((checkIn) => {
          return (
            <Paper shadow="xs" p="md">
              <Group>
                {/* <Avatar src='https://www.austinflatt.com/images/headshot.webp' alt='Austin' radius="xl" /> */}
                <div>
                  <Text size="sm">User: <Anchor href={`/user/${checkIn.chargerUser}`}>{checkIn.chargerUser}</Anchor></Text>
                  <Text size="xs" color="dimmed">
                    Posted {checkIn.createdAt} • {checkIn.chargeStatus}
                  </Text>
                </div>
              </Group>
              <Text className={classes.body} size="sm">
                {checkIn.review}
              </Text>
              {checkIn.photo ?
              <Image
              className={classes.body}
              radius="md"
              src={checkIn.photo}
              alt={checkIn.name}
              height='200px'
              width='350px'
              />
              : <></>
              }
            </Paper>
          )
        })
      }
      </SimpleGrid>
    </div>
    </>
  );
}

export default StationComments;
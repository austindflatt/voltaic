import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createStyles, Modal, Paper, Text, Group, Avatar, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

const ProfileCheckIns = ({ checkInOpened, setCheckInOpened }) => {
  const { classes } = useStyles();
  const params = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [checkIns, setCheckIns] = useState([]);

  // Using params below to get the user ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`http://localhost:3001/api/users/find/${params.userId}`);
      const data = response.data.info;
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setAvatar(data.profilePic);
      setUsername(data.username);
      setCheckIns(data.checkIns);
      setAvatar(data.profilePic);
    }
    getUserData();
  }, [params.userId]);

  // Check In modal for user profile visited.
  return (
    <>
    <Modal
    opened={checkInOpened}
    onClose={() => setCheckInOpened(false)}
    title={`${firstName}'s Recent Check In History`}
    size="lg"
    overflow="inside"
    >
      {checkIns.length < 1 ? <><Text>{firstName} has not checked in to any charging stations</Text></> : <></> }
      {
        checkIns
        .slice(0, 5)
        .reverse()
        .map((checkIn, index) => {
        return (
          <Paper shadow="xs" p="md" style={{ marginTop: '20px' }} key={index}>
            <Group>
              <Avatar src={avatar} alt='Austin' radius="xl" />
              <div>
                <Text size="sm">{firstName} {lastName} • @{username}</Text>
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
            height='100px'
            width='150px'
            />
            : <></>
            }
          </Paper>
        )
      })
    }
    </Modal>
    </>
  )
}

export default ProfileCheckIns;
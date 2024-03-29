import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createStyles, Card, Avatar, Text, Group, Button, SimpleGrid } from '@mantine/core';
import ProfileCheckIns from './ProfileCheckIns';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

const ProfileTop = () => {
  const { classes } = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [bio, setBio] = useState('');
  const [stations, setStations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  // const [followers, setFollowers] = useState([]);
  // const [following, setFollowing] = useState([]);
  const [checkIns, setCheckins] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkInOpened, setCheckInOpened] = useState(false);

  // Using params below to get the user ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`https://voltaic-app.herokuapp.com/api/users/find/${params.userId}`);
      const data = response.data.info;
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setUsername(data.username);
      setProfilePic(data.profilePic);
      setCoverPhoto(data.coverPhoto);
      setBio(data.bio);
      setStations(data.addedStations);
      setFavorites(data.savedStations);
      // setFollowers(data.followers);
      // setFollowing(data.following);
      setCheckins(data.checkIns);
      setIsAdmin(data.isAdmin);
    }
    getUserData();
  }, [params.userId]);

  const showCheckIns = () => {
    setCheckInOpened(true);
  }
  
  return (
	  <>
      <ProfileCheckIns
      checkInOpened={checkInOpened}
      setCheckInOpened={setCheckInOpened}
      />

      <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section 
      sx={{ 
        backgroundImage: `url(${coverPhoto})`, 
        height: 300, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
      }}
      />
      <Avatar src={profilePic} size={150} radius={150} mx="auto" mt={-50} className={classes.avatar} />
      <Text align="center" size="xl" weight={500} mt="md">
        {firstName} {lastName}
      </Text>
      <Text align="center" color="dimmed" size="md">
        @{username} • {isAdmin ? <>Admin</> : <>Member</>}
      </Text>
      <Text align="center" color="dimmed" size="md">
        {bio}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        <Text align="center" size="lg" weight={500}>
          {stations.length}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Stations
        </Text>
        <Text align="center" size="lg" weight={500}>
          {favorites.length}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Favorites
        </Text>
        <Text align="center" size="lg" weight={500}>
          {checkIns.length}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Check Ins
        </Text>
      </Group>
      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
        { maxWidth: 'sm', cols: 1 },
      ]}>
        <Button color="indigo" fullWidth mt="md" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button color="green" fullWidth mt="md" onClick={() => showCheckIns()}>
          View Check In History
        </Button>
      </SimpleGrid>
      </Card>
	  </>
  )
}

export default ProfileTop;
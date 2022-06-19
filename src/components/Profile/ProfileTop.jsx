import React, { useContext } from 'react'
import { createStyles, Card, Avatar, Text, Group, Button, SimpleGrid } from '@mantine/core';
import { AuthContext } from '../../context/authContext/AuthContext';

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
  const { user } = useContext(AuthContext);
  
  return (
	  <>
      <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section 
      sx={{ 
        backgroundImage: `url(${user.coverPhoto})`, 
        height: 300, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
      }}
      />
      <Avatar src={user.profilePic} size={150} radius={150} mx="auto" mt={-50} className={classes.avatar} />
      <Text align="center" size="xl" weight={500} mt="md">
        {user.firstName} {user.lastName}
      </Text>
      <Text align="center" color="dimmed" size="md">
        @{user.username} • {user.isAdmin ? <>Admin</> : <>Member</>}
      </Text>
      <Text align="center" color="dimmed" size="md">
        {user.bio}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        <Text align="center" size="lg" weight={500}>
          {user.followers.length}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Followers
        </Text>
        <Text align="center" size="lg" weight={500}>
          {user.following.length}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Following
        </Text>
        <Text align="center" size="lg" weight={500}>
          {user.checkIns.length}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Check Ins
        </Text>
      </Group>
      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
        { maxWidth: 'sm', cols: 1 },
      ]}>
        <Button color="indigo" fullWidth mt="md">
          Follow
        </Button>
        <Button color="green" fullWidth mt="md">
          View Check In History
        </Button>
      </SimpleGrid>
      </Card>
	  </>
  )
}

export default ProfileTop
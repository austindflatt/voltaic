import React from 'react'
import { createStyles, Card, Avatar, Text, Group, Button, SimpleGrid } from '@mantine/core';

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
  
  return (
	  <>
      <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(https://photos.plugshare.com/photos/912852.jpg)`, height: 300, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} />
      <Avatar src="https://pbs.twimg.com/profile_images/1509922129738932267/xNYVrZwa_400x400.jpg" size={150} radius={150} mx="auto" mt={-30} className={classes.avatar} />
      <Text align="center" size="xl" weight={500} mt="md">
        Austin Flatt
      </Text>
      <Text align="center" color="dimmed" size="md">
        @austin • Admin
      </Text>
      <Text align="center" color="dimmed" size="md">
        Founder of Voltaic
      </Text>
      <Group mt="md" position="center" spacing={30}>
        <Text align="center" size="lg" weight={500}>
          44
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Followers
        </Text>
        <Text align="center" size="lg" weight={500}>
          0
        </Text>
        <Text align="center" size="sm" color="dimmed">
          Following
        </Text>
        <Text align="center" size="lg" weight={500}>
          3
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
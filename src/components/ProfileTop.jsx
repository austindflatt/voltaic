import React from 'react'
import { Avatar, Text, Button, Paper, SimpleGrid } from '@mantine/core';

const ProfileTop = () => {
  return (
	  <>
    <Paper
    radius="md"
    withBorder
    p="lg"
    sx={(theme) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    })}
    >
      <Avatar src="https://pbs.twimg.com/profile_images/1509922129738932267/xNYVrZwa_400x400.jpg" size={150} radius={150} mx="auto" />
      <Text align="center" size="xl" weight={500} mt="md">
        Austin Flatt
      </Text>
      <Text align="center" color="dimmed" size="md">
        @austin • Admin
      </Text>
      <Text align="center" color="dimmed" size="md">
        0 Followers • 0 Following
      </Text>
      <Text align="center" color="dimmed" size="md">
        Founder of Voltaic
      </Text>
      <SimpleGrid cols={2} style={{ marginTop: '10px' }} breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}>
        <Button color="indigo" fullWidth mt="md">
          Follow
        </Button>
        <Button color="green" fullWidth mt="md">
          Send message
        </Button>
      </SimpleGrid>
    </Paper>
	  </>
  )
}

export default ProfileTop
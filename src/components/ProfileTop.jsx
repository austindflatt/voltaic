import React from 'react'
import { Avatar, Text, Button, Paper } from '@mantine/core';

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
      <Avatar src="https://pbs.twimg.com/profile_images/1509922129738932267/xNYVrZwa_400x400.jpg" size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        Austin Flatt
      </Text>
      <Text align="center" color="dimmed" size="sm">
        austin@austinflatt.com • Founder
      </Text>
      
      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
	  </>
  )
}

export default ProfileTop
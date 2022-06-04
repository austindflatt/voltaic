import React from 'react'
import { Title, TextInput, Textarea } from '@mantine/core';

const Account = () => {
  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Edit Your Profile</Title></div>
      <TextInput
        placeholder="URL to profile picture"
        label="Profile Picture"
        size="md"
      />
      <TextInput
        placeholder="URL to cover image"
        label="Cover Photo"
        size="md"
      />
      <TextInput
        placeholder="First Name"
        label="First Name"
        size="md"
      />
      <TextInput
        placeholder="Last Name"
        label="Last Name"
        size="md"
      />
      <TextInput
        placeholder="Password"
        label="Password"
        size="md"
        type="password"
      />
      <TextInput
        placeholder="Email"
        label="Email"
        size="md"
        type="email"
      />
      <TextInput
        placeholder="Username"
        description="You can only change your username every 60 days"
        label="Username"
        size="md"
      />
      <TextInput
        placeholder="Location"
        label="Location"
        size="md"
      />
      <Textarea
        placeholder="Tell us about yourself"
        label="Bio"
        size="md"
        minRows={4}
      />
    </>
  )
}

export default Account
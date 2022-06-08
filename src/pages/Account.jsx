import React from 'react'
import { Title, TextInput, Textarea, Button, SimpleGrid } from '@mantine/core';
import { At, User, Eye, Location } from 'tabler-icons-react';

const Account = () => {
  return (
    <>

      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}>
        <Title order={1}>Edit Your Profile</Title>
      </div>

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
      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
        { maxWidth: 'lg', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}>
        <TextInput
          placeholder="First Name"
          label="First Name"
          size="md"
          icon={<User size={14} />}
        />
        <TextInput
          placeholder="Last Name"
          label="Last Name"
          size="md"
          icon={<User size={14} />}
        />
        <TextInput
          placeholder="Email"
          label="Email"
          size="md"
          type="email"
          icon={<At size={14} />}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          size="md"
          type="password"
          icon={<Eye size={14} />}
        />
        <TextInput
          placeholder="Username"
          description="You can only change your username every 60 days"
          label="Username"
          size="md"
          icon={<User size={14} />}
        />
        <TextInput
          placeholder="Location"
          description="Where are you located?"
          label="Location"
          size="md"
          icon={<Location size={14} />}
        />
      </SimpleGrid>
      <Textarea
        placeholder="Tell us about yourself"
        label="Bio"
        size="md"
        minRows={4}
      />
      
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button variant="light" size="sm" color="red">Update Account</Button>
    </div>

    </>
  )
}

export default Account
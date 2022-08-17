import React, { useState } from "react";
import axios from 'axios';
import { TextInput, Button, SimpleGrid, Textarea, Modal } from '@mantine/core';
import { At, User, Eye, Location } from 'tabler-icons-react';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.GOOGLE_MAPS_API_KEY);

const Register = ({ registerOpened, setRegisterOpened }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');

  const handleFinish = async (e) => {
    e.preventDefault();

    const response = await Geocode.fromAddress(location);
    const { lat, lng } = response.results[0].geometry.location;
    console.log('lat, lng: ', {lat, lng});

    const newBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      profilePic: profilePic,
      bio: bio,
      location: location,
      lat: lat,
      long: lng
    }
    try {
      await axios.post('https://voltaic-app.herokuapp.com/api/auth/register', newBody);
      setRegisterOpened(false)
    } catch (error) {
      console.log('Error')
    }
  }

  return (
    <>
      <Modal
      opened={registerOpened}
      onClose={() => setRegisterOpened(false)}
      title="Register An Account"
      size="lg"
      >

        <TextInput
        placeholder="Profile Pic URL"
        label="Profile Picture"
        id="profilePic"
        size="md"
        onChange={(e) => setProfilePic(e.target.value)}
        />

        <SimpleGrid cols={2} style={{ marginTop: '10px' }} breakpoints={[
          { maxWidth: 'lg', cols: 2 },
          { maxWidth: 'sm', cols: 1 },
        ]}>

          <TextInput
          placeholder="Enter a username"
          label="Username"
          id="username"
          size="md"
          icon={<User size={14} />}
          onChange={(e) => setUsername(e.target.value)}
          required
          />

          <TextInput
          placeholder="Enter your email"
          label="Email"
          id="email"
          size="md"
          icon={<At size={14} />}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

          <TextInput
          placeholder="Enter your first name"
          label="First Name"
          id="firstName"
          size="md"
          onChange={(e) => setFirstName(e.target.value)}
          required
          />

          <TextInput
          placeholder="Enter your last name"
          label="Last Name"
          id="lastName"
          size="md"
          onChange={(e) => setLastName(e.target.value)}
          required
          />

          <TextInput
          placeholder="Create a password"
          label="Password"
          id="password"
          size="md"
          icon={<Eye size={14} />}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          />

          <TextInput
          placeholder="City, State"
          label="Location"
          id="password"
          size="md"
          icon={<Location size={14} />}
          type="location"
          onChange={(e) => setLocation(e.target.value)}
          required
          />
          
        </SimpleGrid>

        <Textarea
        placeholder="Tell us about yourself"
        label="Bio"
        id="bio"
        size="md"
        style={{ marginTop: '10px' }}
        onChange={(e) => setBio(e.target.value)}
        />
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button type="Submit" size="sm" onClick={handleFinish} color="indigo">Register Account</Button>
        </div>

      </Modal>
    </>
  )
}

export default Register;
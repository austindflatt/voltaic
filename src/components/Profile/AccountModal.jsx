import React, { useState, useContext, useEffect } from 'react'
import { TextInput, Textarea, Button, SimpleGrid, Modal } from '@mantine/core';
import { At, User, Eye, Location } from 'tabler-icons-react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext/AuthContext';
import { updateUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';

const Account = ({ accountOpened, setAccountOpened }) => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const getEditData = async () => {
      // I created a GET request below, taking the current users ID from the state and put
      // it into the users api route to find that user with the ID and got the JSON from it
      // setting the state with all the data.
      const response = await axios.get(`http://localhost:3001/api/users/find/${user._id}`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        }
      });
      const data = response.data.info;

      // Below I am setting the state from the information pulled from the JSON
      setUsername(data.username);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setProfilePic(data.profilePic);
      setCoverPhoto(data.coverPhoto);
      setEmail(data.email);
      setPassword(data.password);
      setLocation(data.location);
      setBio(data.bio);
    }
    getEditData();
  }, [user._id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      id: user._id,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      location: location,
      bio: bio,
      profilePic: profilePic,
      coverPhoto: coverPhoto,
    }
    updateUser(updatedData, dispatch)
  }

  return (
    <>
    <Modal
    opened={accountOpened}
    onClose={() => setAccountOpened(false)}
    title="Edit Your Account"
    size="lg"
    >

      <TextInput
        placeholder="URL to profile picture"
        label="Profile Picture"
        size="md"
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
      />

      <TextInput
        placeholder="URL to cover image"
        label="Cover Photo"
        size="md"
        value={coverPhoto}
        onChange={(e) => setCoverPhoto(e.target.value)}
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextInput
          placeholder="Last Name"
          label="Last Name"
          size="md"
          icon={<User size={14} />}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextInput
          placeholder="Email"
          label="Email"
          description="Not shown for security purposes"
          size="md"
          type="email"
          icon={<At size={14} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          placeholder="Password"
          label="Password"
          description="Not shown for security purposes"
          size="md"
          type="password"
          icon={<Eye size={14} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextInput
          placeholder="Username"
          label="Username"
          size="md"
          icon={<User size={14} />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          placeholder="Enter your location"
          label="Location"
          size="md"
          icon={<Location size={14} />}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

      </SimpleGrid>

      <Textarea
        placeholder="Tell us about yourself"
        label="Bio"
        size="md"
        minRows={4}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button variant="light" size="sm" color="indigo" onClick={handleUpdate}>Update Account</Button>
      </div>

    </Modal>
    </>
  )
}

export default Account;
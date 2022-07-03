import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image, SimpleGrid, Paper, Text, TextInput, Title, Button, Anchor, Badge } from '@mantine/core';
import StationMap from './StationMap';

const StationDetails = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [lat ,setLat] = useState('');
  const [long, setLong] = useState('');
  const [description, setDescription] = useState('');
  const [plugType, setPlugType] = useState('');
  const [network, setNetwork] = useState('');
  const [open247, setOpen247] = useState(false);
  const [restricted, setRestricted] = useState(false);
  const [paymentRequired, setPaymentRequired] = useState(false);
  const [active, setActive] = useState(false);
  const [homeCharger, setHomeCharger] = useState(false);
  const [hours, setHours] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [parkingLevel, setParkingLevel] = useState('');
  const [count, setCount] = useState('');
  const [parkingAttributes, setParkingAttributes] = useState([]);
  const [accessRestrictions, setAccessRestrictions] = useState([]);
  const [amenities, setAmenities] = useState([]);

  // Using params below to get the stations ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getStationData = async () => {
      const response = await axios.get(`http://localhost:3001/api/stations/find/${params.stationId}`);
      const data = response.data.payload;
      setName(data.name);
      setImage(data.image);
      setAddress(data.address);
      setLat(data.lat);
      setLong(data.long);
      setDescription(data.description);
      setPlugType(data.plugType);
      setNetwork(data.network);
      setOpen247(data.open247);
      setRestricted(data.restricted);
      setPaymentRequired(data.paymentRequired);
      setActive(data.active);
      setHomeCharger(data.homeCharger);
      setHours(data.hours);
      setPhoneNumber(data.phoneNumber);
      setParkingLevel(data.parkingLevel);
      setCount(data.count);
      setParkingAttributes(data.parkingAttributes);
      setAccessRestrictions(data.accessRestrictions);
      setAmenities(data.amenities);
      console.log(response);
    }
    getStationData();
  }, [params.stationId]);

  return (
    <>
    <Title order={1}>{name}</Title>
    <Title order={4} style={{ marginBottom: '10px' }}>
      📍 <Anchor href={`https://www.google.com/maps/dir//${address}`} target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>
        {address}
      </Anchor>
    </Title>
    <div style={{ marginBottom: '20px' }}>
      <StationMap
      latitudeProp={lat}
      longitudeProp={long}
      titleProp={name}
      />
    </div>
    <Button color="red" style={{ marginBottom: '20px' }}>
      Add To Favorites
    </Button>
    <Paper shadow="xs" p="md">
      <Title order={3}>
      Description
      </Title>
      <Text>
        {description}
      </Text>
    </Paper>
    <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'sm', cols: 1 },
    ]}>
      <Paper shadow="xs" p="md">
        <Title order={3}>
          Charger Info
        </Title>
        <Text>
          Plug Type: {plugType}
          <br />
          Network: {network}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Title order={3}>
          Station Details
        </Title>
        <Text>
          <Badge radius="sm" variant="filled" color={active ? 'green' : 'red'}>
            {active ? <>Active</> : <>Coming Soon/Closed</>}
          </Badge>
          <br />
          <Badge radius="sm" variant="filled" color={homeCharger ? 'green' : 'indigo'}>
            {homeCharger ? <>Residential Charger</> : <>Public Charger</>}
          </Badge>
          <br />
          {open247 ? <>Open 24/7</> : <>{hours ? <>Hours: {hours}</> : <>No hours were listed</>}</>}
          <br />
          {restricted ? <>Restrictions</> : <>No Restrictions</>}
          <br />
          {paymentRequired ? <>Payment Required</> : <>No Payment Required</>}
          <br />
          {phoneNumber ? <>Phone Number: {phoneNumber}</> : <>No phone number was listed</>}
          <br />
          Parking Level: {parkingLevel}
          <br />
          {count ? <>Stations: {count}</> : <>Number of stations is unknown</>}
          <br />
          Latitude: {lat}, Longitude: {long}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Title order={3}>
          Amenities
        </Title>
        <Text>
          {amenities.length > 0 ? <>{amenities.join(', ')}</> : <>No amenities to show</>}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Title order={3}>
          Parking Attributes
        </Title>
        <Text>
          {parkingAttributes.length > 0 ? <>{parkingAttributes.join(', ')}</> : <>No parking attributes to show</>}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Title order={3}>
          Access Restrictions
        </Title>
        <Text>
          {accessRestrictions.length > 0 ? <>{accessRestrictions.join(', ')}</> : <>No access restrictions</>}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Title order={3}>
          Share Link
        </Title>
        <TextInput
        value={`http://localhost:3000/charger/${params.stationId}`}
        description="You can also copy the link from your browser's address bar."
        style={{ marginTop: '10px' }}
        />
      </Paper>
    </SimpleGrid>
    </>
  )
}

export default StationDetails;
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Image, SimpleGrid, Paper, Text, Title } from '@mantine/core';
import { InfoCircle, MapPin, Plug } from 'tabler-icons-react';

const StationDetails = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
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
      📍 <Link to="" style={{ color: 'black' }}>{address}</Link>
    </Title>
    <div style={{ marginBottom: '20px' }}>
    <Image
      radius="md"
      src={image}
      alt={name}
      height='500px'
    />
    </div>
    <Paper shadow="xs" p="md">
      <Title order={3}>
      <InfoCircle
      size={25}
      strokeWidth={2}
      color={'black'}
      />
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
        <Plug
        size={25}
        strokeWidth={2}
        color={'black'}
        />
          Charger Info
        </Title>
        <Text>
          • {plugType}
          <br />
          • {network}
          <br />
          • 16 stations
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Text>
          {open247 ? <>Open 24/7</> : <>See Hours</>}
          <br />
          {restricted ? <>Restrictions</> : <>No Restrictions</>}
          <br />
          {paymentRequired ? <>Payment Required</> : <>No Payment Required</>}
          <br />
          {active ? <>Active/Open</> : <>Coming Soon/Closed</>}
          <br />
          {homeCharger ? <>Home Charger</> : <>Public Location</>}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Text>
          - {hours}
          <br />
          ☎️ {phoneNumber}
          <br />
          🅿️ {parkingLevel}
        </Text>
      </Paper>
      <Paper shadow="xs" p="md">
        <Text>
          <p>{parkingAttributes}</p>
          <p>{accessRestrictions}</p>
          <p>{amenities.join(', ')}</p>
        </Text>
      </Paper>
    </SimpleGrid>
    </>
  )
}

export default StationDetails;
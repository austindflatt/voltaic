import React, { useState, useContext } from 'react'
import { TextInput, Textarea, Switch, Button, SimpleGrid, NativeSelect, Title } from '@mantine/core';
import { Note, Location, Phone, Elevator, Parking, Accessible } from 'tabler-icons-react';
import { createStation } from '../../context/stationContext/apiCalls';
import { StationContext } from '../../context/stationContext/StationContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import Geocode from "react-geocode";
import { List, ThemeIcon } from '@mantine/core';
import { Star } from 'tabler-icons-react';
import Layout from '../../components/Layout/Layout';

// const parkingAttributesList = [
//   "Pull Through Parking",
//   "Pull In Parking",
//   "Trailer Parking",
//   "Trailer Friendly",
//   "Garage",
//   "Handicap Parking",
//   "Wheelchair Accessible",
//   "Illuminated"
// ];

// const accessRestrictionsList = [
//   "Customers Only",
//   "Guests Only",
//   "Employees Only",
//   "Students Only",
//   "Residents Only",
//   "Tesla Drivers Only"
// ];

// const amenitiesList = [
//   "Lodging",
//   "Dining",
//   "Restrooms",
//   "EV Parking",
//   "Valet Parking",
//   "Park",
//   "WiFi",
//   "Shopping",
//   "Grocery",
//   "Hiking",
//   "Camping"
// ];

const networks = [
  'Non-networked',
  'BC Hydro EV',
  'Blink',
  'ChargePoint',
  'Circuit Electrique',
  'Electrify America',
  'Electrify Canada',
  'EV Connect',
  'EV Connect Canada',
  'EVCS',
  'EVgo',
  'EVsmart',
  'FLO',
  'Francis Energy',
  'GE WattStation',
  'IVY',
  'OpConnect',
  'Petro-Canada',
  'SemaConnect',
  'Shell Recharge',
  'Sun Country',
  'Supercharger',
  'SWTCH',
  'Tesla Destination',
  'Volta',
  'Webasto',
  'Other',
];

const plugs = [
  'Tesla (Fast)',
  'CHAdeMO',
  'J-1772',
  'Tesla',
  'NEMA 14-50',
  'Wall',
  'CCS/SAE',
  'Tesla (Roadster)',
  'NEMA TT-30'
];

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const AddStation = () => {
	const { dispatch } = useContext(StationContext);
	const { user } = useContext(AuthContext);
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');
	const [plugType, setPlugType] = useState('');
	const [network, setNetwork] = useState('');
	const [hours, setHours] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [parkingLevel, setParkingLevel] = useState('');
	const [count, setCount] = useState('');
	const [amenities, setAmenities] = useState([]);
	const [parkingAttributes, setParkingAttributes] = useState([]);
	const [accessRestrictions, setAccessRestrictions] = useState([]);
	const [price, setPrice] = useState('');
	const [always, setAlways] = useState(false);
	const [starlink, setStarlink] = useState(false);
	const [restricted, setRestricted] = useState(false);
	const [payment, setPayment] = useState(false);
	const [active, setActive] = useState(false);
	const [homeCharger, setHomeCharger] = useState(false);
  
	const removeAmenity = (i) => {
	  const newAmenities = [ ...amenities ];
	  amenities.splice(i, 1);
	  setAmenities({ newAmenities });
	}
  
	const inputKeyDown = (e) => {
	  const val = e.target.value;
	  if (e.key === 'Enter' && val) {
		if (amenities.find(tag => tag.toLowerCase() === val.toLowerCase())) {
		  return;
		}
		setAmenities([...amenities, val]);
		e.target.value = '';
	  } else if (e.key === 'Backspace' && !val) {
		removeAmenity(amenities.length - 1);
	  }
	}
  
	const removeAttribute = (i) => {
	  const newAttributes = [ ...parkingAttributes ];
	  parkingAttributes.splice(i, 1);
	  setParkingAttributes({ newAttributes });
	}
  
	const inputKeyDownAttribute = (e) => {
	  const val = e.target.value;
	  if (e.key === 'Enter' && val) {
		if (parkingAttributes.find(tag => tag.toLowerCase() === val.toLowerCase())) {
		  return;
		}
		setParkingAttributes([...parkingAttributes, val]);
		e.target.value = '';
	  } else if (e.key === 'Backspace' && !val) {
		removeAttribute(parkingAttributes.length - 1);
	  }
	}
  
	const removeAccessRestriction = (i) => {
	  const newAccessRestrictions = [ ...accessRestrictions ];
	  accessRestrictions.splice(i, 1);
	  setAccessRestrictions({ newAccessRestrictions });
	}
  
	const inputKeyDownAccessRestriction = (e) => {
	  const val = e.target.value;
	  if (e.key === 'Enter' && val) {
		if (accessRestrictions.find(tag => tag.toLowerCase() === val.toLowerCase())) {
		  return;
		}
		setAccessRestrictions([...accessRestrictions, val]);
		e.target.value = '';
	  } else if (e.key === 'Backspace' && !val) {
		removeAccessRestriction(accessRestrictions.length - 1);
	  }
	}
  
	const handleSubmit = async () => {
  
	  const response = await Geocode.fromAddress(address);
	  const { lat, lng } = response.results[0].geometry.location;
	  console.log('lat, lng: ', {lat, lng});
  
	  const station = {
		image: image,
		name: name,
		address: address,
		lat: lat,
		long: lng,
		description: description,
		plugType: plugType,
		network: network,
		hours: hours,
		phoneNumber: phoneNumber,
		parkingLevel: parkingLevel,
		count: count,
		price: price,
		open247: always,
		starlink: starlink,
		restricted: restricted,
		paymentRequired: payment,
		active: active,
		homeCharger: homeCharger,
		amenities: amenities,
		parkingAttributes: parkingAttributes,
		accessRestrictions: accessRestrictions,
		chargerCreator: user._id
	  }
	  createStation(station, dispatch);
	}

  return (
	<>
	<Layout>
	      <TextInput
      label="Station Image"
      size="md"
      required
      onChange={(e) => setImage(e.target.value)}
      />

      <TextInput
      label="Location Name"
      size="md"
      icon={<Note size={14} />}
      required
	  style={{ marginTop: '20px' }}
      onChange={(e) => setName(e.target.value)}
      />
      
      <TextInput
      label="Street Address"
      size="md"
      icon={<Location size={14} />}
      required
	  style={{ marginTop: '20px' }}
      onChange={(e) => setAddress(e.target.value)}
      />

      <Textarea
      label="Description"
      size="md"
	  minRows={7}
      required
	  style={{ marginTop: '20px' }}
      onChange={(e) => setDescription(e.target.value)}
      />

<SimpleGrid cols={3} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 3 },
      { maxWidth: 'sm', cols: 1 },
      ]}>

      <NativeSelect
      size="md"
      label="Plug Type"
      data={plugs}
      onChange={(e) => setPlugType(e.target.value)}
      value={plugType}
      placeholder="Select a plug type"
      style={{ marginTop: '10px', marginBottom: '10px' }}
      required
      />

      <NativeSelect
      size="md"
      label="Network"
      data={networks}
      onChange={(e) => setNetwork(e.target.value)}
      value={network}
      placeholder="Select a network"
      style={{ marginTop: '10px', marginBottom: '10px' }}
      required
      />

      <TextInput
      label="How Many Stations?"
      size="md"
	  type="Number"
	  style={{ marginTop: '10px', marginBottom: '10px' }}
      required
      onChange={(e) => setCount(e.target.value)}
      />

	  </SimpleGrid>

      <SimpleGrid cols={3} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 3 },
      { maxWidth: 'sm', cols: 1 },
      ]}>

        <Switch 
        label="Open 24/7" 
        size="md" 
        color="indigo"
        checked={always}
        onChange={() => setAlways(!always)}
        style={{ marginTop: '10px' }}
        />

        <Switch 
        label="Restricted Access" 
        size="md" 
        color="indigo"
        checked={restricted}
        onChange={() => setRestricted(!restricted)} 
        style={{ marginTop: '10px' }}
        />

        <Switch 
        label="Payment Required" 
        size="md" 
        color="indigo"
        checked={payment}
        onChange={() => setPayment(!payment)}
        style={{ marginTop: '10px' }}
        />

        <Switch 
        label="Location open?" 
        size="md" 
        color="indigo"
        checked={active}
        onChange={() => setActive(!active)}
        style={{ marginTop: '10px' }}
        required
        />

        <Switch 
        label="Home charger" 
        size="md" 
        color="indigo"
        checked={homeCharger}
        onChange={() => setHomeCharger(!homeCharger)} 
        style={{ marginTop: '10px' }}
        required
        />

        <Switch 
        label="Starlink satllite (Tesla only)" 
        size="md" 
        color="indigo"
        checked={starlink}
        onChange={() => setStarlink(!starlink)} 
        style={{ marginTop: '10px' }}
        required
        />

      </SimpleGrid>

      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 2 },
      { maxWidth: 'sm', cols: 1 },
      ]}>

        <Textarea
        placeholder="Please list the hours this is available"
        label="Hours"
        size="md"
        onChange={(e) => setHours(e.target.value)}
        />

        <Textarea
        placeholder="What is the cost of this location? e.g. $0.39/kWh + tax"
        label="Price"
        size="md"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        />

        <TextInput
        placeholder="000-000-000"
        label="Phone Number"
        size="md"
        icon={<Phone size={14} />}
        onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextInput
        placeholder="Parking Level"
        label="Parking Level"
        size="md"
        type="number"
        icon={<Elevator size={14} />}
        onChange={(e) => setParkingLevel(e.target.value)}
        />

        <div className="amenitiesInput">
        <Title order={5} style={{ marginBottom: '5px' }}>Amenities</Title>
          <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="indigo" size={24} radius="xl">
            <Star size={16} />
            </ThemeIcon>
          }
          >
            { amenities.map((tag, i) => (
            <List.Item key={tag}>
            {tag}
            <br />
            <Button size="xs" color="gray" type="button" onClick={() => { removeAmenity(i); }} style={{ marginTop: '10px', marginBottom: '10px' }}>Remove {tag}</Button>
            </List.Item>
            ))}
            <TextInput placeholder="Enter any amenities this station has" onKeyDown={inputKeyDown} />
          </List>
          </div>

        <div className="parkingAttributesInput">
        <Title order={5} style={{ marginBottom: '5px' }}>Parking Attributes</Title>
          <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="indigo" size={24} radius="xl">
            <Parking size={16} />
            </ThemeIcon>
          }
          >
            { parkingAttributes.map((tag, i) => (
            <List.Item key={tag}>
            {tag}
            <br />
            <Button size="xs" color="gray" type="button" onClick={() => { removeAttribute(i); }} style={{ marginTop: '10px', marginBottom: '10px' }}>Remove {tag}</Button>
            </List.Item>
            ))}
            <TextInput placeholder="Enter any parking attributes this station has" onKeyDown={inputKeyDownAttribute} />
          </List>
          </div>

        <div className="accessRestrictionsInput">
        <Title order={5} style={{ marginBottom: '5px' }}>Access Restrictions</Title>
          <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="indigo" size={24} radius="xl">
            <Accessible size={16} />
            </ThemeIcon>
          }
          >
            { accessRestrictions.map((tag, i) => (
            <List.Item key={tag}>
            {tag}
            <br />
            <Button size="xs" color="gray" type="button" onClick={() => { removeAccessRestriction(i); }} style={{ marginTop: '10px', marginBottom: '10px' }}>Remove {tag}</Button>
            </List.Item>
            ))}
            <TextInput placeholder="Enter any access restrictions this station has" onKeyDown={inputKeyDownAccessRestriction} />
          </List>
          </div>

      </SimpleGrid>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button size="sm" color="indigo" onClick={handleSubmit}>Add Station</Button>
        </div>
		
	</Layout>
	</>
  )
}

export default AddStation
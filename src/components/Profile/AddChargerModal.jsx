import React, { useState, useContext } from 'react'
import { TextInput, Textarea, Switch, Button, Modal, SimpleGrid } from '@mantine/core';
import { Note, Location, Phone, Elevator } from 'tabler-icons-react';
import { usePlacesWidget } from "react-google-autocomplete";
import { createStation } from '../../context/stationContext/apiCalls';
import { StationContext } from '../../context/stationContext/StationContext';
import { AuthContext } from '../../context/authContext/AuthContext';

// const parkingAttributes = [
//   { value: 'Pull Through Parking', label: 'Pull Through Parking', icon: `` },
//   { value: 'Pull In Parking', label: 'Pull In Parking', icon: `` },
//   { value: 'Trailer Parking', label: 'Trailer Parking', icon: `` },
//   { value: 'Trailer Friendly', label: 'Trailer Friendly', icon: `` },
//   { value: 'Garage', label: 'Garage', icon: `` },
//   { value: 'Handicap Parking', label: 'Handicap Parking', icon: `` },
//   { value: 'Wheelchair Accessible', label: 'Wheelchair Accessible', icon: `` },
//   { value: 'Illuminated', label: 'Illuminated', icon: `` },
// ];

// const accessRestrictions = [
//   { value: 'Customers Only', label: 'Customers Only', icon: `` },
//   { value: 'Guests Only', label: 'Guests Only', icon: `` },
//   { value: 'Employees Only', label: 'Employees Only', icon: `` },
//   { value: 'Students Only', label: 'Students Only', icon: `` },
//   { value: 'Residents Only', label: 'Residents Only', icon: `` },
// ];

// const amenities = [
//   { value: 'Lodging', label: 'Lodging', icon: `` },
//   { value: 'Dining', label: 'Dining', icon: `` },
//   { value: 'Restrooms', label: 'Restrooms', icon: `` },
//   { value: 'EV Parking', label: 'EV Parking', icon: `` },
//   { value: 'Valet Parking', label: 'Valet Parking', icon: `` },
//   { value: 'Park', label: 'Park', icon: `` },
//   { value: 'WiFi', label: 'WiFi', icon: `` },
//   { value: 'Shopping', label: 'Shopping', icon: `` },
//   { value: 'Grocery', label: 'Grocery', icon: `` },
//   { value: 'Hiking', label: 'Hiking', icon: `` },
//   { value: 'Camping', label: 'Camping', icon: `` },
// ];

const AddCharger = ({ addOpened, setAddOpened }) => {
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
  const [amenities, setAmenities] = useState([]);
  const [parkingAttributes, setParkingAttributes] = useState([]);
  const [accessRestrictions, setAccessRestrictions] = useState([]);
  const [price, setPrice] = useState('');
  const [always, setAlways] = useState(false);
  const [restricted, setRestricted] = useState(false);
  const [payment, setPayment] = useState(false);
  const [active, setActive] = useState(false);
  const [homeCharger, setHomeCharger] = useState(false);

  const { ref } = usePlacesWidget({
    apiKey: '',
    onPlaceSelected: (place) => console.log(place)
  })

  const handleSubmit = () => {
    const station = {
      image: image,
      name: name,
      address: address,
      description: description,
      plugType: plugType,
      network: network,
      hours: hours,
      phoneNumber: phoneNumber,
      parkingLevel: parkingLevel,
      price: price,
      open247: always,
      restricted: restricted,
      paymentRequired: payment,
      active: active,
      homeCharger: homeCharger,
      chargerCreator: user._id
    }
    createStation(station, dispatch);
  }

  return (
    <>
    <Modal
    opened={addOpened}
    onClose={() => setAddOpened(false)}
    title="Add A Charging Station"
    size="lg"
    >

      <TextInput
      placeholder=""
      label="Station Image"
      size="md"
      required
      onChange={(e) => setImage(e.target.value)}
      />

      <TextInput
      placeholder="Preston Highway Supercharger"
      label="Location Name"
      size="md"
      icon={<Note size={14} />}
      required
      onChange={(e) => setName(e.target.value)}
      />

      <TextInput
      placeholder="1 Electric Way, City, State ZIP, United States"
      label="Full Street Address"
      size="md"
      icon={<Location size={14} />}
      required
      ref={ref}
      onChange={(e) => setAddress(e.target.value)}
      />

      <Textarea
      placeholder="Description"
      label="Description"
      size="md"
      required
      onChange={(e) => setDescription(e.target.value)}
      />

      <Textarea
      placeholder="Network"
      label="Network"
      size="md"
      required
      onChange={(e) => setNetwork(e.target.value)}
      />

      <Textarea
      placeholder="Plug Type"
      label="Plug Type"
      size="md"
      required
      onChange={(e) => setPlugType(e.target.value)}
      />

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
        label="Is this a home charger?" 
        size="md" 
        color="indigo"
        checked={homeCharger}
        onChange={() => setHomeCharger(!homeCharger)} 
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
        required
        onChange={(e) => setParkingLevel(e.target.value)}
        />

        {/* <MultiSelect
        data={parkingAttributes}
        label="Parking Attributes"
        onChange={(e) => setParkingAttributes(e.target.value)}
        />    
        <MultiSelect
        data={accessRestrictions}
        label="Access Restrictions"
        onChange={(e) => setAccessRestrictions(e.target.value)}
        />    
        <MultiSelect
        data={amenities}
        label="Amenities"
        onChange={(e) => setAmenities(e.target.value)}
        />     */}

      </SimpleGrid>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button variant="light" size="sm" color="indigo" onClick={handleSubmit}>Add Station</Button>
        </div>

      </Modal>

    </>
  )
}

export default AddCharger;
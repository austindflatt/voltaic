import React, { useState } from 'react'
import { TextInput, Textarea, NativeSelect, MultiSelect, Switch, Button, Modal, SimpleGrid } from '@mantine/core';
import { Note, Location, Clock, Phone, CurrencyDollar, Elevator } from 'tabler-icons-react';
import { usePlacesWidget } from "react-google-autocomplete";

const parkingAttributes = [
  { value: 'Pull Through Parking', label: 'Pull Through Parking', icon: `` },
  { value: 'Pull In Parking', label: 'Pull In Parking', icon: `` },
  { value: 'Trailer Parking', label: 'Trailer Parking', icon: `` },
  { value: 'Trailer Friendly', label: 'Trailer Friendly', icon: `` },
  { value: 'Garage', label: 'Garage', icon: `` },
  { value: 'Handicap Parking', label: 'Handicap Parking', icon: `` },
  { value: 'Wheelchair Accessible', label: 'Wheelchair Accessible', icon: `` },
  { value: 'Illuminated', label: 'Illuminated', icon: `` },
];

const accessRestrictions = [
  { value: 'Customers Only', label: 'Customers Only', icon: `` },
  { value: 'Guests Only', label: 'Guests Only', icon: `` },
  { value: 'Employees Only', label: 'Employees Only', icon: `` },
  { value: 'Students Only', label: 'Students Only', icon: `` },
  { value: 'Residents Only', label: 'Residents Only', icon: `` },
];

const amenities = [
  { value: 'Lodging', label: 'Lodging', icon: `` },
  { value: 'Dining', label: 'Dining', icon: `` },
  { value: 'Restrooms', label: 'Restrooms', icon: `` },
  { value: 'EV Parking', label: 'EV Parking', icon: `` },
  { value: 'Valet Parking', label: 'Valet Parking', icon: `` },
  { value: 'Park', label: 'Park', icon: `` },
  { value: 'WiFi', label: 'WiFi', icon: `` },
  { value: 'Shopping', label: 'Shopping', icon: `` },
  { value: 'Grocery', label: 'Grocery', icon: `` },
  { value: 'Hiking', label: 'Hiking', icon: `` },
  { value: 'Camping', label: 'Camping', icon: `` },
];

const AddCharger = ({ addOpened, setAddOpened }) => {
  const [always, setAlways] = useState(false);

  const { ref } = usePlacesWidget({
    apiKey: '',
    onPlaceSelected: (place) => console.log(place)
  })

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
      />

      <TextInput
      placeholder="University of Louisville"
      label="Location Name"
      size="md"
      icon={<Note size={14} />}
      required
      />

      <TextInput
      placeholder="1 Electric Way, City, State ZIP, United States"
      label="Full Street Address"
      size="md"
      icon={<Location size={14} />}
      required
      ref={ref}
      />

      <Textarea
      placeholder="Description"
      label="Description"
      size="md"
      required
      />

      <NativeSelect
      data={[
      'CCS/SAE', 
      'CHAdeMO', 
      'J-1772', 
      'NEMA 14-50', 
      'Tesla', 
      'Tesla (Roadster)', 
      'NEMA 14-50', 
      'Wall', 
      'Dual J-1772 and Wall Outlet', 
      'CHAdeMO and CCS/SAE Combo', 
      'Dual CHAdeMO Plugs',
      'Dual CCS/SAE Combo',
      'Dual CCS plus CHAdeMO',
      'Triple J-1772',
      'Supercharger'
      ]}
      placeholder="Select Plug"
      label="Stations"
      description="Select Plug"
      required
      />

      <NativeSelect
      data={['Non-networked', 'AmpUp', 'Tesla (Roadster)', 'NEMA 14-50', 'Wall']}
      placeholder="Select Network"
      label="Networks"
      required
      />

      <SimpleGrid cols={3} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 3 },
      { maxWidth: 'sm', cols: 1 },
      ]}>
        <Switch 
        label="Open 24/7" 
        size="md" 
        id="always" 
        color="indigo"
        checked={always}
        onChange={() => setAlways(!always)} 
        style={{ marginTop: '10px' }}
        />
        <Switch 
        label="Restricted Access" 
        size="md" 
        id="always" 
        color="indigo"
        checked={always}
        onChange={() => setAlways(!always)} 
        style={{ marginTop: '10px' }}
        />
        <Switch 
        label="Payment Required" 
        size="md" 
        id="always" 
        color="indigo"
        checked={always}
        onChange={() => setAlways(!always)} 
        style={{ marginTop: '10px' }}
        />
        <Switch 
        label="Is this charging location open/active?" 
        size="md" 
        id="always" 
        color="indigo"
        checked={always}
        onChange={() => setAlways(!always)} 
        style={{ marginTop: '10px' }}
        required
        />
        <Switch 
        label="Is this a home charger?" 
        size="md" 
        id="always" 
        color="indigo"
        checked={always}
        onChange={() => setAlways(!always)} 
        style={{ marginTop: '10px' }}
        required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 2 },
      { maxWidth: 'sm', cols: 1 },
      ]}>
        <TextInput
        placeholder="Hours"
        label="Hours"
        size="md"
        icon={<Clock size={14} />}
        required
        />     
        <TextInput
        placeholder="000-000-000"
        label="Phone Number"
        size="md"
        icon={<Phone size={14} />}
        required
        />  
        <TextInput
        placeholder="Price"
        label="Price"
        size="md"
        icon={<CurrencyDollar size={14} />}
        required
        />     
        <TextInput
        placeholder="Parking Level"
        label="Parking Level"
        size="md"
        icon={<Elevator size={14} />}
        required
        /> 
        <MultiSelect
        data={parkingAttributes}
        label="Parking Attributes"
        />    
        <MultiSelect
        data={accessRestrictions}
        label="Access Restrictions"
        />    
        <MultiSelect
        data={amenities}
        label="Amenities"
        />    
      </SimpleGrid>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button variant="light" size="sm" color="indigo">Add Station</Button>
      </div>

      </Modal>

    </>
  )
}

export default AddCharger
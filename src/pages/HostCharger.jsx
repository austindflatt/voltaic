import React, { useState } from 'react'
import { Title, TextInput, Textarea, NativeSelect, Switch, Button, SimpleGrid } from '@mantine/core';
import { Location } from 'tabler-icons-react';

const HostCharger = () => {
  const [always, setAlways] = useState(false);
  return (
    <>
    
    <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Add A Home Charging Station</Title></div>
    <TextInput
    placeholder=""
    label="Station Image"
    size="md"
    />
    <TextInput
    placeholder="1 Electric Way, City, State ZIP, United States"
    label="Full Street Address"
    size="md"
    icon={<Location size={14} />}
    />
    <Textarea
    placeholder="Description"
    label="Description"
    size="md"
    />

    <NativeSelect
    data={['J-1772', 'Tesla', 'Tesla (Roadster)', 'NEMA 14-50', 'Wall']}
    placeholder="Select Plug"
    label="Stations"
    description="Select Plug"
    required
    />


    <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
    { maxWidth: 'lg', cols: 2 },
    { maxWidth: 'sm', cols: 1 },
    ]}>
      <TextInput
      placeholder="Hours"
      label="Hours"
      size="md"
      />

      <Switch 
      label="Open 24/7" 
      size="md" 
      id="always" 
      color="green"
      checked={always}
      onChange={() => setAlways(!always)} 
      style={{ marginTop: '10px' }}
      />
    </SimpleGrid>

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button variant="light" size="sm" color="indigo">Add Station</Button>
    </div>

    </>
  )
}

export default HostCharger
import React from 'react';
import { Anchor, NativeSelect, TextInput, SimpleGrid } from '@mantine/core'
import { Location } from 'tabler-icons-react'

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

const Filters = () => {
  return (
    <>
    <SimpleGrid cols={2} breakpoints={[
      { maxWidth: 'sm', cols: 1 },
    ]}>
    <NativeSelect
    size="md"
    label="Plug Type"
    data={plugs}
    placeholder="Select one"
    style={{ marginTop: '10px', marginBottom: '10px' }}
    />
    <NativeSelect
    size="md"
    label="Network"
    data={networks}
    placeholder="Select one"
    style={{ marginTop: '10px', marginBottom: '10px' }}
    />
    </SimpleGrid>
    <TextInput
    placeholder="Anywhere"
    label="Location"
    size="md"
    icon={<Location size={14} />}
    />
    </>
  )
}

export default Filters
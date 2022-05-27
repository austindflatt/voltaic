import React from 'react'
import { Image, Text, Highlight } from '@mantine/core';

const StationCard = (props) => {
  return (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Image
    radius="md"
    src="https://photos.plugshare.com/photos/912852.jpg"
    alt="Random tesla"
    height='285px'
    withPlaceholder
    />
    <div className='details'>
      <div className='location'><Text size="lg">Louisville, Kentucky</Text></div>
      <div className='added-by'><Text size="md">Added by Austin Flatt</Text></div>
      <div className='cost'><Text size="md">Payment Required</Text></div>
      <div className='check-ins'><Text size="md"><Highlight highlightColor="red" highlight="52 Check-Ins">52 Check-Ins</Highlight></Text></div>
    </div>
  </div>
  )
}

export default StationCard;
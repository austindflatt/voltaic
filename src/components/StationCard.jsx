import React from 'react'
import { Image } from '@mantine/core';

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
    <div className='location'>Louisville, Kentucky</div>
    <div className='favorite'>Fav</div>
    <div className='added-by'>Added by Austin Flatt</div>
    <div className='cost'>Payment Required</div>
    <div className='check-ins'>52 Checkins</div>
  </div>
  )
}

export default StationCard;
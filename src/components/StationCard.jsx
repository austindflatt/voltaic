import React from 'react'
import { Image, Text, ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Heart } from 'tabler-icons-react';

const StationCard = (props) => {
  return (
  <div className='card-container' style={{ width: '100%', margin: 'auto' }} key={props.idx}>
    <Link to="/chargers/2138912" style={{ textDecoration: 'none', color: 'black' }}>
      <Image
      radius="md"
      src={props.image}
      alt="Random tesla"
      height='285px'
      withPlaceholder
      />
      <Link to="user">
        <button className="btn"><ActionIcon variant="transparent"><Heart size={28} strokeWidth={2} color={'#fff'} /></ActionIcon></button>
      </Link>
      <div className='details'>
        <div className='location'><Text size="md">{props.chargerName}</Text></div>
        <div className='cost'><Text size="md">Payment Required</Text></div>
        <div className='check-ins'><Text size="md">52 Check Ins</Text></div>
      </div>
    </Link>
  </div>
  )
}

export default StationCard;
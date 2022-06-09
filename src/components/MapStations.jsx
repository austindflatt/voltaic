import React from 'react'
import { Image, Text, ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Heart } from 'tabler-icons-react';

const MapStations = () => {
  return (
    <>
    <div
    className="flex w-screen px-2 py-2 overflow-x-scroll overflow-y-hidden bg-gray-100 lg:overflow-auto lg:sticky lg:w-1/4 lg:h-1/4 lg:flex-col"
    style={{ minHeight: `300px` }}
    >
      <div className='card-container' >
      <Link to="/chargers/2138912" style={{ textDecoration: 'none', color: 'black' }}>
      <Image
      radius="md"
      src="https://photos.plugshare.com/photos/466927.jpg"
      alt="Random tesla"
      height='285px'
      withPlaceholder
      />
      <Link to="user">
        <button className="btn"><ActionIcon variant="transparent"><Heart size={28} strokeWidth={2} color={'#fff'} /></ActionIcon></button>
      </Link>
      <div className='details'>
        <div className='location'><Text size="md">Preston Highway Supercharger</Text></div>
        <div className='cost'><Text size="md">Payment Required</Text></div>
        <div className='check-ins'><Text size="md">52 Check Ins</Text></div>
      </div>
      </Link>
      </div>
    </div>
    </>
  )
}

export default MapStations
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TextInput, Textarea, Button, Modal, NativeSelect } from '@mantine/core';
import { AuthContext } from '../../context/authContext/AuthContext';
import { createCheckin } from '../../context/checkinContext/apiCalls';
import { CheckinContext } from '../../context/checkinContext/CheckinContext';
import axios from 'axios';

const CheckInModal = ({ checkInOpened, setCheckInOpened }) => {
  const params = useParams();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(CheckinContext);
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState('');
  const [photo, setPhoto] = useState('');
  const [review, setReview] = useState('');

  // Using params below to get the stations ID and used a GET request to get the data from that ID
  useEffect(() => {
    const getStationData = async () => {
      const response = await axios.get(`https://voltaic-app.herokuapp.com/api/stations/find/${params.stationId}`);
      const data = response.data.payload;
    }
    getStationData();
  }, [params.stationId]);

  
  // The function that submits a users check in
  const handleSubmit = () => {
    const checkin = {
      chargerUser: user._id,
      chargeStation: params.stationId,
      chargeStatus: status,
      rating: rating,
      review: review,
      photo: photo,
    }
    createCheckin(checkin, dispatch);
  }

  // Check In Modal for station page
  return (
    <>
    <Modal
    opened={checkInOpened}
    onClose={() => setCheckInOpened(false)}
    title={`Check In`}
    size="lg"
    >

    <NativeSelect
    size="md"
    label="Charge Status"
    data={['Successfully Charged', 'Could Not Charge']}
    onChange={(e) => setStatus(e.target.value)}
    value={status}
    placeholder="Select one"
    style={{ marginTop: '10px', marginBottom: '10px' }}
    required
    />

    <NativeSelect
    size="md"
    label="Rating"
    data={['1', '2', '3', '4', '5']}
    onChange={(e) => setRating(e.target.value)}
    value={rating}
    placeholder="Select one"
    type="number"
    style={{ marginTop: '10px', marginBottom: '10px' }}
    required
    />

    <TextInput
    placeholder=""
    label="Photo"
    size="md"
    onChange={(e) => setPhoto(e.target.value)}
    />

    <Textarea
    placeholder=""
    label="Review"
    size="md"
    style={{ marginTop: '10px' }}
    minRows="4"
    onChange={(e) => setReview(e.target.value)}
    required
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button size="sm" color="green" onClick={handleSubmit}>Check In</Button>
    </div>

    </Modal>
    </>
  )
}

export default CheckInModal;
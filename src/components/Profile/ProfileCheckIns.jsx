import React from 'react';
import { Modal } from '@mantine/core';

const ProfileCheckIns = ({ checkInOpened, setCheckInOpened }) => {
  return (
    <>
    <Modal
    opened={checkInOpened}
    onClose={() => setCheckInOpened(false)}
    title="Austin's Check In History"
    size="lg"
    >
      <p>Your check in history goes hereeeee</p>
    </Modal>
    </>
  )
}

export default ProfileCheckIns
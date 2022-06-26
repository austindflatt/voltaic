import React from 'react'
import { Modal, Text, Paper } from '@mantine/core';

const Account = ({ checkInOpened, setCheckInOpened }) => {

  // Check In modal for current logged in user.
  
  return (
    <>
    <Modal
    opened={checkInOpened}
    onClose={() => setCheckInOpened(false)}
    title="Austin's Check In History"
    size="lg"
    >

      <Paper shadow="xs" p="md">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
      </Paper>

    </Modal>
    </>
  )
}

export default Account;
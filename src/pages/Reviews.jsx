import React from 'react'
import { Title, Table, Avatar, ScrollArea, Button } from '@mantine/core';

const Messages = () => {
  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}><Title order={1}>Your Reviews (0)</Title></div>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
          <thead>
            <tr>
              <th>Station Image</th>
              <th>Name</th>
              <th>Your Review</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={null}>
              <td><Avatar src="https://photos.plugshare.com/photos/437815.jpg" size={94} radius="md" /></td>
              <td>Preston Highway Supercharger</td>
              <td>This was a good charger</td>
              <td>5.0</td>
              <td>
                <Button type="Submit" variant="light" color="red" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </ScrollArea>
    </>
  )
}

export default Messages
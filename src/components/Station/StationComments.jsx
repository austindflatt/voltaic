import React from 'react';
import { createStyles, Text, Avatar, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

function StationComments() {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src='https://www.austinflatt.com/images/headshot.webp' alt='Austin' radius="xl" />
        <div>
          <Text size="sm">Austin</Text>
          <Text size="xs" color="dimmed">
            Posted 10 mins ago
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        This is a review for this station
      </Text>
    </div>
  );
}

export default StationComments
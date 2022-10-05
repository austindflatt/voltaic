import React from 'react';
import { Heart, Check } from 'tabler-icons-react';
import { Card, Text, Group, Center, Badge,  createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      height: 280,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    stationType: {
      position: 'absolute',
      top: theme.spacing.xs - 20,
      right: theme.spacing.xs - 15,
      pointerEvents: 'none',
    },

    rating: {
      position: 'absolute',
      top: theme.spacing.xs - 20,
      left: theme.spacing.xs - 15,
      pointerEvents: 'none',
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    author: {
      color: theme.colors.dark[2],
    },
  };
});

function StationCard(props) {
  const { classes, theme } = useStyles();

  // Props are passed in from certain station component, this is the main card.

  return (
    <Link to={`/charger/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
    >
      <div className={classes.image} style={{ backgroundImage: `url(${props.image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
        <Badge radius="sm" variant="filled" className={classes.stationType} color={props.stationType ? 'green' : 'indigo'}>
          {props.stationType ? <>Residential</> : <>Public</>}
        </Badge>

        {/* <Badge radius="sm" variant="filled" className={classes.rating} color="gray">
          {props.rating}
        </Badge> */}

          <Text size="lg" className={classes.title} weight={500}>
            {props.chargerName}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {props.payment ? <>Payment Required</> : <>No Payment Needed</>}
            </Text>

            <Group spacing="lg">
              <Center>
                <Heart size={16} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {props.favorites}
                </Text>
              </Center>
              <Center>
                <Check size={16} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {props.checkIns}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
    </Link>
  );
}

export default StationCard;
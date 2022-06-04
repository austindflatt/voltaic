import React from 'react'
import { Title, Grid, SimpleGrid, Skeleton, Image, useMantineTheme } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 300;

const ProfileFavorites = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><Title order={3}>Austin's Favorite Stations</Title></div>
      <div style={{ marginTop: '15px' }}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Image
        radius="md"
        src="https://photos.plugshare.com/photos/912852.jpg"
        alt="Random tesla"
        withPlaceholder
        height={PRIMARY_COL_HEIGHT}
        />
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} /> */}
        <Grid gutter="md">
          <Grid.Col>
            <Image
            radius="md"
            src="https://photos.plugshare.com/photos/709986.jpg"
            alt="Random tesla"
            withPlaceholder
            height={SECONDARY_COL_HEIGHT}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
            radius="md"
            src="https://photos.plugshare.com/photos/456612.jpg"
            alt="Random tesla"
            withPlaceholder
            height={SECONDARY_COL_HEIGHT}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
            radius="md"
            src="https://photos.plugshare.com/photos/493162.jpg"
            alt="Random tesla"
            withPlaceholder
            height={SECONDARY_COL_HEIGHT}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      </div>
    </>
  )
}

export default ProfileFavorites
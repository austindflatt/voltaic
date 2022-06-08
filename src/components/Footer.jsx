import React from 'react';
import { createStyles, Container, Anchor, Text, Group, ActionIcon } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.mainSection} size="lg">
      <div className={classes.inner}>
        <Text color="dimmed" size="md">© 2022 Voltaic.</Text>

        <Group className={classes.links}>
          <Link to="privacy" style={{ textDecoration: 'none' }}>
          <Anchor
            color="dimmed"
            key={null}
            sx={{ lineHeight: 1 }}
            size="sm"
            >
            Privacy
          </Anchor>
          </Link>
          <Link to="terms" style={{ textDecoration: 'none' }}>
          <Anchor
            color="dimmed"
            key={null}
            sx={{ lineHeight: 1 }}
            size="sm"
            >
            Terms
          </Anchor>
          </Link>
          <Link to="developers" style={{ textDecoration: 'none' }}>
          <Anchor
            color="dimmed"
            key={null}
            sx={{ lineHeight: 1 }}
            size="sm"
            >
            Developers
          </Anchor>
          </Link>
        </Group>

        <Group spacing={0} position="right" noWrap>
          <Link to="https://twitter.com/voltaicapp">
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          </Link>
          <Link to="https://youtube.com/voltaicapp">
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          </Link>
          <Link to="https://instagram.com/voltaicapp">
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
          </Link>
        </Group>
      </div>
      </Container>
    </div>
  );
}

export default Footer;
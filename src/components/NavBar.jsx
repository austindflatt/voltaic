import React, { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Divider,
  Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.red[6],
    borderBottom: ``,
    marginBottom: 100,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 5],
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 5],
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,

    '&:hover': {
      backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
    },
  },

  tabControlActive: {
    color: `${theme.colorScheme === 'dark' ? theme.white : theme.black} !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
  },
}));

function NavBar() {
  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="lg">
        <Group position="apart">
          <h3>Voltaic</h3>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color={theme.white}
          />

          <Menu
            size={260}
            placement="end"
            transition="pop-top-right"
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src="https://pbs.twimg.com/profile_images/1509922129738932267/xNYVrZwa_400x400.jpg" alt={null} radius="xl" size={30} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                    Austin Flatt
                  </Text>
                  {/* <ChevronDown size={12} /> */}
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Label>Account</Menu.Label>

            <Menu.Item>
              Favorite stations
            </Menu.Item>
            <Menu.Item>
              Charging stations
            </Menu.Item>
            {/* Icon size: 14 */}
            <Menu.Item>
              Trips
            </Menu.Item>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item>Edit account</Menu.Item>
            <Menu.Item>Logout</Menu.Item>

            <Divider />

            <Menu.Label>Account Controls</Menu.Label>
            <Menu.Item color="red">
              Delete account
            </Menu.Item>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}

export default NavBar
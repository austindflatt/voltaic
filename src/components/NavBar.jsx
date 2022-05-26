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
import {
  Logout,
  Heart,
  Star,
  PlugConnected,
  Message,
  Road,
  Settings,
  User,
  Trash,
  SwitchHorizontal,
  ChevronDown,
} from 'tabler-icons-react';

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



  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 5],
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
          <div className="logo">Voltaic</div>

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
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Label>Account</Menu.Label>

            <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
              Favorite stations
            </Menu.Item>
            <Menu.Item icon={<PlugConnected size={14} color={theme.colors.yellow[6]} />}>
              Charging stations
            </Menu.Item>
            <Menu.Item icon={<Road size={14} color={theme.colors.blue[6]} />}>
              Trips
            </Menu.Item>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>Edit account</Menu.Item>
            <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

            <Divider />

            <Menu.Label>Account Controls</Menu.Label>
            <Menu.Item color="primary" icon={<User size={14} />}>
              Become a host
            </Menu.Item>
            <Menu.Item color="red" icon={<Trash size={14} />}>
              Delete account
            </Menu.Item>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}

export default NavBar
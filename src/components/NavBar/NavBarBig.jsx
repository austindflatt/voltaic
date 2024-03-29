import React, { useState, useContext } from 'react';
import { createStyles, Avatar, UnstyledButton, Group, Text, Menu, Divider } from '@mantine/core';
import { Logout, GasStation, Settings, User, Trash, ChevronDown } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';
import Login from '../Login/Login';
import Account from '../Profile/AccountModal';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.red[6],
    borderBottom: ``,
    marginBottom: 0,
  },

  mainSection: {
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
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

function NavBarBig() {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const [opened, setOpened] = useState(false);
  const [accountOpened, setAccountOpened] = useState(false);

  // showLogin function will open the modal for logging a user in.
  const showLogin = () => {
    setOpened(true);
  }
  
  // showEdit function will open the modal for editing a users account details.
  const showEdit = () => {
    setAccountOpened(true);
  }

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <Group position="apart">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            Voltaic
          </div>
          </Link>

          <Login
          opened={opened}
          setOpened={setOpened}
          />

          <Account
          accountOpened={accountOpened}
          setAccountOpened={setAccountOpened}
          />

          { user ?

          // This area will show when a user is successfull logged in

          <>
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
                  <Avatar src={user.profilePic} alt={null} radius="xl" size={30} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                    {user.username}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Label>Account</Menu.Label>

            <Link to={`/user/${user._id}`}>
              <Menu.Item icon={<User size={14} color={theme.colors.indigo[6]} />}>
                Your profile
              </Menu.Item>
            </Link>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Settings size={14} />} onClick={() => showEdit()}>
              Edit account
            </Menu.Item>

            <Menu.Item icon={<Logout size={14} />} onClick={() => dispatch(logout())}>Logout</Menu.Item>

            <Divider />

            <Menu.Label>Account Controls</Menu.Label>
            <Link to={`/add-station`}>
              <Menu.Item color="indigo" icon={<GasStation size={14} />}>
                  Add a station
              </Menu.Item>
            </Link>
            <Menu.Item color="red" icon={<Trash size={14} />}>
              Delete account
            </Menu.Item>
          </Menu>
          </> :

          // This area shows when a user is not logged in

          <UnstyledButton
          size={260}
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
          onClick={() => showLogin()}
          >
            <Group spacing={7}>
              <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                Login / Register
              </Text>
            </Group>
          </UnstyledButton>
        }
        </Group>
      </div>
    </div>
  );
}

export default NavBarBig;
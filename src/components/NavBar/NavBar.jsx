import React, { useState, useContext } from 'react';
import { createStyles, Container, Avatar, UnstyledButton, Group, Text, Menu, Divider } from '@mantine/core';
import { Logout, Heart, PlugConnected, GasStation, Check, Settings, User, Trash, ChevronDown } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';
import Login from '../Login/Login';
import Account from '../Profile/AccountModal';
import AddCharger from '../Profile/AddChargerModal';
import CheckIns from '../Profile/CheckInsModal';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.red[6],
    borderBottom: ``,
    marginBottom: 50,
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
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const [opened, setOpened] = useState(false);
  const [accountOpened, setAccountOpened] = useState(false);
  const [addOpened, setAddOpened] = useState(false);
  const [checkInOpened, setCheckInOpened] = useState(false);
  
  const showLogin = () => {
    setOpened(true);
  }
  
  const showEdit = () => {
    setAccountOpened(true);
  }
  
  const showAdd = () => {
    setAddOpened(true);
  }

  const showCheckIns = () => {
    setCheckInOpened(true);
  }
  
  return (
    <>
    <div className={classes.header}>
      <Container className={classes.mainSection} size="xl">
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

          <AddCharger
          addOpened={addOpened}
          setAddOpened={setAddOpened}
          />

          <CheckIns
          checkInOpened={checkInOpened}
          setCheckInOpened={setCheckInOpened}
          />

          { user ?
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
                {/* onClick={() => viewProfile(user._id)} */}
                Your profile
              </Menu.Item>
            </Link>
            <Menu.Item icon={<Check size={14} color={theme.colors.orange[6]} />} onClick={() => showCheckIns()}>
              Your check-ins
            </Menu.Item>
            <Link to="/account/favorites">
              <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
                Your favorite stations
              </Menu.Item>
            </Link>
            <Link to="/account/stations">
              <Menu.Item icon={<PlugConnected size={14} color={theme.colors.yellow[6]} />}>
                Your charging stations
              </Menu.Item>
            </Link>

            <Menu.Label>Settings</Menu.Label>

            <Menu.Item icon={<Settings size={14} />} onClick={() => showEdit()}>
              Edit account
            </Menu.Item>
            <Menu.Item icon={<Logout size={14} />} onClick={() => dispatch(logout())}>
              Logout
            </Menu.Item>

            <Divider />

            <Menu.Label>Account Controls</Menu.Label>
            <Menu.Item color="indigo" icon={<GasStation size={14} />} onClick={() => showAdd()}>
                Add a station
            </Menu.Item>
            <Menu.Item color="red" icon={<Trash size={14} />}>
              Delete account
            </Menu.Item>
          </Menu>
          </> :
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
      </Container>
    </div>
    </>
  );
}

export default NavBar
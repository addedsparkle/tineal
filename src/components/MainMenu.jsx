import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth } from 'reactfire';

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState('home');
  const auth = useAuth();
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <Menu icon="labeled" pointing vertical>
      <Menu.Item as={Link} name="home" to="/" onClick={() => setActiveItem('home')} active={activeItem === 'home'}>
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/meals"
        onClick={() => setActiveItem('viewmeals')}
        active={activeItem === 'viewmeals'}
      >
        <Icon name="food" />
        View Meals
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="createmeal"
        to="/meals/new"
        onClick={() => setActiveItem('newmeal')}
        active={activeItem === 'newmeal'}
      >
        <Icon name="add circle" />
        New Meal
      </Menu.Item>
      <Menu.Item as={Link} to="/plans" onClick={() => setActiveItem('viewplans')} active={activeItem === 'viewplans'}>
        <Icon name="list" />
        Plans
      </Menu.Item>
      <Menu.Item as={Link} to="/plans/new" onClick={() => setActiveItem('newplan')} active={activeItem === 'newplan'}>
        <Icon name="add square" />
        New Plan
      </Menu.Item>
      <Menu.Item onClick={signOut} position="right">
        <Icon name="sign-out" />
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;

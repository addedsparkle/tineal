import React, { useState } from 'react';
import { Menu, Icon, IconGroup } from 'semantic-ui-react';
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
        <Icon name="home" size="big" />
        Home
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/meals"
        onClick={() => setActiveItem('viewmeals')}
        active={activeItem === 'viewmeals'}
      >
        <Icon name="food" size="big" />
        View Meals
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="createmeal"
        to="/meals/new"
        onClick={() => setActiveItem('newmeal')}
        active={activeItem === 'newmeal'}
      >
        <IconGroup size="big">
          <Icon name="food" />
          <Icon corner="bottom right" name="add" color="red" />
        </IconGroup>
        New Meal
      </Menu.Item>
      <Menu.Item as={Link} to="/plans" onClick={() => setActiveItem('viewplans')} active={activeItem === 'viewplans'}>
        <Icon name="list" size="big" />
        Plans
      </Menu.Item>
      <Menu.Item as={Link} to="/plans/new" onClick={() => setActiveItem('newplan')} active={activeItem === 'newplan'}>
        <IconGroup size="big">
          <Icon name="list" />
          <Icon corner="bottom right" name="add" color="red" />
        </IconGroup>
        New Plan
      </Menu.Item>
      <Menu.Item onClick={signOut} position="right">
        <Icon name="sign-out" size="big" />
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;

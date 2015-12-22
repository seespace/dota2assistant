import React from 'react'
import { Menu, Item } from 'react-semantify'

export class Header extends React.Component {
  render () {
    return (
      <Menu className='pointing secondary stackable'>
        <Item className='active'>
          <img src='http://semantic-ui.com/examples/assets/images/logo.png' />
        </Item>
        <Item type='link'>
          Features
        </Item>
        <Item type='link'>
          Testimonials
        </Item>
        <Item className='right' type='link'>
          Login
        </Item>
      </Menu>
    )
  }
}

export default Header

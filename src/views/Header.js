import React from 'react';
import { Menu, Item, Icon } from 'react-semantify';

export class Header extends React.Component {

  static defaultProps = {
    firstPick: true
  }

  static propTypes = {
    firstPick: React.PropTypes.bool,
    onToggleFirstPick: React.PropTypes.func,
    onUndo: React.PropTypes.func,
    onRedo: React.PropTypes.func
  }

  render () {
    let {
      firstPick,
      onToggleFirstPick,
      onUndo,
      onRedo
    } = this.props;

    let toggleClass = firstPick ? 'on' : 'off';

    return (
      <Menu className='container labeled icon'>
        <Item type='link'>
          <Icon className='home' /> Home
        </Item>
        <Item type='link' onClick={onToggleFirstPick}>
          <Icon className={`toggle ${toggleClass}`} /> First Pick
        </Item>
        <Item type='link' onClick={onUndo}>
          <Icon className='undo' /> Undo
        </Item>
        <Item type='link' onClick={onRedo}>
          <Icon className='repeat' /> Redo
        </Item>
        <Item type='link'>
          <Icon className='refresh' /> Reset All
        </Item>
        <Item className='right' type='link'>
          <Icon className='user' /> Login
        </Item>
      </Menu>
    );
  }
}

export default Header;

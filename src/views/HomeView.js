import React from 'react';
import { connect } from 'react-redux';
import { actions as settingActions } from '../redux/modules/setting';
import Header from 'views/Header';

import styles from './HomeView.scss';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  setting: state.setting.present
});

const mapDispatchToProps = settingActions;

export class HomeView extends React.Component {
  static propTypes = {
    setting: React.PropTypes.object,
    togglePick: React.PropTypes.func,
    undo: React.PropTypes.func,
    redo: React.PropTypes.func
  }

  static defaultProps = {
    setting: { firstPick: true }
  }

  render () {
    const { togglePick, undo, redo, setting } = this.props;

    const headerProps = {
      undoable: setting.past && setting.past.length > 0,
      redoable: setting.future && setting.past.length > 0,
      firstPick: setting.firstPick
    };

    return (
      <div className={styles['wrapper']}>
        <Header {...headerProps} onToggleFirstPick={togglePick} onUndo={undo} onRedo={redo} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

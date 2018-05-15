import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// material-ui
import AppBar from 'material-ui/AppBar';
// import Download from 'material-ui/svg-icons/file/file-download';

// containers
import ColorSelectionMenu from './containers/ColorSelectionMenu';
import CanvasContainer from './containers/CanvasContainer';

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppBar
          title="Stitch Creator"
          iconElementRight={<ColorSelectionMenu />}
        />
        <CanvasContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColor } from '../actions';
import ColorSelection from '../components/ColorSelection';
import Colors from './../data/DMCColors.js';

class ColorSelectionMenu extends Component { // eslint-disable-line no-unused-vars
   render() {
      return (
        <ColorSelection />
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setColor: (color) => dispatch(setColor(color)),
      Colors: Colors
   }
};

const mapStateToProps = (state) => {
   return {
       color: state.color
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelection);

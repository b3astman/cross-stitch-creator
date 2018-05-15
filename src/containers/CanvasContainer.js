import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStitch } from '../actions';
import Canvas from '../components/Canvas';

class CanvasContainer extends Component { // eslint-disable-line no-unused-vars
   render() {
      return (
        <Canvas { ...this.props } />
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addStitch: (stitch) => dispatch(addStitch(stitch))
   }
};

const mapStateToProps = (state) => {
   return {
       stitches: state.stitches,
       currentDMC: state.color
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);

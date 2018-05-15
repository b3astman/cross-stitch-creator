import React, { Component } from 'react';

export default class Canvas extends Component {

  // When user clicks on the canvas, add a new stitch
  handleClick(e) {
    e.persist();
    const x = Math.floor(e.clientX / 10) * 10;
    const y = Math.floor(e.clientY / 10) * 10 - 70;
    const color = "#" + this.props.currentDMC;
    const key = x + "" + y;

    // Add the currently selected color and (X, Y) coordinates to stitches array
    this.props.addStitch({key: key, x: x, y: y, dmc: color });
  }

  // Create a grid from SVG and render all stitches onto the canvas
  render() {
    return (
      <svg onClick={(e) => this.handleClick(e)} id="cross-stitch" width="100%" height={ window.innerHeight - 70 } xmlns="http://www.w3.org/2000/svg"> \
          <defs> \
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse"> \
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" /> \
              </pattern> \
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"> \
                  <rect width="100" height="100" fill="url(#smallGrid)" /> \
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="1" /> \
              </pattern> \
          </defs> \
          {
            this.props.stitches &&
            this.props.stitches.map((stitch, i) => {
              return (
                [<line
                    key={stitch.y + "-" + stitch.x}
                    x1={stitch.x + 0.5} y1={stitch.y + 0.5}
                    x2={stitch.x + 9 + 0.5} y2={stitch.y + 9 + 0.5}
                    style={{stroke: stitch.dmc, strokeWidth: 2, strokeLinecap: "round"}}
                 />,
                 <line
                    key={i + stitch.x}
                    x1={stitch.x + 9.5} y1={stitch.y + 0.5}
                    x2={stitch.x + 0.5} y2={stitch.y + 9 + 0.5}
                    style={{stroke: stitch.dmc, strokeWidth: 2, strokeLinecap: "round"}}
                  />]
              );
            })
          }
          <rect width="100%" height="100%" fill="url(#grid)" /> \
      </svg>
    );
  }
}

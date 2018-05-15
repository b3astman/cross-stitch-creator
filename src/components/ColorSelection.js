/*
  A popup menu for selecting a color based on a list of swatches.
 */
import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Paper from 'material-ui/Paper';
import ColorLens from 'material-ui/svg-icons/image/color-lens';

export default class ColorSelection extends Component {

  handleClick(color) {
    this.props.setColor(color); // Changes value in redux tree
  }

  render() {
    return(
        <IconMenu
           iconButtonElement={
             <IconButton>
              <ColorLens color={ "#" + this.props.color }/>
             </IconButton>
           }
           targetOrigin={{horizontal: 'right', vertical: 'top'}}
           anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <Paper>
          <div style={{ width: 300 }}>
            {
              this.props.Colors.map((color, i) => {
                return (
                  <div
                    onClick={() => this.handleClick(color["RGB"])}
                    key={color["RGB"] + color["DMC"]}
                    style={{
                      float: 'left',
                      height: 20,
                      width: 20,
                      backgroundColor: "#" + color["RGB"]
                    }}
                  >
                  </div>
                );
                })
            }
            </div>
          </Paper>
        </IconMenu>
      );
  }
}

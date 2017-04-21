import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const DeepDownTheTree = (props) => (
  <h1 style={{color: props.muiTheme.palette.accent1Color}}>
    This is my custom component
  </h1>
);

export default muiThemeable()(DeepDownTheTree);
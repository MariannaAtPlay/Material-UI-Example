/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {orange500} from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import AutoComplete from 'material-ui/AutoComplete';

import DeepDownTheTree from './DeepDownTheTree';



// darkBaseTheme:
// const muiTheme = getMuiTheme(darkBaseTheme);


//colors:
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
});

//style for Paper
const style = {
  height: 400,
  width: 400,
  margin: 50,
  padding: 60,
  textAlign: 'center',
  display: 'inline-block',
};


class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose}/>
    );

    return (

      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="container">
            <AppBar title="Material-UI"/>
            <Dialog open={this.state.open} title="This is my secret" actions={standardActions} onRequestClose=    {this.handleRequestClose}>
              I didn&#39;t get much sleep last night
            </Dialog>
            <Paper style={style} zDepth={3} circle={true}>
              <h1>Example Project</h1>
              <RaisedButton label="This is my secret" secondary={true} onTouchTap={this.handleTouchTap}/>
            </Paper>

            <br />
            {/* this is my custom component */}
            <DeepDownTheTree />

            <br />
            <CircularProgress />

            <br />
              <AutoComplete
                floatingLabelText="Type 'r', case insensitive"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={fruit}
              />
          </div>
      </MuiThemeProvider>
    );
  }
}


// this data is used by the AutoComplete component
const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];



export default Main;


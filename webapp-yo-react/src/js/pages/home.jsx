import React from 'react';
import ItemList from '../components/itemList.jsx';
import {Jumbotron, Label, Button} from 'react-bootstrap'

var Home = React.createClass({

  render() {
    return (
      <Jumbotron>
        <h1>Home Area</h1>

        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>

        <div>
          <Label bsStyle="default">Default</Label>
          <Label bsStyle="primary">Primary</Label>
          <Label bsStyle="success">Success</Label>
          <Label bsStyle="info">Info</Label>
          <Label bsStyle="warning">Warning</Label>
          <Label bsStyle="danger">Danger</Label>
        </div>


        <ItemList />
      </Jumbotron>
    );
  }

});

module.exports = Home;

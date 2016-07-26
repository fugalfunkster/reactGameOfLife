import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Paragraph from './components/paragraph';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Paragraph>Hello World!</Paragraph>
      </div>
    );
  }
});

let element = document.createElement('div');
element.id = 'app';
document.body.appendChild(element);

ReactDOM.render(<App/>, document.getElementById('app'));

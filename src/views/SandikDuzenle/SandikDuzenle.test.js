import React from 'react';
import ReactDOM from 'react-dom';
import SandikDuzenle from './SandikDuzenle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SandikDuzenle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
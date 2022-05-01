import React from 'react';
import ReactDOM from 'react-dom';

Ext.createComponent = ({ Component, element }) => {
    ReactDOM.render(<Component />, element);
}
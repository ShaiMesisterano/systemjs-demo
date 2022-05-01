import React from 'react';
import ReactDOM from 'react-dom';

declare global {
    interface Window { Ext: Record<string, unknown>; }
}

window.Ext = window.Ext || {};

window.Ext.createComponent = ({ Component, element }) => {
    try {
        ReactDOM.render(<Component />, element);
    } catch ({ message }) {
        console.error(message);
    }
}
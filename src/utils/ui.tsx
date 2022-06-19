import React from 'react';
import ReactDOM from 'react-dom';

(window as any).Ext = (window as any).Ext || {};

(window as any).Ext.createComponent = ({ Component, element }: { Component: any; element: any }) => {
    try {
        ReactDOM.render(<Component />, element);
    } catch ({ message }) {
        console.error(message);
    }
};

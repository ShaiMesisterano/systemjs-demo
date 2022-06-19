System.import('../src/components/BlueButton').then( Component => {
    Ext.createComponent({
        Component: Component.default,
        element: this.element
    });
});
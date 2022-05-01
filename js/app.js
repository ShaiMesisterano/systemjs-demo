Ext.define('Ext.JsxContainer', {
    extend: 'Ext.container.Container',
    xtype: 'jsxcontainer',
    listeners: {
        afterrender: function () {
            System.import('../src/components/BlueButton').then( Component => {
                Ext.createComponent({
                    Component: Component.default,
                    element: this.element
                });
            });
        }
    }
});

Ext.define('TodoModel', {
    extend: 'Ext.data.Model',
    field: [
        { name: 'title', mapping: 'title' },
        { name: 'description', mapping: 'description' },
        { name: 'done', mapping: 'done' },
    ]
});

const todos = [
    {
        title: 'buy clothes',
        description: 'nike, adidas',
        done: true
    },
    {
        title: 'sell stocks',
        description: 'tesla, apple',
        done: false
    },
    {
        title: 'wash the car',
        done: false
    },
];

const todosStore = Ext.create('Ext.data.Store', {
    model: 'TodoModel',
    data: todos
});

const todosViewModel = Ext.define('CP.view.TodosViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todos',
    data: todos
});

// const todosStore = Ext.create('Ext.data.Store', {
//     model: 'TodoModel',
//     proxy: {
//         type: 'rest',
//         actionMethods: {
//             read: 'POST'
//         },
//         url: 'http://localhost:5000',
//         reader: {
//             type: 'json',
//             root: 'data'
//         }
//     }
// });

Ext.onReady(function () {
    todosStore.load();

    const columns = [
        {
            header: 'Title',
            dataIndex: 'title',
            id: 'title',
            flex: 1,
            sortable: true
        },
        {
            header: 'Description',
            dataIndex: 'description',
            id: 'description',
            flex: .5,
            sortable: true,
            hideable: true
        },
        {
            header: 'Done',
            dataIndex: 'done',
            id: 'done',
            flex: .5,
            sortable: true,
            hideable: false,
            renderer: function (value, meta, record, rowIndex, colIndex, store) {
                if (value) {
                    return 'V'
                } else {
                    return 'X'
                }
            }
        },
    ];

    const todosGrid = Ext.create('Ext.grid.Panel', {
        id: 'todosGrid',
        store: todosStore,
        stripeRows: true,
        title: 'All Todos',
        width: 600,
        enableColumnMove: true,
        enableColumnResize: true,
        columns,
        listeners: {
            cellclick: (view, td, cellIndex, record) => {
                // console.log({ view, td, cellIndex, record });
                // REMOVE EXAMPLE
                // const title = record.data.title;
                // todosStore.removeAt(todosStore.find('title', title));
                record.set({
                    ...record.data,
                    done: !record.data.done
                });
            }
        },
    });

    // const todoPanel = Ext.create('Ext.Panel', {
    //     // x: 0,
    //     // y: 0,
    //     anchor: '100%',
    //     height: 200,
    //     width: 600,
    //     title: 'ToDo List',
    //     html: 'ToDo List',
    //     items: [todosGrid]
    // });

    const todoPanel = Ext.create({
        // x: 0,
        // y: 0,
        xtype: 'panel',
        anchor: '100%',
        // height: 200,
        width: 600,
        height: 500,
        title: 'ToDo List',
        html: 'ToDo List',
        items: [
            {
                xtype: 'jsxcontainer',
                component: '../src/components/BlueButton.js',
                element: document.getElementById('root')
            },
            todosGrid
        ],
        // listeners: {
        //     afterrender: (panel) => {
        //         System.import('../src/components/BlueButton.js').then( BlueButton => {
        //             Ext.createComponent({
        //                 Component: BlueButton.default,
        //                 element: panel.body.el.dom
        //             });
        //         });
        //     }
        // }
    });

    const newTodoForm = Ext.create('Ext.form.Panel', {
        id: 'newTodoForm',
        border: true,
        store: todosStore,
        items: [
            {
                xtype: 'textfield',
                id: 'titleTextfield',
                fieldLabel: 'Title'
            },
            {
                xtype: 'textarea',
                id: 'descriptionTextfield',
                fieldLabel: 'Description'
            },
            // {
            //     xtype: 'fieldcontainer',
            //     fieldLabel: 'Done?',
            //     defaultType: 'radiofield',
            //     items: [{
            //         boxLabel: 'Yes',
            //         inputValue: 'yes',
            //         id: 'radioYes'
            //     },
            //     {
            //         boxLabel: 'No',
            //         inputValue: 'No',
            //         id: 'radioNo'
            //     }]
            // },
            {
                xtype: 'button',
                text: 'Add',
                listeners: {
                    click: (...args) => {
                        // Ext.MessageBox.alert('Alert box', 'Button is clicked');
                        todosStore.add({
                            title: Ext.getCmp('titleTextfield').getValue(),
                            description: Ext.getCmp('descriptionTextfield').getValue(),
                            done: false
                        })
                    }
                }
            }
        ]
    });

    const newTodoPanel = Ext.create('Ext.Panel', {
        // x: 0,
        // y: 300,
        anchor: '50%',
        height: 300,
        width: 600,
        hideMode: 'visibility',
        style: {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: 'red'
        },
        title: 'New ToDo',
        items: [newTodoForm]
    });
    newTodoPanel.hide();

    const showNewTodoForm = Ext.create({
        xtype: 'button',
        text: 'Add New',
        listeners: {
            click: () => {
                newTodoPanel.show();
            }
        }
    });

    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        layout: 'anchor',
        items: [todoPanel, showNewTodoForm, newTodoPanel]
    })
});
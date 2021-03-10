
var app = angular.module("myApp", []);
    app.controller("myCtrl", function($scope) {
        $scope.folders = [
            {
                name: 'e2e',
                children:[],
                expanded: false
            },{
                name: 'node_modules',
                children:[],
                expanded: false
            },
            {
                name:'src',
                children:[
                    {
                        name:'app',
                        children:[
                            {name:'treeview.component.css'},
                            {name: 'treeview.component.html'},
                            {name: 'treeview.component.spec.ts'},
                            {name: 'treeview.component.ts'},
                            {name: 'treeview.modules.ts'}
                        ],
                        expanded:true
                    },
                    {name:'app.component.css'},
                    {name:'app.component.html'},
                    {name: 'app.component.spec.ts'},
                    {name: 'app.component.ts'},
                    {name: 'app.module.ts'}

                ],
                expanded:true
            }
        ]
    
        $scope.rotate = {
            true: 'rotate'
        }
    });





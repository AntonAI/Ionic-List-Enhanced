angular.module('starter', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .controller('AppCtrl', ['$scope', '$timeout', function($scope, $timeout) {

        // Some elements for our list
        $scope.items = [{
            id: 0
        }, {
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }];

        // Edit/delete buttons display controls
        $scope.display = {
            showReorder: false,
            showEdit: false,
            showDelete: false
        };

        // Toggle edit/delete buttons
        $scope.toggleControls = function(button) {
            $scope.display.showReorder = false;
            if ($scope.display.showDelete) {
                if ($scope.display.showEdit) {
                    $scope.display.showDelete = false;
                    $scope.display.showEdit = false;
                    if (button == 'delete') {
                        $timeout(function() {
                            $scope.display.showDelete = true;
                        }, 300);
                    }
                } else {
                    $scope.display.showDelete = false;
                    if (button == 'edit') {
                        $timeout(function() {
                            $scope.display.showEdit = true;
                            $scope.display.showDelete = true;
                        }, 300);
                    }
                }
            } else {
                if (button == 'edit') $scope.display.showEdit = true;
                $scope.display.showDelete = true;
            }
        };

        // Edit/Delete an item
        $scope.itemControls = function(item) {
            if (!$scope.display.showEdit) {
                // Delete an item
                $scope.deleteItem(item)
            } else {
                // Edit item
                $scope.editItem(item);
            }
        };

        // Add a new item
        $scope.addItem = function() {
            $scope.items.push({
                id: $scope.items[$scope.items.length - 1].id + 1
            })
        };

        // Reorder items
        $scope.moveItem = function(item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };

        // Edit an item
        $scope.editItem = function(item) {
            alert('Edit Item ' + item.id);
        };

        // Share an item
        $scope.shareItem = function(item) {
            alert('Share Item ' + item.id);
        };

        // Delete an item
        $scope.deleteItem = function(item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        }
    }]);

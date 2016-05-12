'use strict';
/** 
  * controller for Validation Form example
*/
app.controller('ValidationCtrl', ["$scope", '$http', "$state", "$timeout", "SweetAlert", '$interval', 'NgMap', function ($scope, $http, $state, $timeout, SweetAlert, $interval, NgMap) {
    var vm = this;
    $scope.master = $scope.myModel;
    $scope.form = {

        submit: function (form) {
            var firstError = null;
            if (form.$invalid) {

                var field = null, firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }

                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }

                angular.element('.ng-invalid[name=' + firstError + ']').focus();
                SweetAlert.swal("The form cannot be submitted because it contains validation errors!", "Errors are marked with a red, dashed border!", "error");
                return;

            } else {
                if($scope.myModel.topic != undefined)  {
                    var url = "http://115.146.95.99:5984/tweets/_design/search/_view/text_view?key=%22" + escape($scope.myModel.topic.toLowerCase()) + "%22";
                    $scope.myModel.topic = undefined
                } else if($scope.myModel.twitter != undefined) {
                    var url = "http://115.146.95.99:5984/tweets/_design/search/_view/text_view?key=%22" + escape($scope.myModel.twitter.toLowerCase()) + "%22";
                    $scope.myModel.twitter = undefined
                } else if($scope.myModel.userid != undefined) {
                    var url = "http://115.146.95.99:5984/tweets/_design/search/_view/user_id_view?key=" + $scope.myModel.userid;
                    $scope.myModel.userid = undefined
                } else if($scope.myModel.lang != undefined) {
                    var url = "http://115.146.95.99:5984/tweets/_design/search/_view/lang_view?key=%22" + escape($scope.myModel.lang.toLowerCase()) + "%22";
                    $scope.myModel.lang = undefined
                }
                $http({
                    method: "GET",
                    url: url
                }).then(function loadMap(response) {
                    console.log(response.data.rows.length)
                    if(response.data.rows.length == 0)  {
                        SweetAlert.swal("The submitted query did not return any results", "Please try again", "error");
                        //reset all current markers
                    } else {
                        $scope.data = response.data;
                        NgMap.getMap().then(function (map) {
                            vm.map = map;
                            $scope.GenerateMapMarkers = function () {
                                $scope.date = Date(); // Just to show that we are updating
                                for (var key in vm.map.markers) {
                                    console.log(key);
                                }
                                response.data.rows.forEach(function (entry) {
                                    var marker = new google.maps.Marker();
                                    var latlng = new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]);
                                    marker.setPosition(latlng);
                                    marker.setMap(vm.map);
                                });
                            };
                            $interval($scope.GenerateMapMarkers, 2000);
                        });
                    }
                });

        }
    }
}

}]);

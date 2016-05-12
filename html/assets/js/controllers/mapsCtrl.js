'use strict';
/**
 * controllers for GoogleMap
 * AngularJS Directive
 */


app.controller('mapsCtrl', ['$scope', '$http', '$interval', 'NgMap', function ($scope, $http, $interval, NgMap) {

  var vm = this;
  $scope.taxiData = [];

  NgMap.getMap().then(function(map) {
    vm.map = map;
    $scope.taxiData = [];

    $http.get('https://rawgit.com/vgrem/6d9c464ab034f5b93295/raw/9ca3819aa8270823da64cba6f91d24945cc52940/taxiData.json').success(function(data) {
         $scope.taxiData = data.map(function(item){
             return new google.maps.LatLng(item.lat, item.lng);
         });

         var layer = $scope.map.heatmapLayers.taxiDataMap;
         layer.setData($scope.taxiData);
    });
  });



  
  // var vm = this;
  // var preurl = "http://115.146.95.99:5984/tweets_test/_design/erica_design_test/";
  // NgMap.getMap().then(function (map) {
  //   $scope.taxiData = [];

  //   $http.get(preurl + "_view/lang_geo_view?key=%22en%22").success(function(response) {
  //     //$scope.data = response.data;
  //     //$scope.taxiData = data.map(function(item){
  //     //       return new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]);
  //     //});

  //     response.rows.forEach(function (entry) {
  //         //var marker = new google.maps.Marker();
  //         //var latlng = new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]);
  //         //marker.setPosition(latlng);
  //         //marker.setMap(vm.map);
  //         //$scope.taxiData = data.map(function(item){
  //           //console.log(entry.value.geo.coordinates[0]);
  //           var point = new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]);
  //           //console.log(point);
  //         $scope.taxiData.push(point);
  //         //});
  //         //$scope.taxiData.push(new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]));
  //         //console.log(entry.value.geo.coordinates[0]);
  //     });
  //     $scope.heatmapData = $scope.taxiData
  //     //console.log($scope.taxiData.length);

  //        // $scope.taxiData = data.map(function(item){
  //        //     return new google.maps.LatLng(item.lat, item.lng);
  //        // });

  //         //var layer = $scope.map.heatmapLayers.foo;
  //        //layer.setData($scope.taxiData);
  //   });
  // });
}]);





  //   vm.map = map;
  //   heatmap = vm.map.heatmapLayers.foo;

  // vm.toggleHeatmap= function(event) {
  //   heatmap.setMap(heatmap.getMap() ? null : vm.map);
  // };

  // vm.changeGradient = function() {
  //   var gradient = [
  //     'rgba(0, 255, 255, 0)',
  //     'rgba(0, 255, 255, 1)',
  //     'rgba(0, 191, 255, 1)',
  //     'rgba(0, 127, 255, 1)',
  //     'rgba(0, 63, 255, 1)',
  //     'rgba(0, 0, 255, 1)',
  //     'rgba(0, 0, 223, 1)',
  //     'rgba(0, 0, 191, 1)',
  //     'rgba(0, 0, 159, 1)',
  //     'rgba(0, 0, 127, 1)',
  //     'rgba(63, 0, 91, 1)',
  //     'rgba(127, 0, 63, 1)',
  //     'rgba(191, 0, 31, 1)',
  //     'rgba(255, 0, 0, 1)'
  //   ]
  //   heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
  // }

  // vm.changeRadius = function() {
  //   heatmap.set('radius', heatmap.get('radius') ? null : 20);
  // }

  // vm.changeOpacity = function() {
  //   heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
  // }

  // var preurl = "http://115.146.95.99:5984/_utils/database.html?tweets_test/_design/erica_design_test/";
  // var preurltest = "http://115.146.95.99:5984/tweets_test/_design/erica_design_test/";
  // $scope.tweetData = []

  // $http.get(preurltest + "_view/lang_geo_view?key=%22en%22").success(function(data) {
  //        $scope.taxiData = data.map(function(item){
  //            return new google.maps.LatLng(item.lat, item.lng);
  //        });

  //        var layer = $scope.map.heatmapLayers.taxiDataMap;
  //        layer.setData($scope.taxiData);
  //   });
  // });




  // $http({
  //   method: "GET",
  //   url: preurltest + "_view/lang_geo_view?key=%22en%22"
  // }).then(function mySucces(response) {
  //   //$scope.data = response.data;
  //     $scope.date = Date(); // Just to show that we are updating
  //     response.data.rows.forEach(function (entry) {
  //       $scope.data.append(new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]));
  //       console.log(entry.value.geo.coordinates[0]);
  //     });
  //     var layer = $scope.map.heatmapLayers.foo;
  //     layer.setData($scope.tweetData);
  // }, function myError(response) {
  //   $scope.statusText = response.statusText;
  // });
  // });




  // var vm = this;
  // NgMap.getMap().then(function (map) {
  //   //    [144.8889,-37.8917,145.0453,-37.7325]


  //   /**
  //    * Get features names from geojson dataset
  //    **/
  //   vm.map = map;
  //   vm.onClick = function (event) {
  //     vm.geoType = event.feature.getGeometry().getType();
  //     vm.geoArray = event.feature.getGeometry().getArray();
  //     vm.regionName = event.feature.getProperty('REGION_NAME');
  //     console.dir('geoArray', event.feature.getGeometry().getArray());
  //   };


  //   /**
  //    * Get tweets with the language = "en" and
  //    * display them on the map
  //    **/
  //   var preurl = "http://115.146.95.99:5984/_utils/database.html?tweets_test/_design/erica_design_test/";
  //   var preurltest = "http://115.146.95.99:5984/tweets_test/_design/erica_design_test/";
  //   $http({
  //     method: "GET",
  //     url: preurltest + "_view/lang_geo_view?key=%22en%22"
  //   }).then(function mySucces(response) {
  //     $scope.data = response.data;
  //     $scope.GenerateMapMarkers = function () {
  //       $scope.date = Date(); // Just to show that we are updating

  //       response.data.rows.forEach(function (entry) {
  //         var marker = new google.maps.Marker();
  //         var latlng = new google.maps.LatLng(entry.value.geo.coordinates[0], entry.value.geo.coordinates[1]);
  //         marker.setPosition(latlng);
  //         marker.setMap(vm.map);
  //       });
  //     };
  //     $interval($scope.GenerateMapMarkers, 2000);
  //   }, function myError(response) {
  //     $scope.statusText = response.statusText;
  //   });
  // });


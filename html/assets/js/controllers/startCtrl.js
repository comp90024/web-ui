'use strict';
/** 
  * controller for start page
*/
/*app.controller('startCtrl', ["$scope", function ($scope) {

    var root = 'http://jsonplaceholder.typicode.com';

    $.ajax({
      url: root + '/posts/1',
      method: 'GET'
    }).then(function(data) {
      console.log(data);
    });

    var root = 'http://115.146.95.99:5984/tweets/_design/app/_view/users_simple?group=true';

    $.ajax({
      url: root,
      method: 'GET'
    }).then(function(data) {
      console.log(data);
    });
}]);*/


app.controller("startCtrl", ['$scope', '$http', function ($scope, $http) {
    //var root = 'http://115.146.95.99:5984/tweets/_design/app/_view/users_simple?group=true';
    //var root = 'http://115.146.95.99:5984/tweets/_design/main/_spatial/points?bbox=-37.66,143,-36,145';
    var root = 'http://115.146.95.99:5984/tweets/_design/sentiment-analysis/_view/morning-evening-tweets?group=true&group_level=1';

    $.ajax({
      url: root,
      method: 'GET'
    }).then(function(data) {
      console.log(data);
    });
}]);
app.controller('sentimentCtrl', ["$scope",
function($scope) {
    $scope.dailyValue = "50";
    $scope.totalValue = "750";

    $scope.dailyOptions = {
        from : 1,
        to : 100,
        step : 1,
        dimension : " %",
        className : "clip-slider",
        css : {
            background : {
                "background-color" : "silver"
            },
            before : {
                "background-color" : "#5A8770"
            }, // zone before default value
            after : {
                "background-color" : "#5A8770"
            },  // zone after default value
        }
    };
    $scope.totalOptions = {
        from : 100,
        to : 1000,
        step : 1,
        dimension : " $",
        className : "clip-slider",
        css : {
            background : {
                "background-color" : "silver"
            },
            before : {
                "background-color" : "#8773A8"
            }, // zone before default value
            after : {
                "background-color" : "#8773A8"
            },  // zone after default value
        }
    };

}]);
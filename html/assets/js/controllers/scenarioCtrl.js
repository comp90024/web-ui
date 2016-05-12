'use strict';
/** 
  * controller for ngImgCrop
  * Simple Image Crop directive for AngularJS.
*/

function getSortedKeys(obj) {
  var keys = []; for(var key in obj) keys.push(key);
  return keys.sort(function(a,b){return obj[b]-obj[a]});
}

app.controller('IncomeCtrl', ["$scope","$http", function ($scope,$http) {
    $http.get('assets/fixtures/median-family-income.json').success(function(data) {
        var data1 = new google.visualization.DataTable();
        var rand = [];
        var min = 0;
        var max = data.SuburbsList.length;
        data1.addColumn('string', 'Suburb Name');
        data1.addColumn('number', 'Median Income');
        data1.addColumn('number', 'Positive Average');
        for(var i = 0 ; i < data.SuburbsList.length; i++) {
          data1.addRow([
            data.SuburbsList[i],
            parseFloat(data.MedianIncome[i]),
            parseFloat(data.AveragePosPerc[i])
          ]);
        };
        var options = {
           title: 'Income & Happiness',
           height: 500,
           bar: { groupWidth: 10 },
           hAxis: {title: "Suburb Name"},
           series: {
             0: {targetAxisIndex:0,type: "line",pointSize: 5},
             1: {targetAxisIndex:1,type: "bars",dataOpacity: 0.2}
           },
           vAxes: [
             { title: 'Median Income' },
             { title: 'Positive Average'}
           ]
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
        var formatter = new google.visualization.NumberFormat(
          {fractionDigits: 2}
        );
        formatter.format(data1, 1);
        chart.draw(data1, options);

        for(i = 0; i < 10; i++) {
          rand.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Suburb Name');
        data2.addColumn('number', 'Median Income');
        data2.addColumn('number', 'Positive Average');
        for(i = 0; i < rand.length; i++) {
          data2.addRow([
            data.SuburbsList[rand[i]],
            parseFloat(data.MedianIncome[rand[i]]),
            parseFloat(data.AveragePosPerc[rand[i]])
          ]);
        }
        options = {
           title: 'Income & Happiness (Random)',
           height: 500,
           bar: { groupWidth: 10 },
           hAxis: {title: "Suburb Name"},
           series: {
             0: {targetAxisIndex:0,type: "line",pointSize: 5},
             1: {targetAxisIndex:1,type: "bars",dataOpacity: 0.2}
           },
           vAxes: [
             { title: 'Median Income' },
             { title: 'Positive Average'}
           ]
        };
        chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
        formatter = new google.visualization.NumberFormat(
          {fractionDigits: 2}
        );
        formatter.format(data2, 1);
        chart.draw(data2, options);

    });
}]);

app.controller('AgeCtrl', ["$scope","$http", function ($scope,$http) {
    $http.get('assets/fixtures/median-age.json').success(function(data) {
        var data1 = new google.visualization.DataTable();
        var rand = [];
        var min = 0;
        var max = data.SuburbsList.length;
        data1.addColumn('string', 'Suburb Name');
        data1.addColumn('number', 'Median Age');
        data1.addColumn('number', 'Positive Average');
        for(var i = 0 ; i < data.SuburbsList.length; i++) {
          data1.addRow([
            data.SuburbsList[i],
            parseFloat(data.MedianAge[i]),
            parseFloat(data.AveragePosPerc[i])
          ]);
        };
        var options = {
           title: 'Age & Happiness',
           height: 500,
           bar: { groupWidth: 10 },
           hAxis: {title: "Suburb Name"},
           series: {
             0: {targetAxisIndex:0,type: "line",pointSize: 5},
             1: {targetAxisIndex:1,type: "bars",dataOpacity: 0.2}
           },
           vAxes: [
             { title: 'Median Age' },
             { title: 'Positive Average'}
           ]
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div3'));
        var formatter = new google.visualization.NumberFormat(
          {fractionDigits: 2}
        );
        formatter.format(data1, 1);
        chart.draw(data1, options);

        for(i = 0; i < 10; i++) {
          rand.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Suburb Name');
        data2.addColumn('number', 'Median Age');
        data2.addColumn('number', 'Positive Average');
        for(i = 0; i < rand.length; i++) {
          data2.addRow([
            data.SuburbsList[rand[i]],
            parseFloat(data.MedianAge[rand[i]]),
            parseFloat(data.AveragePosPerc[rand[i]])
          ]);
        }
        options = {
           title: 'Age & Happiness (Random)',
           height: 500,
           bar: { groupWidth: 10 },
           hAxis: {title: "Suburb Name"},
           series: {
             0: {targetAxisIndex:0,type: "line",pointSize: 5},
             1: {targetAxisIndex:1,type: "bars",dataOpacity: 0.2}
           },
           vAxes: [
             { title: 'Median Age' },
             { title: 'Positive Average'}
           ]
        };
        chart = new google.visualization.LineChart(document.getElementById('chart_div4'));
        formatter = new google.visualization.NumberFormat(
          {fractionDigits: 2}
        );
        formatter.format(data2, 1);
        chart.draw(data2, options);
    });
}]);

app.controller('AgeTweetCtrl', ["$scope","$http", function ($scope,$http) {
    $http.get('assets/fixtures/median-age.json').success(function(data) {
        var data1 = new google.visualization.DataTable();
        var rand = [];
        var min = 0;
        var max = data.SuburbsList.length;
        data1.addColumn('string', 'Suburb Name');
        data1.addColumn('number', 'Median Age');
        data1.addColumn('number', 'Total number of tweets');
        for(var i = 0 ; i < data.SuburbsList.length; i++) {
          data1.addRow([
            data.SuburbsList[i],
            parseFloat(data.MedianAge[i]),
            parseFloat(data.NumofTweets[i])
          ]);
        };
        var options = {
           title: 'Age & Number of Tweets',
           height: 500,
           bar: { groupWidth: 10 },
           hAxis: {title: "Suburb Name"},
           series: {
             0: {targetAxisIndex:0,type: "line",pointSize: 5},
             1: {targetAxisIndex:1,type: "bars",dataOpacity: 0.2}
           },
           vAxes: [
             { title: 'Median Age' },
             { title: 'Total number of tweets'}
           ]
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div5'));
        var formatter = new google.visualization.NumberFormat(
          {fractionDigits: 2}
        );
        formatter.format(data1, 1);
        chart.draw(data1, options);

        for(i = 0; i < 10; i++) {
          rand.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Suburb Name');
        data2.addColumn('number', 'Median Age');
        data2.addColumn('number', 'Total number of tweets');
        for(i = 0; i < rand.length; i++) {
          data2.addRow([
            data.SuburbsList[rand[i]],
            parseFloat(data.MedianAge[rand[i]]),
            parseFloat(data.NumofTweets[rand[i]])
          ]);
        }
        options = {
           title: 'Age & Number of Tweets (Random)',
           height: 500,
           bar: { groupWidth: 10 },
           hAxis: {title: "Suburb Name"},
           series: {
             0: {targetAxisIndex:0,type: "line",pointSize: 5},
             1: {targetAxisIndex:1,type: "bars",dataOpacity: 0.2}
           },
           vAxes: [
             { title: 'Median Age' },
             { title: 'Total number of tweets'}
           ]
        };
        chart = new google.visualization.LineChart(document.getElementById('chart_div6'));
        formatter = new google.visualization.NumberFormat(
          {fractionDigits: 2}
        );
        formatter.format(data2, 1);
        chart.draw(data2, options);
    });
}]);

app.controller('AurinLangCtrl', ["$scope",
                                    function ($scope) {
                                      var root = 'assets/fixtures/aurin-lang.json';
                                      var all = [], labels = [];
                                      $.ajax({
                                        url: root,
                                        method: 'GET'
                                      }).then(function (json) {
                                        for (var item in json) {
                                          labels.push(json[item]['suburb']);
                                        }
                                        var el = []
                                        var it = []
                                        var zh = []
                                        var ca = []
                                        var ru = []
                                        
                                        for (var item in json) {
                                          el.push(json[item]["el"]);
                                          it.push(json[item]["it"]);
                                          zh.push(json[item]["zh"]);
                                          ca.push(json[item]["ca"]);
                                          ru.push(json[item]["ru"]);
                                        }
                                        all.push(el)
                                        all.push(it)
                                        all.push(zh)
                                        all.push(ca)
                                        all.push(ru)
                                      });

                                      $scope.series = ['el', 'it', 'zh', 'ca', 'ru'];
                                      $scope.data = all;
                                      $scope.labels = labels;

                                      $scope.colors = [
                                        {
                                          fillColor: 'rgba(127,140,141,0.2)',
                                          strokeColor: 'rgba(127,140,141,1)',
                                          pointColor: 'rgba(127,140,141,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(127,140,141,1)'
                                        },
                                        {
                                          fillColor: 'rgba(148,116,153,0.2)',
                                          strokeColor: 'rgba(148,116,153,1)',
                                          pointColor: 'rgba(148,116,153,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(148,116,153,1)'
                                        },
                                        {
                                          fillColor: 'rgba(90,135,112,0.2)',
                                          strokeColor: 'rgba(90,135,112,1)',
                                          pointColor: 'rgba(90,135,112,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(90,135,112,1)'
                                        },
                                        {
                                          fillColor: 'rgba(91,155,209,0.2)',
                                          strokeColor: 'rgba(91,155,209,1)',
                                          pointColor: 'rgba(91,155,209,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(91,155,209,1)'
                                        }
                                      ];
                                      $scope.options = {
                                        responsive: true,
                                        scaleBeginAtZero: true,
                                        scaleShowGridLines: true,
                                        scaleGridLineColor: "rgba(0,0,0,.05)",
                                        scaleGridLineWidth: 1,
                                        barShowStroke: true,
                                        barStrokeWidth: 2,
                                        barValueSpacing: 5,
                                        barDatasetSpacing: 1
                                      };
                                    }
]);

app.controller('TweetsLangCtrl', ["$scope",
                                    function ($scope) {
                                      var root = 'assets/fixtures/tweets-lang.json';
                                      var all = [], labels = [];
                                      $.ajax({
                                        url: root,
                                        method: 'GET'
                                      }).then(function (json) {
                                        for (var item in json) {
                                          labels.push(json[item]['suburb']);
                                        }
                                        var el = []
                                        var it = []
                                        var zh = []
                                        var ca = []
                                        var ru = []
                                        
                                        for (var item in json) {
                                          el.push(json[item]["el"]);
                                          it.push(json[item]["it"]);
                                          zh.push(json[item]["zh"]);
                                          ca.push(json[item]["ca"]);
                                          ru.push(json[item]["ru"]);
                                        }
                                        all.push(el)
                                        all.push(it)
                                        all.push(zh)
                                        all.push(ca)
                                        all.push(ru)
                                      });

                                      $scope.series = ['el', 'it', 'zh', 'ca', 'ru'];
                                      $scope.data = all;
                                      $scope.labels = labels;

                                      $scope.colors = [
                                        {
                                          fillColor: 'rgba(127,140,141,0.2)',
                                          strokeColor: 'rgba(127,140,141,1)',
                                          pointColor: 'rgba(127,140,141,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(127,140,141,1)'
                                        },
                                        {
                                          fillColor: 'rgba(148,116,153,0.2)',
                                          strokeColor: 'rgba(148,116,153,1)',
                                          pointColor: 'rgba(148,116,153,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(148,116,153,1)'
                                        },
                                        {
                                          fillColor: 'rgba(90,135,112,0.2)',
                                          strokeColor: 'rgba(90,135,112,1)',
                                          pointColor: 'rgba(90,135,112,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(90,135,112,1)'
                                        },
                                        {
                                          fillColor: 'rgba(91,155,209,0.2)',
                                          strokeColor: 'rgba(91,155,209,1)',
                                          pointColor: 'rgba(91,155,209,1)',
                                          pointStrokeColor: '#fff',
                                          pointHighlightFill: '#fff',
                                          pointHighlightStroke: 'rgba(91,155,209,1)'
                                        }
                                      ];
                                      $scope.options = {
                                        responsive: true,
                                        scaleBeginAtZero: true,
                                        scaleShowGridLines: true,
                                        scaleGridLineColor: "rgba(0,0,0,.05)",
                                        scaleGridLineWidth: 1,
                                        barShowStroke: true,
                                        barStrokeWidth: 2,
                                        barValueSpacing: 5,
                                        barDatasetSpacing: 1
                                      };
                                    }
]);

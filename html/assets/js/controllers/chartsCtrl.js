'use strict';
/**
 * controllers for tc-angular-chartjs
 * tc-angular-chartjs provides you with directives for all chartjs chart types.
 */
function getSortedKeys(obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys.sort(function (a, b) {return obj[b] - obj[a]});
}

app.controller('SentimentDayCtrl', ["$scope",
                                    function ($scope) {

                                      var root = 'http://115.146.95.99:5984/tweets/_design/sentiment-analysis/_view/morning-evening-tweets?group=true&group_level=2';
                                      var all = []
                                      $.ajax({
                                        url: root,
                                        method: 'GET'
                                      }).then(function (data) {
                                        var json = JSON.parse(data);
                                        var morning = []
                                        var afternoon = []
                                        var evening = []
                                        var night = []
                                        for (var item in json["rows"])
                                          if (json["rows"][item]["key"][1] == "after-noon")
                                            afternoon.push(json["rows"][item]["value"])
                                          else if (json["rows"][item]["key"][1] == "evening")
                                            evening.push(json["rows"][item]["value"])
                                          else if (json["rows"][item]["key"][1] == "morning")
                                            morning.push(json["rows"][item]["value"])
                                          else if (json["rows"][item]["key"][1] == "night")
                                            night.push(json["rows"][item]["value"])
                                        all.push(morning)
                                        all.push(afternoon)
                                        all.push(evening)
                                        all.push(night)
                                      });

                                      $scope.labels = ['Negative', 'Neutral', 'Positive'];
                                      $scope.series = ['Morning', 'Afternoon', 'Evening', 'Night'];
                                      $scope.data = all;

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


app.controller('SentimentCtrl', ["$scope",
                                 function ($scope) {
                                   $scope.labels = ['Negative', 'Neutral', 'Positive'];
                                   $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C'];
                                   var root = 'http://115.146.95.99:5984/tweets/_design/sentiment-analysis/_view/morning-evening-tweets?group=true&group_level=1';
                                   var all = [], positive, negative, neutral;
                                   $.ajax({
                                     url: root,
                                     method: 'GET'
                                   }).then(function (data) {
                                     var json = JSON.parse(data);
                                     for (var item in json["rows"])
                                       if (json["rows"][item]["key"][0] == "positive")
                                         positive = json["rows"][item]["value"];
                                       else if (json["rows"][item]["key"][0] == "neutral")
                                         neutral = json["rows"][item]["value"];
                                       else if (json["rows"][item]["key"][0] == "negative")
                                         negative = json["rows"][item]["value"];
                                     all.push(negative);
                                     all.push(neutral);
                                     all.push(positive);
                                   });
                                   $scope.data = all;
                                   $scope.options = {
                                     responsive: false,
                                     segmentShowStroke: true,
                                     segmentStrokeColor: '#fff',
                                     segmentStrokeWidth: 2,
                                     percentageInnerCutout: 0, // This is 0 for Pie charts
                                     animationSteps: 100,
                                     animationEasing: 'easeOutBounce',
                                     animateRotate: true,
                                     animateScale: false
                                   };
                                 }
]);

app.controller('TopicCtrl', ["$scope",
                             function ($scope) {
                               $scope.labels = [];
                               $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C', '#5AA440', '#FBCA04'];
                               var root = 'http://115.146.95.99:5984/tweets/_design/statistics/_list/top_n_list/topic_view?n=5&group=true';
                               var all = [];
                               $.ajax({
                                 url: root,
                                 method: 'GET'
                               }).then(function (data) {
                                 data.rows.forEach(function (item) {
                                   $scope.labels.push(item.key);
                                   all.push(item.value);
                                 });
                               });
                               $scope.data = all;
                               $scope.options = {
                                 responsive: false,
                                 segmentShowStroke: true,
                                 segmentStrokeColor: '#fff',
                                 segmentStrokeWidth: 2,
                                 percentageInnerCutout: 0, // This is 0 for Pie charts
                                 animationSteps: 100,
                                 animationEasing: 'easeOutBounce',
                                 animateRotate: true,
                                 animateScale: false
                               };
                             }
]);

app.controller('TwitterCtrl', ["$scope",
                               function ($scope) {
                                 $scope.labels = [];
                                 $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C', '#5AA440', '#FBCA04'];
                                 var root = 'http://115.146.95.99:5984/tweets/_design/statistics/_list/top_n_list/twitter_view?n=5&group=true';
                                 var all = [];
                                 $.ajax({
                                   url: root,
                                   method: 'GET'
                                 }).then(function (data) {
                                   data.rows.forEach(function (item) {
                                     $scope.labels.push(item.key);
                                     all.push(item.value);
                                   });
                                 });
                                 $scope.data = all;
                                 $scope.options = {
                                   responsive: false,
                                   segmentShowStroke: true,
                                   segmentStrokeColor: '#fff',
                                   segmentStrokeWidth: 2,
                                   percentageInnerCutout: 0, // This is 0 for Pie charts
                                   animationSteps: 100,
                                   animationEasing: 'easeOutBounce',
                                   animateRotate: true,
                                   animateScale: false
                                 };
                               }
]);

app.controller('LangCtrl', ["$scope",
                            function ($scope) {
                              $scope.labels = [];
                              $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C', '#5AA440', '#FBCA04'];
                              var root = 'http://115.146.95.99:5984/tweets/_design/statistics/_list/top_n_list/lang_view?n=5&group=true';
                              var all = [];
                              $.ajax({
                                url: root,
                                method: 'GET'
                              }).then(function (data) {
                                data.rows.forEach(function (item) {
                                  $scope.labels.push(item.key);
                                  all.push(item.value);
                                });
                              });
                              $scope.data = all;
                              $scope.options = {
                                responsive: false,
                                segmentShowStroke: true,
                                segmentStrokeColor: '#fff',
                                segmentStrokeWidth: 2,
                                percentageInnerCutout: 0, // This is 0 for Pie charts
                                animationSteps: 100,
                                animationEasing: 'easeOutBounce',
                                animateRotate: true,
                                animateScale: false
                              };
                            }
]);

app.controller('UserIdCtrl', ["$scope",
                              function ($scope) {
                                $scope.labels = [];
                                $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C', '#5AA440', '#FBCA04'];
                                var root = 'http://115.146.95.99:5984/tweets/_design/statistics/_list/top_n_list/user_id_view?n=5&group=true';
                                var all = [];
                                $.ajax({
                                  url: root,
                                  method: 'GET'
                                }).then(function (data) {
                                  data.rows.forEach(function (item) {
                                    $scope.labels.push(item.key);
                                    all.push(item.value);
                                  });
                                });
                                $scope.data = all;
                                $scope.options = {
                                  responsive: false,
                                  segmentShowStroke: true,
                                  segmentStrokeColor: '#fff',
                                  segmentStrokeWidth: 2,
                                  percentageInnerCutout: 0, // This is 0 for Pie charts
                                  animationSteps: 100,
                                  animationEasing: 'easeOutBounce',
                                  animateRotate: true,
                                  animateScale: false
                                };
                              }
]);


app.controller('NHappiestSuburbsCtrl', ["$scope",
                                        function ($scope) {
                                          $scope.labels_top = [];
                                          $scope.labels_bottom = [];
                                          $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C', '#5AA440', '#FBCA04'];
                                          var root = 'http://115.146.95.99:5984/yasmeen-test-tweets/_design/sentiment-analysis/_view/places_tweets?group=true&group_level=3';
                                          var all_top = [], all_bottom = [], positives = [], negatives = [] , n = 5;
                                          $.ajax({
                                            url: root,
                                            method: 'GET'
                                          }).then(function (response) {
                                            var data = JSON.parse(response);
                                            data.rows.forEach(function (item) {
                                              if (item.key[1] == 'positive') {
                                                positives.push({
                                                  "key": item.key[2],
                                                  "sum": item.value.sum,
                                                  "count": item.value.count
                                                });
                                              }
                                              if (item.key[1] == 'negative') {
                                                negatives.push({
                                                  "key": item.key[2],
                                                  "sum": item.value.sum,
                                                  "count": item.value.count
                                                });
                                              }
                                            });

                                            positives.sort(function (a, b) {
                                              return (b.sum / b.count) - (a.sum / a.count);
                                            });
                                            var top5 = positives.splice(0, n);
                                            top5.forEach(function (item) {
                                              $scope.labels_top.push(item.key);
                                              all_top.push(item.sum / item.count);
                                            });

                                            negatives.sort(function (a, b) {
                                              return (b.sum / b.count) - (a.sum / a.count);
                                            });
                                            var bottom5 = (negatives.slice(Math.max(negatives.length - n, 1))).reverse();
                                            bottom5.forEach(function (item) {
                                              $scope.labels_bottom.push(item.key);
                                              all_bottom.push(item.sum / item.count);
                                            });

                                          });
                                          $scope.data_top = all_top;
                                          $scope.data_bottom = all_bottom;
                                          $scope.options = {
                                            responsive: false,
                                            segmentShowStroke: true,
                                            segmentStrokeColor: '#fff',
                                            segmentStrokeWidth: 2,
                                            percentageInnerCutout: 0, // This is 0 for Pie charts
                                            animationSteps: 100,
                                            animationEasing: 'easeOutBounce',
                                            animateRotate: true,
                                            animateScale: false
                                          };
                                        }
]);

app.controller('ChartCtrl3', ["$scope",
                              function ($scope) {
                                $scope.labels = ['Red', 'Green', 'Yellow'];
                                $scope.data = [300, 50, 100];
                                $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C'];
                                // Chart.js Options
                                $scope.options = {

                                  // Sets the chart to be responsive
                                  responsive: false,

                                  //Boolean - Whether we should show a stroke on each segment
                                  segmentShowStroke: true,

                                  //String - The colour of each segment stroke
                                  segmentStrokeColor: '#fff',

                                  //Number - The width of each segment stroke
                                  segmentStrokeWidth: 2,

                                  //Number - The percentage of the chart that we cut out of the middle
                                  percentageInnerCutout: 50, // This is 0 for Pie charts

                                  //Number - Amount of animation steps
                                  animationSteps: 100,

                                  //String - Animation easing effect
                                  animationEasing: 'easeOutBounce',

                                  //Boolean - Whether we animate the rotation of the Doughnut
                                  animateRotate: true,

                                  //Boolean - Whether we animate scaling the Doughnut from the centre
                                  animateScale: false

                                };

                              }
]);

app.controller('ChartCtrl5', ["$scope",
                              function ($scope) {
                                $scope.labels = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
                                $scope.data = [300, 50, 100, 40, 120];
                                $scope.colors = ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

                                // Chart.js Options
                                $scope.options = {

                                  // Sets the chart to be responsive
                                  responsive: false,

                                  //Boolean - Show a backdrop to the scale label
                                  scaleShowLabelBackdrop: true,

                                  //String - The colour of the label backdrop
                                  scaleBackdropColor: 'rgba(255,255,255,0.75)',

                                  // Boolean - Whether the scale should begin at zero
                                  scaleBeginAtZero: true,

                                  //Number - The backdrop padding above & below the label in pixels
                                  scaleBackdropPaddingY: 2,

                                  //Number - The backdrop padding to the side of the label in pixels
                                  scaleBackdropPaddingX: 2,

                                  //Boolean - Show line for each value in the scale
                                  scaleShowLine: true,

                                  //Boolean - Stroke a line around each segment in the chart
                                  segmentShowStroke: true,

                                  //String - The colour of the stroke on each segement.
                                  segmentStrokeColor: '#fff',

                                  //Number - The width of the stroke value in pixels
                                  segmentStrokeWidth: 2,

                                  //Number - Amount of animation steps
                                  animationSteps: 100,

                                  //String - Animation easing effect.
                                  animationEasing: 'easeOutBounce',

                                  //Boolean - Whether to animate the rotation of the chart
                                  animateRotate: true,

                                  //Boolean - Whether to animate scaling the chart from the centre
                                  animateScale: false
                                };

                              }
]);
app.controller('ChartCtrl6', ["$scope",
                              function ($scope) {
                                $scope.labels =
                                  ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
                                $scope.series = ['My First dataset', 'My Second dataset'];
                                $scope.data = [
                                  [65, 59, 90, 81, 56, 55, 40],
                                  [28, 48, 40, 19, 96, 27, 100]
                                ];
                                $scope.colors = [
                                  {
                                    fillColor: 'rgba(220,220,220,0.2)',
                                    strokeColor: 'rgba(220,220,220,1)',
                                    pointColor: 'rgba(220,220,220,1)',
                                    pointStrokeColor: '#fff',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgba(220,220,220,1)'
                                  },
                                  {
                                    fillColor: 'rgba(151,187,205,0.2)',
                                    strokeColor: 'rgba(151,187,205,1)',
                                    pointColor: 'rgba(151,187,205,1)',
                                    pointStrokeColor: '#fff',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgba(151,187,205,1)'
                                  }
                                ];
                                // Chart.js Options
                                $scope.options = {

                                  // Sets the chart to be responsive
                                  responsive: true,

                                  //Boolean - Whether to show lines for each scale point
                                  scaleShowLine: true,

                                  //Boolean - Whether we show the angle lines out of the radar
                                  angleShowLineOut: true,

                                  //Boolean - Whether to show labels on the scale
                                  scaleShowLabels: false,

                                  // Boolean - Whether the scale should begin at zero
                                  scaleBeginAtZero: true,

                                  //String - Colour of the angle line
                                  angleLineColor: 'rgba(0,0,0,.1)',

                                  //Number - Pixel width of the angle line
                                  angleLineWidth: 1,

                                  //String - Point label font declaration
                                  pointLabelFontFamily: '"Arial"',

                                  //String - Point label font weight
                                  pointLabelFontStyle: 'normal',

                                  //Number - Point label font size in pixels
                                  pointLabelFontSize: 10,

                                  //String - Point label font colour
                                  pointLabelFontColor: '#666',

                                  //Boolean - Whether to show a dot for each point
                                  pointDot: true,

                                  //Number - Radius of each point dot in pixels
                                  pointDotRadius: 3,

                                  //Number - Pixel width of point dot stroke
                                  pointDotStrokeWidth: 1,

                                  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                                  pointHitDetectionRadius: 20,

                                  //Boolean - Whether to show a stroke for datasets
                                  datasetStroke: true,

                                  //Number - Pixel width of dataset stroke
                                  datasetStrokeWidth: 2,

                                  //Boolean - Whether to fill the dataset with a colour
                                  datasetFill: true
                                };

                              }
]);

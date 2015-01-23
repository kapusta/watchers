(function(ng, doc){
  if (ng) {
    var appNodeList = doc.querySelectorAll('[ng-app]');
    var apps = Array.prototype.slice.call(appNodeList);
    apps.map(function(val, idx, arr) {
      var app = ng.element(val);
      var watchers = [];
      var f = function(app) {
        if (app.data().hasOwnProperty('$scope')) {
          ng.forEach(app.data().$scope.$$watchers, function(watcher) {
            watchers.push(watcher);
          });
        }
        ng.forEach(app.children(), function(childElement) {
          f(ng.element(childElement));
        });
      };
      f(app);
      console.log(app.attr('ng-app') + " has " + watchers.length + " watchers.");
    });
  } else {
    console.log('angular not found');
  }
}(window.angular, window.document));
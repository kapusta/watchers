(function(ng){
  if (ng) {
    var app = ng.element('[ng-app]');
    if (app.length) {
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
      console.log("'"+app.attr('ng-app')+"'"+" has "+watchers.length+" watchers");
    } else {
      console.log('no ng-app defined');
    }
  } else {
    console.log('angular not found');
  }
}(window.angular));
Session.set('lastupdate', new Date());
Template.dashboardPage.helpers({
  runnings: function() {
    var x = runningSub.reactive();
    var list = [];
    x.forEach(function(a) {
      var diff = (new Date() - a.lastrun) / 1000;

      if (diff >= 90) {
        list.push(a);
      }

      Session.set('lastupdate', new Date());

    });
    return list;
  },
  currentTime: function() {
    return Session.get('lastupdate').toTimeString().split(' ')[0];
  }
});

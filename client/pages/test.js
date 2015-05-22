Template.testPage.helpers({
  tests: function() {
    console.log(new Date().toTimeString(), 'testPage', 'helper');
    return testsSub.reactive();
  }
});

Template.test.helpers({
  formattedDate: function(date){
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  },
  formattedNumber: function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
});


Template.registerHelper('formatDate1', function(date) {
  return moment(date).format('YYYY-MM-DD hh:mm:ss A');
});

Template.registerHelper('formatDate2', function(date) {
  return moment(date).format('hh:mm:ss A');
});

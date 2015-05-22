Template.timesalePage.helpers({
  timesales: function() {
    return timesaleSub.reactive();
  }
});

Template.timesalerecord.helpers({
  formattedDate: function(date){
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  },
  formattedNumber: function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
});

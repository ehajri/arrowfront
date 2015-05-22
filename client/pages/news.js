Template.newsPage.helpers({
  news: function() {
    console.log(new Date().toTimeString(), 'newsPage', 'helpers');
    return newsSub.reactive();
  }
});

Template.article.helpers({
  whatever: function() {
    return 'whatever';
  }
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/live', {
  name: 'livePage'
});

Router.route('/news', {
  name: 'newsPage'
});

Router.route('/test', {
  name: 'testPage'
});

Router.route('/obook', {
  name: 'obookPage'
});

Router.route('/timesale', {
  name: 'timesalePage'
});

Router.route('/dashboard', {
  name: 'dashboardPage'
});

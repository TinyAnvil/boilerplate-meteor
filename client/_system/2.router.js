Router.configure({
  layoutTemplate: 'app',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
});

Router.route('/', {
  template: 'home',
  name: 'home'
});

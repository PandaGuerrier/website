import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.group(() => {
    Route.get('register', 'UserController.create').as('user.create')
    Route.post('register', 'UserController.store').as('user.store')

    Route.get('login', 'AuthenticationController.showLogin').as('authentication.showLoginForm')
    Route.post('login', 'AuthenticationController.login').as('authentication.login')
    Route.get('logout', 'AuthenticationController.logout').as('authentication.logout')
  }).prefix('authentication/')

  Route.get('/', 'HomeController.home').as('home')
}).namespace('Apps/web/controllers')

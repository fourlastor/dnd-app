'use strict';


// Declare app level module which depends on filters, and services
angular.module('dndApp', ['dndApp.filters', 'dndApp.services', 'dndApp.directives', 'dndApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/initiative', {templateUrl: 'partials/initiative.html', controller: 'InitiativeCtrl', activeNav: 'initiative'});
    $routeProvider.when('/dices', {templateUrl: 'partials/dices.html', controller: 'DicesCtrl', activeNav: 'dices'});
    $routeProvider.otherwise({redirectTo: '/initiative'});
  }]);
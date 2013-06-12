'use strict';


// Declare app level module which depends on filters, and services
angular.module('dndApp', ['dndApp.filters', 'dndApp.services', 'dndApp.directives', 'dndApp.controllers', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/initiative', {templateUrl: 'partials/initiative.html', controller: 'InitiativeCtrl', activeNav: 'initiative'});
    $routeProvider.otherwise({redirectTo: '/initiative'});
  }]);
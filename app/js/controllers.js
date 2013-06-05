'use strict';

/* Controllers */

angular.module('dndApp.controllers', [])
  .controller('InitiativeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.currentTab = 'initiative';

    $scope.chars = [];
    // $scope.chars = [
    //   {name: 'Vrael', initiative: 27, hp: 18, hpMax: 90},
    //   {name: 'Drago rosso', initiative: 15, hp: 88, hpMax: 120},
    //   {name: 'Lester',initiative: 17, hp: 26, hpMax: 54},
    // ];

    $scope.addChar = function() {
      var newChar = {};
      newChar.name = $scope.newChar.name;
      var match;
      if(match = $scope.newChar.initiative.match(/(\+|-)(\d+)/))
      {
        var roll = _.random(1,20);
        if(match[1] == '+')
          newChar.initiative = roll + parseInt(match[2]);
        else
          newChar.initiative = roll - parseInt(match[2]);
      }
      else
        newChar.initiative = parseInt($scope.newChar.initiative);

      if(match = $scope.newChar.hp.match(/(\d+)\/(\d+)/))
      {
        newChar.hp = parseInt(match[1]);
        newChar.hpMax = parseInt(match[2]);
      }
      else
      {
        newChar.hp = parseInt($scope.newChar.hp);
        newChar.hpMax = newChar.hp;
      }
      $scope.chars.push(newChar);
      $scope.newChar = {};
    }

    $scope.removeChar = function(charRem) {
      $scope.chars = _.without($scope.chars, charRem);
    }

    $scope.hpClass = function(hp, hpMax) {
      if(hp < hpMax / 4) return 'badge-important';
      if(hp < hpMax / 2) return 'badge-warning';
      if(hp > hpMax / 2) return 'badge-success';
    }

    $scope.newHp = function(char) {
      if(char.hpOP == '+')
        char.hp = Math.min(char.hp + parseInt(char.hpMod), char.hpMax);
      else if (char.hpOP == '-')
        char.hp = Math.max(char.hp - parseInt(char.hpMod), -10);
      char.hpOP = '';
      char.hpMod = '';
    }

  }])
  .controller('DicesCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.currentTab = 'dices';
    $scope.rolls = [];
    $scope.roll = function(dice) {
      $scope.rolls.push(_.random(1, dice));
    }

    $scope.reverse = function(array) {
      var copy = [].concat(array);
      return copy.reverse();
    }
  }]);
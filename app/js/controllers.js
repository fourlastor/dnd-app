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
          newChar.initiative = _.random(1,20) + parseInt($scope.newChar.initiative);
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
      if(hp <= hpMax) return 'badge-success';
      else return 'badge-info';
    }

    $scope.newHp = function(char) {
        char.hp += parseInt(char.hpMod);
        char.hp = Math.min(char.hp, char.hpMax);
      char.hpMod = '';
    }

  }])
  .controller('ToolbarCtrl', ['$scope', function($scope) {
    $scope.rolls = [];
    $scope.DMScreenIsOpen = false;

    $scope.openDMScreen = function() {
      $scope.DMScreenIsOpen = true;
    }

    $scope.closeDMScreen = function() {
      $scope.DMScreenIsOpen = false;
    }

    $scope.roll = function(dice) {
      $scope.rolls.push(_.random(1, dice));
    }

    $scope.lastRoll = function() {
      return _.last($scope.rolls);
    }

    $scope.clearRolls = function() {
      $scope.rolls = [];
    }

    $scope.rollsHistory = function() {
      return $scope.rolls.join(" ");
    }

  }]);
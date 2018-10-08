import angular from 'angular';
var app = angular.module('App',['ngMaterial', 'ngRoute']);
app.controller('AppController', function() {
    this.message = 'Hello. My First AngularJS App';
});
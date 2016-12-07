// script.js

// creating module
var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate']);

scotchApp.config(function($routeProvider){
    $routeProvider
    
    // route for the home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller : 'mainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller : 'contactController'
    });
});            

    // We create controllers
    scotchApp.controller('mainController', function($scope){
        $scope.message = "Página principal";
        $scope.pageClass = 'page-home';
    });

    scotchApp.controller('aboutController', function($scope){
        $scope.message = 'Página sobre nosotros';
        $scope.pageClass = 'page-about';
    });

    scotchApp.controller('contactController', function($scope){
        $scope.message = 'Pagina con la información de contacto';
        $scope.pageClass = 'page-contact';
    });
// script.js

// creating module
var scotchApp = angular.module('scotchApp', ['ui.router', 'ngAnimate']);

scotchApp.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    // route for the home page
    .state('home', {
        url: '/home',
        templateUrl: 'pages/home.html'
    })

    // nested list con el controlador
    .state('home.list', {
        url: '/list',
        templateUrl: 'pages/home-list.html',
        controller: function($scope){
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list con datos aleatorios
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'Párrafo contenido en la home'
    })

    // route for the about page
    .state('about', {
        url: '/about',
        views: {
            // el template principal debe estar puesto aqui (nombrado relativamente)
            '': { templateUrl: 'pages/about.html'},

            // las vistas hijo deberan ser definidas aquí (nombradas de forma absoluta)
            'columnOne@about': { template: 'Look I am a column!' },

            // para la columna 2, definiremos un controller separado
            'columnTwo@about': {
                templateUrl: 'pages/home-table-data.html',
                controller: 'scotchController'
            }
        }
    })

    // route for the contact page
    .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html'
    });
});            

    // We create controllers

    scotchApp.controller('scotchController', function($scope){
        $scope.message = 'test';
        $scope.scotches = [
            {
                name: 'Macallan 12',
                price: 50
            },
            {
                name: 'Chivas Regal Royal Salute',
                price: 10000
            },
            {
                name: 'Glenfiddich 1937',
                price: 2000
            }
        ]
    });

    /*scotchApp.controller('mainController', function($scope){
        $scope.message = "Página principal";
        $scope.pageClass = 'page-home';
    });

    scotchApp.controller('aboutController', function($scope){
        $scope.pageClass = 'page-about';
    });

    scotchApp.controller('contactController', function($scope){
        $scope.message = 'Pagina con la información de contactos';
        $scope.pageClass = 'page-contact';
    });*/
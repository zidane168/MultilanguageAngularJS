var app = angular.module('app', ['ngCookies', 'ngRoute', 'pascalprecht.translate']);




app.config(['$routeProvider', '$translateProvider', 

 
    
    function ($routeProvider, $translateProvider) {



        var $cookies;   // init cookies for init below
        angular.injector(['ngCookies']).invoke(['$cookies', function (_$cookies_) {
            $cookies = _$cookies_;
        }]);


        $routeProvider.when('/about', {
            templateUrl: 'about',
            controller: 'Controller2'
        });


        $routeProvider.when('/index', {
            templateUrl: 'index',
            controller: 'Controller1'
        });

        $translateProvider.translations('en', {
            'ApplicationName': 'Bulk Notifications',
            'Description': 'Send bulk notification to users',
            'Title': 'EN Title',

        });

        $translateProvider.translations('cn', {
            'ApplicationName': '市场乱箭',
            'Description': '这是很好的用具呀',
            'Title': '中文',
        });        

        var language = $cookies.get('language');

        if (language == 'cn')
            $translateProvider.preferredLanguage('cn')
        else
            $translateProvider.preferredLanguage('en')  //default
    }




]);


//var app = angular.module('at', ['pascalprecht.translate']);

//app.config(function ($translateProvider) {
//    $translateProvider.translations('en', {
//        TITLE: 'Hello',
//        FOO: 'This is a paragraph.',
//        BUTTON_LANG_EN: 'english',
//        BUTTON_LANG_DE: 'german'
//    });
//    $translateProvider.translations('de', {
//        TITLE: 'Hallo',
//        FOO: 'Dies ist ein Paragraph.',
//        BUTTON_LANG_EN: 'englisch',
//        BUTTON_LANG_DE: 'deutsch'
//    });
//    $translateProvider.preferredLanguage('en');
//});

//app.controller('Ctrl', function ($scope, $translate) {
//    $scope.changeLanguage = function (key) {
//        $translate.use(key);
//    };
//});
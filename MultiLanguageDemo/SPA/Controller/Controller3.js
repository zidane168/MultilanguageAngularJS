// app.controller('Controller3', ['$cookies',  function ($cookies, $scope, $translate) {

app.controller('Controller3', function ($cookies, $scope, $translate) {

    $scope.changeLanguage = function(value)
    {
        $translate.use(value)

        $cookies.put('language', value);
        console.log('change to: ' + value);
    };

});    

//}]);


//$scope.connectDevice = function(deviceID) {
//    alert("Connecting : "+deviceID );
//};
//}]);
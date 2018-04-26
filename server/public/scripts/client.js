var app = angular.module('FoodControllerApp', []); // 

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController loaded');
    var self = this;
    self.foodSomething = "Enter a new food";

    self.newFood = {};

    self.submit = function () { //function is working, so connect to the server
        console.log('Clicked');
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood

        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('error on /food POST', error);
            })
    }
    
    $http({
        method: 'GET',
        url: '/food'
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log('error on /food GET', error);
        })
}]);


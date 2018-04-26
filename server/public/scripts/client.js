var app = angular.module('FoodControllerApp', []); // 

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController loaded');
    var self = this;
    self.foodSomething = "Enter a new food";

    self.foods = [];

    self.newFood = {};

    self.submit = function () { //function is working, so connect to the server
        console.log('Clicked');
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood

        })

            .then(function (response) {
                self.getFoods();
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('error on /food POST', error);
            })
    }
    self.getFoods = function () { //next step to add array tyo the Dom is creating a function so we can call it whenever
        $http({
            method: 'GET',
            url: '/food'

        })
            .then(function (response) {
                self.foods = response.data; //to display array in the DOM
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('error on /food GET', error);
            })

    }
    self.getFoods();

    self.deleteButton = function (food) {
        $http({
            method: 'DELETE',
            url: '/food',
            params: food
        })
            .then(function (response) {
                console.log(response)
                self.getFoods();
            })
            .catch(function (error) {
                console.log('error on /food DELETE', error);
            })
    }

    self.updateButton = function (food) {
        $http({
            method: 'PUT',
            url: '/food',
            data: food
        })
        .then(function (response) {
            console.log(response)
            self.getFoods();
        })
        .catch(function (error) {
            console.log('error on /food PUT', error);
        })
    }
}]);

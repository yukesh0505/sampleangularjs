var app = angular.module("jcu", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'home'
        })
        .when('/search', {
            templateUrl: 'pages/search.html',
            controller: 'search'
        })
        .when('/details', {
            templateUrl: 'pages/details.html',
            controller: 'details'
        })
        .otherwise({
            redirectTo: '/home'
        });
});



app.controller('home', function ($scope, $http) {

    $('body').on(' keydown ', '.searchtext', function (e) {
        if (e.which == 13 && e.type == "keydown") {
            window.location.href = "#/search?search=" + $scope.searchtext
        }
    })

});

app.controller('search', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.init = function () {
        var $dropdown = $('#dropdown'),
            $currentSelection = $('.current-selection');

        // set top value of dropdown to vertically center
        $dropdown.css('top', ($currentSelection.parent().outerHeight() - $dropdown.outerHeight()) / 2);

        // set the initial selection text
        $currentSelection.text($dropdown.find('option:selected').text());

        // change the selection text to match dropdown selected item
        $('#dropdown').change(function () {
            $currentSelection.text(
                $(this)
                .find('option:selected')
                .text());
        });

        console.log($routeParams.search);

        if($routeParams.search != ""){
            $scope.searchtext = $routeParams.search
        }

        $scope.list = [
            {
                "hotelname": "Masala Indian Restarunt",
                "desc": "Masala Indian Restarunt Masala Indian Restarunt Masala Indian Restarunt",
                "location": "Chennai",
                "suggestedby": "Masala",
                "link": "#/details?search="+$scope.searchtext
                
            },
            {
                "hotelname": "Sample 1",
                "desc": "Description",
                "location": "Chennai",
                "suggestedby": "****",
                "link": "#/details?search="+$scope.searchtext
                
            },
            {
                "hotelname": "Sample 2",
                "desc": "Description",
                "location": "Chennai",
                "suggestedby": "****",
                "link": "#/details?search="+$scope.searchtext
                
            },
            {
                "hotelname": "Sample 3",
                "desc": "Description",
                "location": "Chennai",
                "suggestedby": "****",
                "link": "#/details?search="+$scope.searchtext
                
            },
            {
                "hotelname": "Sample 4",
                "desc": "Description",
                "location": "Chennai",
                "suggestedby": "****",
                "link": "#/details?search="+$scope.searchtext
                
            },
            {
                "hotelname": "Sample 5",
                "desc": "Description",
                "location": "Chennai",
                "suggestedby": "****",
                "link": "#/details?search="+$scope.searchtext
                
            },
            {
                "hotelname": "Sample 6",
                "desc": "Description",
                "location": "Chennai",
                "suggestedby": "****",
                "link": "#/details?search="+$scope.searchtext
                
            },
        ]
    }

    $scope.init();
}]);

app.controller('details', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.init = function () {

        if($routeParams.search != ""){
            $scope.searchtext = $routeParams.search
        }

        var $dropdown = $('#dropdown'),
            $currentSelection = $('.current-selection');

        // set top value of dropdown to vertically center
        $dropdown.css('top', ($currentSelection.parent().outerHeight() - $dropdown.outerHeight()) / 2);

        // set the initial selection text
        $currentSelection.text($dropdown.find('option:selected').text());

        // change the selection text to match dropdown selected item
        $('#dropdown').change(function () {
            $currentSelection.text(
                $(this)
                .find('option:selected')
                .text());
        });
    }

    $scope.init();
}]);
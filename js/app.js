var app = angular.module("myModule", [])
							   .controller("myController", function($scope){
			
								$scope.newuser = {};
								$scope.clickedusers = [];
								
								$scope.users = [
									{name: "Raj", email: "example@mail.com", mobile: "8545005272", country: "IN"},
									{name: "Abhinandan", email: "example@mail.com", mobile: "8545005272", country: "PK"},
									{name: "Jagriti", email: "example@mail.com", mobile: "8545005272", country: "DZ"},
									{name: "Priyanshu", email: "example@mail.com", mobile: "8545005272", country: "AS"},
									
								];
								
								$scope.saveuser = function(){
									$scope.users.push($scope.newuser);
									$scope.newuser = {};
								};		
								
								$scope.selectuser =  function(user){
									$scope.selecteduser = user;
								};
								
								$scope.updateuser = function(){
									
								};
								
								$scope.deleteuser = function(){
									$scope.users.splice($scope.users.indexOf($scope.selectuser), 1);
								};
								
								 $scope.countries = [ 
									{name: 'Afghanistan', code: 'AF'},
									{name: 'Åland Islands', code: 'AX'},
									{name: 'Albania', code: 'AL'},
									{name: 'Algeria', code: 'DZ'},
									{name: 'India', code: 'IN'},
									{name: 'Pakistan', code: 'PK'},
									{name: 'American Samoa', code: 'AS'}
    ];
						});
						
/*
	_______________________________________________
	| Source Code Created By : Sourcecodesite.com  |
	| Author : Priyanshu Raj					   |
	| Website : https://www.sourcecodesite.com	   |
	|______________________________________________|
*/
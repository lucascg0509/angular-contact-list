'use strict';

angular.module('angularApp')
.controller('MainCtrl', function ($scope) {


	/*
	*	Get the contacts in 'localStorage' and parse the string to JSON
	*/
	var contactsInStore = JSON.parse(localStorage.getItem('contacts'));


	/*
	*	VAR $scope.contacts receive contacts in 'localStorage' OR a empty array
	*/
	$scope.contacts = contactsInStore || [];


	/*
	*	FUNCTION
	*
	*	Watch for changing in contacts and save in 'localStorage'
	*/
	$scope.$watch(function(){

		/*
		*	Save on 'localStorage.contacts' the JSON object parsed to a string
		*/
		localStorage.setItem('contacts', JSON.stringify($scope.contacts));

	});


	/*
	*	--------------------------
	*	MODULE CONTACTS LIST
	*
	*	List of contacts on index
	*	
	*/


	/*
	*	Function to add a contact in list
	*/
	$scope.addContact = function(){
		$scope.newContact.numbers = [];
		$scope.newContact.emails = [];
		$scope.contacts.unshift($scope.newContact);

		$scope.newContact = '';
	};

	/*
	*	Function to delete a contact
	*/
	$scope.deleteContact = function(index){
		$scope.contacts.splice(index, 1);
	};


	/*
	*	Function to get variables of the contact and put in the modal to edit
	*/
	$scope.displayContact = function(name){
		$scope.editContact = $scope.contacts[$scope.contacts.map(function(e) { return e.name; }).indexOf(name)];
	};


	/*
	*	--------------------------
	*	MODULE EDIT CONTACT
	*
	*	To edit the contact
	*	
	*/


	/*
	*	Function to add number in the numbers list
	*/
	$scope.addNumber = function(){
		$scope.editContact.numbers.push($scope.newNumber);

		$scope.newNumber = '';
	};

	/*
	*	Function to delete number in the numbers list
	*/
	$scope.deleteNumber = function(index){
		$scope.editContact.numbers.splice(index, 1);
	};

	/*
	*	Function to add email in the emails list
	*/
	$scope.addEmail = function(){
		$scope.editContact.emails.push($scope.newEmail);

		$scope.newEmail = '';
	};

	/*
	*	Function to delete email in the emails list
	*/
	$scope.deleteEmail = function(index){
		$scope.editContact.emails.splice(index, 1);
	};


});
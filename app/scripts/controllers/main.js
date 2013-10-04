'use strict';

angular.module('angularApp')
.controller('MainCtrl', function ($scope) {

	//localStorage.setItem('contatos', null);

	var contatosInStore = JSON.parse(localStorage.getItem('contatos'));

	$scope.contatos = contatosInStore || [];
	/*
	$scope.contatos = [{
		nome: 'Heverson Damasceno',
		numeros: ['45 9929 0088' , '45 3029 2425'],
		emails: ['heverson@trafor.com.br']
	},
	{
		nome: 'Lucas Cortez Gresele',
		numeros: [],
		emails: []
	}];
	*/

	$scope.$watch(function(){
		localStorage.setItem('contatos', JSON.stringify($scope.contatos));
	});

	$scope.addContato = function(){
		$scope.novoContato.numeros = [];
		$scope.novoContato.emails = [];
		$scope.contatos.unshift($scope.novoContato);

		$scope.novoContato = '';
	};

	$scope.deletarContato = function(index){
		$scope.contatos.splice(index, 1);
	};


	// Edicao de contato
	$scope.mostrarContato = function(index){
		$scope.editContato = $scope.contatos[index];
	};

	// Alterar numeros
	$scope.addNumero = function(){
		$scope.editContato.numeros.push($scope.novoNumero);

		$scope.novoNumero = '';
	};

	$scope.deletarNumero = function(index){
		$scope.editContato.numeros.splice(index, 1);
	};

	// Alterar emails
	$scope.addEmail = function(){
		$scope.editContato.emails.push($scope.novoEmail);

		$scope.novoEmail = '';
	};

	$scope.deletarEmail = function(index){
		$scope.editContato.emails.splice(index, 1);
	};


});
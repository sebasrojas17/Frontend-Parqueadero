'use strict';

function puestosService($resource, API) {
	return $resource(API + 'api/puestos/:id',{
		id:'@id'
	},{
		contarPuestos:{
			method:'GET',
			url: API + 'api/puestos/contarPuestos',
			isArray: false
		},
		mostrarHora:{
			method:'GET',
			url: API + 'api/puestos/mostrarHora',
			isArray: false
		}
	});
	// AngularJS will instantiate a singleton by calling "new" on this function
}

angular.module('parqueaderoApp')
  .factory('puestosService', puestosService);

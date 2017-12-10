'use strict';

function pagosService($resource, API) {
	return $resource(API + 'api/pagos/:id',{
		id:'@id'
	},{
		consultarTotalIngresos:{
			method:'GET',
			url: API + 'api/pagos/totalIngresos',
			isArray: false
		},
		consultarPrecio:{
			method:'GET',
			url:API + 'api/pagos/consultarPrecio',
			isArray: false
		},
		crear:{
			method:'POST',
			url:API+ 'api/pagos?',
			params:{
				placa:'@placa'
			}
		}
	});
}

angular.module('parqueaderoApp')
  .factory('pagosService', pagosService);

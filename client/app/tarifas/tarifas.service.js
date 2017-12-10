'use strict';

function tarifasService($resource, API) {
	return $resource(API + 'api/tarifas/:id',{
		id:'@id'
	},{
		actualizar:{
			method:'PUT',
			url: API + 'api/tarifas?',		
			params:{
				valor:'@valor'
			}
		}
	});
}

angular.module('parqueaderoApp')
  .factory('tarifasService', tarifasService);

'use strict';

function carrosService($resource, API) {
	return $resource(API + 'api/carros/:id',{
		id:'@id'
	},{
		crear:{
			url:API+'api/carros?',
			method:'POST',
			params:{
				placa:'@placa'
			}
		}
	});
}

angular.module('parqueaderoApp')
  .factory('carrosService', carrosService);

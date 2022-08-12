angular.module("ProjetoFipe", []);
    angular.module("ProjetoFipe").controller("controladorDaPagina", function($scope, $timeout,$http){
        vm = this;
        vm.dados;
        
        vm.marcaSelecionada;

        vm.buscarModelos = function(marca){
            console.log(marca.nome)

        }

        vm.funcaoMostrar = function(nome){
            console.log(nome)
        }

        vm.buscarMarcas = function(){
            $http({
                method: 'GET',
                url: 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
            }).then(function successCallback(response) {
               console.log(response.data)
               vm.dados = response.data;
                  
            }, function errorCallback(response) {
                if(response.data == undefined){
                    window.scrollTo(0, 0);
                    vm.alert = "Os dados do veículo não foram encontrados!"
                }
            });
        }

    });
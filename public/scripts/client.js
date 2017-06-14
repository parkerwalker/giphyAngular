var app = angular.module('app', []);

app.controller('GiphyController', function(RandomService, SearchService){
  var vm = this;


  vm.randomBS = function(){
    RandomService.randomGif().then(function(data){
      vm.returnRandom = data;
    });
  };//randomBS

  vm.searchBS = function(){
    var search = vm.search;
    var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC'

    SearchService.searchGif(searchUrl).then(function(data){
    vm.returnSearch = data
    })
  };//end searchBS

});//end controller

var app = angular.module('app', []);

app.controller('GiphyController', function($http){
  var vm = this;

  vm.randomGif = function (){
    var randomUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

    $http.get(randomUrl).then(function(response){
      console.log('back from random', response);
      vm.returnRandom = response.data.data.image_url;
    })//end http
  }//end randomGif

vm.searchGif = function(){
 var search = vm.search;
 console.log('search', search);
 var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC'

 $http.get(searchUrl).then(function(response){
   console.log('back from search', response);

   vm.returnSearch = response.data.data;
 })//end searchUrl
}//end searchGif

});//end controller

(function(){

angular.module('App',[])
.controller('AppCont',AppCont)

AppCont.$inject=['$scope']
function AppCont ($scope){
  $scope.onceCounter=0;
  $scope.counter=0;

  $scope.onceCont=function(){
    $scope.onceCounter=1;
     console.log("onceCounter"+$scope.onceCounter);
     console.log("# of Watchers: ", $scope.$$watchersCount);
  };
  $scope.Cont=function(){
    $scope.counter++;
   console.log("counter"+$scope.counter);
   console.log("# of Watchers: ", $scope.$$watchersCount);
  }
  $scope.$watch('onceCounter',function(oldvalue,newvalue){
    console.log("oldvalue"+ oldvalue);
    console.log("newvalue"+ newvalue);
  })
  $scope.$watch('counter',function(oldvalue,newvalue){
    console.log("oldvalue counter"+ oldvalue);
    console.log("newvalue counter"+ newvalue);
  })
}

})()

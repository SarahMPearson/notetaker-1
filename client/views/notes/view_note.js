(function(){
  'use strict';

  angular.module('hapi-auth')
  .controller('ViewNoteCtrl', ['$rootScope', '$scope', '$state', 'Note', '$stateParams', function($rootScope, $scope, $state, Note, $stateParams){

    Note.findOne($state.params.id).then(function(response){
      debugger;
      $scope.note = response.data;
    });

  }]);
})();

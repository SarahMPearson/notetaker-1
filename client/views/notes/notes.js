(function(){
  'use strict';

  angular.module('hapi-auth')
  .controller('NotesCtrl', ['$rootScope', '$scope', '$state', 'Note', '$stateParams', function($rootScope, $scope, $state, Note, $stateParams){
    $scope.note = {};
    $scope.mode = $state.current.name;


    function getRecent(){
      Note.recent().then(function(response){
        $scope.notes = response.data.notes;
      });
    }
    getRecent();


    $scope.create = function(note){
      Note.create(note).then(function(response){
        $scope.note = {};
        getRecent();
      });
    };

    $scope.deleteNote = function(id, index){
      Note.deleteNote(id).then(function(response){
        $scope.notes.splice(index, 1);
      });
    };
  }]);
})();

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

    Note.findOne($state.params.id).then(function(response){
      debugger;
      $scope.note = response.data;
    });

    // if($scope.mode === 'viewNote'){
    //   var noteId = $stateParams.noteId;
    //   console.log('NOTEID is', noteId);
    //   Note.findOne(noteId).then(function(response){
    //     console.log('RESPONSE!!!!!!!!!', response);
    //     debugger;
    //     $scope.note = response.data;
    //   }, function(response){
    //     //reject promise
    //     console.log('promise rejected', response);
    //   });
    // }

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

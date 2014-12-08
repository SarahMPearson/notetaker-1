'use strict';

var joi = require('joi'),
    Note = require('../../../models/note');

module.exports = {
  description: 'Delete a Notes',
  tags:['notes'],
  validate: {
    params: {
      id: joi.number()
    }
  },
  handler: function(request, reply){
    Note.deleteNote(request.params.id, function(err, result){
      reply(result).code(result ? 200 : 400);
    });
  }
};

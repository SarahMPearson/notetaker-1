/* jshint camelcase:false */
'use strict';

var pg = require('../postgres/manager');

function Note(){
}

Note.create = function(user, obj, cb){
  pg.query('SELECT add_note($1, $2, $3, $4)', [user.id, obj.title, obj.body, obj.tags], function(err, results){
    cb(err, results && results.rows ? results.rows[0].add_note : null);
  });
};

Note.query = function(user, query, cb){
  pg.query('SELECT * FROM query_notes($1, $2, $3)', [user.id, query.limit, query.offset], function(err, results){
    cb(err, results && results.rows ? results.rows : null);
  });
};

Note.findOne = function(noteId, cb){
  pg.query('SELECT * FROM find_note_by_id($1)', [noteId], function(err, results){
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};

Note.deleteNote = function(id, cb){
  pg.query('SELECT * FROM delete_note($1)', [id], function(err, results){
    cb(err, results.rows);
  });
};

module.exports = Note;

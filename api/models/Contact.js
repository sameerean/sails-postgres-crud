/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: "T_CONTACT",
    // TODO: This schemaName thing didnt work.
//        schemaName: 'sails_addressbook',
    meta: {
        schemaName: "sails_addressbook"
    }, 
    attributes: {
        pid: {
            type: 'string',
            unique: true,
            required: true
        },
        firstName: {type: 'string', columnName: "first_name"},
        lastName: {type: 'string', columnName: "last_name"},
        dateOfBirth: {type: 'datetime', columnName: "date_of_birth"},
        email: {type: 'string'},
        phone: {type: 'string'},
        profileImageUrl: {type: 'string', columnName: "profile_url"}
    },
};


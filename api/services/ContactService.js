var contactsRepo = require('../../init-data/contacts.js');
//import contactsList from '/init-data/contacts';

module.exports = {
    preloadData_OLD: function () {
        console.log(">>>>>>>>>>>>>>> preloading data.......");
        for (var _idx = 0; _idx < contactsRepo.contactList.length; _idx++) {

            var __contact = contactsRepo.contactList[_idx];
            console.log(">>>>>>>>>>>>>>>>>>>> " + JSON.stringify(__contact));

            Contact.findOrCreate({pid: __contact.pid}, __contact).then(function (_contact) {
                console.log("Contact created: " + JSON.stringify(_contact));
            }).catch(function (err) {
                console.error("Error on ContactService.preloadData");
                console.error(err);
                console.error(JSON.stringify(err));
            });
        }
    },
    preloadData: function (_next) {
        console.log(">>>>>>>>>>>>>>> preloading data.......");

        Contact.findOrCreateEach(["pid"], contactsRepo.contactList).then(function (_contacts) {
            console.log("Contact created: " + JSON.stringify(_contacts));
            if (_next) {
                _next(_contacts);
            }
        }).catch(function (err) {
            console.error("Error on ContactService.preloadData");
            console.error(err);
            console.error(JSON.stringify(err));
        });

    }
};
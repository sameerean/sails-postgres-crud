#sails-postgres-crud
===================

A SailsJS web application that demonstrates basic CRUD operations on a Postgtres database using Waterline ORM. It illustrates the following features/best practices.


- A nice **[bootstrap](http://getbootstrap.com)** based UI.
- **EJS - [Embedded Javascript](http://www.embeddedjs.com/)** as the templating engine.
- A useful, generic [layout](https://github.com/sameerean/sails-postgres-crud/blob/master/views/layout.ejs), so that the web pages are clean.
- **REST** model [route](https://github.com/sameerean/sails-postgres-crud/blob/master/config/routes.js) configuration.
- Persisting data into a Postgres DB, using [Waterline](https://github.com/balderdashy/waterline) ORM.
- Domain Driven Design around Domain Models 
- Nice usage of Java script [Promises](https://www.promisejs.org/).

Setup
--------

1. Install [NodeJS & SailsJS](http://sailsjs.org/#/getStarted) (if not already)
2. Clone [this project](https://github.com/sameerean/sails-postgres-crud) from GIT - git clone https://github.com/sameerean/sails-postgres-crud.git


Try it out
--------
1. Create/prepare a Postgrest Database for connecting from the app
2. Modify [project-root]/config/connections.js, update the DB properties.
3. From project-root, execute - sails lift. 
4. Make sure there is no error message, or fix them ;)
5. Go to http://localhost:1337/

Screenshots
------------
#####List of Users 
![List of Users](https://raw.githubusercontent.com/sameerean/sails-mongo-crud/master/assets/images/docs/user-list.png "List of Users")
#####User Edit Screen 
![User Edit Screen](https://raw.githubusercontent.com/sameerean/sails-mongo-crud/master/assets/images/docs/user-edit.png "User Edit Screen")


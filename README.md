"# Angularjs-UserList-Project"

(The size of "node-module" folder is too large.You can skip download it and create it by "npm-install".)
stage 1 : 

done :
- User list is created with name, id, profile image.
- Edit user name is done.
- Delete user is done.
- Add new user is done.
- slider for user list is added (but it has still problem to refresh in adding and deleting a user)
- I added all dependencies and packages again with BOWER to solve version problems
- I added popup for Edit and Add-User (but still the connection between controllers(popup and main controller) has problem!)
- a simple navbar is added.
- connection between controllers is fixed.
- user list ui is changed(I deleted the slider)
- upload image is done with nodejs(the uploaded image is saves in img folder)	
- I changed the Architecture of the program and added "factory" for app to share variables between controllers.

stage 2 :

done :

-GET
-Delete
-POST (I store localhost url for images in server)
-PUT (PUT method does not change avatar due to api doc.)

stage 3 :

done : 

-authentication with Token is added.
-(simple popup is added instead of alerts).

stage 4 :

done :

-install Grunt and run and compress css files and 
js files(jquery,bootstrap,ui-bootstrap,ui-bootstrap-tpls,ajax) with it
so I removed these library files from "bower_components" folder to reduce size.
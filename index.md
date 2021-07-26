<!-- Application preparation -->

1. create a directory where you want to work
2. install package.json file in the directory 
using 
inside that, you can also add the start script in the package.json, oce it is loaded. 
```js
npm init -y

// add start script
"start" : node.app
```

3. Instantiate express app in the project
using 
```js
const app = express();
```
4. add listener on the app to select the port

5. install mongoose on the application  and connect our express app to mongodb database
```js
const mongoose = require("momgoose");
mongoose.connect(url,{"optional params"},cb);
```

6. Now once we instantiated our application with express and connected it with mongodb database using mongoose,
Now it's time to install ejs
See, whenever ,we need to render any html pages in our application, at that time will use ejs to render the  pages, because it allow us to be dynamic.

For that, will require a directory called "views" in our root directory. We will store/create all the ejs file inside views.

Once ejs is installed in our application , now we need to require it or import that library onto the app.js file for that,
will use

we will set the ejs in middlewares


npm i ejs --save
const path = require('path') // for joining directory    
app.set("view engine","ejs");
app.set("views", path.join(absolute path));

7. Now once we added views directory in our root directory, we will now add models directory into our root directory, which will containes schemas to store books

models are used to define schemas to store the books and designed the database , way we wish to have it.
In model directory, will be defining all the various schema in form of js file. 

8. setup express routing and index router for starter

Okay, so we are not goint to handle our routing middlewares from the app.js file, which is our main server file
Instead, will create a directory named , "routes" inside our root directory , and will create index.js file to handle non-connected router and will create a file for other routers here, which will handle appropritate routers inside partciualr file

9. error handling middleware of 404 and custom error handleing middleware

10. We can also add "public" directory in our root directory, also means , we need to create public directory to keep all the media and stylesheets data into it. order for this does not matter. here , I just wrote it, at the end. But, order does not matter for public directory
 
<!-- Create book
    focusing on how to create a book
 -->
# Adding book from application is 2 way process
    -Render  a form where user can fill book information 
    -Capture form data and save details into database
# According to routing convention 
    - for rendering book create  form => GET on "/books/new"
    - for capturing data and saving to DB => POST on "/books"

1. When creating book we need first to have .get route to provide clinet form and then we can use .post method to capture the form data.

2. in order to capture form data, we need to use in-built express property named, express.urlencoded() to captuure the data into req.body in the parsed format
Also, at the same time, in that partcular file from route directory where we are adding routes and writing logic to store data into database. for that we need to import Book model, which we created inside model directiory,
so will import it using require()
now, this model work at collection level in the mongoose , as same as collection level in mongodb
Using that model, will do create operation

kindly refer
routes/books.js for this and app.js in which we only added one line for this section is express.urlencoded to capture the form data inro parsed format into req.url 

# flow
1. whenever any request comes on route /books, app.js has middleware , which will direct us to file books.js inside the route directory
2. inside route directory we need to handle multiple different requests on /books route

<!-- read book
focus is on how to read book
 -->
It's simple, we need to use find or findById method
<!-- update book
    focusing on how to update a book
 -->
# Updating a book is again two step process,
    1. Render a form where user can view existing book data
    2. Capture form data and update book details into database
# According to routing convention
    1. for rendering book update form => GET request on '/books/:id/edit';
    2. for capturing updated data and savinbg to DB => POST on '/books/:id';


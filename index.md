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
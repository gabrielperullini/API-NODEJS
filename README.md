This project was created with NODEjs

In the project directory, you can run:

### `npm start`


to consume the REST API in the browser you must place http: // localhost: 3500 / iecho? text = 'variable', variable is equal to the value that you send by parameter to the GET of the API which will return status 200 if it is OK and status 400 when it is a BAD REQUEST.
The data is returned in the body as "text: tset" if the variable sent is test and "error: no text" if the variable is different from test.

To run the application in Docker, it must be placed in the / folder of the project and execute the following command "docker build -t" name of the image you want to create "."
To run the image in backgraund you must execute "docker run -d -p 4000: 3500" name of created image "", port 3500 must be fowed through port 4000.

To run the application in developer mode from the browser use the URL "http: // localhost: 4000 / iecho? Text =" variable to send "" 

To run the tests
### `npm test`

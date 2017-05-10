# Demo

Find the live demo [here](https://cruis-r.github.io/geo-map-component/)

# Get started
To start the server first in order to use the map conponent!!
The server is on 

https://github.com/Cruis-R/geoloc-server


To start the client service:
Go the root directory of the project then run the following command:
npm install

Then change the attribute "isServer" to {'true'} in the file src/index.js 
line -> <Route component={(props) => <App isServer={'false'} {...props}/>}/>

Then run the command
npm start


The map is running on
localhost:3000

In order to run the map locally, we need to disable the browser's security service.
e.g.

chromium-browser --disable-web-security --user-data-dir

# If no server is running(default)
npm install

npm start

# get geo data from url
add ?url=<your geojson data address here>  after the url
e.g. http://localhost:3000/?utl=https://api.myjson.com/bins/o5k9x

For testing

I already uploaded a simple geojson here with the address:https://api.myjson.com/bins/o5k9x, so it is working.
Info for [geojson format](http://geojson.org/)





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

I already uploaded [a simple geojson](https://api.myjson.com/bins/o5k9x), so it is working.
Info for [geojson format](http://geojson.org/)

Also, we can use spqrql to get some geolocation info frol dbpedia by adding the following [links](http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+%3FLON+%3FLAT+%3FLAB%0D%0AWHERE+%7B%0D%0A++GRAPH+%3FGRAPH+%7B%0D%0A++++%3Fsub+a+dbo%3APlace+.%0D%0A++++%3Fsub+geo%3Along+%3FLON+.%0D%0A++++%3Fsub+geo%3Alat+%3FLAT+.%0D%0A++++%3Fsub+rdfs%3Alabel+%3FLAB.%0D%0A++++filter%28+lang%28%3FLAB%29+%3D+%27fr%27+%29%0D%0A++%7D%0D%0A%7DLIMIT+100&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on
) to the end of the query url

http://localhost:3000/?sql=

For more info for generate sparql, check [here](http://dbpedia.org/sparql) and change the result format to json




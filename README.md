# Demo

Find the live demo [here](https://cruis-r.github.io/geo-map-component/)  
## Trace based on time slot  
Use search bar to find trace of one specific hour:  
For example:  
You want to get the trace from 2017/06/08 18:00 to 2017/06/08 18:59  
type  
```javascript
2017-06-08T18
```
You want to get the trace of one specific day like 2017/06/08:  
type  
```javascript
2017-06-08
```
You can also put more time slot into the search bar to get more info  
# Get started
# If no server is implemented(default)
npm install

npm start

# get geo data from url
add ?url=<your geojson data address here>  after the url
e.g. http://localhost:3000/?url=https://api.myjson.com/bins/o5k9x

I already uploaded [a simple geojson](https://api.myjson.com/bins/o5k9x), so you can test if with the given link. Also you can upload your own and test it.
Info for [geojson format](https://geojson.org/)

# get geo data from sparql query
We can use spqrql to get some geolocation info from dbpedia by adding the following [links](https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+%3FLON+%3FLAT+%3FLAB%0D%0AWHERE+%7B%0D%0A++GRAPH+%3FGRAPH+%7B%0D%0A++++%3Fsub+a+dbo%3APlace+.%0D%0A++++%3Fsub+geo%3Along+%3FLON+.%0D%0A++++%3Fsub+geo%3Alat+%3FLAT+.%0D%0A++++%3Fsub+rdfs%3Alabel+%3FLAB.%0D%0A++++filter%28+lang%28%3FLAB%29+%3D+%27fr%27+%29%0D%0A++%7D%0D%0A%7DLIMIT+100&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on
) to the end of the query url

http://localhost:3000/?sql=

For more info for generate sparql, check [here](https://dbpedia.org/sparql) and change the result format to json


# How to run the map on a server
  # First Step 
  git clone git@github.com:Cruis-R/geoloc-server.git
  Then run the command(need to wait for installation):
  sbt
  Then run the command:
  run

  # Second Step
  Go to the folder geo-map-component/src
  Then change the attribute "isServer" to {'true'} in the file index.js 
  
  line -> <Route component={(props) => <App isServer={'false'} {...props}/>}/>

  Then run the command(if npm install already done)
  npm start


The map is running on
localhost:3000

In order to run the map locally, we need to disable the browser's security service.
e.g.

chromium-browser --disable-web-security --user-data-dir




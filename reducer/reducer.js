const actionTypes = require('../actiontype/actionType');
const defaultGeoData = require('json!../src/user.geojson');
const initialState = {
  content: "hello",
  lastChange:null,
  treeData : {},
  urlData :null,
  defaultGeoData : defaultGeoData,
  serverData:null
  // Loads default language content (en) as an initial state
};

var reducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CLICK:
      console.log("click :",action.id);
      return Object.assign({}, state, {
        content: "lol"
      })
    case actionTypes.SetLastChangeState:
      console.log("State Now :",state.lastChange);
      console.log("SetLastChangeState :",action.change);
      return Object.assign({}, state, {
        lastChange:action.change
      })
    case actionTypes.UpdateTreeData:
      console.log("UpdateTreeData :",action.newdata);
      return Object.assign({}, state, {
        treeData:action.newdata
      })
    case actionTypes.GetDataFromUrl:
      console.log("GetDataFromUrl",action.urlData);
      return Object.assign({}, state, {
        urlData:action.urlData
      })
    case actionTypes.UpdateServerData:
      console.log("UpdateServerData :",action.serverData);
      return Object.assign({}, state, {
        serverData:action.serverData
      })
    default:
      return state;
  }
};

module.exports = reducer;

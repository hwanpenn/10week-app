import app from './reducers/app.js'
import roleTables from './reducers/roleTables.js'
import registScreen from './reducers/registScreen.js'
import {combineReducers} from 'redux'

export default combineReducers({
    app,
    roleTables,
    registScreen,

})

import { combineReducers } from 'redux';
import ui from 'reducers/ui';
import user from 'reducers/user';
import newChar from 'reducers/newChar'

export default combineReducers({
    ui,
    user,
    newChar,
})

    
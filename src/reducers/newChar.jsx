import { CHANGE_CHARACTER_DETAIL } from 'actions/actions';
import { CHANGE_ATTRIBUTE } from '../actions/actions';

export const newCharState = {
    name: '',
    age: '',
    height: '',
    weight: '',
    deity: '',
    alignment: '',
    attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 0
    },
    classes: {},
    feats: [],
}


export default (state = newCharState, action) => {
    switch(action.type) {
        case CHANGE_CHARACTER_DETAIL:
            return {...state, [action.detail]: action.value}
        case CHANGE_ATTRIBUTE:
            return {
                ...state,
                attributes:{
                    ...state.attributes,
                    [action.attribute]: action.value
                }}
        default:
            return state
    }
}
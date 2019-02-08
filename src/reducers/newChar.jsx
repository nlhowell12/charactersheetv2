import { CHANGE_CHARACTER_DETAIL, CHANGE_ATTRIBUTE } from 'actions/actions';

export const newCharState = {
    name: '',
    age: '',
    height: '',
    weight: '',
    deity: '',
    alignment: '',
    race: '',
    subrace: '',
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
            let newAttributes = {...state.attributes}
            if (action.detail === 'race') {
                if (state.subrace) {
                    Object.keys(state.subrace.modifiers).map(attribute => {
                        return newAttributes[attribute] -= state.subrace.modifiers[attribute]
                    })
                }
                if (state.race !== undefined && state.race.modifiers) {
                    Object.keys(state.race.modifiers).map(attribute => {
                        return newAttributes[attribute] -= state.race.modifiers[attribute]
                    })
                }
                if (action.value.modifiers !== undefined) {
                    Object.keys(action.value.modifiers).map(attribute => {
                        return newAttributes[attribute] += action.value.modifiers[attribute]
                    })
                }
                return {...state, [action.detail]: action.value, attributes: newAttributes, subrace: ''}
            }
            if (action.detail === 'subrace') {
                if (state.subrace) {
                    Object.keys(state.subrace.modifiers).map(attribute => {
                        return newAttributes[attribute] -= state.subrace.modifiers[attribute]
                    })
                }
                if (action.value.modifiers !== undefined) {
                    Object.keys(action.value.modifiers).map(attribute => {
                        return newAttributes[attribute] += action.value.modifiers[attribute]
                    })
                }
                return {...state, [action.detail]: action.value, attributes: newAttributes, subrace: action.value}
            }
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
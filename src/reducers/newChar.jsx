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
    classes: [],
    feats: [],
}


export default (state = newCharState, action) => {
    switch(action.type) {
        default:
            return state
    }
}
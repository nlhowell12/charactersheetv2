
export const calcAttMod = (attribute) => {
    return attribute > 10 ? Math.floor((attribute-10)/2) : Math.floor((attribute-10)/2)
};

export const getRacialModifiers = (race, subrace, attribute) => {
    let modifier = 0;
    if (race && race.modifiers[attribute]) {
        modifier += race.modifiers[attribute]
    }
    if (subrace && subrace.modifiers[attribute]) {
        modifier += subrace.modifiers[attribute]
    }
    return modifier
}
export const calcAttMod = (attribute) => {
    return attribute > 10 ? Math.floor((attribute-10)/2) : Math.floor((attribute-10)/2)
};
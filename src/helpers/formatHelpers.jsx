export const titleCase = (word) => {
    const splitWord = word.split('');
    return splitWord[0].toUpperCase() + word.slice(1)
}

export const titleCaseString = (string) => {
    const splitString = string.split(' ');
    let returnString = '';
    splitString.map(word => {
        return returnString.concat(titleCase(word))
    })
    return returnString
}
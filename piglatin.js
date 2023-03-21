function translatePigLatin(str) {
    let index = str.search(/[ueoai]/);
    if (index === 0){
    return `${str}way`;
    } else {
    return `${str.slice(index) + str.substr(0,index-0)}ay`;
    }
    }

    module.exports = translatePigLatin

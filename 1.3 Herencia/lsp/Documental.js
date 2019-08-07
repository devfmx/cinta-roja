const {Largometraje} = require('./Largometraje');
class Documental extends Largometraje{
    constructor(title,director){
        super(title);
        this.director = director
    }

    getDirector(){
        return this.director
    }
}

module.exports = {
    Documental
}
const Movie = require('./table');

exports.createMovie = async(movieObject) => {
    try {
        const newMovie = await Movie.create(movieObject);
    } catch (error) {
        console.log(error);
    }
};

exports.readMovie = async(id) => {
    try {
        const readMovie = await Movie.findOne({ where: { id: id }});
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async(title, actor) => {
    try {
        const updateMovie = await Movie.update(title, actor, director, rating);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async(id) => {
    try {
        const deleteMovie = await Movie.destroy({ where: {id: id}});
    } catch (error) {
        console.log(error);
    }
};
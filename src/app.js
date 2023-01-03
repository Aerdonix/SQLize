const yargs = require('yargs');
const {openSequelizeConnection} = require ("./db/connection");
const {createMovie, readMovie, updateMovie, deleteMovie} = require ('./movie/function');

async function app(yargsInput) {
    await openSequelizeConnection.sync();
    if (yargsInput.create) {
     const newMovie = await createMovie({title: yargsInput.title, actor: yargsInput.actor, director: yargsInput.director, rating: yargsInput.rating});
     console.log("New Creation made to the database");
    } else if (yargsInput.read) {
        const readingMovie = await readMovie(yargsInput.id);
        console.log("Movie Found by Id");
    } else if (yargsInput.update) {
        const updatingMovie = await updateMovie({title: yargsInput.title, actor: yargsInput.actor, director: yargsInput.director, rating: yargsInput.rating});
        console.log("New Update made to database");
    } else if (yargsInput.delete) {
        const deletingMovie = await deleteMovie(yargsInput.id);
        console.log("A Deletion was made to the database")
    } else {
        console.log('Unrecognised Command');
    }
};

app(yargs.argv);
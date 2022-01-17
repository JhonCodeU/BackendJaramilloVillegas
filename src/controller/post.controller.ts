const store = require('../store/post');

function addPost(title: any, description: any) {

    return new Promise((resolve, reject) => {

        if (!title || !description) {
            return reject('Los datos son incorrectos');
        }
        // id autoincremental
        const id = store.list().length + 1;
        const fullPost = {
            id,
            title,
            description,
            created: new Date()
        }
        store.add(fullPost);
        resolve(fullPost);
    });
    
}

function getAllPosts() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function deletePost(id: number) {
    return new Promise((resolve, reject) => {
        if (!!id) {
            store.delete(id)
            resolve(`El post con id ${id} ha sido eliminado`);
        } else {
            reject('El id es incorrecto');
        }
    });
}

module.exports = {
    addPost,
    getAllPosts,
    deletePost
}
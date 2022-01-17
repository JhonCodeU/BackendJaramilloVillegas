var list:any = []

function addPostStore(post:Object) {
    list.push(post)
}

function getPosts() {
    return list;
}

function deleteOnePost(id: number) {
    console.log(id);
    // loop in list and delete the post where id = id
    list.map((element: { id: number; }) => {
        if(element.id == id) {
            list.splice(list.indexOf(element), 1);
        }
    });
}

module.exports = {
    add: addPostStore,
    list: getPosts,
    delete: deleteOnePost
}
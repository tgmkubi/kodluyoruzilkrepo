/*
Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım 
ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

const posts = [
    {id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
    {id: 3, title: "Post 3"},
    {id: 4, title: "Post 4"},
];

const displayPosts = (posts) => {
    console.log("Postlar listeleniyor...");
    posts.forEach(post => console.log(post.title));
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log("Yeni post ekleniyor...")
        posts.push(newPost);
        resolve(posts);
        reject("Post ekleme hatası...");
    })
};

displayPosts(posts);

const addAndDisplayPosts = async (newPost) => {
    try {
        const updatedPosts = await addPost(newPost);
        displayPosts(updatedPosts);
    } catch (error) {
        console.log(error);
    }
};

addAndDisplayPosts({id: 5, title: "Post 5"});


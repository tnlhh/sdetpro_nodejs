const url = "https://jsonplaceholder.typicode.com";
const readline = require('readline-sync');


function main() {
    const userId = readline.question('Please enter userId: ');
    const postId = readline.question('Please enter postId: ');

    fetchAndPrintPostContent(userId, postId)
    fetchAndPrintAllPosts(userId)
}

main();


function fetchData(endpoint) {
    return fetch(`${url}${endpoint}`)
        .then(response => {return response.json()});
    
}

function fetchAndPrintPostContent(userId, postId) {
    const promiseResponse = fetchData(`/posts/${postId}`);

    promiseResponse.then(postContent => {
        if (postContent.userId == userId) {
            console.log(`Title: ${postContent.title}`);
            console.log(`Body: ${postContent.body}`);
        } else {
            console.log('No post found for this user with the provided post ID.');
        }
    })
}

function fetchAndPrintAllPosts(userId) {
    const promiseResponse = fetchData(`/posts?userId=${userId}`);

    promiseResponse.then(postsContents => {
            console.log('...Fetching all posts by user ID...\n');
            if (postsContents.length > 0) {
                console.log(`All posts by userID ${userId}:`);
                postsContents.forEach(post => {
                    console.log(`\nTitle: ${post.title}`);
                    console.log(`Body: ${post.body}`);
                });
            } else {
                console.log('No posts found for this user.');
            }
        });
}

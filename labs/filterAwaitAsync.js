const url = "https://jsonplaceholder.typicode.com";
const readline = require('readline-sync');

async function fetchData(endpoint) {
    const response = await fetch(`${url}${endpoint}`);
    return await response.json();
}

async function fetchAndPrintPostContent(userId, postId) {
    const postContent = await fetchData(`/posts/${postId}`);
    if (postContent.userId == userId) {
        console.log(`Title: ${postContent.title}`);
        console.log(`Body: ${postContent.body}`);
    } else {
        console.log('No post found for this user with the provided post ID.');
    }
}


async function fetchAndPrintAllPosts(userId) {
    const postsContents = await fetchData(`/posts?userId=${userId}`);
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

}

async function main() {
    try {
        const userId = readline.question('Please enter userId: ');
        const postId = readline.question('Please enter postId: ');

        await fetchAndPrintPostContent(userId, postId);
        await fetchAndPrintAllPosts(userId);
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();

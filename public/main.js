const form = document.querySelector('#form');
const button = document.querySelector('#submit-btn');
const postAuthor = document.querySelector('#post-author');
const postTitle = document.querySelector('#post-title');
const postBody = document.querySelector('#post-body');
const newElement = document.createElement('p');
newElement.textContent = "Dont't forget your post!"
newElement.className = 'error-text';

button.addEventListener('click', (e) => {
    if(postBody.value === ''){
        form.insertBefore(newElement, postBody);
    }
    else{
        if(postAuthor.value === ''){
            postAuthor.value = 'Anonymous'
        }
        if(postTitle.value === ''){
            postTitle.value = 'Untitled'
        }
        console.log(`Posted '${postTitle.value}' by ${postAuthor.value}`);
    }
});


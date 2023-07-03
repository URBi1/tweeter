const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$('#post').on('click', function() {
    let inputText = $('#input').val();
    if (inputText) {
        tweeter.addPost(inputText);
        renderer.renderPosts(tweeter.getPosts());
        $('#input').val('');
    }
});

$('#posts').on('click', '.delete-post', function() {
    let postId = $(this).closest('.post').data('id');
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
});

$('#posts').on('click', '.add-comment', function() {
    let commentText = $(this).siblings('.comment-input').val();
    let postId = $(this).closest('.post').data('id');
    if (commentText) {
        tweeter.addComment(postId, commentText);
        renderer.renderPosts(tweeter.getPosts());
        $(this).siblings('.comment-input').val('');
    }
});

$('#posts').on('click', '.delete-comment', function() {
    let commentId = $(this).closest('.comment').data('id');
    let postId = $(this).closest('.post').data('id');
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
});

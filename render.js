const Renderer = (function() {
    const renderPosts = function(posts) {
        const $postsContainer = $('#posts');
        $postsContainer.empty();

        posts.forEach(post => {
            const $post = $('<div>').addClass('post').attr('data-id', post.id);

            const $postText = $('<p>').addClass('post-text').text(post.text);
            const $deletePostButton = $('<button>').addClass('delete-post').text('Delete Post');
            $post.append($postText, $deletePostButton);

            const $commentsContainer = $('<div>').addClass('comments');
            const $commentInput = $('<input>').addClass('comment-input').attr('placeholder', 'Write a comment...');
            const $addCommentButton = $('<button>').addClass('add-comment').text('Comment');
            $commentsContainer.append($commentInput, $addCommentButton);

            post.comments.forEach(comment => {
                const $comment = $('<div>').addClass('comment').attr('data-id', comment.id);
                const $commentText = $('<p>').text(comment.text);
                const $deleteCommentButton = $('<button>').addClass('delete-comment').text('X');

                $comment.append($commentText, $deleteCommentButton);
                $commentsContainer.append($comment);
            });

            $post.append($commentsContainer);
            $postsContainer.append($post);
        });
    };

    return {
        renderPosts
    };
})

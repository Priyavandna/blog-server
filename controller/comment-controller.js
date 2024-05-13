import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.deleteOne();

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
// export const deleteComment = async (request, response) => {
//     try {
//         const comment = await Comment.findById(request.params.id);
        
//         // Check if the comment exists
//         if (!comment) {
//             return response.status(404).json({ error: 'Comment not found' });
//         }

//         // Add additional authorization logic here if needed

//         // Delete the comment
//         await comment.deleteOne();

//         response.status(200).json('Comment deleted successfully');
//     } catch (error) {
//         response.status(500).json({ error: 'Internal server error' });
//     }
// }

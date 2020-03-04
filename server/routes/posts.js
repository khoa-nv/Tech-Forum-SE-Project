const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const PostController = require('../controllers/postController');

// router.use(authenticate);

router.post('/', PostController.createPost);
router.get('/:id', PostController.getPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;
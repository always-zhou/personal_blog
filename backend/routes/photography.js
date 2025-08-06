const express = require('express');
const router = express.Router();
const photographyController = require('../controllers/photographyController');

// 获取所有摄影作品
router.get('/', photographyController.getAllPhotography);

// 根据类别获取摄影作品
router.get('/category/:category', photographyController.getPhotographyByCategory);

// 获取单个摄影作品
router.get('/:id', photographyController.getPhotographyById);

// 创建新的摄影作品
router.post('/', photographyController.createPhotography);

// 更新摄影作品
router.put('/:id', photographyController.updatePhotography);

// 删除摄影作品
router.delete('/:id', photographyController.deletePhotography);

module.exports = router;
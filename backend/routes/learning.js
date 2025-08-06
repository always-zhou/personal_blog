const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learningController');

// 获取所有学习记录
router.get('/', learningController.getAllLearning);

// 根据分类获取学习记录
router.get('/category/:category', learningController.getLearningByCategory);

// 获取单个学习记录
router.get('/:id', learningController.getLearningById);

// 创建新的学习记录
router.post('/', learningController.createLearning);

// 更新学习记录
router.put('/:id', learningController.updateLearning);

// 删除学习记录
router.delete('/:id', learningController.deleteLearning);

module.exports = router;
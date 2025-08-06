const express = require('express');
const router = express.Router();
const lifeController = require('../controllers/lifeController');

// 获取所有生活记录
router.get('/', lifeController.getAllLife);

// 根据心情获取生活记录
router.get('/mood/:mood', lifeController.getLifeByMood);

// 获取单个生活记录
router.get('/:id', lifeController.getLifeById);

// 创建新的生活记录
router.post('/', lifeController.createLife);

// 更新生活记录
router.put('/:id', lifeController.updateLife);

// 删除生活记录
router.delete('/:id', lifeController.deleteLife);

module.exports = router;
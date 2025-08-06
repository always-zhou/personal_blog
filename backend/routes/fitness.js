const express = require('express');
const router = express.Router();
const fitnessController = require('../controllers/fitnessController');

// 获取所有健身记录
router.get('/', fitnessController.getAllFitness);

// 根据类型获取健身记录
router.get('/type/:type', fitnessController.getFitnessByType);

// 获取单个健身记录
router.get('/:id', fitnessController.getFitnessById);

// 创建新的健身记录
router.post('/', fitnessController.createFitness);

// 更新健身记录
router.put('/:id', fitnessController.updateFitness);

// 删除健身记录
router.delete('/:id', fitnessController.deleteFitness);

module.exports = router;
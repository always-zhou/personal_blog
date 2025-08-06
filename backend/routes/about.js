const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// 获取个人信息
router.get('/', aboutController.getAboutInfo);

// 更新个人信息
router.put('/', aboutController.updateAboutInfo);

// 获取技能列表
router.get('/skills', aboutController.getSkills);

// 更新技能列表
router.put('/skills', aboutController.updateSkills);

module.exports = router;
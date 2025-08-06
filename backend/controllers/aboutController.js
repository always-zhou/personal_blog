const About = require('../models/About');

// 获取个人信息
const getAboutInfo = async (req, res) => {
  try {
    const aboutInfo = About.getInfo();
    res.json({
      success: true,
      data: aboutInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取个人信息失败',
      error: error.message
    });
  }
};

// 更新个人信息
const updateAboutInfo = async (req, res) => {
  try {
    const updatedInfo = About.updateInfo(req.body);
    res.json({
      success: true,
      message: '个人信息更新成功',
      data: updatedInfo
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '更新个人信息失败',
      error: error.message
    });
  }
};

// 获取技能列表
const getSkills = async (req, res) => {
  try {
    const skills = About.getSkills();
    res.json({
      success: true,
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取技能列表失败',
      error: error.message
    });
  }
};

// 更新技能列表
const updateSkills = async (req, res) => {
  try {
    const updatedSkills = About.updateSkills(req.body);
    res.json({
      success: true,
      message: '技能列表更新成功',
      data: updatedSkills
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '更新技能列表失败',
      error: error.message
    });
  }
};

module.exports = {
  getAboutInfo,
  updateAboutInfo,
  getSkills,
  updateSkills
};
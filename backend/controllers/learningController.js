const Learning = require('../models/Learning');

// 获取所有学习记录
const getAllLearning = async (req, res) => {
  try {
    const learningRecords = Learning.getAll();
    res.json({
      success: true,
      data: learningRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取学习记录失败',
      error: error.message
    });
  }
};

// 根据分类获取学习记录
const getLearningByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const learningRecords = Learning.getByCategory(category);
    res.json({
      success: true,
      data: learningRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取学习记录失败',
      error: error.message
    });
  }
};

// 获取单个学习记录
const getLearningById = async (req, res) => {
  try {
    const { id } = req.params;
    const learningRecord = Learning.getById(parseInt(id));
    if (!learningRecord) {
      return res.status(404).json({
        success: false,
        message: '学习记录不存在'
      });
    }
    res.json({
      success: true,
      data: learningRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取学习记录失败',
      error: error.message
    });
  }
};

// 创建新的学习记录
const createLearning = async (req, res) => {
  try {
    const newRecord = Learning.create(req.body);
    res.status(201).json({
      success: true,
      message: '学习记录创建成功',
      data: newRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '创建学习记录失败',
      error: error.message
    });
  }
};

// 更新学习记录
const updateLearning = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = Learning.update(parseInt(id), req.body);
    if (!updatedRecord) {
      return res.status(404).json({
        success: false,
        message: '学习记录不存在'
      });
    }
    res.json({
      success: true,
      message: '学习记录更新成功',
      data: updatedRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '更新学习记录失败',
      error: error.message
    });
  }
};

// 删除学习记录
const deleteLearning = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = Learning.delete(parseInt(id));
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: '学习记录不存在'
      });
    }
    res.json({
      success: true,
      message: '学习记录删除成功'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '删除学习记录失败',
      error: error.message
    });
  }
};

module.exports = {
  getAllLearning,
  getLearningByCategory,
  getLearningById,
  createLearning,
  updateLearning,
  deleteLearning
};
const Fitness = require('../models/Fitness');

// 获取所有健身记录
const getAllFitness = async (req, res) => {
  try {
    const fitnessRecords = Fitness.getAll();
    res.json({
      success: true,
      data: fitnessRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取健身记录失败',
      error: error.message
    });
  }
};

// 根据类型获取健身记录
const getFitnessByType = async (req, res) => {
  try {
    const { type } = req.params;
    const fitnessRecords = Fitness.getByType(type);
    res.json({
      success: true,
      data: fitnessRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取健身记录失败',
      error: error.message
    });
  }
};

// 获取单个健身记录
const getFitnessById = async (req, res) => {
  try {
    const { id } = req.params;
    const fitnessRecord = Fitness.getById(parseInt(id));
    if (!fitnessRecord) {
      return res.status(404).json({
        success: false,
        message: '健身记录不存在'
      });
    }
    res.json({
      success: true,
      data: fitnessRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取健身记录失败',
      error: error.message
    });
  }
};

// 创建新的健身记录
const createFitness = async (req, res) => {
  try {
    const newRecord = Fitness.create(req.body);
    res.status(201).json({
      success: true,
      message: '健身记录创建成功',
      data: newRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '创建健身记录失败',
      error: error.message
    });
  }
};

// 更新健身记录
const updateFitness = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = Fitness.update(parseInt(id), req.body);
    if (!updatedRecord) {
      return res.status(404).json({
        success: false,
        message: '健身记录不存在'
      });
    }
    res.json({
      success: true,
      message: '健身记录更新成功',
      data: updatedRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '更新健身记录失败',
      error: error.message
    });
  }
};

// 删除健身记录
const deleteFitness = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = Fitness.delete(parseInt(id));
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: '健身记录不存在'
      });
    }
    res.json({
      success: true,
      message: '健身记录删除成功'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '删除健身记录失败',
      error: error.message
    });
  }
};

module.exports = {
  getAllFitness,
  getFitnessByType,
  getFitnessById,
  createFitness,
  updateFitness,
  deleteFitness
};
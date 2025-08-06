const Life = require('../models/Life');

// 获取所有生活记录
const getAllLife = async (req, res) => {
  try {
    const lifeRecords = Life.getAll();
    res.json({
      success: true,
      data: lifeRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取生活记录失败',
      error: error.message
    });
  }
};

// 根据心情获取生活记录
const getLifeByMood = async (req, res) => {
  try {
    const { mood } = req.params;
    const lifeRecords = Life.getByMood(mood);
    res.json({
      success: true,
      data: lifeRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取生活记录失败',
      error: error.message
    });
  }
};

// 获取单个生活记录
const getLifeById = async (req, res) => {
  try {
    const { id } = req.params;
    const lifeRecord = Life.getById(parseInt(id));
    if (!lifeRecord) {
      return res.status(404).json({
        success: false,
        message: '生活记录不存在'
      });
    }
    res.json({
      success: true,
      data: lifeRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取生活记录失败',
      error: error.message
    });
  }
};

// 创建新的生活记录
const createLife = async (req, res) => {
  try {
    const newRecord = Life.create(req.body);
    res.status(201).json({
      success: true,
      message: '生活记录创建成功',
      data: newRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '创建生活记录失败',
      error: error.message
    });
  }
};

// 更新生活记录
const updateLife = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = Life.update(parseInt(id), req.body);
    if (!updatedRecord) {
      return res.status(404).json({
        success: false,
        message: '生活记录不存在'
      });
    }
    res.json({
      success: true,
      message: '生活记录更新成功',
      data: updatedRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '更新生活记录失败',
      error: error.message
    });
  }
};

// 删除生活记录
const deleteLife = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = Life.delete(parseInt(id));
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: '生活记录不存在'
      });
    }
    res.json({
      success: true,
      message: '生活记录删除成功'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '删除生活记录失败',
      error: error.message
    });
  }
};

module.exports = {
  getAllLife,
  getLifeByMood,
  getLifeById,
  createLife,
  updateLife,
  deleteLife
};
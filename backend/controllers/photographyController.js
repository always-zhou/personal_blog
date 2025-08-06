const Photography = require('../models/Photography');

// 获取所有摄影作品
const getAllPhotography = async (req, res) => {
  try {
    const photographyRecords = Photography.getAll();
    res.json({
      success: true,
      data: photographyRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取摄影作品失败',
      error: error.message
    });
  }
};

// 根据类别获取摄影作品
const getPhotographyByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const photographyRecords = Photography.getByCategory(category);
    res.json({
      success: true,
      data: photographyRecords
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取摄影作品失败',
      error: error.message
    });
  }
};

// 获取单个摄影作品
const getPhotographyById = async (req, res) => {
  try {
    const { id } = req.params;
    const photographyRecord = Photography.getById(parseInt(id));
    if (!photographyRecord) {
      return res.status(404).json({
        success: false,
        message: '摄影作品不存在'
      });
    }
    res.json({
      success: true,
      data: photographyRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '获取摄影作品失败',
      error: error.message
    });
  }
};

// 创建新的摄影作品
const createPhotography = async (req, res) => {
  try {
    const newRecord = Photography.create(req.body);
    res.status(201).json({
      success: true,
      message: '摄影作品创建成功',
      data: newRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '创建摄影作品失败',
      error: error.message
    });
  }
};

// 更新摄影作品
const updatePhotography = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = Photography.update(parseInt(id), req.body);
    if (!updatedRecord) {
      return res.status(404).json({
        success: false,
        message: '摄影作品不存在'
      });
    }
    res.json({
      success: true,
      message: '摄影作品更新成功',
      data: updatedRecord
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: '更新摄影作品失败',
      error: error.message
    });
  }
};

// 删除摄影作品
const deletePhotography = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = Photography.delete(parseInt(id));
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: '摄影作品不存在'
      });
    }
    res.json({
      success: true,
      message: '摄影作品删除成功'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '删除摄影作品失败',
      error: error.message
    });
  }
};

module.exports = {
  getAllPhotography,
  getPhotographyByCategory,
  getPhotographyById,
  createPhotography,
  updatePhotography,
  deletePhotography
};
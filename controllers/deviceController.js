import Device from "../models/Device.js";

export const registerDevice = async (req, res) => {
  try {
    const { name, type, status } = req.body;
    const device = await Device.create({ name, type, status, owner: req.user.id });
    res.json({ success: true, device });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getDevices = async (req, res) => {
  try {
    const filters = {};
    if (req.query.type) filters.type = req.query.type;
    if (req.query.status) filters.status = req.query.status;

    const devices = await Device.find({ owner: req.user.id, ...filters });
    res.json({ success: true, devices });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateDevice = async (req, res) => {
  try {
    const device = await Device.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!device) return res.status(404).json({ success: false, message: "Device not found" });
    res.json({ success: true, device });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteDevice = async (req, res) => {
  try {
    const device = await Device.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!device) return res.status(404).json({ success: false, message: "Device not found" });
    res.json({ success: true, message: "Device removed" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const heartbeat = async (req, res) => {
  try {
    const device = await Device.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      { last_active_at: new Date(), status: req.body.status },
      { new: true }
    );
    if (!device) return res.status(404).json({ success: false, message: "Device not found" });
    res.json({ success: true, message: "Device heartbeat recorded", last_active_at: device.last_active_at });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

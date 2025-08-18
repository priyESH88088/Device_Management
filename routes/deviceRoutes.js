import express from "express";
import { registerDevice, getDevices, updateDevice, deleteDevice, heartbeat } from "../controllers/deviceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, registerDevice);
router.get("/", protect, getDevices);
router.patch("/:id", protect, updateDevice);
router.delete("/:id", protect, deleteDevice);
router.post("/:id/heartbeat", protect, heartbeat);

export default router;

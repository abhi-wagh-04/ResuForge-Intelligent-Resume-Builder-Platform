import express from "express";
import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
  getAllResumes,
} from "../controllers/resumeContrller.js";
import { protect } from "../middlewares/authMiddleware.js";
import { uploadResumeImages } from "../controllers/uploadImages.js";
import { upload } from "../middlewares/uploadMiddleware.js";
import puppeteer from "puppeteer"

const router = express.Router();

router.get("/all", getAllResumes);
router.post("/", protect, createResume);
router.get("/", protect, getUserResumes);
router.get("/:id", protect, getResumeById);
router.put("/:id", protect, updateResume);
router.put(
  "/:id/upload-images",
  protect,
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  uploadResumeImages
);

router.post("/download-pdf", async (req, res) => {
  const { htmlContent } = req.body;

  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();

    // Inject your HTML + Tailwind CDN for styling
    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Resume</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
          body { font-family: Georgia, serif; font-size: 12px; }
        </style>
      </head>
      <body>${htmlContent}</body>
      </html>
    `, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    });
    res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

router.delete("/:id", protect, deleteResume);

export default router;

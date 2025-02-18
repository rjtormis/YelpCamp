import Campground from "@models/campground";
import { Request, Response, NextFunction } from "express";
import { ICampground } from "interfaces/interface";

/**
 * Get Campgrounds
 */
export const getCampgrounds = async (req: Request, res: Response, next: NextFunction) => {
  const campgrounds = await Campground.find();
  return res.status(200).json({ campgrounds });
};

/**
 * Get Specific Campground
 */
export const getSpecificCampground = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);

  if (!campground) {
    return res.status(404).json({ message: "Campground not found" });
  }
  return res.status(200).json({ campground });
};

/**
 * Create Campground
 */
export const createCampground = async (req: Request, res: Response, next: NextFunction) => {
  const { name }: ICampground = req.body;

  const queryCampground = await Campground.findOne({ name });

  if (queryCampground) {
    return res.status(400).json({ message: "Campground already exists" });
  }

  await Campground.create(req.body);

  return res.status(200).json({ message: `Campground ${name} successfully.` });
};

/**
 * Update Campground
 */

export const updateCampground = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  const campground = await Campground.findById(id);

  if (!campground) {
    return res.status(404).json({ message: "Campground not found" });
  }

  await Campground.findByIdAndUpdate(id, req.body);

  return res.status(200).json({ message: `Campground ${req.body.name} updated successfully` });
};

/**
 * Delete Campground
 */
export const defaultCampground = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  const campground = await Campground.findById(id);

  if (!campground) {
    return res.status(404).json({ message: "Campground not found" });
  }

  await Campground.findOneAndDelete(id);
};

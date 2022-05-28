import express from 'express';
import AnimalController from '../controllers/animalController.js';

const router = express.Router();

router.post('/', AnimalController.createAnimal);
router.put('/', AnimalController.updateAnimal);
router.get('/', AnimalController.getAnimals);
router.get('/:id', AnimalController.getAnimal);
router.delete('/:id', AnimalController.deleteAnimal);

export default router;

import express from 'express';
import ProprietarioController from '../controllers/proprietarioController.js';

const router = express.Router();

router.post('/', ProprietarioController.createProprietario);
router.put('/', ProprietarioController.updateProprietario);
router.get('/', ProprietarioController.getProprietarios);
router.get('/:id', ProprietarioController.getProprietario);
router.delete('/:id', ProprietarioController.deleteProprietario);

export default router;

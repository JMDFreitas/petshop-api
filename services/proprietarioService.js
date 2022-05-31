import ProprietarioRepository from '../repositories/proprietarioRepository.js';
import AnimalRepository from '../repositories/animalRepository.js';
import animalRepository from '../repositories/animalRepository.js';

async function createProprietario(proprietario) {
    return await ProprietarioRepository.insertProprietario(proprietario);
}

async function updateProprietario(proprietario) {
    return await ProprietarioRepository.updateProprietario(proprietario);
}

async function getProprietarios() {
    return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
    return await ProprietarioRepository.getProprietario(id);
}

async function deleteProprietario(id) {
    const animais = await AnimalRepository.getAnimalByProprietario(id);
    if (animais.length > 0) {
        throw new Error(
            'Este proprietario não pode ser excluido por ter algum pet aqui.'
        );
    }
    console.log(animais);
    await ProprietarioRepository.deleteProprietario(id);
}

export default {
    createProprietario,
    updateProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
};

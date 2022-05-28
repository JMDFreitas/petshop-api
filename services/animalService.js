import AnimalRepository from '../repositories/animalRepository.js';
import ProprietarioRepository from '../repositories/proprietarioRepository.js';

async function createAnimal(animal) {
    if (await ProprietarioRepository.getProprietario(animal.proprietario_id)) {
        return await AnimalRepository.insertAnimal(animal);
    }
    throw new Error('O Id do supplier não existe no banco de dados');
}

async function updateAnimal(animal) {
    return await AnimalRepository.updateAnimal(animal);
}

async function getAnimals() {
    return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id);
}

export default {
    createAnimal,
    updateAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
};

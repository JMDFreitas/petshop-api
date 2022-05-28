import ProprietarioRepository from '../repositories/proprietarioRepository.js';

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
    await ProprietarioRepository.deleteProprietario(id);
}

export default {
    createProprietario,
    updateProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
};

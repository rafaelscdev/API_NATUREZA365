const axios = require('axios')

async function getInfoLocal(cep) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`)
        
        if (!response.data || response.data.length === 0) {
            throw new Error('Erro ao obter dados da API externa: nenhum resultado encontrado.')
        }

        const { lat, lon, display_name } = response.data[0]
        
        if (!lat || !lon || !display_name) {
            throw new Error('Erro ao obter dados da API externa: dados incompletos.')
        }

        return { lat, lon, display_name}

    } catch (error) {
        throw new Error('Erro ao obter dados da API externa.')
    }
}

async function getGoogleMapsLink(local) {
    try {
        const { latitude, longitude } = local

        const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`

        return googleMapsLink
    } catch (error) {
        throw new Error('Erro ao obter link do Google Maps.')
    }
}

module.exports = { getInfoLocal, getGoogleMapsLink }

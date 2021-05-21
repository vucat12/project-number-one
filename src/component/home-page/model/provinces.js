
export const getProvincesVN = () => {
    const pcVN = require('pc-vn')
    const provinces = pcVN.getProvinces();
    return provinces;
}

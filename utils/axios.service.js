import axios from './axios.setup';

class MmDataService {
  login(data, headers) {
    return axios.post("/login", data, headers)
  }

  getAllMarkets() {
    return axios.get("/market/");
  }

  getMarket(id) {
    return axios.get(`/market/${id}`);
  }

  createMarket(data, headers) {
    return axios.post("/market/", data, headers);
  }

  updateMarket(id, data, headers) {
    return axios.patch(`/market/${id}`, data, headers);
  }

  deleteMarket(id, headers) {
    return axios.delete(`/market/${id}`, headers);
  }

  findMarket(data, headers) {
    return axios.post('/market/search/', data, headers);
  }

  findMarketByLocation(data, headers) {
    return axios.post('/market/location/', data, headers);
  }
  test(headers) {
    return axios.post('/test/', {
	"email": "test2@theagromall.com"
}, headers)
  }
}

export default new MmDataService();

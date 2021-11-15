import axios from "axios";

const ApiVacina = axios.create({
  baseURL: `https://covid-api.mmediagroup.fr/v1`,
});

export default ApiVacina;

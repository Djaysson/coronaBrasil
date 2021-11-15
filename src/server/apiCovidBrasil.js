import axios from "axios";

const ApiBrasi = axios.create({
  baseURL: `https://coronavirus-19-api.herokuapp.com/`,
});

export default ApiBrasi;

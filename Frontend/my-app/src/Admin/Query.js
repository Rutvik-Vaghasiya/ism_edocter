import axios from "axios";
import { useQuery } from "react-query";

const fetchDataDr = async () => {
  return await axios.get(
    "http://localhost/MVCcrudWithADOdotnet/api/apis/getdata"
  );
};

export const useFetchDataDr = () => {
  return useQuery("fatchDr", fetchDataDr, {
    retryDelay: 1000,
  });
};

// Patient
const fetchDataPt = async () => {
  return await axios.get(
    "http://localhost/MVCcrudWithADOdotnet/api/apis/getdata"
  );
};
export const useFetchDataPt = () => {
  return useQuery("fatchPt", fetchDataPt, {
    retryDelay: 1000,
  });
};

// Clinic
const fetchDataCl = async () => {
  return await axios.get(
    "http://localhost/MVCcrudWithADOdotnet/api/apis/getdata"
  );
};
export const useFetchDataCl = () => {
  return useQuery("fetchdataCl", fetchDataCl, {
    retryDelay: 1000,
  });
};

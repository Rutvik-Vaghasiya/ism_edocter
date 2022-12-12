import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchDoctorAllListPt = async () => {
  return await axios.get(
    "http://localhost/MVCcrudWithADOdotnet/api/apis/getdata"
  );
};

export const useFetchDoctorAllListPt = () => {
  return useQuery("DoctorlistinPt", fetchDoctorAllListPt, {
    // retryOnMount: false,
    // enabled: false,
    // retry: 3,
    retryDelay: 1000,
  });
};

// --------------- doctor auto fill field doctordata------------------
// const getdoctorfileddata = async () => {
//   return await axios.get(
//     "http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + drId
//   );
// };
// export const useAutofillDoctorData = (drId) => {
//   return useQuery("autofill doctr name", getdoctorfileddata, {
//     // retryOnMount: false,
//     // enabled: false,
//     // retry: 3,
//     retryDelay: 1000,
//   });
// };

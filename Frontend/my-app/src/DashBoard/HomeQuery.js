import axios from "axios";
import { useQuery } from "react-query";

const fetchRoles = async () => {
  return await axios.get("");
};

export const useFetchRolesList = () => {
  return useQuery("fetch", fetchRoles, {
    retryDelay: 1000,
  });
};

import { showPhones } from "../services/phones.service.js";


export const getPhones = (req, res) => {
  const phones = showPhones()
  console.log('******');
  res.send(phones);
};

import axios from "axios";
import Papa from "papaparse";

export const getAllResources = async () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPlkroi6CvBILgaOBvvQoiLRIrYIf8us6OSTld76_I5A3Gcnp0f2BbehvKANgoR_sdgglR8vaFNGmU/pub?output=csv";

  try {
    const response = await axios.get(csvUrl);
    const csvData = response.data;

    const parsedData = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    return parsedData.data;
  } catch (error) {
    console.error("Error fetching data.", error);
    return [];
  }
};

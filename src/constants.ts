export const API_KEY = import.meta.env.VITE_API_KEY;
export const SHEET_ID = "1_WhFuaqwixhp0ya8oOV_ECFGj1QhdQtukZq3P_VjYO8";
export const SHEET_NAME_ALL = "all";
export const SHEET_NAME_BOSSES = "test";
export const SHEET_ALL_API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME_ALL}?key=${API_KEY}`;
export const SHEET_TEST_API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME_BOSSES}?key=${API_KEY}`;
export const SHEET_DATA = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`;

export const doneStyle = "palegreen";

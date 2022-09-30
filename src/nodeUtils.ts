import fs from "fs";

const SIZE_PATTERN = /^(\d+(\.\d+)?)([a-zA-Z]{0,2})$/;

const DataUnit = {
  i: 1, // BYTES
  K: 1000, // KILOBYTES
  M: 1000
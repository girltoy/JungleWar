import fs from "fs";

const SIZE_PATTERN = /^(\d+(\.\d+)?)([a-zA-Z]{0,2})$/;

const DataUnit = {
  i: 1, // BYTES
  K: 1000, // KILOBYTES
  M: 1000 * 1000, // MEGABYTES
  G: 1000 * 1000 * 1000, // GIGABYTES
  T: 1000 * 1000 * 1000 * 1000, // TERABYTES
  Ki: 1024,
  Mi: 1024 * 1024,
  Gi: 
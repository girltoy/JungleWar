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
  Gi: 1024 * 1024 * 1024,
  Ti: 1024 * 1024 * 1024 * 1024,
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
  TB: 1024 * 1024 * 1024 * 1024,
};

type Unit = keyof typeof DataUnit;
type Match = [string, string, string, Unit];

export function humanReadToBytes(humanSize: string) {
  const match = humanSize.match(SIZE_PATTERN) as Match;

  if (match?.[1] && match?.[3]) {
    const unit = match[3];
    return parseInt(match[1]) * DataUnit[unit];
  } else {
    return 1;
  }
}

function readBytes(fd: number, sharedBuffer: Buffer): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.read(fd, sharedBuffer, 0, sharedBuffer.length, null, (err) => {
      if (err) {
        return reje
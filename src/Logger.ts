import type { LoggingLevel } from "./types";

export class Logger {
  readonly level: number;

  constructor(loggingLevel: LoggingLevel = "off") {
    this.level = 0;

    if (loggingLevel =
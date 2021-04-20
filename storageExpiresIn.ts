import { storageNormTimestamp } from "./storageNormTimestamp";

export const storageExpiresIn = (seconds = 0) => storageNormTimestamp() + (seconds * 1000);

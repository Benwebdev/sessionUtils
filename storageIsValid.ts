import { storageNormTimestamp } from "./storageNormTimestamp";

export const storageIsValid = (timestamp) => storageNormTimestamp(timestamp) >= normalizeTimestamp();

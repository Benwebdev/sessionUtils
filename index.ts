import { storageGet } from "./storageGet";

const storageSet = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
const storageClear = (key) => sessionStorage.removeItem(key);
const storageGetExpirationTimestamp = (key) => {
    const data = storageGet(key);
    return (!data || !data.expirationTimestamp || isValid(data.expirationTimestamp))
      ? data
      : null;
}
const storageSetExpirationTimestamp = (key, data, seconds) => {
    storageSet(key, {
        ...data,
        expirationTimestamp: expireIn(seconds),
        updatedTimestamp: normalizeTimestamp()
      });
}
const storageNormTimestamp = (timestamp?) => {
    const normalizedTimestamp = (timestamp) ? new Date(timestamp) : new Date();
    normalizedTimestamp.setMilliseconds(0);
    return normalizedTimestamp.getTime();
}

const storageIsValid = (timestamp) => storageNormTimestamp(timestamp) >= normalizeTimestamp(); 
const storageExpiresIn = (seconds = 0) => storageNormTimestamp() + (seconds * 1000);

export default {
    storageGet, 
    storageSet, 
    storageClear, 
    storageGetExpirationTimestamp, 
    storageSetExpirationTimestamp, 
    storageNormTimestamp, 
    storageIsValid, 
    storageExpiresIn
};

  
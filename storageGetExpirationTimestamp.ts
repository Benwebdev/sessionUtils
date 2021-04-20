import { storageGet } from "./storageGet";

export const storageGetExpirationTimestamp = (key) => {
    const data = storageGet(key);
    return (!data || !data.expirationTimestamp || isValid(data.expirationTimestamp))
        ? data
        : null;
};

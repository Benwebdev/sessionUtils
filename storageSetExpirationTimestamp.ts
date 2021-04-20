import { storageExpiresIn } from "./storageExpiresIn";
import { storageNormTimestamp } from "./storageNormTimestamp";
import { storageSet } from "./storageSet";

export const storageSetExpirationTimestamp = (key, data, seconds) => {
    storageSet(key, {
        ...data,
        expirationTimestamp: storageExpiresIn(seconds),
        updatedTimestamp: storageNormTimestamp()
    });
};

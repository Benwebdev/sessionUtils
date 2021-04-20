import { storageClear } from "./storageClear";
import { storageGet } from "./storageGet";
import { storageSet } from "./storageSet";
import { storageGetExpirationTimestamp } from "./storageGetExpirationTimestamp";



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

  
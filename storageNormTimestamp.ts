export const storageNormTimestamp = (timestamp?) => {
    const normalizedTimestamp = (timestamp) ? new Date(timestamp) : new Date();
    normalizedTimestamp.setMilliseconds(0);
    return normalizedTimestamp.getTime();
};

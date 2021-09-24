/* global chrome */

export function saveToChromeStorage(value) {
    chrome.storage.local.set({ key: value });
}

export async function loadFromChromeStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['key'], function (result) {
            if (result) {
                resolve(result.key);
            }
        });
    })
}
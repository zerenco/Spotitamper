// ==UserScript==
// @name         Spotify Progressbar
// @namespace    http://spotify.com/
// @version      2
// @description  Changes the small *swear word* progressbar size!
// @author       Zerenco
// @match        https://open.spotify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const changeProgressBarHeight = (height) => {
        const progressBar = document.querySelector('[data-testid="progress-bar"]');
        if (progressBar) {
            progressBar.style.setProperty('--progress-bar-height', `${height}px`, 'important');
            observer.disconnect();
            console.log("Found it, twisted it, scaled it and closed it. Tampermonkey. <3");
        }
    };

    const desiredHeight = 18;
    const observer = new MutationObserver(() => changeProgressBarHeight(desiredHeight));
    observer.observe(document.body, { subtree: true, childList: true });
})();

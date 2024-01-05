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

    function changeProgressBarHeight(height) {
        const progressBar = document.querySelector('[data-testid="progress-bar"]');
        if (progressBar) {
            progressBar.style.setProperty('--progress-bar-height', `${height}px`, 'important');
            // Disconnects once the progressbar thing is found.
            observer.disconnect();
            console.log("Found it, twisted it, scaled it and closed it. Tampermonkey. <3");
        } else {  //If it cannot find the progressbar, let the console in F12 know. :)
            console.error("Unable to find the progress bar element. Check the selector path. Tampermonkey <3");
        }
    }

    // Set the desired height. Spotify deafult is 4.... progressbar for ants?
    const desiredHeight = 18;

    // If you want to edit this, you can use MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(() => {
        changeProgressBarHeight(desiredHeight);
    });

    observer.observe(document.body, { subtree: true, childList: true });
})();

/*
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(e){"use strict";function n(){ga("send","event","button","download")}function o(e){ga("send","event","search",e)}function a(e){var n=e||location.pathname+location.hash;ga("send","pageview",n),ga("devrelTracker.send","pageview",n)}e.recordPageview=a,e.recordSearch=o,e.downloadStarter=n,function(e,n,o,a,t,c,r){e.GoogleAnalyticsObject=t,e[t]=e[t]||function(){(e[t].q=e[t].q||[]).push(arguments)},e[t].l=1*new Date,c=n.createElement(o),r=n.getElementsByTagName(o)[0],c.async=1,c.src=a,r.parentNode.insertBefore(c,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-39334307-1","auto",{siteSpeedSampleRate:50}),ga("create","UA-49880327-9","auto",{name:"devrelTracker"}),a(),console&&console.log("%cWelcome to Polymer!\n%cweb components are the <bees-knees>","font-size:1.5em;color:#4558c9;","color:#d61a7f;font-size:1em;")}(window);
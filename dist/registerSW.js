if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/bb.tab/sw.js', { scope: '/bb.tab/' })})}
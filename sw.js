importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

if (workbox) {
  workbox.routing.registerRoute(
    /*Permet de garder le js et css si la connection est perdu entre le svr et le tel*/
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
  );
  workbox.routing.registerRoute(
    new RegExp('.*\.css'),
    workbox.strategies.networkFirst()
  );
} else {
  console.log("Ne marche pas");
}

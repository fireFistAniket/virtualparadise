const fireTracking = (label) => {
  //Fire tracking here
  console.log(label);
};

export const pwaTrackingListeners = () => {
  const fireAddToHomeScreenImpression = (event) => {};
  window.addEventListener("beforeinstallprompt", fireAddToHomeScreenImpression);

  //Track web app install by user
  window.addEventListener("appinstalled", (event) => {
    fireTracking("PWA app installed by user!!! Hurray");
  });

  //Track from where your web app has been opened/browsed
  window.addEventListener("load", () => {
    let trackText;
    if (navigator && navigator.standalone) {
      trackText = "Launched: Installed (iOS)";
    } else if (matchMedia("(display-mode: standalone)").matches) {
      trackText = "Launched: Installed";
    } else {
      trackText = "Launched: Browser Tab";
    }
    fireTracking(trackText);
  });
};

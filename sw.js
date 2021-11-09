self.addEventListener("push", function (e) {
  var body;

  if (e.data) {
    body = e.data.text();
  }

  var options = {
    body: body,
    icon: "https://res.cloudinary.com/fivegstore/image/upload/v1635853109/256x256_fwxwfx.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  e.waitUntil(self.registration.showNotification("Push Notification", options));
});

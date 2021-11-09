self.addEventListener("push", function (e) {
  const strdata = e?.data?.text();
  const data = JSON.parse(strdata);
  const { body, image, title } = data;
  var options = {
    body,
    icon: "https://res.cloudinary.com/fivegstore/image/upload/v1635853109/256x256_fwxwfx.png",
    image,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

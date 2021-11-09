const webpush = require("web-push");

// VAPID keys should only be generated only once.
// const a = webpush.generateVAPIDKeys();
const vapidKeys = {
  publicKey:
    "BLatAsE7I0bu7TGClZ7n1aUlHWxQB52erzrrHFA9G-bjEe28ADWSXsq4AA6-o6qZZsOgP2NOhWmPrDhfkOk7EK0",
  privateKey: "kGzseya-UHq7k3AweuOdeT_ahKN0iIZ1Gquad6nPuiI",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dDVkja_DRV0:APA91bFfvtHcEF9wOULIwVN86J-prFjP1NisATSPGKq38Y8r0sUpPu4OMFyOUpPTVNxX1KNuTulfV8UbZMYocwxbbIgWFUe7wPe-jmvV6jeBcNCf2qxvVxV3rWUb3Ys5Dhbip-PuzKA8",
  expirationTime: null,
  keys: {
    p256dh:
      "BGkc_d7_mBWhKeKVkrNcH7gvTAP0ND9NpWcGwZJ27akAYH02FnVWVtQ61krmJjxsu7nLvp9o_I9N6u7W2gfaXkE",
    auth: "gDDrxKU_f48s0uwozbWrXg",
  },
};
const data = JSON.stringify({
  title: "Jadwal - Event Added",
  body: "Your Push SALANAN lkjsdh kljh kljhkl;h laksdj fhlakh Payload Text",
  image:
    "https://res.cloudinary.com/fivegstore/image/upload/v1634347453/blob_gwpnvn.jpg",
});

webpush.sendNotification(pushSubscription, data);

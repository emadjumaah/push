const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U",
  privateKey: "CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eh5dREi9cj4:APA91bGDxJ-qcERLXdrJJj4VQESy2CL1d9jPmPrmp9zmXcX9pr1eKGJ6ziNtYcfGT5zkKs0g-7T8Fj_pWNYrtJguG21hS-FpVDyN0eZMGYeW47Xcea61-wUr9E7j5q9u5Xcj4WAzp1CA",
  expirationTime: null,
  keys: {
    p256dh:
      "BOxOuIlWJRybtnTshiMG2m0GG_oGkV7vsHC4OVS13QCa0QtqXxySdZmOahT4Te02dUmc4OURX0hd-AvwWUUmPX8",
    auth: "A0gQaamc-8UPuQrGCWxCvw",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");

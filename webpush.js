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
    "https://fcm.googleapis.com/fcm/send/do9LgAruVJk:APA91bENulv9ni6HhDDn0L8ziM6pBo2Q2MIFazU3_uIQbdMOJlGnV3bx80G4X-oEok9WZveuL9zwDRxESblBf95s-2Qs8IS735HMFBNhiMZJpfZRyPDmn4VX6-1QFOEzUQGdRz9V1ExX",
  expirationTime: null,
  keys: {
    p256dh:
      "BNHSHEArVyJRc5jNfIWW8xOM8caT0W2iVBH5sFD5r8tPfh8eb1kXVoYX5_wxjChRA15SVrLhloayLffo0OS67V0",
    auth: "Tge2K7awnUqHc6b3_GXHPw",
  },
};
const data = JSON.stringify({
  title: "Jadwal - Event Added",
  body: "Your Push SALANAN lkjsdh kljh kljhkl;h laksdj fhlakh Payload Text",
  image:
    "https://res.cloudinary.com/fivegstore/image/upload/v1634347453/blob_gwpnvn.jpg",
});

webpush.sendNotification(pushSubscription, data);

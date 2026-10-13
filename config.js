/* ──────────────────────────────────────────────────────────────────────────
   config.js — the ONLY file a lab needs to edit.

   As long as `firebase` is null, the app runs in DEMO MODE: everything is
   saved in this browser only, and nothing is sent anywhere.

   To use it for real, create a NEW Firebase project for your lab (never reuse
   the project of another app), then paste its web config below.
   The setup guide explains every step.
   ────────────────────────────────────────────────────────────────────────── */

window.LAB_CONFIG = {
  // Shown on the sign-in screen before anyone has logged in.
  labName: 'Lab Inventory',

  // Paste your Firebase web app config here, for example:
  // firebase: {
  //   apiKey: "AIza…",
  //   authDomain: "my-lab-inventory.firebaseapp.com",
  //   projectId: "my-lab-inventory",
  //   storageBucket: "my-lab-inventory.firebasestorage.app",
  //   messagingSenderId: "123456789",
  //   appId: "1:123456789:web:abc123"
  // },
  firebase: null,

  // Optional: low-stock emails through EmailJS (https://www.emailjs.com).
  // emailjs: { serviceId: "service_…", templateId: "template_…", publicKey: "…" },
  emailjs: null
};

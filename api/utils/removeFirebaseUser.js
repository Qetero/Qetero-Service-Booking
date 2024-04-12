import admin from "../data/firebase-config.js";
export const removeFirebaseUser = async (firebaseToken) => {
  const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
  await admin.auth().deleteUser(decodedToken.uid);
};

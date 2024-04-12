import admin from "../data/firebase-config.js";
export const getUserInfo = async (firebaseToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
    const userRecord = await admin.auth().getUser(decodedToken.uid);
    const userInfo = {
      uid: userRecord.uid,
      fullName: userRecord.displayName,
      profilePicture: userRecord.photoURL,
      email: userRecord.email,
      phoneNo: userRecord.phoneNumber || "",
      registeredOn: userRecord.metadata.creationTime,
      lastSignInTime: userRecord.metadata.lastSignInTime,
    };
    return userInfo;
  } catch (error) {
    return false;
  }
};

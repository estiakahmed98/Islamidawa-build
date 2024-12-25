import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // Should include user ID or other identifying information
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// import jwt from "jsonwebtoken";

// export function verifyToken(token) {
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure `JWT_SECRET` is defined
//     return decoded;
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     return null;
//   }
// }

// import jwt from "jsonwebtoken";

// const SECRET = process.env.JWT_SECRET;

// export function generateToken(payload) {
//   return jwt.sign(payload, SECRET, { expiresIn: "1h" });
// }

// export function verifyToken(token) {
//   try {
//     return jwt.verify(token, SECRET);
//   } catch (err) {
//     return null;
//   }
// }

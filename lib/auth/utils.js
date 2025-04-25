import crypto from "node:crypto";

function createHash(data, algorithm="sha256") {
  return crypto.createHash(algorithm, ).update(data).digest("hex");
}

function verifyHash(data, hash) {
  return createHash(data) === hash
}

export { createHash, verifyHash }
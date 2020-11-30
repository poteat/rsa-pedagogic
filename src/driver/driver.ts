import chalk from "chalk";
import { argv } from "yargs";

import { decodeStringAsNumber } from "../encoding/components/decode/decodeStringAsNumber";
import { generateRSAEncryptionContext } from "../rsa/context/generateRSAEncryptionContext";
import { decryptNumericMessageChunk } from "../rsa/core/chunks/decrypt/decryptNumericMessageChunk";
import { encryptNumericMessageChunk } from "../rsa/core/chunks/encrypt/encryptNumericMessageChunk";

const message = argv._[0];
const lecture = argv["lecture"] as boolean | undefined;
const assignment = argv["assignment"] as boolean | undefined;

if (!message) {
  console.error(
    chalk.bgBlack(
      chalk.red(`!! Missing message to encrypt - try "npm run start -- cat"`)
    )
  );
  process.exit(1);
}

const context = generateRSAEncryptionContext(
  lecture
    ? { p: 885320963, q: 238855417, e: 9007 }
    : assignment
    ? { p: 123456791, q: 987654323, e: 127 }
    : undefined
);

const encodedMessage = decodeStringAsNumber(message);

const encrypted = encryptNumericMessageChunk(context, encodedMessage);

const decrypted = decryptNumericMessageChunk(context, encrypted);

console.log(chalk.bgGray("# public / private key data"));
console.log("p =", context.private.p);
console.log("q =", context.private.q);
console.log("e =", context.public.e);
console.log("n =", context.public.n);
console.log("d =", context.private.d);
console.log();
console.log(chalk.bgGray("# message data"));
console.log("m =", encodedMessage, `# "${message}"`);
console.log("c =", encrypted);
console.log(
  "c^d (mod n) =",
  decrypted,
  BigInt(encodedMessage) === decrypted ? "✔️" : chalk.red(":( ??")
);

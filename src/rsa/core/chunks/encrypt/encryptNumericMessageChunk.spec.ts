import { decryptNumericMessageChunk } from "../decrypt/decryptNumericMessageChunk";
import { encryptNumericMessageChunk } from "./encryptNumericMessageChunk";

it("can encrypt numeric message chunks", () => {
  const context = {
    public: { n: 811058401, e: 75341 },
    private: { d: 609668741 },
  };
  const message = 30120;

  const encrypted = encryptNumericMessageChunk(context, message);

  const decrypted = decryptNumericMessageChunk(context, encrypted);

  expect(decrypted).toStrictEqual(BigInt(message));
});

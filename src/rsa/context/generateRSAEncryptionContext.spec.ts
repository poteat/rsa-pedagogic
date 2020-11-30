import { generateRSAEncryptionContext } from "./generateRSAEncryptionContext";

it("can generate valid rsa context", () => {
  const context = generateRSAEncryptionContext();

  expect(
    (BigInt(context.public.e) * BigInt(context.private.d)) %
      ((BigInt(context.private.p) - BigInt(1)) *
        (BigInt(context.private.q) - BigInt(1)))
  ).toBe(BigInt(1));
});

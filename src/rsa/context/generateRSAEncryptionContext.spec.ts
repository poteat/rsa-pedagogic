import { generateRSAEncryptionContext } from "./generateRSAEncryptionContext";

it("can generate valid rsa context", () => {
  const context = generateRSAEncryptionContext();

  console.log(context);

  expect(
    (context.public.e * context.private.d) %
      ((context.private.p - 1) * (context.private.q - 1))
  ).toBe(1);
});

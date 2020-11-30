import * as arith from "bigint-mod-arith";

import { MinimalPrivateKeyContext } from "../../../context/types/minimal/private/MinimalPrivateKeyContext";

/**
 * Decrypt an encrypted message chunk given the full encryption context.
 *
 * @param context Full encryption context.
 * @param m Message chunk, as a number, to decrypt.
 */
export function decryptNumericMessageChunk(
  context: MinimalPrivateKeyContext,
  m: number | bigint
) {
  return arith.modPow(m, context.private.d, context.public.n);
}

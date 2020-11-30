import * as arith from "bigint-mod-arith";

import { MinimalPublicKeyContext } from "../../../context/types/minimal/public/MinimalPublicKeyContext";

/**
 * Encrypt an individual message chunk given the public encryption context.
 *
 * @param context Public encryption context.
 * @param m Message chunk, as a number, to encrypt.
 */
export function encryptNumericMessageChunk(
  context: MinimalPublicKeyContext,
  m: number
) {
  return arith.modPow(m, context.public.e, context.public.n);
}

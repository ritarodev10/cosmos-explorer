import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";

export function hashTx(raw: Uint8Array) {
  return toHex(sha256(raw)).toUpperCase();
}

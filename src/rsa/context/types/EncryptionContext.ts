import { PrivateEncryptionContext } from "./components/private/PrivateEncryptionContext";
import { PublicEncryptionContext } from "./components/public/PublicEncryptionContext";

/**
 * The full encryption context, which allows for encryption and decryption of
 * messages.
 */
export type EncryptionContext = {
  public: PublicEncryptionContext;
  private: PrivateEncryptionContext;
};

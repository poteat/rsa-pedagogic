/**
 * The minimal fragment of the encryption context needed to encrypt a message.
 */
export type MinimalPublicKeyContext = {
  public: {
    e: number;
    n: number;
  };
};

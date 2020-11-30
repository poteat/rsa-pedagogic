/**
 * The minimal fragment of the encryption context that can be used to encrypt
 * data.
 */
export type MinimalPrivateKeyContext = {
  public: {
    n: number | bigint;
  };
  private: {
    d: number | bigint;
  };
};

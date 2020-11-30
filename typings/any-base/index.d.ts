declare module "any-base" {
  const anyBase: ((a: string, b: string) => (x: string) => string) & {
    DEC: string;
  };

  export default anyBase;
}

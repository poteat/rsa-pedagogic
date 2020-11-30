import { forEach } from "lodash";

import { solveLinearCongruence } from "./solveLinearCongruence";

it("can solve linear congruences", () => {
  const multiplicative = 17;
  const offset = 3;
  const modulus = 29;

  const result = solveLinearCongruence({
    multiplicative,
    offset,
    modulus,
  });

  expect((multiplicative * result) % modulus).toBe(offset);
});

it("can solve strange case", () => {
  const multiplicative = 163;
  const offset = 1;
  const modulus = 138024;

  const result = solveLinearCongruence({
    multiplicative,
    offset,
    modulus,
  });

  expect((multiplicative * result) % modulus).toBe(offset);
});

it("can solve high values", () => {
  const multiplicative = 230;
  const offset = 1081;
  const modulus = 12167;

  const result = solveLinearCongruence({
    multiplicative,
    offset,
    modulus,
  });

  expect((multiplicative * result) % modulus).toBe(offset);
});

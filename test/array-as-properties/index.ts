interface SquareConfig {
  color: string;
  width: number;
}

interface SquareConfigsInterface {
  squares: SquareConfig[];
}

interface QueryInterface {
  /** optional test description */
  optional_test?: string;
  /** required test description */
  required_test: string;
}
interface SquareConfigsGeneric {
  squares: Array<SquareConfig>;
}

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiSuccessInterface {SquareConfigsInterface}
 * @apiGroup arrayAsInterface
 */

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiSuccessInterface {SquareConfigsGeneric}
 * @apiGroup arrayGenericsTest
 */

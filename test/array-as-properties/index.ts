interface SquareConfig {
  color: string;
  width: number;
}

interface SquareConfigsInterface {
  squares: SquareConfig[];
  logs?: string[];
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

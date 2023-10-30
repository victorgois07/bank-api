
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model AccountTransaction
 * 
 */
export type AccountTransaction = $Result.DefaultSelection<Prisma.$AccountTransactionPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  CORRENTE: 'CORRENTE',
  POUPANCA: 'POUPANCA'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const TransactionType: {
  PIX: 'PIX',
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BankAccounts
 * const bankAccounts = await prisma.bankAccount.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BankAccounts
   * const bankAccounts = await prisma.bankAccount.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.accountTransaction`: Exposes CRUD operations for the **AccountTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountTransactions
    * const accountTransactions = await prisma.accountTransaction.findMany()
    * ```
    */
  get accountTransaction(): Prisma.AccountTransactionDelegate<ExtArgs>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BankAccount: 'BankAccount',
    Transaction: 'Transaction',
    AccountTransaction: 'AccountTransaction',
    Log: 'Log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bankAccount' | 'transaction' | 'accountTransaction' | 'log'
      txIsolationLevel: never
    },
    model: {
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BankAccountFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.BankAccountAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TransactionFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransactionAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      AccountTransaction: {
        payload: Prisma.$AccountTransactionPayload<ExtArgs>
        fields: Prisma.AccountTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>
          }
          findFirst: {
            args: Prisma.AccountTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>
          }
          findMany: {
            args: Prisma.AccountTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>[]
          }
          create: {
            args: Prisma.AccountTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>
          }
          createMany: {
            args: Prisma.AccountTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>
          }
          update: {
            args: Prisma.AccountTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>
          }
          deleteMany: {
            args: Prisma.AccountTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountTransactionPayload>
          }
          aggregate: {
            args: Prisma.AccountTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccountTransaction>
          }
          groupBy: {
            args: Prisma.AccountTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountTransactionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountTransactionFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountTransactionAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AccountTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountTransactionCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LogFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.LogAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>,
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BankAccountCountOutputType
   */

  export type BankAccountCountOutputType = {
    sentTransactions: number
    receivedTransactions: number
  }

  export type BankAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentTransactions?: boolean | BankAccountCountOutputTypeCountSentTransactionsArgs
    receivedTransactions?: boolean | BankAccountCountOutputTypeCountReceivedTransactionsArgs
  }

  // Custom InputTypes

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountCountOutputType
     */
    select?: BankAccountCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountSentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransactionWhereInput
  }


  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountReceivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountAvgAggregateOutputType = {
    balance: number | null
  }

  export type BankAccountSumAggregateOutputType = {
    balance: number | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    accountType: $Enums.AccountType | null
    balance: number | null
    createdAt: Date | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    accountType: $Enums.AccountType | null
    balance: number | null
    createdAt: Date | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    accountNumber: number
    accountType: number
    balance: number
    createdAt: number
    _all: number
  }


  export type BankAccountAvgAggregateInputType = {
    balance?: true
  }

  export type BankAccountSumAggregateInputType = {
    balance?: true
  }

  export type BankAccountMinAggregateInputType = {
    id?: true
    accountNumber?: true
    accountType?: true
    balance?: true
    createdAt?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    accountNumber?: true
    accountType?: true
    balance?: true
    createdAt?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    accountNumber?: true
    accountType?: true
    balance?: true
    createdAt?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _avg?: BankAccountAvgAggregateInputType
    _sum?: BankAccountSumAggregateInputType
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt: Date
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    accountType?: boolean
    balance?: boolean
    createdAt?: boolean
    sentTransactions?: boolean | BankAccount$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | BankAccount$receivedTransactionsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    accountNumber?: boolean
    accountType?: boolean
    balance?: boolean
    createdAt?: boolean
  }

  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentTransactions?: boolean | BankAccount$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | BankAccount$receivedTransactionsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      sentTransactions: Prisma.$AccountTransactionPayload<ExtArgs>[]
      receivedTransactions: Prisma.$AccountTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountNumber: string
      accountType: $Enums.AccountType
      balance: number
      createdAt: Date
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }


  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BankAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BankAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BankAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BankAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
    **/
    create<T extends BankAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BankAccounts.
     *     @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     *     @example
     *     // Create many BankAccounts
     *     const bankAccount = await prisma.bankAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BankAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
    **/
    delete<T extends BankAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BankAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BankAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BankAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
    **/
    upsert<T extends BankAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>
    ): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * @param {BankAccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const bankAccount = await prisma.bankAccount.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BankAccountFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BankAccount.
     * @param {BankAccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const bankAccount = await prisma.bankAccount.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BankAccountAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sentTransactions<T extends BankAccount$sentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$sentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    receivedTransactions<T extends BankAccount$receivedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$receivedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BankAccount model
   */ 
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'String'>
    readonly accountNumber: FieldRef<"BankAccount", 'String'>
    readonly accountType: FieldRef<"BankAccount", 'AccountType'>
    readonly balance: FieldRef<"BankAccount", 'Float'>
    readonly createdAt: FieldRef<"BankAccount", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }


  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }


  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }


  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }


  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
  }


  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
  }


  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }


  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
  }


  /**
   * BankAccount findRaw
   */
  export type BankAccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * BankAccount aggregateRaw
   */
  export type BankAccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * BankAccount.sentTransactions
   */
  export type BankAccount$sentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    where?: AccountTransactionWhereInput
    orderBy?: AccountTransactionOrderByWithRelationInput | AccountTransactionOrderByWithRelationInput[]
    cursor?: AccountTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountTransactionScalarFieldEnum | AccountTransactionScalarFieldEnum[]
  }


  /**
   * BankAccount.receivedTransactions
   */
  export type BankAccount$receivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    where?: AccountTransactionWhereInput
    orderBy?: AccountTransactionOrderByWithRelationInput | AccountTransactionOrderByWithRelationInput[]
    cursor?: AccountTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountTransactionScalarFieldEnum | AccountTransactionScalarFieldEnum[]
  }


  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
  }



  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    isReverted: boolean | null
    pixKey: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    isReverted: boolean | null
    pixKey: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    isReverted: number
    pixKey: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    isReverted?: true
    pixKey?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    isReverted?: true
    pixKey?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    isReverted?: true
    pixKey?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    amount: number
    type: $Enums.TransactionType
    isReverted: boolean
    pixKey: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    isReverted?: boolean
    pixKey?: boolean
    createdAt?: boolean
    bankAccountFrom?: boolean | Transaction$bankAccountFromArgs<ExtArgs>
    bankAccountTo?: boolean | Transaction$bankAccountToArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    isReverted?: boolean
    pixKey?: boolean
    createdAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccountFrom?: boolean | Transaction$bankAccountFromArgs<ExtArgs>
    bankAccountTo?: boolean | Transaction$bankAccountToArgs<ExtArgs>
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      bankAccountFrom: Prisma.$AccountTransactionPayload<ExtArgs> | null
      bankAccountTo: Prisma.$AccountTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      type: $Enums.TransactionType
      isReverted: boolean
      pixKey: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * @param {TransactionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transaction = await prisma.transaction.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TransactionFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Transaction.
     * @param {TransactionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transaction = await prisma.transaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TransactionAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bankAccountFrom<T extends Transaction$bankAccountFromArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$bankAccountFromArgs<ExtArgs>>): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    bankAccountTo<T extends Transaction$bankAccountToArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$bankAccountToArgs<ExtArgs>>): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly isReverted: FieldRef<"Transaction", 'Boolean'>
    readonly pixKey: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction findRaw
   */
  export type TransactionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Transaction aggregateRaw
   */
  export type TransactionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Transaction.bankAccountFrom
   */
  export type Transaction$bankAccountFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    where?: AccountTransactionWhereInput
  }


  /**
   * Transaction.bankAccountTo
   */
  export type Transaction$bankAccountToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    where?: AccountTransactionWhereInput
  }


  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
  }



  /**
   * Model AccountTransaction
   */

  export type AggregateAccountTransaction = {
    _count: AccountTransactionCountAggregateOutputType | null
    _min: AccountTransactionMinAggregateOutputType | null
    _max: AccountTransactionMaxAggregateOutputType | null
  }

  export type AccountTransactionMinAggregateOutputType = {
    id: string | null
    bankAccountId: string | null
    transactionId: string | null
  }

  export type AccountTransactionMaxAggregateOutputType = {
    id: string | null
    bankAccountId: string | null
    transactionId: string | null
  }

  export type AccountTransactionCountAggregateOutputType = {
    id: number
    bankAccountId: number
    transactionId: number
    _all: number
  }


  export type AccountTransactionMinAggregateInputType = {
    id?: true
    bankAccountId?: true
    transactionId?: true
  }

  export type AccountTransactionMaxAggregateInputType = {
    id?: true
    bankAccountId?: true
    transactionId?: true
  }

  export type AccountTransactionCountAggregateInputType = {
    id?: true
    bankAccountId?: true
    transactionId?: true
    _all?: true
  }

  export type AccountTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTransaction to aggregate.
     */
    where?: AccountTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransactions to fetch.
     */
    orderBy?: AccountTransactionOrderByWithRelationInput | AccountTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountTransactions
    **/
    _count?: true | AccountTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountTransactionMaxAggregateInputType
  }

  export type GetAccountTransactionAggregateType<T extends AccountTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountTransaction[P]>
      : GetScalarType<T[P], AggregateAccountTransaction[P]>
  }




  export type AccountTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransactionWhereInput
    orderBy?: AccountTransactionOrderByWithAggregationInput | AccountTransactionOrderByWithAggregationInput[]
    by: AccountTransactionScalarFieldEnum[] | AccountTransactionScalarFieldEnum
    having?: AccountTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountTransactionCountAggregateInputType | true
    _min?: AccountTransactionMinAggregateInputType
    _max?: AccountTransactionMaxAggregateInputType
  }

  export type AccountTransactionGroupByOutputType = {
    id: string
    bankAccountId: string
    transactionId: string
    _count: AccountTransactionCountAggregateOutputType | null
    _min: AccountTransactionMinAggregateOutputType | null
    _max: AccountTransactionMaxAggregateOutputType | null
  }

  type GetAccountTransactionGroupByPayload<T extends AccountTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], AccountTransactionGroupByOutputType[P]>
        }
      >
    >


  export type AccountTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    transactionId?: boolean
    fromAccount?: boolean | AccountTransaction$fromAccountArgs<ExtArgs>
    toAccount?: boolean | AccountTransaction$toAccountArgs<ExtArgs>
    sentTransaction?: boolean | AccountTransaction$sentTransactionArgs<ExtArgs>
    receivedTransaction?: boolean | AccountTransaction$receivedTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["accountTransaction"]>

  export type AccountTransactionSelectScalar = {
    id?: boolean
    bankAccountId?: boolean
    transactionId?: boolean
  }

  export type AccountTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromAccount?: boolean | AccountTransaction$fromAccountArgs<ExtArgs>
    toAccount?: boolean | AccountTransaction$toAccountArgs<ExtArgs>
    sentTransaction?: boolean | AccountTransaction$sentTransactionArgs<ExtArgs>
    receivedTransaction?: boolean | AccountTransaction$receivedTransactionArgs<ExtArgs>
  }


  export type $AccountTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountTransaction"
    objects: {
      fromAccount: Prisma.$BankAccountPayload<ExtArgs> | null
      toAccount: Prisma.$BankAccountPayload<ExtArgs> | null
      sentTransaction: Prisma.$TransactionPayload<ExtArgs> | null
      receivedTransaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bankAccountId: string
      transactionId: string
    }, ExtArgs["result"]["accountTransaction"]>
    composites: {}
  }


  type AccountTransactionGetPayload<S extends boolean | null | undefined | AccountTransactionDefaultArgs> = $Result.GetResult<Prisma.$AccountTransactionPayload, S>

  type AccountTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountTransactionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountTransactionCountAggregateInputType | true
    }

  export interface AccountTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountTransaction'], meta: { name: 'AccountTransaction' } }
    /**
     * Find zero or one AccountTransaction that matches the filter.
     * @param {AccountTransactionFindUniqueArgs} args - Arguments to find a AccountTransaction
     * @example
     * // Get one AccountTransaction
     * const accountTransaction = await prisma.accountTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccountTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountTransactionFindUniqueOrThrowArgs} args - Arguments to find a AccountTransaction
     * @example
     * // Get one AccountTransaction
     * const accountTransaction = await prisma.accountTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccountTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionFindFirstArgs} args - Arguments to find a AccountTransaction
     * @example
     * // Get one AccountTransaction
     * const accountTransaction = await prisma.accountTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccountTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionFindFirstOrThrowArgs} args - Arguments to find a AccountTransaction
     * @example
     * // Get one AccountTransaction
     * const accountTransaction = await prisma.accountTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccountTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountTransactions
     * const accountTransactions = await prisma.accountTransaction.findMany()
     * 
     * // Get first 10 AccountTransactions
     * const accountTransactions = await prisma.accountTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountTransactionWithIdOnly = await prisma.accountTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccountTransaction.
     * @param {AccountTransactionCreateArgs} args - Arguments to create a AccountTransaction.
     * @example
     * // Create one AccountTransaction
     * const AccountTransaction = await prisma.accountTransaction.create({
     *   data: {
     *     // ... data to create a AccountTransaction
     *   }
     * })
     * 
    **/
    create<T extends AccountTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountTransactionCreateArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccountTransactions.
     *     @param {AccountTransactionCreateManyArgs} args - Arguments to create many AccountTransactions.
     *     @example
     *     // Create many AccountTransactions
     *     const accountTransaction = await prisma.accountTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountTransaction.
     * @param {AccountTransactionDeleteArgs} args - Arguments to delete one AccountTransaction.
     * @example
     * // Delete one AccountTransaction
     * const AccountTransaction = await prisma.accountTransaction.delete({
     *   where: {
     *     // ... filter to delete one AccountTransaction
     *   }
     * })
     * 
    **/
    delete<T extends AccountTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountTransactionDeleteArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccountTransaction.
     * @param {AccountTransactionUpdateArgs} args - Arguments to update one AccountTransaction.
     * @example
     * // Update one AccountTransaction
     * const accountTransaction = await prisma.accountTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountTransactionUpdateArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccountTransactions.
     * @param {AccountTransactionDeleteManyArgs} args - Arguments to filter AccountTransactions to delete.
     * @example
     * // Delete a few AccountTransactions
     * const { count } = await prisma.accountTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountTransactions
     * const accountTransaction = await prisma.accountTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountTransaction.
     * @param {AccountTransactionUpsertArgs} args - Arguments to update or create a AccountTransaction.
     * @example
     * // Update or create a AccountTransaction
     * const accountTransaction = await prisma.accountTransaction.upsert({
     *   create: {
     *     // ... data to create a AccountTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends AccountTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountTransactionUpsertArgs<ExtArgs>>
    ): Prisma__AccountTransactionClient<$Result.GetResult<Prisma.$AccountTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AccountTransactions that matches the filter.
     * @param {AccountTransactionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accountTransaction = await prisma.accountTransaction.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AccountTransactionFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AccountTransaction.
     * @param {AccountTransactionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accountTransaction = await prisma.accountTransaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AccountTransactionAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AccountTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionCountArgs} args - Arguments to filter AccountTransactions to count.
     * @example
     * // Count the number of AccountTransactions
     * const count = await prisma.accountTransaction.count({
     *   where: {
     *     // ... the filter for the AccountTransactions we want to count
     *   }
     * })
    **/
    count<T extends AccountTransactionCountArgs>(
      args?: Subset<T, AccountTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountTransactionAggregateArgs>(args: Subset<T, AccountTransactionAggregateArgs>): Prisma.PrismaPromise<GetAccountTransactionAggregateType<T>>

    /**
     * Group by AccountTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountTransactionGroupByArgs['orderBy'] }
        : { orderBy?: AccountTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountTransaction model
   */
  readonly fields: AccountTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fromAccount<T extends AccountTransaction$fromAccountArgs<ExtArgs> = {}>(args?: Subset<T, AccountTransaction$fromAccountArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    toAccount<T extends AccountTransaction$toAccountArgs<ExtArgs> = {}>(args?: Subset<T, AccountTransaction$toAccountArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    sentTransaction<T extends AccountTransaction$sentTransactionArgs<ExtArgs> = {}>(args?: Subset<T, AccountTransaction$sentTransactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    receivedTransaction<T extends AccountTransaction$receivedTransactionArgs<ExtArgs> = {}>(args?: Subset<T, AccountTransaction$receivedTransactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccountTransaction model
   */ 
  interface AccountTransactionFieldRefs {
    readonly id: FieldRef<"AccountTransaction", 'String'>
    readonly bankAccountId: FieldRef<"AccountTransaction", 'String'>
    readonly transactionId: FieldRef<"AccountTransaction", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AccountTransaction findUnique
   */
  export type AccountTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransaction to fetch.
     */
    where: AccountTransactionWhereUniqueInput
  }


  /**
   * AccountTransaction findUniqueOrThrow
   */
  export type AccountTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransaction to fetch.
     */
    where: AccountTransactionWhereUniqueInput
  }


  /**
   * AccountTransaction findFirst
   */
  export type AccountTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransaction to fetch.
     */
    where?: AccountTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransactions to fetch.
     */
    orderBy?: AccountTransactionOrderByWithRelationInput | AccountTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTransactions.
     */
    cursor?: AccountTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTransactions.
     */
    distinct?: AccountTransactionScalarFieldEnum | AccountTransactionScalarFieldEnum[]
  }


  /**
   * AccountTransaction findFirstOrThrow
   */
  export type AccountTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransaction to fetch.
     */
    where?: AccountTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransactions to fetch.
     */
    orderBy?: AccountTransactionOrderByWithRelationInput | AccountTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTransactions.
     */
    cursor?: AccountTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTransactions.
     */
    distinct?: AccountTransactionScalarFieldEnum | AccountTransactionScalarFieldEnum[]
  }


  /**
   * AccountTransaction findMany
   */
  export type AccountTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransactions to fetch.
     */
    where?: AccountTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransactions to fetch.
     */
    orderBy?: AccountTransactionOrderByWithRelationInput | AccountTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountTransactions.
     */
    cursor?: AccountTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransactions.
     */
    skip?: number
    distinct?: AccountTransactionScalarFieldEnum | AccountTransactionScalarFieldEnum[]
  }


  /**
   * AccountTransaction create
   */
  export type AccountTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountTransaction.
     */
    data: XOR<AccountTransactionCreateInput, AccountTransactionUncheckedCreateInput>
  }


  /**
   * AccountTransaction createMany
   */
  export type AccountTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountTransactions.
     */
    data: AccountTransactionCreateManyInput | AccountTransactionCreateManyInput[]
  }


  /**
   * AccountTransaction update
   */
  export type AccountTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountTransaction.
     */
    data: XOR<AccountTransactionUpdateInput, AccountTransactionUncheckedUpdateInput>
    /**
     * Choose, which AccountTransaction to update.
     */
    where: AccountTransactionWhereUniqueInput
  }


  /**
   * AccountTransaction updateMany
   */
  export type AccountTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountTransactions.
     */
    data: XOR<AccountTransactionUpdateManyMutationInput, AccountTransactionUncheckedUpdateManyInput>
    /**
     * Filter which AccountTransactions to update
     */
    where?: AccountTransactionWhereInput
  }


  /**
   * AccountTransaction upsert
   */
  export type AccountTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountTransaction to update in case it exists.
     */
    where: AccountTransactionWhereUniqueInput
    /**
     * In case the AccountTransaction found by the `where` argument doesn't exist, create a new AccountTransaction with this data.
     */
    create: XOR<AccountTransactionCreateInput, AccountTransactionUncheckedCreateInput>
    /**
     * In case the AccountTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountTransactionUpdateInput, AccountTransactionUncheckedUpdateInput>
  }


  /**
   * AccountTransaction delete
   */
  export type AccountTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
    /**
     * Filter which AccountTransaction to delete.
     */
    where: AccountTransactionWhereUniqueInput
  }


  /**
   * AccountTransaction deleteMany
   */
  export type AccountTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTransactions to delete
     */
    where?: AccountTransactionWhereInput
  }


  /**
   * AccountTransaction findRaw
   */
  export type AccountTransactionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AccountTransaction aggregateRaw
   */
  export type AccountTransactionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AccountTransaction.fromAccount
   */
  export type AccountTransaction$fromAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
  }


  /**
   * AccountTransaction.toAccount
   */
  export type AccountTransaction$toAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
  }


  /**
   * AccountTransaction.sentTransaction
   */
  export type AccountTransaction$sentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }


  /**
   * AccountTransaction.receivedTransaction
   */
  export type AccountTransaction$receivedTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }


  /**
   * AccountTransaction without action
   */
  export type AccountTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransaction
     */
    select?: AccountTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountTransactionInclude<ExtArgs> | null
  }



  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    message: string | null
    level: string | null
    timestamp: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    message: string | null
    level: string | null
    timestamp: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    message: number
    level: number
    timestamp: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    message?: true
    level?: true
    timestamp?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    message?: true
    level?: true
    timestamp?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    message?: true
    level?: true
    timestamp?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    message: string
    level: string
    timestamp: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    level?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    message?: boolean
    level?: boolean
    timestamp?: boolean
  }


  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      level: string
      timestamp: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }


  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
    **/
    create<T extends LogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogCreateArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Logs.
     *     @param {LogCreateManyArgs} args - Arguments to create many Logs.
     *     @example
     *     // Create many Logs
     *     const log = await prisma.log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
    **/
    delete<T extends LogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogDeleteArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpdateArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
    **/
    upsert<T extends LogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpsertArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * @param {LogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const log = await prisma.log.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LogFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Log.
     * @param {LogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const log = await prisma.log.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LogAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly message: FieldRef<"Log", 'String'>
    readonly level: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }


  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
  }


  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }


  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }


  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }


  /**
   * Log findRaw
   */
  export type LogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Log aggregateRaw
   */
  export type LogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const BankAccountScalarFieldEnum: {
    id: 'id',
    accountNumber: 'accountNumber',
    accountType: 'accountType',
    balance: 'balance',
    createdAt: 'createdAt'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    isReverted: 'isReverted',
    pixKey: 'pixKey',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const AccountTransactionScalarFieldEnum: {
    id: 'id',
    bankAccountId: 'bankAccountId',
    transactionId: 'transactionId'
  };

  export type AccountTransactionScalarFieldEnum = (typeof AccountTransactionScalarFieldEnum)[keyof typeof AccountTransactionScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    level: 'level',
    timestamp: 'timestamp'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountType?: EnumAccountTypeFilter<"BankAccount"> | $Enums.AccountType
    balance?: FloatFilter<"BankAccount"> | number
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    sentTransactions?: AccountTransactionListRelationFilter
    receivedTransactions?: AccountTransactionListRelationFilter
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    sentTransactions?: AccountTransactionOrderByRelationAggregateInput
    receivedTransactions?: AccountTransactionOrderByRelationAggregateInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountNumber?: string
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    accountType?: EnumAccountTypeFilter<"BankAccount"> | $Enums.AccountType
    balance?: FloatFilter<"BankAccount"> | number
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    sentTransactions?: AccountTransactionListRelationFilter
    receivedTransactions?: AccountTransactionListRelationFilter
  }, "id" | "accountNumber">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _avg?: BankAccountAvgOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
    _sum?: BankAccountSumOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"BankAccount"> | string
    accountType?: EnumAccountTypeWithAggregatesFilter<"BankAccount"> | $Enums.AccountType
    balance?: FloatWithAggregatesFilter<"BankAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    isReverted?: BoolFilter<"Transaction"> | boolean
    pixKey?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    bankAccountFrom?: XOR<AccountTransactionNullableRelationFilter, AccountTransactionWhereInput> | null
    bankAccountTo?: XOR<AccountTransactionNullableRelationFilter, AccountTransactionWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isReverted?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
    bankAccountFrom?: AccountTransactionOrderByWithRelationInput
    bankAccountTo?: AccountTransactionOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pixKey?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: FloatFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    isReverted?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    bankAccountFrom?: XOR<AccountTransactionNullableRelationFilter, AccountTransactionWhereInput> | null
    bankAccountTo?: XOR<AccountTransactionNullableRelationFilter, AccountTransactionWhereInput> | null
  }, "id" | "pixKey">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isReverted?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    isReverted?: BoolWithAggregatesFilter<"Transaction"> | boolean
    pixKey?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type AccountTransactionWhereInput = {
    AND?: AccountTransactionWhereInput | AccountTransactionWhereInput[]
    OR?: AccountTransactionWhereInput[]
    NOT?: AccountTransactionWhereInput | AccountTransactionWhereInput[]
    id?: StringFilter<"AccountTransaction"> | string
    bankAccountId?: StringFilter<"AccountTransaction"> | string
    transactionId?: StringFilter<"AccountTransaction"> | string
    fromAccount?: XOR<BankAccountNullableRelationFilter, BankAccountWhereInput> | null
    toAccount?: XOR<BankAccountNullableRelationFilter, BankAccountWhereInput> | null
    sentTransaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
    receivedTransaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
  }

  export type AccountTransactionOrderByWithRelationInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    transactionId?: SortOrder
    fromAccount?: BankAccountOrderByWithRelationInput
    toAccount?: BankAccountOrderByWithRelationInput
    sentTransaction?: TransactionOrderByWithRelationInput
    receivedTransaction?: TransactionOrderByWithRelationInput
  }

  export type AccountTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: AccountTransactionWhereInput | AccountTransactionWhereInput[]
    OR?: AccountTransactionWhereInput[]
    NOT?: AccountTransactionWhereInput | AccountTransactionWhereInput[]
    bankAccountId?: StringFilter<"AccountTransaction"> | string
    fromAccount?: XOR<BankAccountNullableRelationFilter, BankAccountWhereInput> | null
    toAccount?: XOR<BankAccountNullableRelationFilter, BankAccountWhereInput> | null
    sentTransaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
    receivedTransaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
  }, "id" | "transactionId">

  export type AccountTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    transactionId?: SortOrder
    _count?: AccountTransactionCountOrderByAggregateInput
    _max?: AccountTransactionMaxOrderByAggregateInput
    _min?: AccountTransactionMinOrderByAggregateInput
  }

  export type AccountTransactionScalarWhereWithAggregatesInput = {
    AND?: AccountTransactionScalarWhereWithAggregatesInput | AccountTransactionScalarWhereWithAggregatesInput[]
    OR?: AccountTransactionScalarWhereWithAggregatesInput[]
    NOT?: AccountTransactionScalarWhereWithAggregatesInput | AccountTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountTransaction"> | string
    bankAccountId?: StringWithAggregatesFilter<"AccountTransaction"> | string
    transactionId?: StringWithAggregatesFilter<"AccountTransaction"> | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    level?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    message?: StringFilter<"Log"> | string
    level?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    message?: StringWithAggregatesFilter<"Log"> | string
    level?: StringWithAggregatesFilter<"Log"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type BankAccountCreateInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
    sentTransactions?: AccountTransactionCreateNestedManyWithoutFromAccountInput
    receivedTransactions?: AccountTransactionCreateNestedManyWithoutToAccountInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
    sentTransactions?: AccountTransactionUncheckedCreateNestedManyWithoutFromAccountInput
    receivedTransactions?: AccountTransactionUncheckedCreateNestedManyWithoutToAccountInput
  }

  export type BankAccountUpdateInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTransactions?: AccountTransactionUpdateManyWithoutFromAccountNestedInput
    receivedTransactions?: AccountTransactionUpdateManyWithoutToAccountNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTransactions?: AccountTransactionUncheckedUpdateManyWithoutFromAccountNestedInput
    receivedTransactions?: AccountTransactionUncheckedUpdateManyWithoutToAccountNestedInput
  }

  export type BankAccountCreateManyInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
  }

  export type BankAccountUpdateManyMutationInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
    bankAccountFrom?: AccountTransactionCreateNestedOneWithoutSentTransactionInput
    bankAccountTo?: AccountTransactionCreateNestedOneWithoutReceivedTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
    bankAccountFrom?: AccountTransactionUncheckedCreateNestedOneWithoutSentTransactionInput
    bankAccountTo?: AccountTransactionUncheckedCreateNestedOneWithoutReceivedTransactionInput
  }

  export type TransactionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountFrom?: AccountTransactionUpdateOneWithoutSentTransactionNestedInput
    bankAccountTo?: AccountTransactionUpdateOneWithoutReceivedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountFrom?: AccountTransactionUncheckedUpdateOneWithoutSentTransactionNestedInput
    bankAccountTo?: AccountTransactionUncheckedUpdateOneWithoutReceivedTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransactionCreateInput = {
    id?: string
    fromAccount?: BankAccountCreateNestedOneWithoutSentTransactionsInput
    toAccount?: BankAccountCreateNestedOneWithoutReceivedTransactionsInput
    sentTransaction?: TransactionCreateNestedOneWithoutBankAccountFromInput
    receivedTransaction?: TransactionCreateNestedOneWithoutBankAccountToInput
  }

  export type AccountTransactionUncheckedCreateInput = {
    id?: string
    bankAccountId: string
    transactionId: string
  }

  export type AccountTransactionUpdateInput = {
    fromAccount?: BankAccountUpdateOneWithoutSentTransactionsNestedInput
    toAccount?: BankAccountUpdateOneWithoutReceivedTransactionsNestedInput
    sentTransaction?: TransactionUpdateOneWithoutBankAccountFromNestedInput
    receivedTransaction?: TransactionUpdateOneWithoutBankAccountToNestedInput
  }

  export type AccountTransactionUncheckedUpdateInput = {
    bankAccountId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountTransactionCreateManyInput = {
    id?: string
    bankAccountId: string
    transactionId: string
  }

  export type AccountTransactionUpdateManyMutationInput = {

  }

  export type AccountTransactionUncheckedUpdateManyInput = {
    bankAccountId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogUncheckedCreateInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    message: string
    level: string
    timestamp?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    message?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountTransactionListRelationFilter = {
    every?: AccountTransactionWhereInput
    some?: AccountTransactionWhereInput
    none?: AccountTransactionWhereInput
  }

  export type AccountTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
  }

  export type BankAccountAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    accountType?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
  }

  export type BankAccountSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type AccountTransactionNullableRelationFilter = {
    is?: AccountTransactionWhereInput | null
    isNot?: AccountTransactionWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isReverted?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isReverted?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isReverted?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BankAccountNullableRelationFilter = {
    is?: BankAccountWhereInput | null
    isNot?: BankAccountWhereInput | null
  }

  export type TransactionNullableRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type AccountTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    transactionId?: SortOrder
  }

  export type AccountTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    transactionId?: SortOrder
  }

  export type AccountTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    transactionId?: SortOrder
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    level?: SortOrder
    timestamp?: SortOrder
  }

  export type AccountTransactionCreateNestedManyWithoutFromAccountInput = {
    create?: XOR<AccountTransactionCreateWithoutFromAccountInput, AccountTransactionUncheckedCreateWithoutFromAccountInput> | AccountTransactionCreateWithoutFromAccountInput[] | AccountTransactionUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutFromAccountInput | AccountTransactionCreateOrConnectWithoutFromAccountInput[]
    createMany?: AccountTransactionCreateManyFromAccountInputEnvelope
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
  }

  export type AccountTransactionCreateNestedManyWithoutToAccountInput = {
    create?: XOR<AccountTransactionCreateWithoutToAccountInput, AccountTransactionUncheckedCreateWithoutToAccountInput> | AccountTransactionCreateWithoutToAccountInput[] | AccountTransactionUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutToAccountInput | AccountTransactionCreateOrConnectWithoutToAccountInput[]
    createMany?: AccountTransactionCreateManyToAccountInputEnvelope
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
  }

  export type AccountTransactionUncheckedCreateNestedManyWithoutFromAccountInput = {
    create?: XOR<AccountTransactionCreateWithoutFromAccountInput, AccountTransactionUncheckedCreateWithoutFromAccountInput> | AccountTransactionCreateWithoutFromAccountInput[] | AccountTransactionUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutFromAccountInput | AccountTransactionCreateOrConnectWithoutFromAccountInput[]
    createMany?: AccountTransactionCreateManyFromAccountInputEnvelope
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
  }

  export type AccountTransactionUncheckedCreateNestedManyWithoutToAccountInput = {
    create?: XOR<AccountTransactionCreateWithoutToAccountInput, AccountTransactionUncheckedCreateWithoutToAccountInput> | AccountTransactionCreateWithoutToAccountInput[] | AccountTransactionUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutToAccountInput | AccountTransactionCreateOrConnectWithoutToAccountInput[]
    createMany?: AccountTransactionCreateManyToAccountInputEnvelope
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountTransactionUpdateManyWithoutFromAccountNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutFromAccountInput, AccountTransactionUncheckedCreateWithoutFromAccountInput> | AccountTransactionCreateWithoutFromAccountInput[] | AccountTransactionUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutFromAccountInput | AccountTransactionCreateOrConnectWithoutFromAccountInput[]
    upsert?: AccountTransactionUpsertWithWhereUniqueWithoutFromAccountInput | AccountTransactionUpsertWithWhereUniqueWithoutFromAccountInput[]
    createMany?: AccountTransactionCreateManyFromAccountInputEnvelope
    set?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    disconnect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    delete?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    update?: AccountTransactionUpdateWithWhereUniqueWithoutFromAccountInput | AccountTransactionUpdateWithWhereUniqueWithoutFromAccountInput[]
    updateMany?: AccountTransactionUpdateManyWithWhereWithoutFromAccountInput | AccountTransactionUpdateManyWithWhereWithoutFromAccountInput[]
    deleteMany?: AccountTransactionScalarWhereInput | AccountTransactionScalarWhereInput[]
  }

  export type AccountTransactionUpdateManyWithoutToAccountNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutToAccountInput, AccountTransactionUncheckedCreateWithoutToAccountInput> | AccountTransactionCreateWithoutToAccountInput[] | AccountTransactionUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutToAccountInput | AccountTransactionCreateOrConnectWithoutToAccountInput[]
    upsert?: AccountTransactionUpsertWithWhereUniqueWithoutToAccountInput | AccountTransactionUpsertWithWhereUniqueWithoutToAccountInput[]
    createMany?: AccountTransactionCreateManyToAccountInputEnvelope
    set?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    disconnect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    delete?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    update?: AccountTransactionUpdateWithWhereUniqueWithoutToAccountInput | AccountTransactionUpdateWithWhereUniqueWithoutToAccountInput[]
    updateMany?: AccountTransactionUpdateManyWithWhereWithoutToAccountInput | AccountTransactionUpdateManyWithWhereWithoutToAccountInput[]
    deleteMany?: AccountTransactionScalarWhereInput | AccountTransactionScalarWhereInput[]
  }

  export type AccountTransactionUncheckedUpdateManyWithoutFromAccountNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutFromAccountInput, AccountTransactionUncheckedCreateWithoutFromAccountInput> | AccountTransactionCreateWithoutFromAccountInput[] | AccountTransactionUncheckedCreateWithoutFromAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutFromAccountInput | AccountTransactionCreateOrConnectWithoutFromAccountInput[]
    upsert?: AccountTransactionUpsertWithWhereUniqueWithoutFromAccountInput | AccountTransactionUpsertWithWhereUniqueWithoutFromAccountInput[]
    createMany?: AccountTransactionCreateManyFromAccountInputEnvelope
    set?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    disconnect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    delete?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    update?: AccountTransactionUpdateWithWhereUniqueWithoutFromAccountInput | AccountTransactionUpdateWithWhereUniqueWithoutFromAccountInput[]
    updateMany?: AccountTransactionUpdateManyWithWhereWithoutFromAccountInput | AccountTransactionUpdateManyWithWhereWithoutFromAccountInput[]
    deleteMany?: AccountTransactionScalarWhereInput | AccountTransactionScalarWhereInput[]
  }

  export type AccountTransactionUncheckedUpdateManyWithoutToAccountNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutToAccountInput, AccountTransactionUncheckedCreateWithoutToAccountInput> | AccountTransactionCreateWithoutToAccountInput[] | AccountTransactionUncheckedCreateWithoutToAccountInput[]
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutToAccountInput | AccountTransactionCreateOrConnectWithoutToAccountInput[]
    upsert?: AccountTransactionUpsertWithWhereUniqueWithoutToAccountInput | AccountTransactionUpsertWithWhereUniqueWithoutToAccountInput[]
    createMany?: AccountTransactionCreateManyToAccountInputEnvelope
    set?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    disconnect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    delete?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    connect?: AccountTransactionWhereUniqueInput | AccountTransactionWhereUniqueInput[]
    update?: AccountTransactionUpdateWithWhereUniqueWithoutToAccountInput | AccountTransactionUpdateWithWhereUniqueWithoutToAccountInput[]
    updateMany?: AccountTransactionUpdateManyWithWhereWithoutToAccountInput | AccountTransactionUpdateManyWithWhereWithoutToAccountInput[]
    deleteMany?: AccountTransactionScalarWhereInput | AccountTransactionScalarWhereInput[]
  }

  export type AccountTransactionCreateNestedOneWithoutSentTransactionInput = {
    create?: XOR<AccountTransactionCreateWithoutSentTransactionInput, AccountTransactionUncheckedCreateWithoutSentTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutSentTransactionInput
    connect?: AccountTransactionWhereUniqueInput
  }

  export type AccountTransactionCreateNestedOneWithoutReceivedTransactionInput = {
    create?: XOR<AccountTransactionCreateWithoutReceivedTransactionInput, AccountTransactionUncheckedCreateWithoutReceivedTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutReceivedTransactionInput
    connect?: AccountTransactionWhereUniqueInput
  }

  export type AccountTransactionUncheckedCreateNestedOneWithoutSentTransactionInput = {
    create?: XOR<AccountTransactionCreateWithoutSentTransactionInput, AccountTransactionUncheckedCreateWithoutSentTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutSentTransactionInput
    connect?: AccountTransactionWhereUniqueInput
  }

  export type AccountTransactionUncheckedCreateNestedOneWithoutReceivedTransactionInput = {
    create?: XOR<AccountTransactionCreateWithoutReceivedTransactionInput, AccountTransactionUncheckedCreateWithoutReceivedTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutReceivedTransactionInput
    connect?: AccountTransactionWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type AccountTransactionUpdateOneWithoutSentTransactionNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutSentTransactionInput, AccountTransactionUncheckedCreateWithoutSentTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutSentTransactionInput
    upsert?: AccountTransactionUpsertWithoutSentTransactionInput
    disconnect?: AccountTransactionWhereInput | boolean
    delete?: AccountTransactionWhereInput | boolean
    connect?: AccountTransactionWhereUniqueInput
    update?: XOR<XOR<AccountTransactionUpdateToOneWithWhereWithoutSentTransactionInput, AccountTransactionUpdateWithoutSentTransactionInput>, AccountTransactionUncheckedUpdateWithoutSentTransactionInput>
  }

  export type AccountTransactionUpdateOneWithoutReceivedTransactionNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutReceivedTransactionInput, AccountTransactionUncheckedCreateWithoutReceivedTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutReceivedTransactionInput
    upsert?: AccountTransactionUpsertWithoutReceivedTransactionInput
    disconnect?: AccountTransactionWhereInput | boolean
    delete?: AccountTransactionWhereInput | boolean
    connect?: AccountTransactionWhereUniqueInput
    update?: XOR<XOR<AccountTransactionUpdateToOneWithWhereWithoutReceivedTransactionInput, AccountTransactionUpdateWithoutReceivedTransactionInput>, AccountTransactionUncheckedUpdateWithoutReceivedTransactionInput>
  }

  export type AccountTransactionUncheckedUpdateOneWithoutSentTransactionNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutSentTransactionInput, AccountTransactionUncheckedCreateWithoutSentTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutSentTransactionInput
    upsert?: AccountTransactionUpsertWithoutSentTransactionInput
    disconnect?: AccountTransactionWhereInput | boolean
    delete?: AccountTransactionWhereInput | boolean
    connect?: AccountTransactionWhereUniqueInput
    update?: XOR<XOR<AccountTransactionUpdateToOneWithWhereWithoutSentTransactionInput, AccountTransactionUpdateWithoutSentTransactionInput>, AccountTransactionUncheckedUpdateWithoutSentTransactionInput>
  }

  export type AccountTransactionUncheckedUpdateOneWithoutReceivedTransactionNestedInput = {
    create?: XOR<AccountTransactionCreateWithoutReceivedTransactionInput, AccountTransactionUncheckedCreateWithoutReceivedTransactionInput>
    connectOrCreate?: AccountTransactionCreateOrConnectWithoutReceivedTransactionInput
    upsert?: AccountTransactionUpsertWithoutReceivedTransactionInput
    disconnect?: AccountTransactionWhereInput | boolean
    delete?: AccountTransactionWhereInput | boolean
    connect?: AccountTransactionWhereUniqueInput
    update?: XOR<XOR<AccountTransactionUpdateToOneWithWhereWithoutReceivedTransactionInput, AccountTransactionUpdateWithoutReceivedTransactionInput>, AccountTransactionUncheckedUpdateWithoutReceivedTransactionInput>
  }

  export type BankAccountCreateNestedOneWithoutSentTransactionsInput = {
    create?: XOR<BankAccountCreateWithoutSentTransactionsInput, BankAccountUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutSentTransactionsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type BankAccountCreateNestedOneWithoutReceivedTransactionsInput = {
    create?: XOR<BankAccountCreateWithoutReceivedTransactionsInput, BankAccountUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutReceivedTransactionsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutBankAccountFromInput = {
    create?: XOR<TransactionCreateWithoutBankAccountFromInput, TransactionUncheckedCreateWithoutBankAccountFromInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBankAccountFromInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutBankAccountToInput = {
    create?: XOR<TransactionCreateWithoutBankAccountToInput, TransactionUncheckedCreateWithoutBankAccountToInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBankAccountToInput
    connect?: TransactionWhereUniqueInput
  }

  export type BankAccountUpdateOneWithoutSentTransactionsNestedInput = {
    create?: XOR<BankAccountCreateWithoutSentTransactionsInput, BankAccountUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutSentTransactionsInput
    upsert?: BankAccountUpsertWithoutSentTransactionsInput
    disconnect?: boolean
    delete?: BankAccountWhereInput | boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutSentTransactionsInput, BankAccountUpdateWithoutSentTransactionsInput>, BankAccountUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type BankAccountUpdateOneWithoutReceivedTransactionsNestedInput = {
    create?: XOR<BankAccountCreateWithoutReceivedTransactionsInput, BankAccountUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutReceivedTransactionsInput
    upsert?: BankAccountUpsertWithoutReceivedTransactionsInput
    disconnect?: boolean
    delete?: BankAccountWhereInput | boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutReceivedTransactionsInput, BankAccountUpdateWithoutReceivedTransactionsInput>, BankAccountUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type TransactionUpdateOneWithoutBankAccountFromNestedInput = {
    create?: XOR<TransactionCreateWithoutBankAccountFromInput, TransactionUncheckedCreateWithoutBankAccountFromInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBankAccountFromInput
    upsert?: TransactionUpsertWithoutBankAccountFromInput
    disconnect?: boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutBankAccountFromInput, TransactionUpdateWithoutBankAccountFromInput>, TransactionUncheckedUpdateWithoutBankAccountFromInput>
  }

  export type TransactionUpdateOneWithoutBankAccountToNestedInput = {
    create?: XOR<TransactionCreateWithoutBankAccountToInput, TransactionUncheckedCreateWithoutBankAccountToInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutBankAccountToInput
    upsert?: TransactionUpsertWithoutBankAccountToInput
    disconnect?: boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutBankAccountToInput, TransactionUpdateWithoutBankAccountToInput>, TransactionUncheckedUpdateWithoutBankAccountToInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type AccountTransactionCreateWithoutFromAccountInput = {
    id?: string
    toAccount?: BankAccountCreateNestedOneWithoutReceivedTransactionsInput
    sentTransaction?: TransactionCreateNestedOneWithoutBankAccountFromInput
    receivedTransaction?: TransactionCreateNestedOneWithoutBankAccountToInput
  }

  export type AccountTransactionUncheckedCreateWithoutFromAccountInput = {
    id?: string
    transactionId: string
  }

  export type AccountTransactionCreateOrConnectWithoutFromAccountInput = {
    where: AccountTransactionWhereUniqueInput
    create: XOR<AccountTransactionCreateWithoutFromAccountInput, AccountTransactionUncheckedCreateWithoutFromAccountInput>
  }

  export type AccountTransactionCreateManyFromAccountInputEnvelope = {
    data: AccountTransactionCreateManyFromAccountInput | AccountTransactionCreateManyFromAccountInput[]
  }

  export type AccountTransactionCreateWithoutToAccountInput = {
    id?: string
    fromAccount?: BankAccountCreateNestedOneWithoutSentTransactionsInput
    sentTransaction?: TransactionCreateNestedOneWithoutBankAccountFromInput
    receivedTransaction?: TransactionCreateNestedOneWithoutBankAccountToInput
  }

  export type AccountTransactionUncheckedCreateWithoutToAccountInput = {
    id?: string
    transactionId: string
  }

  export type AccountTransactionCreateOrConnectWithoutToAccountInput = {
    where: AccountTransactionWhereUniqueInput
    create: XOR<AccountTransactionCreateWithoutToAccountInput, AccountTransactionUncheckedCreateWithoutToAccountInput>
  }

  export type AccountTransactionCreateManyToAccountInputEnvelope = {
    data: AccountTransactionCreateManyToAccountInput | AccountTransactionCreateManyToAccountInput[]
  }

  export type AccountTransactionUpsertWithWhereUniqueWithoutFromAccountInput = {
    where: AccountTransactionWhereUniqueInput
    update: XOR<AccountTransactionUpdateWithoutFromAccountInput, AccountTransactionUncheckedUpdateWithoutFromAccountInput>
    create: XOR<AccountTransactionCreateWithoutFromAccountInput, AccountTransactionUncheckedCreateWithoutFromAccountInput>
  }

  export type AccountTransactionUpdateWithWhereUniqueWithoutFromAccountInput = {
    where: AccountTransactionWhereUniqueInput
    data: XOR<AccountTransactionUpdateWithoutFromAccountInput, AccountTransactionUncheckedUpdateWithoutFromAccountInput>
  }

  export type AccountTransactionUpdateManyWithWhereWithoutFromAccountInput = {
    where: AccountTransactionScalarWhereInput
    data: XOR<AccountTransactionUpdateManyMutationInput, AccountTransactionUncheckedUpdateManyWithoutFromAccountInput>
  }

  export type AccountTransactionScalarWhereInput = {
    AND?: AccountTransactionScalarWhereInput | AccountTransactionScalarWhereInput[]
    OR?: AccountTransactionScalarWhereInput[]
    NOT?: AccountTransactionScalarWhereInput | AccountTransactionScalarWhereInput[]
    id?: StringFilter<"AccountTransaction"> | string
    bankAccountId?: StringFilter<"AccountTransaction"> | string
    transactionId?: StringFilter<"AccountTransaction"> | string
  }

  export type AccountTransactionUpsertWithWhereUniqueWithoutToAccountInput = {
    where: AccountTransactionWhereUniqueInput
    update: XOR<AccountTransactionUpdateWithoutToAccountInput, AccountTransactionUncheckedUpdateWithoutToAccountInput>
    create: XOR<AccountTransactionCreateWithoutToAccountInput, AccountTransactionUncheckedCreateWithoutToAccountInput>
  }

  export type AccountTransactionUpdateWithWhereUniqueWithoutToAccountInput = {
    where: AccountTransactionWhereUniqueInput
    data: XOR<AccountTransactionUpdateWithoutToAccountInput, AccountTransactionUncheckedUpdateWithoutToAccountInput>
  }

  export type AccountTransactionUpdateManyWithWhereWithoutToAccountInput = {
    where: AccountTransactionScalarWhereInput
    data: XOR<AccountTransactionUpdateManyMutationInput, AccountTransactionUncheckedUpdateManyWithoutToAccountInput>
  }

  export type AccountTransactionCreateWithoutSentTransactionInput = {
    id?: string
    fromAccount?: BankAccountCreateNestedOneWithoutSentTransactionsInput
    toAccount?: BankAccountCreateNestedOneWithoutReceivedTransactionsInput
    receivedTransaction?: TransactionCreateNestedOneWithoutBankAccountToInput
  }

  export type AccountTransactionUncheckedCreateWithoutSentTransactionInput = {
    id?: string
    bankAccountId: string
  }

  export type AccountTransactionCreateOrConnectWithoutSentTransactionInput = {
    where: AccountTransactionWhereUniqueInput
    create: XOR<AccountTransactionCreateWithoutSentTransactionInput, AccountTransactionUncheckedCreateWithoutSentTransactionInput>
  }

  export type AccountTransactionCreateWithoutReceivedTransactionInput = {
    id?: string
    fromAccount?: BankAccountCreateNestedOneWithoutSentTransactionsInput
    toAccount?: BankAccountCreateNestedOneWithoutReceivedTransactionsInput
    sentTransaction?: TransactionCreateNestedOneWithoutBankAccountFromInput
  }

  export type AccountTransactionUncheckedCreateWithoutReceivedTransactionInput = {
    id?: string
    bankAccountId: string
  }

  export type AccountTransactionCreateOrConnectWithoutReceivedTransactionInput = {
    where: AccountTransactionWhereUniqueInput
    create: XOR<AccountTransactionCreateWithoutReceivedTransactionInput, AccountTransactionUncheckedCreateWithoutReceivedTransactionInput>
  }

  export type AccountTransactionUpsertWithoutSentTransactionInput = {
    update: XOR<AccountTransactionUpdateWithoutSentTransactionInput, AccountTransactionUncheckedUpdateWithoutSentTransactionInput>
    create: XOR<AccountTransactionCreateWithoutSentTransactionInput, AccountTransactionUncheckedCreateWithoutSentTransactionInput>
    where?: AccountTransactionWhereInput
  }

  export type AccountTransactionUpdateToOneWithWhereWithoutSentTransactionInput = {
    where?: AccountTransactionWhereInput
    data: XOR<AccountTransactionUpdateWithoutSentTransactionInput, AccountTransactionUncheckedUpdateWithoutSentTransactionInput>
  }

  export type AccountTransactionUpdateWithoutSentTransactionInput = {
    fromAccount?: BankAccountUpdateOneWithoutSentTransactionsNestedInput
    toAccount?: BankAccountUpdateOneWithoutReceivedTransactionsNestedInput
    receivedTransaction?: TransactionUpdateOneWithoutBankAccountToNestedInput
  }

  export type AccountTransactionUncheckedUpdateWithoutSentTransactionInput = {
    bankAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountTransactionUpsertWithoutReceivedTransactionInput = {
    update: XOR<AccountTransactionUpdateWithoutReceivedTransactionInput, AccountTransactionUncheckedUpdateWithoutReceivedTransactionInput>
    create: XOR<AccountTransactionCreateWithoutReceivedTransactionInput, AccountTransactionUncheckedCreateWithoutReceivedTransactionInput>
    where?: AccountTransactionWhereInput
  }

  export type AccountTransactionUpdateToOneWithWhereWithoutReceivedTransactionInput = {
    where?: AccountTransactionWhereInput
    data: XOR<AccountTransactionUpdateWithoutReceivedTransactionInput, AccountTransactionUncheckedUpdateWithoutReceivedTransactionInput>
  }

  export type AccountTransactionUpdateWithoutReceivedTransactionInput = {
    fromAccount?: BankAccountUpdateOneWithoutSentTransactionsNestedInput
    toAccount?: BankAccountUpdateOneWithoutReceivedTransactionsNestedInput
    sentTransaction?: TransactionUpdateOneWithoutBankAccountFromNestedInput
  }

  export type AccountTransactionUncheckedUpdateWithoutReceivedTransactionInput = {
    bankAccountId?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountCreateWithoutSentTransactionsInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
    receivedTransactions?: AccountTransactionCreateNestedManyWithoutToAccountInput
  }

  export type BankAccountUncheckedCreateWithoutSentTransactionsInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
    receivedTransactions?: AccountTransactionUncheckedCreateNestedManyWithoutToAccountInput
  }

  export type BankAccountCreateOrConnectWithoutSentTransactionsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutSentTransactionsInput, BankAccountUncheckedCreateWithoutSentTransactionsInput>
  }

  export type BankAccountCreateWithoutReceivedTransactionsInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
    sentTransactions?: AccountTransactionCreateNestedManyWithoutFromAccountInput
  }

  export type BankAccountUncheckedCreateWithoutReceivedTransactionsInput = {
    id?: string
    accountNumber: string
    accountType: $Enums.AccountType
    balance: number
    createdAt?: Date | string
    sentTransactions?: AccountTransactionUncheckedCreateNestedManyWithoutFromAccountInput
  }

  export type BankAccountCreateOrConnectWithoutReceivedTransactionsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutReceivedTransactionsInput, BankAccountUncheckedCreateWithoutReceivedTransactionsInput>
  }

  export type TransactionCreateWithoutBankAccountFromInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
    bankAccountTo?: AccountTransactionCreateNestedOneWithoutReceivedTransactionInput
  }

  export type TransactionUncheckedCreateWithoutBankAccountFromInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
    bankAccountTo?: AccountTransactionUncheckedCreateNestedOneWithoutReceivedTransactionInput
  }

  export type TransactionCreateOrConnectWithoutBankAccountFromInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBankAccountFromInput, TransactionUncheckedCreateWithoutBankAccountFromInput>
  }

  export type TransactionCreateWithoutBankAccountToInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
    bankAccountFrom?: AccountTransactionCreateNestedOneWithoutSentTransactionInput
  }

  export type TransactionUncheckedCreateWithoutBankAccountToInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    isReverted?: boolean
    pixKey?: string | null
    createdAt?: Date | string
    bankAccountFrom?: AccountTransactionUncheckedCreateNestedOneWithoutSentTransactionInput
  }

  export type TransactionCreateOrConnectWithoutBankAccountToInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBankAccountToInput, TransactionUncheckedCreateWithoutBankAccountToInput>
  }

  export type BankAccountUpsertWithoutSentTransactionsInput = {
    update: XOR<BankAccountUpdateWithoutSentTransactionsInput, BankAccountUncheckedUpdateWithoutSentTransactionsInput>
    create: XOR<BankAccountCreateWithoutSentTransactionsInput, BankAccountUncheckedCreateWithoutSentTransactionsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutSentTransactionsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutSentTransactionsInput, BankAccountUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type BankAccountUpdateWithoutSentTransactionsInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedTransactions?: AccountTransactionUpdateManyWithoutToAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutSentTransactionsInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedTransactions?: AccountTransactionUncheckedUpdateManyWithoutToAccountNestedInput
  }

  export type BankAccountUpsertWithoutReceivedTransactionsInput = {
    update: XOR<BankAccountUpdateWithoutReceivedTransactionsInput, BankAccountUncheckedUpdateWithoutReceivedTransactionsInput>
    create: XOR<BankAccountCreateWithoutReceivedTransactionsInput, BankAccountUncheckedCreateWithoutReceivedTransactionsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutReceivedTransactionsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutReceivedTransactionsInput, BankAccountUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type BankAccountUpdateWithoutReceivedTransactionsInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTransactions?: AccountTransactionUpdateManyWithoutFromAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutReceivedTransactionsInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTransactions?: AccountTransactionUncheckedUpdateManyWithoutFromAccountNestedInput
  }

  export type TransactionUpsertWithoutBankAccountFromInput = {
    update: XOR<TransactionUpdateWithoutBankAccountFromInput, TransactionUncheckedUpdateWithoutBankAccountFromInput>
    create: XOR<TransactionCreateWithoutBankAccountFromInput, TransactionUncheckedCreateWithoutBankAccountFromInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutBankAccountFromInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutBankAccountFromInput, TransactionUncheckedUpdateWithoutBankAccountFromInput>
  }

  export type TransactionUpdateWithoutBankAccountFromInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountTo?: AccountTransactionUpdateOneWithoutReceivedTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBankAccountFromInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountTo?: AccountTransactionUncheckedUpdateOneWithoutReceivedTransactionNestedInput
  }

  export type TransactionUpsertWithoutBankAccountToInput = {
    update: XOR<TransactionUpdateWithoutBankAccountToInput, TransactionUncheckedUpdateWithoutBankAccountToInput>
    create: XOR<TransactionCreateWithoutBankAccountToInput, TransactionUncheckedCreateWithoutBankAccountToInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutBankAccountToInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutBankAccountToInput, TransactionUncheckedUpdateWithoutBankAccountToInput>
  }

  export type TransactionUpdateWithoutBankAccountToInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountFrom?: AccountTransactionUpdateOneWithoutSentTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBankAccountToInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    isReverted?: BoolFieldUpdateOperationsInput | boolean
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountFrom?: AccountTransactionUncheckedUpdateOneWithoutSentTransactionNestedInput
  }

  export type AccountTransactionCreateManyFromAccountInput = {
    id?: string
    transactionId: string
  }

  export type AccountTransactionCreateManyToAccountInput = {
    id?: string
    transactionId: string
  }

  export type AccountTransactionUpdateWithoutFromAccountInput = {
    toAccount?: BankAccountUpdateOneWithoutReceivedTransactionsNestedInput
    sentTransaction?: TransactionUpdateOneWithoutBankAccountFromNestedInput
    receivedTransaction?: TransactionUpdateOneWithoutBankAccountToNestedInput
  }

  export type AccountTransactionUncheckedUpdateWithoutFromAccountInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountTransactionUncheckedUpdateManyWithoutFromAccountInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountTransactionUpdateWithoutToAccountInput = {
    fromAccount?: BankAccountUpdateOneWithoutSentTransactionsNestedInput
    sentTransaction?: TransactionUpdateOneWithoutBankAccountFromNestedInput
    receivedTransaction?: TransactionUpdateOneWithoutBankAccountToNestedInput
  }

  export type AccountTransactionUncheckedUpdateWithoutToAccountInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountTransactionUncheckedUpdateManyWithoutToAccountInput = {
    transactionId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BankAccountCountOutputTypeDefaultArgs instead
     */
    export type BankAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BankAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BankAccountDefaultArgs instead
     */
    export type BankAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BankAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountTransactionDefaultArgs instead
     */
    export type AccountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogDefaultArgs instead
     */
    export type LogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
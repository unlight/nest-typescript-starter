// export function Mixin(...ctors: Function[]): ClassDecorator {
//     return function <TFunction extends Function>(target: TFunction) {
//         // TODO:
//     };
// }

export function With<T1>(ctor1: T1): T1;
export function With<T1, T2>(ctor1: T1, ctor2: T2): T1 & T2;

export function With(...ctors: Function[]) {
    return applyMixins(class { }, [...ctors]);
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
    return derivedCtor;
}

/**
 * Original solution belongs to `github's` user [falsandtru](https://github.com/falsandtru)
 * @see https://github.com/Microsoft/TypeScript/issues/2919#issuecomment-225398629
 */

export function MixinDecorator(ctor: FunctionConstructor): ClassDecorator {
    return function(target: FunctionConstructor) {
        // debugger;
    };
}

export function classes(...args) {
  const constructors = [];

  /**
   * Skeleton Class.
   *
   * @class Class
   * @extends {MethodMissing}
   */

  class Class {

    /**
     * Creates an instance of Class.
     *
     * @memberOf Class
     */

    constructor(...opts) {

      for (const arg of args) {
        const props = Object.getOwnPropertyNames(arg.prototype);

        for (const prop of props) {
          if (prop === 'constructor') {
            constructors.push(arg.prototype.constructor);
          } else {
            Class.prototype[prop] = arg.prototype[prop];
          }
        }
      }

      for (const constructor of constructors) {
        Object.assign(Class.prototype, new constructor(...opts));
      }
    }

  }

  return Class;
}


export type Constructor<T> = new (...args: any[]) => T;
export type Mixin<T> = Constructor<T> | object;

function mix( baseClass: Constructor<any>, mixins: Mixin<any>[] ) {
  const baseClassNames = getClassMethodsWithoutConstructor( baseClass );
  for( let mixin of mixins ) {
    const methodNames = getMethodNames( mixin );
    methodNames.forEach( methodName => {
      if( baseClassNames.indexOf( methodName ) > - 1 ) return
      if( typeof mixin === "object" ) {
        baseClass.prototype[ methodName ] = mixin[ methodName ];
      } else {
        baseClass.prototype[ methodName ] = mixin.prototype[ methodName ];
      }
    });
  }
}

function getMethodNames(mixin: Mixin<any> ) {
  let methodNames:string[] = [];
  switch( typeof mixin ) {
    case "object":
      methodNames = getObjectMethods( mixin );
      break;
    case "function":
      methodNames = getClassMethodsWithoutConstructor( mixin as Constructor<any> );
      break;
  }
  return methodNames;
}

function getObjectMethods(obj:object): string[] {
  return Object.getOwnPropertyNames( obj ).filter( key => {
    return obj[key] && (typeof obj[key] === "function");
  })
}

function getClassMethodsWithoutConstructor(cls:Constructor<any>): string[] {
  const baseClassMethodNames: string[] = Object.getOwnPropertyNames( cls.prototype )
  return baseClassMethodNames.slice( 1, baseClassMethodNames.length ); // Don't mess with the constructor.
}

export function use(...options:Mixin<any>[] ) {
  return function ( target:any, propertyKey:string ) {
    mix( target.constructor, options );
  }
}

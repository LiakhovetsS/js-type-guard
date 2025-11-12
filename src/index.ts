const getTypeTag = (value: unknown): string => Object.prototype.toString.call(value);

const isString = (value: unknown): boolean => getTypeTag(value) === '[object String]';
const isNumber = (value: unknown): boolean => getTypeTag(value) === '[object Number]';
const isBoolean = (value: unknown): boolean => getTypeTag(value) === '[object Boolean]';
const isDate = (value: unknown): boolean => getTypeTag(value) === '[object Date]';
const isFunction = (value: unknown): boolean => getTypeTag(value) === '[object Function]';
const isArray = (value: unknown): boolean => getTypeTag(value) === '[object Array]';
const isObject = (value: unknown): boolean => getTypeTag(value) === '[object Object]';
const isUndefined = (value: unknown): boolean => getTypeTag(value) === '[object Undefined]';
const isNull = (value: unknown): boolean => getTypeTag(value) === '[object Null]';
const isRegExp = (value: unknown): boolean => getTypeTag(value) === '[object RegExp]';
const isMap = (value: unknown): boolean => getTypeTag(value) === '[object Map]';
const isSet = (value: unknown): boolean => getTypeTag(value) === '[object Set]';
const isSymbol = (value: unknown): boolean => getTypeTag(value) === '[object Symbol]';
const isError = (value: unknown): boolean => getTypeTag(value) === '[object Error]';
const isBigInt = (value: unknown): boolean => getTypeTag(value) === '[object BigInt]';
const isArguments = (value: unknown): boolean => getTypeTag(value) === '[object Arguments]';

const isTypedArray = (value: unknown): boolean => {
    if (!ArrayBuffer.isView) return false;
    return ArrayBuffer.isView(value as any) && !(value instanceof DataView);
};

const WTF = (value: unknown): string => {
    const tag = getTypeTag(value);
    return tag.slice(8, -1).toLowerCase();
};

export {
    isString,
    isNumber,
    isBoolean,
    isDate,
    isFunction,
    isArray,
    isObject,
    isUndefined,
    isNull,
    isRegExp,
    isMap,
    isSet,
    isSymbol,
    isError,
    isBigInt,
    isArguments,
    isTypedArray,
    WTF
};

export class Type {
    static isString = isString;
    static isNumber = isNumber;
    static isBoolean = isBoolean;
    static isDate = isDate;
    static isFunction = isFunction;
    static isArray = isArray;
    static isObject = isObject;
    static isUndefined = isUndefined;
    static isNull = isNull;
    static isRegExp = isRegExp;
    static isMap = isMap;
    static isSet = isSet;
    static isSymbol = isSymbol;
    static isError = isError;
    static isBigInt = isBigInt;
    static isArguments = isArguments;
    static isTypedArray = isTypedArray;
    static WTF = WTF;
}
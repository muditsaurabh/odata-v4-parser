import * as Lexer from "./lexer";
export declare function complexColInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function complexInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function collectionPropertyInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function primitiveColInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function complexPropertyInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function annotationInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function keyValuePairInUri(value: number[] | Uint8Array, index: number, keyFn: Function, valueFn: Function): Lexer.Token;
export declare function primitivePropertyInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function navigationPropertyInUri(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function singleNavPropInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function collectionNavPropInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function rootExprCol(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function primitiveLiteralInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function stringInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function charInJSON(value: number[] | Uint8Array, index: number): number;
export declare function numberInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function booleanInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function nullInJSON(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function arrayOrObject(value: number[] | Uint8Array, index: number): Lexer.Token;

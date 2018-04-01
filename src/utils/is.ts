
module core {

    export class is {

        constructor(){

        }
        // cache some methods to call later on
        static toString = Object.prototype.toString;

        static truthy (value):boolean {
            return this.existy(value) && value !== false && !this.nan(value) && value !== "" && value !== 0;
        };
        static falsy (value):boolean {
            return !this.truthy(value);
        }

        static existy (value):boolean {
            return value !== null && value !== undefined;
        };

        static undefined (value) {
            return value === void 0;
        };

        static nan (value):boolean {
            return value !== value;
        };

        // is a given value null?
        static nul (value):boolean {
            return value === null;
        };
        // is a given value number?
        static number (value):boolean {
            return !this.nan(value) && is.toString.call(value) === '[object Number]';
        };
        // is a given value object?
        static object (value):boolean {
            var type = typeof value;
            return type === 'function' || type === 'object' && !!value;
        };
        // is a given value function?
        static fun (value):boolean {
            return is.toString.call(value) === '[object Function]' || typeof value === 'function';
        };
        // is a given value Array?
        static array (value):boolean {
            return Array.isArray(value) || is.toString.call(value) === '[object Array]';
        };
        // is a given value Boolean?
        static bool(value):boolean {
            return value === true || value === false || is.toString.call(value) === '[object Boolean]';
        };
        // is a given value Date Object?
        static date (value):boolean {
            return is.toString.call(value) === '[object Date]';
        };
        // is a given value RegExp?
        static regexp (value):boolean {
            return is.toString.call(value) === '[object RegExp]';
        };

        // is a given value String?
        static string (value):boolean {
            return is.toString.call(value) === '[object String]';
        };
        // is a given value Char?
        static char (value):boolean {
            return this.string(value) && value.length === 1;
        };
        static even (numb):boolean {
            return this.number(numb) && numb % 2 === 0;
        };
        // is a given number odd?
        static odd (numb):boolean {
            return this.number(numb) && numb % 2 === 1;
        };
        // is a given number decimal?
        static decimal (numb):boolean {
            return this.number(numb) && numb % 1 !== 0;
        };
        // is a given number integer?
        static integer (numb):boolean {
            return this.number(numb) && numb % 1 === 0;
        };
    }
}
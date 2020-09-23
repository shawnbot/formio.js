var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { DateBetweenOperator } from './DateBetween';
var SecondBetweenOperator = /** @class */ (function (_super) {
    __extends(SecondBetweenOperator, _super);
    function SecondBetweenOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SecondBetweenOperator, "name", {
        get: function () {
            return 'secondBetween';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecondBetweenOperator, "title", {
        get: function () {
            return 'Second Between';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecondBetweenOperator, "presetArguments", {
        get: function () {
            return {
                granularity: {
                    valueSource: 'string',
                    stringInput: 'second',
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return SecondBetweenOperator;
}(DateBetweenOperator));
export { SecondBetweenOperator };
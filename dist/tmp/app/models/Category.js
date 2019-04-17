"use strict";
var Category = (function () {
    function Category(options) {
        this.categoryId = options && options.categoryId || 0;
        this.categoryName = options && options.categoryName || 'Unknown category';
        this.categoryCode = options && options.categoryCode || '';
        this.categoryIcon = options && options.categoryIcon || '';
    }
    return Category;
}());
exports.Category = Category;

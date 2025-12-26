"use strict";
// Static Members (স্ট্যাটিক মেম্বার)
// স্ট্যাটিক মেম্বাররা ক্লাসের ইনস্ট্যান্সের সাথে লিঙ্কড না হয়ে ক্লাসের নিজের সাথে লিঙ্কড থাকে।
class MathUtils {
    constructor() {
        this.version = "1.0";
    }
    // Static method
    static calculateCircleArea(radius) {
        return this.PI * radius * radius;
    }
    getVersion() {
        return this.version;
    }
}
// Static property
MathUtils.PI = 3.1416;
console.log(MathUtils.PI); // 3.1416
console.log(MathUtils.calculateCircleArea(5)); // 78.54
// console.log(MathUtils.version); // Error
// console.log(MathUtils.getVersion()); // Error
const util = new MathUtils();
console.log(util.version); // "1.0"
console.log(util.getVersion()); // "1.0"
// console.log(util.PI); // Error (তবে JavaScript-এ undefined দিবে)
// console.log(util.calculateCircleArea(5)); // Error
class StringUtils {
    constructor() { } // Prevent instantiation
    static isEmpty(str) {
        return !str || str.trim().length === 0;
    }
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
class DatabaseConnection {
    constructor() {
        this.connection = this.createConnection();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new DatabaseConnection();
        }
        return this.instance;
    }
    createConnection() {
        return { connected: true };
    }
}
class AppConstants {
}
AppConstants.MAX_RETRY = 3;
AppConstants.TIMEOUT = 30000;
AppConstants.API_VERSION = "v1";
(() => {
    //       this.BASE_URL = process.env.BASE_URL || "http://localhost:3000";
})();

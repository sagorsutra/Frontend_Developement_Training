// Static Members (স্ট্যাটিক মেম্বার)
// স্ট্যাটিক মেম্বাররা ক্লাসের ইনস্ট্যান্সের সাথে লিঙ্কড না হয়ে ক্লাসের নিজের সাথে লিঙ্কড থাকে।
class MathUtils {
    // Static property
    static PI = 3.1416;
    
    // Static method
    static calculateCircleArea(radius: number): number {
        return this.PI * radius * radius;
          
    }
    
   
    version = "1.0";
    
    getVersion(): string {
        return this.version;
    }
}

 
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
    private constructor() {} // Prevent instantiation
    
    static isEmpty(str: string): boolean {
        return !str || str.trim().length === 0;
    }
    
    static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

 
class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connection: any;
    
    private constructor() {
       
        this.connection = this.createConnection();
    }
    
    static getInstance(): DatabaseConnection {
        if (!this.instance) {
            this.instance = new DatabaseConnection();
        }
        return this.instance;
    }
    
    private createConnection() {
         
        return { connected: true };
    }
}
  
class AppConstants {
    static readonly MAX_RETRY = 3;
    static readonly TIMEOUT = 30000;
    static readonly API_VERSION = "v1";
     
    static readonly BASE_URL: string;
    
    static {
        this.BASE_URL = process.env.BASE_URL || "http://localhost:3000";
    }
}
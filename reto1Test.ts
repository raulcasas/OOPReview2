import { Mobile } from "./reto1";

let Nokia3210 = new Mobile("Nokia3210", "3210", "Nokia", 18, "Grey", false, 1, 55.99);
let iPhone3G = new Mobile("iPhone3G", "3G", "Apple", 36, "White", false, 2, 99.99);
let SamsungGalaxy = new Mobile("SamsungGalaxy", "Galaxy", "Samsung", 124, "Blue", true, 4, 150);

//console.log(Nokia3210,iPhone3G,SamsungGalaxy);

Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;

//console.log(Nokia3210);

console.log(Nokia3210,iPhone3G,SamsungGalaxy);
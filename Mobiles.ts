import { Mobile } from '../reto4';
import { MobileLibrary } from './MobileLibrary';


let Nokia3210 = new Mobile("Nokia3210", "3210", "Nokia", 18, "Grey", false, 1, 55.99);
let iPhone3G = new Mobile("iPhone3G", "3G", "Apple", 36, "White", false, 2, 99.99);
let SamsungGalaxy = new Mobile("SamsungGalaxy", "Galaxy", "Samsung", 124, "Blue", true, 4, 150);
let XiaomiMiA2 = new Mobile("XiaomiMiA2", "MiA2", "Xiaomi", 124, "Red", true, 4, 199);

let arrayMobiles = [Nokia3210, iPhone3G, SamsungGalaxy, XiaomiMiA2];

let libreria = new MobileLibrary("Raúl", "Madrid", arrayMobiles);

console.log(libreria.getName());
console.log(libreria.getLocation());
console.log(libreria.getMobiles());
libreria.totalPriceCalculation();
console.log(libreria.getTotalPrice());

import { Mobile } from "../reto4";

export class MobileLibrary
{
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    public constructor(name:string, location:string, mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    // GET
    public getName():string
    {
        return this.name;
    }
    public getLocation():string{
        return this.location;
    }
    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }
    public getTotalPrice():number
    {
        return this.totalPrice;
    }

    // SET
    public setName(nuevoName:string)
    {
        this.name = nuevoName;
    }
    public setLocation(nuevoLocation:string)
    {
        this.location = nuevoLocation;
    }
    public setMobiles(nuevoMobiles:Mobile[])
    {
        this.mobiles = nuevoMobiles;
    }
    public setTotalPrice(nuevoTotalPrice:number)
    {
        this.totalPrice = nuevoTotalPrice;
    }

    // MÉTODOS
    private totalPriceCalculation()
    {
        let resultado = 0;
        for(let mobile of this.mobiles){
        resultado += mobile.getPrice();
        }
        this.totalPrice = resultado;
        return this.totalPrice;
    }

    printLibrary()
    {
        console.log(`This is my mobiles: `)
        for(let mobile of this.mobiles){
            mobile.printAll();
        }
        console.log(`Price overall: ${this.totalPrice}`)
    }
}

let Nokia3210 = new Mobile("Nokia3210", "3210", "Nokia", 18, "Grey", false, 1, 55.99);
let iPhone3G = new Mobile("iPhone3G", "3G", "Apple", 36, "White", false, 2, 99.99);
let SamsungGalaxy = new Mobile("SamsungGalaxy", "Galaxy", "Samsung", 124, "Blue", true, 4, 150);
let XiaomiMiA2 = new Mobile("XiaomiMiA2", "MiA2", "Xiaomi", 124, "Red", true, 4, 199);

let arrayMobiles = [Nokia3210, iPhone3G, SamsungGalaxy, XiaomiMiA2];

let libreria = new MobileLibrary("Raúl", "Madrid", arrayMobiles);

console.log(libreria.getName());
console.log(libreria.getLocation());
console.log(libreria.getMobiles());
console.log(libreria.getTotalPrice());
libreria.printLibrary();
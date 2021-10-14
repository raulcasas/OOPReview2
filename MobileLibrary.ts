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
    totalPriceCalculation()
    {
        let resultado = 0;
        for(let mobile of this.mobiles){
        resultado += mobile.getPrice();
        }
        this.totalPrice = resultado
    }
}
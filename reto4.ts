
export class Mobile
{
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    public constructor(name: string, model: string, trademark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    // GET
    public getName():string
    {
        return this.name;
    }
    public getModel():string
    {
        return this.model;
    }
    public getTrademark():string
    {
        return this.trademark;
    }
    public getSdSize():number
    {
        return this.sdSize;
    }
    public getColor():string
    {
        return this.color;
    }
    public getIs5G():boolean
    {
        return this.is5G;
    }
    public getCameraNumber():number
    {
        return this.cameraNumber;
    }
    public getPrice():number
    {
        return this.price;
    }

    // SET
    public setName(nuevoName:string)
    {
        this.name = nuevoName
    }
    public setModel(nuevoModel:string)
    {
        this.model = nuevoModel
    }
    public setTradeMark(nuevoTradeMark:string)
    {
        this.trademark = nuevoTradeMark
    }
    public setSdSize(nuevoSdSize:number)
    {
        this.sdSize = nuevoSdSize
    }
    public setColor(nuevoColor:string)
    {
        this.color = nuevoColor
    }
    public setIs5G(nuevoIs5G:boolean)
    {
        this.is5G = nuevoIs5G
    }
    public setCameraNumber(nuevoCameraNumber:number)
    {
        this.cameraNumber = nuevoCameraNumber
    }
    public setPrice(nuevoPrice:number)
    {
        this.price = nuevoPrice
    }

    printAll()
    {
        console.log(`The characteristics of the mobile ${this.name} are: 
        Name: ${this.name}
        Model: ${this.model}
        Trademark: ${this.trademark}
        SD Size (GB): ${this.sdSize}
        Color: ${this.color}
        Is 5G?: ${this.is5G}
        Number of Cameras: ${this.cameraNumber}
        `)
    }


}
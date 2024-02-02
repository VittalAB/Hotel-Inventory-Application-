export interface Room{
    available : number;
    booked : number;
    total : number;
}



// this the list interface 

export interface List{
    roomNumber:string,
    roomType : string,
    amenities : string,
    price : number,
    photos : string,
    checkinTime : Date,
    checkoutTime : Date
}
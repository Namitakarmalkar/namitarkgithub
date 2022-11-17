interface Ischool1 {
    schoolName: string;
    schoolAddress: string;
    mobileNo:number
}
interface Imedium {
    mediumName: string;
    principalName:string;
    totalStudents: number;

}
interface Ischool extends Ischool1,Imedium{
    principalName:string;
    EstablishmentYear: number;
    cbscPattern:boolean;
}
var school : Ischool= {
    schoolName:"Aryans World School",
    schoolAddress: "Pune",
    mobileNo:9999999999,   
    mediumName:"English",
    totalStudents:1000,
    principalName: "Mr.P.S.Rao",
    EstablishmentYear:1985,
    cbscPattern:true
}

console.log();

import JuegoDeCasino from "./JuegoDeCasino";
import  {Casino}  from "./Casino";

enum Bola{
    marfil, 
    teflon
}

class Ruleta extends JuegoDeCasino{
    private apostarColor: string;
    private apostarNumeros : number;
    private bola: Bola;
    private casino: Casino;     


 public constructor(apostarColor: string, apostarNumeros: number,bola: Bola,nombre: string,
   premio: number, apuestaMax: number, apuestaMin: number,cantJugadores:number, casino: Casino){
           super(nombre, premio, apuestaMax, apuestaMin, cantJugadores);
           this.apostarColor = apostarColor;
           this.apostarNumeros = apostarNumeros;
           this.bola = bola;
           this.casino = casino;
           
         }
         
         getInfo():Ruleta{
           return this;
         }

}
export default Ruleta;
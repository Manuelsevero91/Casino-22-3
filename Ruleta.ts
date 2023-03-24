import JuegoDeCasino from "./JuegoDeCasino";

export enum Bola{
    marfil, 
    teflon
}

class Ruleta extends JuegoDeCasino{
    private apostarColor: string;
    private apostarNumeros : number;
    private bola: Bola;

 public constructor(apostarColor: string, apostarNumeros: number,bola: Bola,nombreJuego: string,
   premio: number, apuestaMax: number, apuestaMin: number,cantJugadores:number,
    nombreJugador: string, nombreCroupier: string){
           super(nombreJuego, premio, apuestaMax, apuestaMin, cantJugadores, nombreJugador, nombreCroupier);
           this.apostarColor = apostarColor;
           this.apostarNumeros = apostarNumeros;
           this.bola = bola;
           
         }
         
         getInfo():Ruleta{
           return this;
         }

}
export default Ruleta;
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

         getBola(bola: Bola){
           const Bola = {
             1: 'marfil',
             2: 'teflon'
           }
           return Bola;
         }

         Apostar(apostarColor: string, ){
           if(apostarColor === 'rojo' || 'negro' ){
            console.log('Usted gano $4000')  
                }
         else{
          console.log('Usted perdio su apuesta');
          
         }
         }
         
         getInfo():Ruleta{
           return this;
         }

}
export default Ruleta;
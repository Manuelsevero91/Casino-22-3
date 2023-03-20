import JuegoDeCasino from "./JuegoDeCasino";
import { Casino } from "./Casino";


  class Blackjack extends JuegoDeCasino{
    private cartas: number;
    private casino : Casino;

    public constructor(cartas: number, nombre: string, premio: number,
         apuestaMax: number, apuestaMin: number,cantJugadores: number, casino: Casino){
       super(nombre, premio, apuestaMax, apuestaMin, cantJugadores);
       this.cartas = cartas;   
       this.casino = casino;
      };

      Apostar(){

      }

      getInfo():Blackjack{
        return this;
      }
}
export default Blackjack
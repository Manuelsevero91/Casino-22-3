import JuegoDeCasino from "./JuegoDeCasino";



  class Blackjack extends JuegoDeCasino{
    private cartas: number;

    public constructor(cartas: number, nombreJuego: string, premio: number,
         apuestaMax: number, apuestaMin: number,cantJugadores: number, nombreJugador: string, nombreCroupier: string){
       super(nombreJuego, premio, apuestaMax, apuestaMin, cantJugadores, nombreJugador, nombreCroupier);
       this.cartas = cartas;   
    
      };


      getInfo():Blackjack{
        return this;
      }
}
export default Blackjack

class JuegoDeCasino{
    private nombreJuego: string;
    private premio: number;
    private apuestaMax: number;
    private apuestaMin: number;
    private cantJugadores: number;

   public constructor(nombreJuego: string, premio: number, apuestaMax: number, apuestaMin: number, cantJugadores: number){
       this.nombreJuego = nombreJuego;
       this.premio = premio;   
       this.apuestaMax = apuestaMax;
       this.apuestaMin = apuestaMin;
       this.cantJugadores = cantJugadores;
    }

    getInfo():JuegoDeCasino{
      return this;
    }

}
export default JuegoDeCasino;



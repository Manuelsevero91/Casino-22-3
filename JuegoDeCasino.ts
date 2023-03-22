
class JuegoDeCasino{
    private nombreJuego: string;
    private premio: number;
    private apuestaMax: number;
    private apuestaMin: number;
    private cantJugadores: number;
    private nombreJugador: string;
    private nombreCroupier: string;

   public constructor(nombreJuego: string, premio: number, apuestaMax: number, apuestaMin: number, cantJugadores: number,
    nombreJugador: string, nombreCroupier: string){
       this.nombreJuego = nombreJuego;
       this.premio = premio;   
       this.apuestaMax = apuestaMax;
       this.apuestaMin = apuestaMin;
       this.cantJugadores = cantJugadores;
       this.nombreJugador = nombreJugador;
       this.nombreCroupier = nombreCroupier;
    }

    getInfo():JuegoDeCasino{
      return this;
    }

}
export default JuegoDeCasino;



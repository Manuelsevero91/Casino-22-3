import Ruleta from "./Ruleta";
import Blackjack from "./Blackjack"
import JuegoDeCasino from "./JuegoDeCasino";

export enum Mesa{
  Poker, 
  Ruleta,
  Blackjack
}

export class Casino{
    private nombreCasino : string
    private mesa : Mesa; 
    private ruleta: Ruleta;
    private blackjack: Blackjack; 

     public constructor(nombreCasino: string, mesa : Mesa, ruleta: Ruleta,  blackjack: Blackjack){
         this.nombreCasino = nombreCasino;
         this.mesa = mesa;
         this.ruleta = ruleta;
         this.blackjack = blackjack;

    }

    // agregarJuego(juego: Casino, lista: Casino[]){
    //     if(lista.push(juego)){
    //       console.log('Se agrego juego a', lista);
    //     }else{
    //       console.log('No se puedo agrgear el juego');
          
    //     }
    // }

    public getInfo():Casino{
      return this;
    }

}

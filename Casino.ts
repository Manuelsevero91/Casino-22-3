
enum Mesa{
  Poker, 
  Ruleta,
  Blackjack
}

export class Casino{
    private nombreCasino : string
    private jugadorNombre: string;
    private croupierNombre: string;
    private mesa : Mesa; 

     public constructor(nombreCasino: string, jugadorNombre: string, croupierNombre: string, mesa : Mesa){
         this.nombreCasino = nombreCasino;
         this.jugadorNombre = jugadorNombre;
         this.jugadorNombre = jugadorNombre;
         this.mesa = mesa;
    }

    public getInfo():Casino{
      return this;
    }

}

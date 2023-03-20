import Blackjack from "./Blackjack";
import { Casino } from "./Casino";
import JuegoDeCasino from "./JuegoDeCasino";
import Ruleta from "./Ruleta";
  
enum Bola{
  marfil,
  teflon
}
enum Mesa{
  Poker, 
  Ruleta,
  Blackjack
}
// const lasVegas = new Blackjack(2,4,'blackjack', 'john', 1000, 'curtis', 5000, 300, );

let lasVegas1 = new Casino('nevada', 'johnis', 'curtis', Mesa.Ruleta)

let lasVegas = new Ruleta('rojo', 20, Bola.marfil, 'john', 1000, 5000, 500, 10, lasVegas1)

console.log(lasVegas.getInfo());

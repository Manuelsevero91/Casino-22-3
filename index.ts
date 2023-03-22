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

let lasVegas01 = new Blackjack(45, 'blackjack', 20000, 3000, 300, 6, 'Milton', 'Tom')
let lasVegas = new Ruleta('rojo', 22,Bola.marfil, 'ruleta', 30000, 5000, 500, 10, 'jhonis', 'curtis')
let lasVegas1 = new Casino('nevada', Mesa.Ruleta,lasVegas,lasVegas01)


console.log(lasVegas1.getInfo());

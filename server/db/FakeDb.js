import { generateId } from "../utils/GenerateId"

class FakeDb {
  burgers = [{ name: 'Burger #1 ', price:13, description: "Its mildly worrying", id: generateId() }, 
  { name: 'Damnation Hellfire Burger ', price:3, description: "YeeHaw your on fire", id: generateId() }, 
  { name: 'Burger #1 ', price:13, description: "Its mildly worrying", id: generateId() }, 
  { name: 'Hexblades ChesseBurger', price:20, description: "the best weapon is the old lady purse", id: generateId() }]
}

export const fakeDb = new FakeDb()
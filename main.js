import { tesztfuggvenyemhez } from "./teszt";
export function fuggvenyem(a, b) {
  if(a==o ||b==0){
    return "Egyik szám sem lehet nulla"
  }
  if(a<0 || b<0){
    return "Mindkt számnak pozitívnak kell lennie" 

  }
  
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

console.log(fuggvenyem(15,25));

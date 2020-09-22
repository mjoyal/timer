
const args = process.argv.slice(2);

const timer = function (time) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time); 
}; 


const beep = function (times) {
  times = times.sort(function(a, b){return a-b}) 
  if(!times.length) {
    return; 
  }
  for(const beep of times) {
    if(beep > 0 && typeof beep !== "number") {
      timer(beep * 1000); 
    }
  }
}; 

beep(args); 
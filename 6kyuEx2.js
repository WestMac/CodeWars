// Code Wars - Take a Ten Minute Walk

function isValidWalk(walk) {
let NorthSouth = 0;
let EastWest = 0;
  
  if(walk.length === 10) {
    for(let i = 0; i < walk.length;i++){
      if(walk[i] === 'n'){
        NorthSouth += 1;
      }else if (walk[i] === 's'){
        NorthSouth -= 1;
      } else if (walk[i] === 'e'){
        EastWest +=1
      }else if (walk[i]==='w'){
        EastWest -=1;
      }
    }

  } else {
    return false;
  }
  	console.log(NorthSouth, EastWest)
   return (NorthSouth === 0 && EastWest === 0);
}
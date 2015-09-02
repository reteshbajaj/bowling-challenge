function Game() {
  this.frameNumber = 1;
  this.pins = 10;
  this.roll = 1;
  this.frameScore = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
}

Game.prototype.throw = function() {
  this.roll ++;
};

Game.prototype.throwScore = function(pinsHit) {
  if (pinsHit === 10 && this.roll === 1) {
    return "X"
  } else if(pinsHit === 10 && this.roll > 1) {
    return "/"
  }
  else {
    this.throw();
    this.frameScore[this.frameNumber].push(pinsHit)
    if (this.isFrameComplete() === true){
      console.log("YO YO")
      this.nextFrame();
    } else {
      return pinsHit
    }
  }
};

Game.prototype.isFrameComplete = function() {
  if(this.roll > 2){
    return true;
  } else {
    return false;
  }

};

Game.prototype.nextFrame = function() {
  this.frameNumber ++;
};
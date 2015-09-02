describe("Game", function() {
  var game;


  beforeEach(function(){
    game = new Game();
  });

  it("should know the frame number", function() {
    expect(game.frameNumber).toEqual(1);
  });

  it("has 10 pins at the start", function(){
    expect(game.pins).toEqual(10);
  });

  it("starts at roll 1", function(){
    expect(game.roll).toEqual(1);
  });

  it("keeps track of roll", function(){
    game.throw();
    expect(game.roll).toEqual(2);
  });

  it("keeps track of score on each roll", function(){
    expect(game.throwScore(5)).toEqual(5);
  });

  it("returns a strike when all pins knocked down", function(){
    expect(game.throwScore(10)).toEqual("X");
  });

  it("returns a strike when all pins knocked down ONLY on first roll", function(){
    game.throw();
    expect(game.throwScore(10)).not.toEqual("X");
  });

  it("returns a spare when all pins knocked down after first roll", function(){
    game.throw();
    expect(game.throwScore(10)).toEqual("/");
  });

  it("records a score for each roll", function(){
    game.throwScore(5);
    expect(game.frameScore[1]).toEqual([5]);
  });

  it("adds the second roll score to the frame", function(){
    game.throwScore(5);
    game.throwScore(4);
    expect(game.frameScore[1]).toEqual([5,4])
  });

  it("moves on to the next frame when complete", function(){
    var game2 = new Game();
    game2.throwScore(5);
    game2.throwScore(4);
    expect(game2.isFrameComplete()).toBe(true);
    expect(game2.frameNumber).toEqual(2);
  });

  it("Stays on current frame if first roll is not a strike", function(){
    game.throwScore(5);
    expect(game.isFrameComplete()).toBe(false);
    expect(game.frameNumber).toEqual(1);
  });










});
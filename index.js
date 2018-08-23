function BoardMember(name, homestate, training){
  this.name = name;
  this.homestate = homestate;
  this.training = training;
  this.veto = function(){
    "No, I must disagree"
  }
}

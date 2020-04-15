export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('members'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('members.new.general'),
    this.toRoute('members.new.demographics'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('members.new.demographics'),
    this.toRoute('members.new.isAlive'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('members.new.isAlive'),
    this.toRoute('members.new.wasPicked'),
    this.use('toLeft'),
    this.reverse('toRight')
  );        
}


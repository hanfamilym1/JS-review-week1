/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  Progressive Managers have all the same properties as the manager,
  but they also have the following additional properties:
    - title - default 'Not a manager'
    - bonus - default 0

  When employees are added or removed we need to check and update their title. Their titles are as follows:
    0 : Not a manager
    1-3 : Barely Manager
    4-10 : Mostly Manager
    11-50 : Manager
    51-100 : Manager Plus
    101+ : Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

//Code Here











  ////////// Black Diamond //////////
  
  /*
    Widget Co has a factory that makes widgets.
    Factories have Machines.
  
    Make a Machine class that takes in no parameters
    A Machine has the following properties:
      - widgets_made_count - default 0
      - wear_and_tear_count - default 0
      - needs_reboot - default false
  
    A Machine has the following methods:
      - makeWidgets
          - This function takes in a number and increases widgets_made_count by that amount
          - It also increases wear_and_tear_count by 1 for every 50
      - fixMachine
          - This function sets needs_reboot to true
      - reboot
          - This function returns a function that is called when the machine is done rebooting
          - It should set decrease wear_and_tear_count by 10, and set needs_reboot to false
  */
  
  //Code Here
  console.log(Math.floor(151/50))
  class Machine{
    constructor(){
    this.widgets_made_count=0;
    this.wear_and_tear_count=0;
    this.needs_reboot=false;
    }
    makeWidgets(num){
      this.widgets_made_count+=num;
      this.wear_and_tear_count+=Math.floor(num/50);
    }
    fixMachine(){
      return this.needs_reboot=true;
    }
    reboot(){
      return ()=>{
        this.wear_and_tear_count-=10;
        this.needs_reboot=false;
      }
    }
  }
  
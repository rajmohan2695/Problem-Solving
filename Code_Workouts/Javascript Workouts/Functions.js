
	//Working with Functions

//Function to find areas and push them into an array
  function area(length,width){
      return length*width;
  }
    var Areas = [];

  Areas.push(area(10,10),area(10,15));
    Areas.push(area(20,20));

    console.log(Areas);

//Function to approve bank transactions

    

  var transaction = function(purchasePrice){
    
      if(purchasePrice <= bankBalance){
        
        bankBalance -= purchasePrice;
        console.log("Transaction Approved..");
        console.log("Current Account Balance : "+bankBalance);
        
      }
      else{
        
        console.log("Insufficient Funds..");
      
      }
  }
bankBalance = 500;
transaction(100);
transaction(500);
transaction(10);
transaction(100);
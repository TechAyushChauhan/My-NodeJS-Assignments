const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
function inputdata(num1,num2) {

    if (num1===""||num2===""){
        return false
    }
    return true;
}
function valid(num1,num2) {
if (isNaN(num1)||isNaN(num2)){
    return false
} return true;
}


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
// your code goes here
app.post("/add", (req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(inputdata(num1,num2)==false){        
       return res.status(400).json({ status:"failure",
            message: "please provide input"
        })
    }
    if(!valid(num1,num2)){        
        return res.status(400).json({ status:"Error",
             message: "Invalid data types"
         })
     }
     

    let sum=Number(num1)+Number(num2);
      if(Number(num1)<-1000000||Number(num2)<-1000000||sum<-1000000){        
        return res.status(400).json({ status:"Error",
             message: "Underflow"
         })
     }
      if(Number(num1)>1000000||Number(num2)>1000000||sum>1000000){        
        return res.status(400).json({ status:"Error",
             message: "Overflow"
         })
     }
    res.status(200).json({ status:"success",
            message: "the sum of given two numbers",
            sum: sum
        })


});
app.post("/sub", (req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(inputdata(num1,num2)==false){        
       return res.status(400).json({ status:"failure",
            message: "please provide input"
        })
    }
    if(!valid(num1,num2)){        
        return res.status(400).json({ status:"Error",
             message: "Invalid data types"
         })
     }
     

    let sum=Number(num1)-Number(num2);
      if(Number(num1)<-1000000||Number(num2)<-1000000||sum<-1000000){        
        return res.status(400).json({ status:"Error",
             message: "Underflow"
         })
     }
      if(Number(num1)>1000000||Number(num2)>1000000||sum>1000000){        
        return res.status(400).json({ status:"Error",
             message: "Overflow"
         })
     }
    res.status(200).json({ status:"success",
            message: "the difference of given two numbers",
            difference: sum
        })
});
app.post("/multiply", (req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(inputdata(num1,num2)==false){        
       return res.status(400).json({ status:"failure",
            message: "please provide input"
        })
    }
    if(!valid(num1,num2)){        
        return res.status(400).json({ status:"Error",
             message: "Invalid data types"
         })
     }
     

    let sum=Number(num1)*Number(num2);
      if(Number(num1)<-1000000||Number(num2)<-1000000||sum<-1000000){        
        return res.status(400).json({ status:"Error",
             message: "Underflow"
         })
     }
      if(Number(num1)>1000000||Number(num2)>1000000||sum>1000000){        
        return res.status(400).json({ status:"Error",
             message: "Overflow"
         })
     }
    res.status(200).json({ status:"success",
            message: "The product of given numbers",
            result: sum
        })

});
app.post("/divide", (req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(inputdata(num1,num2)==false){        
       return res.status(400).json({ status:"failure",
            message: "please provide input"
        })
    }
    if(!valid(num1,num2)){        
        return res.status(400).json({ status:"Error",
             message: "Invalid data types"
         })
     }
     if (Number(num2)==0){        
        return res.status(400).json({ status:"Error",
             message: "Cannot divide by zero"
         })
     }
     

    let sum=Number(num1)/Number(num2);
      if(Number(num1)<-1000000||Number(num2)<-1000000||sum<-1000000){        
        return res.status(400).json({ status:"Error",
             message: "Underflow"
         })
     }
      if(Number(num1)>1000000||Number(num2)>1000000||sum>1000000){        
        return res.status(400).json({ status:"Error",
             message: "Overflow"
         })
     }
    res.status(200).json({ status:"success",
            message: "The division of given numbers",
            result: sum
        })

});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
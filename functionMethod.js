"use strict";
window.onload = function()
{
	//first equation argument
	var firstArgumentObject = document.getElementById( "firstArgument" );
	//second equation argument
	var secondArgumenObject = document.getElementById( "secondArgument" );
	//form object
	var equationFormObject = document.getElementById( "equationForm" );
	//equation response object
	var equationResponseObject = document.getElementById( "equationResponse" );
	//variable to test if a number is int
	var intRegex = /^\d+$/;

	equationFormObject.onsubmit = function()
	{
		if ( intRegex.test(firstArgumentObject.value) )
		{
			var resultOfEquation = 0;
			var vectorOfFunction = secondArgumenObject.value.split(",");
			var vectorOfFunctionSplited ;
			var i;
			var vectorResult = new Array();

			

			for(i=0;i<vectorOfFunction.length;i++)
			{
				vectorOfFunctionSplited = vectorOfFunction[i].split('_') ;
				//test if the method is add
				if( ( vectorOfFunctionSplited[0] == "add" ) && ( vectorOfFunctionSplited.length == 2 ) ) 
				{
					resultOfEquation = parseInt( firstArgumentObject.value ) + parseInt(vectorOfFunctionSplited[vectorOfFunctionSplited.length-1]);
					alert(resultOfEquation);
					vectorResult.push(resultOfEquation);
				}
				
				//test if the method is substract
				else if( (vectorOfFunctionSplited[0] == "substract") && ( vectorOfFunctionSplited.length == 2 ) )
				{
					
					resultOfEquation = parseInt( firstArgumentObject.value ) - parseInt(vectorOfFunctionSplited[vectorOfFunctionSplited.length-1]);	
					alert(resultOfEquation);
					vectorResult.push(resultOfEquation);
				}
				
				//test if the method is multiply
				else if( (vectorOfFunctionSplited[0] == "multiply") && (vectorOfFunctionSplited[1] == "by") && (  vectorOfFunctionSplited.length == 3 ) )
				{
					
					resultOfEquation = parseInt( firstArgumentObject.value ) *  parseInt(vectorOfFunctionSplited[vectorOfFunctionSplited.length-1]) ;
					alert(resultOfEquation);
					vectorResult.push(resultOfEquation);
				}
				
				//test if the method is divide
				else if( (vectorOfFunctionSplited[0] == "divide") && (vectorOfFunctionSplited[1] == "by") && ( vectorOfFunctionSplitedlength == 3 ) )
				{
					
					resultOfEquation = parseInt( firstArgumentObject.value ) / parseInt(vectorOfFunctionSplited[vectorOfFunctionSplited.length-1]);
					alert(resultOfEquation);
					vectorResult.push(resultOfEquation);
				}
				
				else 
				{
					equationResponseObject.innerHTML= "Please enter correct the second argument like in the example above input of input";
					vectorOfFunction[i].focus();
				}			
				
				for(i=0;i<vectorResult.length;i++)
				{
					equationResponseObject.innerHTML = "The result of Equation is :" + vectorResult[i];
				}
				
				

			}
		}
		else
		{
			equationResponseObject.innerHTML= "Please enter a number in the first Argument!";
			firstArgumentObject.focus();
		}
		return false;
	}

}
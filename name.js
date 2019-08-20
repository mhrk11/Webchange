let count=0;


		function touch(){
			let arr=['Hey', 'It', 'isn\'t', 'Clickable'];


			if(count<4){
				document.getElementById("name").innerHTML=arr[count];

			}else{
				count=-1;
				document.getElementById("name").innerHTML="PRASHANT PANT";
			}

	         count++;



		}
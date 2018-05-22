var operators= ['+','-','*','/'];
	var formule_el = document.getElementById("formule");
	var result_el = document.getElementById("result");

	function click_touch(value){		
		// si on a déjà fait un calcul précédemment
		if (result_el.textContent.length > 0)
		{
			// on vide la formule
			formule_el.value = "";

			// si on a cliqué sur un apération
			if(operators.indexOf(value) != -1){
				// On concate le résultat précédent
				formule_el.value = result_el.textContent;
			}
			
			// On vide le résultat
			result_el.textContent = "";
		}

		// On concate le chiffre/apération
		formule_el.value += value; 
	}
	
	// Clic sur "="
	function egal(){
		var chiffre = formule_el.value;
		// Si la formule se termine par un opération
		if(operators.indexOf(chiffre.charAt(chiffre.length-1 )) !=-1 ){
			//Calculer le résultats avec le résultats par le dernier opération
			formule_el.value = formule_el.value + eval(chiffre.substring(0,chiffre.length-1));
		}
		result_el.textContent = eval(formule_el.value);
	}
	
	// Vider champs formule et résultat
	
	function erase(){
		formule_el.value = "";
		result_el.textContent = "";
	}
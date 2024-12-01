function casino(){
   
    let saldo = 100;
    
   
    function pelaaKasinopelia() {
      
        while (saldo > 0) {
         
            let panos = parseInt(prompt("Syötä panoksesi (saldo: " + saldo + "):"));
            
            
            if (isNaN(panos) || panos <= 0 || panos > saldo) {
                alert("Virheellinen panos. Syötä kelvollinen panos.");
                continue;
            }
    
            
            let arvattavaNumero = Math.floor(Math.random() * 2) + 1;
    
           
            let arvaus = parseInt(prompt("valitse luku 1 tai 2:"));
    
           
            if (arvaus === arvattavaNumero) {
                saldo += panos; 
                alert("Onnittelut, arvasit oikein! Voitit " + panos + "!");
            } else {
                saldo -= panos; 
                alert("Väärin! Oikea numero oli " + arvattavaNumero + ". Menetit " + panos + ".");
            }
    
    
            alert("Uusi saldo: " + saldo);
        }
    
    
        alert("Saldo on nolla. Peli päättyy!");
    }

    pelaaKasinopelia();
    
    }
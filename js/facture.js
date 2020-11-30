
        var essence  = 
        [
                    Lundi = 0.00, 
                    mardi = 0.00, 
                    mercredi = 0.00, 
                    jeudi = 0.00,
                    vendredi = 0.00,   
                    samedi = 0.00,
                    Dimanche =  0.00,
        
        ]

        TotalEss1611 = essence[0]+essence[1]+essence[2]+essence[3]+essence[4]+essence[5]+essence[6]
         
        

        var TempsDeCo1611 = 
        [
                    Lundi = 0, 
                    mardi = 0, 
                    mercredi = 0, 
                    jeudi = 0,
                    vendredi = 0,   
                    samedi = 0,
                    Dimanche =  0,
        
        ]

                      TotalTempsDeCo1611 = TempsDeCo1611[0]+TempsDeCo1611[1]+TempsDeCo1611[2]+TempsDeCo1611[3]+TempsDeCo1611[4]+TempsDeCo1611[5]+TempsDeCo1611[6]

          document.write("<td>  " + TempsDeCo1611[i] + "h </td>");
          document.write("<td>  " + essence[i] + "€ </td>");


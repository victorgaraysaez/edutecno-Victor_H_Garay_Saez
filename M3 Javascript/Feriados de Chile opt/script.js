 $("#buttnHolidays").click(function () {
    $.ajax({
    type: "GET",
    url: "https://www.feriadosapp.com/api/holidays.json",
    dataType: "json",
    success: function (datoz){     
       console.log(datoz)
       let datosApi = datoz.data
       let tableContent = document.querySelector('#tableContent')
           tableContent.innerHTML ='';
           tableContent.innerHTML ='<tr><th>Feriado</th><th>Fecha</th><th>Info adicional</th></tr>';
       for(let item of datosApi){
           tableContent.innerHTML += `<tr>
                   <td>${item.title}</td>
                   <td>${item.date}</td>
                   <td>${item.extra}</td>
                   </tr>`;
           }
    },
    failure: function (datoz) {
     alert(data.responseText);
    },
    error: function (datoz) {
     alert(data.responseText);
    }
   });
   });
    
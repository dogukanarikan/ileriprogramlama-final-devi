<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>
<body>
<p>
  <label for="textfield">Vize : </label>
  <input type="text" name="textfield" id="txtVize">
</p>
<p>
  <label for="textfield2">Final : </label>
  <input type="text" name="textfield2" id="txtFinal">
  <input type="button" name="button" id="hesap" value="HESAPLA">
</p>
<p><label id="lblSonuc"></label>&nbsp;</p>
 
 
<script>

	var vize=document.getElementById("txtVize");
	var final=document.getElementById("txtFinal");
	var btnHesap=document.getElementById("hesap");
	
	btnHesap.onclick=function(){
        
        var durum="";
		var vizeNotu=Number(vize.value);
		var finalNotu=Number(final.value);
		var ortalama=(vizeNotu*0.4)+(finalNotu*0.6);
		if(ortalama>=50 && finalNotu>=50)
			{
				durum="GEÇTİNİZ";
			}
		else if (ortalama>=50 && finalNotu<50)
			{
				durum="FİNAL NOTU 50' DEN KÜÇÜK! KALDINIZ";
			}
		else
			{
				durum="ORTALAMANIZ 50' DEN KÜÇÜK! KALDINIZ. "
			}
		document.getElementById("lblSonuc").innerHTML="Ortalamanız : "+ortalama+"<BR>"+durum;
		
	}
</script>
</body>
</html>
 
function calculatePrice() {
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  
  var sD = new Date(startDate);
  var eD = new Date(endDate);
  
  const diffTime = Math.abs(eD.getTime() - sD.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  var price = 0;
  var selectedCarValue = parseInt(document.getElementById("selectedValueId").value, 10);
  var selectedCar;

  switch(selectedCarValue){
	case 1: price = (diffDays * 30); selectedCar = 'Opel Astra (H)'; break;
	case 2: price = (diffDays * 30); selectedCar = 'Peugeot 207'; break;
	case 3: price = (diffDays * 30); selectedCar = 'Skoda fabia'; break;
	case 4: price = (diffDays * 45); selectedCar = 'Audi A6 QUATRO'; break;
	case 5: price = (diffDays * 30); selectedCar = 'Honda jazz'; break;
	case 6: price = (diffDays * 40); selectedCar = 'Peugeot 807'; break;
  }
  
  if(diffDays > 6)
  {
    price = price - price * 0.15;
  }
  document.getElementById("divArea").style.display = 'block';
  document.getElementById("demo").innerHTML = price;
  document.getElementById("inBAM").innerHTML = price * 1.7;
  document.getElementById("numOfDays").innerHTML = diffDays;
  document.getElementById("selectedCar").innerHTML = selectedCar;


  setTimeout(() => document.getElementById("divArea").style.display = 'none', 6000);
}
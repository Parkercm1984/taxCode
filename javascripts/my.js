
<!--
var charlestonHighTax=0.02;
var charlestonMidTax=0.015;
var charlestonLowTax=0.01;
var dorchesterHighTax=0.0175;
var dorchesterMidTax=0.015;
var dorchesterLowTax=0.0125;
var berkleyHighTax=0.0275;
var berkleyMidTax=0.0225;
var berkleyLowTax=0.02;

//If Tax Rates change make adjustments to above code nothing else

var county, homeValue, propertyTax;

function runTax()

{

county= prompt("What county do you live in? (Charleston,Dorchester,Berkley)","");

homeValue=prompt("What is the value of your home?","");

if (homeValue>150000)
{
 switch(county)
 {
	case "Charleston":
	 propertyTax=homeValue*charlestonHighTax;
	 break;
	case "Dorchester":
	 propertyTax=homeValue*dorchesterHighTax;
	 break;
	case "Berkley":
	 propertyTax=homeValue*berkleyHighTax;
	 	break;
		default:
	 				 confirm("You must type in couty as listed here 	(Charleston,Dorchester,Berkley)");
		break;
	}
}
else if (homeValue>50000)
{
 switch(county)
 {
	case "Charleston":
	 propertyTax=homeValue*charlestonMidTax;
	 break;
	case "Dorchester":
	 propertyTax=homeValue*dorchesterMidTax;
	 break;
	case "Berkley":
	 propertyTax=homeValue*berkleyMidTax;
	 	break;
		default:
	 				 confirm("You must type in couty as listed here 	(Charleston,Dorchester,Berkley)");
		break;
	}
}

else 
{
 switch(county)
 {
	case "Charleston":
	 propertyTax=homeValue*charlestonLowTax;
	 break;
	case "Dorchester":
	 propertyTax=homeValue*dorchesterLowTax;
	 break;
	case "Berkley":
	 propertyTax=homeValue*berkleyLowTax;
	 	break;
		default:
	 				 confirm("You must type in couty as listed here 	(Charleston,Dorchester,Berkley)");
		break;
	}
}



document.write("County: " +county);

document.write("<br>Home Value: $" +homeValue);

document.write("<br>Property Tax: $" + propertyTax.toFixed(2));

}
-->


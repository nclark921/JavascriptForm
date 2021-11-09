function validation()
{
    var firstname = document.registration.fname;
    var lastname = document.registration.lname;
    var phonenumber =document.registration.pn;
    var gendername=document.registration.gender;

    if (allLettername(firstname))
    {
        if (allLetterlast(lastname))
        {
            if(Phone(phonenumber))
            {
                if (genderselect(gendername))
                {
                }
            }
        }
    }
    return false;
}

function allLettername(firstname)
{
   var letters = /^[A-Za-z]+$/; 
   if (firstname.value.length==0)
   {
       alert('Please enter first name.');
       firstname.focus();
       return false;
   }
   else if (firstname.value.match(letters))
   {
       return true;
   }
   else {
        alert('First name must have alphabet characters only.');
        firstname.focus();
        return false;
   }
}

function allLetterlast(lastname)
{
    var letters = /^[A-Za-z]+$/; 
   if (lastname.value.length==0)
   {
       alert('Please enter last name.');
       lastname.focus();
       return false;
   }
   else if (lastname.value.match(letters))
   {
       return true;
   }
   else {
        alert('Last name must have alphabet characters only.');
        lastname.focus();
        return false;
   }
}

function Phone(phonenumber)
{
    var numbers= /^(\d{3})[\-](\d{3})[\-](\d{4})$/;
    if (phonenumber.value.length==0)
    {
        alert ('Please enter phone number.');
        phonenumber.focus();
        return false;
    }
    else if (phonenumber.value.length<12)
    {
        alert('Please enter valid phone number.');
        return false;
    }
    else if (phonenumber.value.match(numbers))
    {
        return true;
    }
    else{
        alert('Please check your contact number.');
        return false;
    }
}

function genderselect(gender)
{
	if(gender.value == "default")
	{
		alert('Select your gender.');
		gname.focus();
		return false;
	}
	else
	{
        alert('Form Succesfully Submitted!');
        window.location.reload();
		return true;
	}
}



function validateForm()
{

  var regex = /^[A-Za-z]*$/;

// ---------- First Name ----------
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name must be filled out");
    document.forms["myForm"]["fname"].style.border="2px solid red";
    return false;
  }
  else {
    document.forms["myForm"]["fname"].style.border="2px solid green";
  }

  if (!regex.test(x)) {
    alert("Invalid Pattern for First Name");
    document.forms["myForm"]["fname"].style.border="2px solid red";
    return false;
  }

// ---------- Last Name ----------
  var x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last Name must be filled out");
    document.forms["myForm"]["lname"].style.border="2px solid red";
    return false;
  }
  else {
    document.forms["myForm"]["lname"].style.border="2px solid green";
  }

  if (!regex.test(x)) {
    alert("Invalid Pattern for Last Name");
    document.forms["myForm"]["lname"].style.border="2px solid red";
    return false;
  }

// ---------- Mobile Number ----------

  var x = document.forms["myForm"]["m_number"].value;
  var regex_mobile = /^[0-9]*$/;

  if(!regex_mobile.test(x))
  {
    alert("Only Digits allowed in Mobile Number");
    document.forms["myForm"]["m_number"].style.border="2px solid red";
    return false;
  }

  var x_length = document.forms["myForm"]["m_number"].value.length;
  if(x_length != 10)
  {
    alert("Please Enter a 10 digit mobile number only");
    document.forms["myForm"]["m_number"].style.border="2px solid red";
    return false;
  }
  else {
    document.forms["myForm"]["m_number"].style.border="2px solid green";
  }

// ---------- Email ID ----------
  var x = document.forms["myForm"]["email_ID"].value;
  var regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!regex_email.test(x))
  {
    alert("Please enter a valid Email ID");
    document.forms["myForm"]["email_ID"].style.border="2px solid red";
    return false;
  }
  else {
    document.forms["myForm"]["email_ID"].style.border="2px solid green";
  }

  // ---------- Email ID ----------
    var x = document.getElementById("comment").innerHTML;

    if(x == "")
    {
      alert("Please enter a message");
      document.getElementById("comment").innerHTML.style.border="2px solid red";
      return false;
    }
    else {
      alert("Valid :*")
      document.getElementById("comment").innerHTML.style.border="2px solid green";
    }

}

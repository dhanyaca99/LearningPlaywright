let year = 2001
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
{
    console.log("This is Leap Year")
}
else
{
    console.log("This is not a Leap Year")
}
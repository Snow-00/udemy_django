let form=document.querySelector('form')
form.addEventListener('submit', function(event)
{
    event.preventDefault()
    let fname=form.elements.fname.value
    let lname=form.elements.lname.value
    let city=form.elements.city.value
    let gender=form.elements.gender.value
    let skills=form.elements['skills']

    console.log(`First Name : ${fname}`)
    console.log(`Last Name : ${lname}`)
    console.log(`City : ${city}`)
    console.log(`Gender : ${gender}`)
    
    for(let i=0; i<skills.length; i++)
    {
        
    }
})
const picture = document.querySelector('.picture');
const generate = document.querySelector('.generatePerson');
const namePerson = document.querySelector('.namePerson');
const lName = document.querySelector('.lName');
const locationPerson = document.querySelector('.location');
const phonePerson = document.querySelector('.phone');
const emailPerson = document.querySelector('.email');

async function getData() {

    const res = await fetch('https://randomuser.me/api/'); 

    const { results } = await res.json();

    console.log(results);

    picture.innerHTML = '';
    namePerson.innerHTML = '';
    lName.innerHTML = '';
    locationPerson.innerHTML = '';
    phonePerson.innerHTML = '';
    emailPerson.innerHTML = '';


    picture.innerHTML =`<img src="${results[0].picture.large}" >`;
    namePerson.innerHTML = `<i class="fas fa-user"></i>
    <div>Name: ${results[0].name.first}`;
    lName.innerHTML = `<i class="fas fa-user"></i>
    <div>Last Name: ${results[0].name.last}`;
    locationPerson.innerHTML = `<i class="fas fa-search-location"></i>  
    <div>Location: ${results[0].location.country}`;
    phonePerson.innerHTML = `<i class="fas fa-phone"></i>  
    <div>Phone: ${results[0].phone}`;
    emailPerson.innerHTML = `<i class="fas fa-envelope"></i>           
    <div>Email: ${results[0].email}`;

    




}

generate.addEventListener('click', getData)



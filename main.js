const generator = document.querySelector('.generator');
const button = document.querySelector('.BtnInput');

const getUsers = (e) => {
    e.preventDefault();
    const userNumber = document.querySelector('.generator__number').value;
    const userGender = document.querySelector('.generator__select').value;

    console.log(userGender, userNumber);
    console.log('okok');
    const url = `https://randomuser.me/api/?results=${userNumber}&gender=${userGender}`;
    console.log(url);
    fetch(url)
        .then((response) => {
            return response.json()

        })
        .then(json => console.log(json))
}

generator.addEventListener('submit', getUsers);
const generator = document.querySelector('.generator');
const button = document.querySelector('.BtnInput');

const getUsers = (e) => {
  e.preventDefault();
  const userNumber = document.querySelector('.generator__number').value;
  const userGender = document.querySelector('.generator__select').value;

  // console.log(userGender, userNumber);
  // console.log('okok');
  const url = `https://randomuser.me/api/?results=${userNumber}&gender=${userGender}`;
  console.log(url);
  fetch(url)
    .then((response) => {
      return response.json()

    })
    .then(json => showUsers(json.results))
}

const showUsers = (usersArray) => {
  console.log(usersArray);
  const divShowResults = document.querySelector('.usersResults');
  usersArray.forEach((user) => {
    const divUser = document.createElement('div');
    divUser.className = 'item';
    divUser.innerHTML = `
      <div class='item__name'>
    ${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}
    </div>
    <img class='item__img' src=${user.picture.medium}>
      `
    divShowResults.appendChild(divUser)
  })

}

generator.addEventListener('submit', getUsers);
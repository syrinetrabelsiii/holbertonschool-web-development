function welcome (firstname, lastname){
    let fullName = `${firstName} ${lastName}`;
    function displayFullName () {
        alert(`Welcome Holberton School !${fullName}!`);
    }
    return displayFullName();
}

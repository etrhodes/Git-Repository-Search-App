function getRepository(username) {
    fetch (`https://api.github.com/users/${username}/repos`)
       .then(response => {
           if(response.ok) {
               return response.json();
           }
       })
        .then(responseJson =>
            displayResults(responseJson)
        )
        .catch(error => alert ('Sorry, that username cannot be found')
        );
}


function onSubmit() {
    $('form').on('submit', event => {
        event.preventDefault();
        let username = $('input[type="text"]').val();
        console.log(username)
        getRepository(username);
    });

}

function displayResults(responseJson) {
    console.log(responseJson);
    $('#target').empty();
    let i = 0;
    for (let i = 0; i < responseJson.length; i++)
    $('#target').append(`<li>
        <p>${responseJson[i].name}</p>
        <p><a href="${responseJson[i].html_url}">Link to repository: ${responseJson[i].name}</a></p>
    </li>`)
    $('#results').removeClass('hidden');    
}

function handleApp() {
    onSubmit()
}

handleApp();
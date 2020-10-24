function getRepository(username) {
    fetch (`https://api.github.com/users/${username}/repos`)
       .then(response => {
           if(response.ok) {
               console.log(response.json());
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
    $('#target').empty();
    let i = 0;
    for (let i = 0; i < responseJson.length; i++)
    $('#target').append(`<li>
        <p></p>
    </li>`)
    $('#results').removeClass('hidden');    
}

function handleApp() {
    onSubmit()
}

handleApp();
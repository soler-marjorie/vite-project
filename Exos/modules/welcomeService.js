export async function moduleNorris() {
    const response = await fetch ('https://api.chucknorris.io/jokes/random')
    const dataTransformed = await response.json();
    let title = document.getElementById('title');
    title.innerText = dataTransformed.value
}

//correction 
/*


*/
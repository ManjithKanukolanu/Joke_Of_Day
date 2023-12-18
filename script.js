async function joke()
{
    const url = "https://icanhazdadjoke.com/slack"
    const response = await fetch(url)
    const data = await response.json()
    const r = data.attachments;
    const Joketext = r[0].text;
    const jokeelement = document.getElementById("laugh");
    jokeelement.innerHTML = Joketext;
}

joke()















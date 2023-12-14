export const moviesdata = (dataapis,main) =>{
for(let datapi of dataapis)
{
    let topboxj = document.createElement("div")
    topboxj.classList.add("topbox")
    let imagecontainsj = document.createElement("div")
    imagecontainsj.classList.add("imagecontains")
    let movieimagej= document.createElement("img")
    movieimagej.classList.add("imagecontains","movieimage")
    movieimagej.setAttribute("src",datapi.img_link)
    movieimagej.setAttribute("alt",datapi.name)
    let bottomboxj = document.createElement("div")
    bottomboxj.classList.add("bottombox")
    let movetitlej = document.createElement("h2")
    movetitlej.classList.add("movietitle")
    movetitlej.innerText=datapi.name
    let rankj = document.createElement("p")
    rankj.classList.add("rank")
    rankj.innerText= "Rank :" + datapi.rank
    let yearj = document.createElement("p")
    yearj.classList.add("year")
    yearj.innerText="Year : " + datapi.year
    let imdbvotesj = document.createElement("p")
    imdbvotesj.classList.add("imdbvotes")
    imdbvotesj.innerText = "Imdb Votes : " + datapi.imbd_votes
    imagecontainsj.appendChild(movieimagej)
    topboxj.appendChild(imagecontainsj)
    bottomboxj.appendChild(movetitlej)
    bottomboxj.appendChild(rankj)
    bottomboxj.appendChild(yearj)
    bottomboxj.appendChild(imdbvotesj)
    topboxj.appendChild(bottomboxj)
    main.appendChild(topboxj)
}
}
import dogs from "./data.js"
import Tindrer from "./Dog.js"

let profileArray = ["Sir", "Coppar", "Rasmus", "Lenard", "Quazi", "Juan", "Mark", "Adam", "Abdul", "Jacob"]  
let likedProfiles = []

function getProfile() {
    const getNextProfile = profileArray.shift()
    return getNextProfile ? new Tindrer(dogs[getNextProfile]) : {}
}

document.querySelector(".btn-container").addEventListener("click", function(e) {
        if (e.target.classList.contains("like-action-img")) {
        const likeElement = document.querySelector(".liked")
        likeElement.style.display = "unset"
        other.hasBeenSwiped = true
        other.hasBeenLiked = true
        likedProfiles.push(other)
        setTimeout(() => {
            other = getProfile()
            renderWithTransition()
        }, 800)
    } 
    else if (e.target.classList.contains("dislike-action-img")) {
        const likeElement = document.querySelector(".disliked")
        likeElement.style.display = "unset"
        other.hasBeenSwiped = true
        setTimeout(() => {
            other = getProfile()
            renderWithTransition()
        }, 800)
    }
    end() // runs end function to check if length is 0
})

function end() {
    if(profileArray.length === 0) {
        const matches = likedProfiles.map(function(profile) {
            return `
                    <div class="connected-profiles">
                        <h1 class="matched-profile-headline">${profile.name}, ${profile.age}</h1>
                        <img class="matched-avatar" src="${profile.avatar}"/>
                    </div>`
            }).join("')
        setTimeo"t(() => "
            document.querySelector("main").style.display = "none"
            document.querySelector(".end-header").innerHTML = `
            <h1 class="end-module-content-headline">Sorry, you've sniffed all the tails! 🐾</h1>
            <p class="end-module-content-paragraph">It's time to take a paws and find some real-life furry adventures! You can find your matched profiles below, good luck!</p>
            ` 
            document.querySelector(".end-body").innerHTML = matches
            
        } ,2000) 
    }
}

function renderWithTransition() {
    const profile = document.querySelector(".profile")
    profile.style.transform = "translateX(-200%)"
    
    setTimeout(() => {
        profile.innerHTML = other.profileRender();
        profile.style.transform = "translateX(0)"; // End the transition
      }, 800)
}

let other = getProfile()
render()
end()

function render() {
    document.querySelector(".profile").innerHTML = other.profileRender()
}


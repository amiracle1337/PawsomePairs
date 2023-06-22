import dogs from "./data.js"
import Tindrer from "./Tindrer.js"

let profileArray = ["Sir", "Coppar", "Rasmus", "Lenard", "Quazi", "Juan", "Mark", "Adam", "Abdul", "Jacob"]  
let likedProfiles = []
let currentProfile = getProfile()
render()

document.querySelector(".btn-container").addEventListener("click", function(e) {
        if (e.target.classList.contains("like-action-img")) {
        const likeElement = document.querySelector(".liked")
        likeElement.style.display = "unset"
        currentProfile.hasBeenSwiped = true
        currentProfile.hasBeenLiked = true
        likedProfiles.push(currentProfile)
        setTimeout(() => {
            currentProfile = getProfile()
            renderWithTransition()
        }, 800)
    } 
    else if (e.target.classList.contains("dislike-action-img")) {
        const likeElement = document.querySelector(".disliked")
        likeElement.style.display = "unset"
        currentProfile.hasBeenSwiped = true
        setTimeout(() => {
            currentProfile = getProfile()
            renderWithTransition()
        }, 800)
    }
    end() // runs end function to check if length is 0
})

function getProfile() {
    const getNextProfile = profileArray.shift()
    if (!getNextProfile) {
        end()
    } else {
        return new Tindrer(dogs[getNextProfile])
    }
}

function renderWithTransition() {
    const profile = document.querySelector(".profile")
    profile.style.transform = "translateX(-1%) translateY(-1%)" 
    
    
    setTimeout(() => {
        profile.innerHTML = currentProfile.profileRender();
        profile.style.transform = "translateX(0)"; // End the transition
      }, 800)
}

function end() {
    if(profileArray.length === 0) {
        const matches = likedProfiles.map(function(profile) {
            return `
                    <div class="connected-profiles">
                        <h1 class="matched-profile-headline">${profile.name}, ${profile.age}</h1>
                        <img class="matched-avatar" src="${profile.avatar}"/>
                    </div>`
            }).join("")
            setTimeout(() => {
                document.querySelector("main").style.display = "none"
                document.querySelector(".end-header").innerHTML = `
                <h1 class="end-module-content-headline">Sorry, you've sniffed all the tails! 🐾</h1>
                <p class="end-module-content-paragraph">It's time to take a paws and find some real-life furry adventures! You can find your matched profiles below, good luck!</p>
                ` 
                document.querySelector(".end-body").innerHTML = matches
                
            } ,2000) 
        }
    }

function render() {
    document.querySelector(".profile").innerHTML = currentProfile.profileRender()
}


class Tindrer {
    constructor(data) {
        Object.assign(this, data)
    }
    profileRender() {
        const { name, avatar, age, bio } = this
        return `
            <img class="user-avatar" src="${avatar}" />
            <h1 class="user-info">${name}, ${age}</h1>
            <p class="user-description">${bio}</p>
            <img class="liked" src="images/badge-like.png" />
            <img class="disliked" src="images/badge-nope.png" />
          `
    }
}

export default Tindrer
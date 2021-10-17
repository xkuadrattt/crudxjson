const judul = document.getElementById('judul')
const konten = document.getElementById('konten')
const submit = document.querySelector('.submit')
const postURL = '../post/blog.json'


const posts = document.querySelector('.post')
let artikelContainer = document.createElement('article')

const generatePost = ()=>{
    artikelContainer.className = 'output'
    posts.appendChild(artikelContainer) 
}



const datafecthing = fetch(postURL).then(res => res.json())
datafecthing.then(data=>{
    for (let i = 0; i < data.length; i++) {
        const posts = data[i];

        generatePost()

        let post = document.createElement('article')
        post.className = 'post'

        let h1 = document.createElement('h1')
        h1.className = 'judul'
        h1.textContent = data[i].judul

        let time = document.createElement('time')
        time.dateTime = data[i].date
        time.textContent = data[i].date

        let p = document.createElement('p')
        p.textContent = data[i].artikel

        post.appendChild(h1)
        post.appendChild(time)
        post.appendChild(p)

        artikelContainer.appendChild(post)
    }
})

const submitHandler = ()=>{
    let res = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            judul: judul.target.value,
            date: Date().toString(),
            artikel: konten.target.value
        }) 
    }
  fetch(postURL, res).then(res => res.json()).then(console.log(data))
}

submit.addEventListener('submit', submitHandler)


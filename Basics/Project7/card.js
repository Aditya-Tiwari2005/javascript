let Profile=document.getElementById('profile')
const Button=document.getElementById('Generate')
button.addEventListener('click',()=>{
    const requestURl='https://api.github.com/users/Aditya-Tiwari2005'
    const Xhr=new XMLHttpRequest();
    Xhr.open('GET',requestURl)
    Xhr.onreadystatechange=function(){
          console.log(Xhr.readyState);
          if (Xhr.readyState === 4) {
            const data= JSON.parse(this.responseText)
            profile.innerHTML=`
            <img src="${data.avatar_url}" height="300" style="border-radius:20%" >
            <h2>${data.name}</h2>
            <p>Followers: ${data.followers}</p>`
          }
    }
    Xhr.send()
})


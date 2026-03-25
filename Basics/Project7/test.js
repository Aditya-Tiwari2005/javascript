const requestURl='https://api.github.com/users/Aditya-Tiwari2005'
    const Xhr=new XMLHttpRequest();
    Xhr.open('GET',requestURl)
    Xhr.onreadystatechange=function(){
          console.log(Xhr.readyState);
          if (Xhr.readyState === 4) {
            const data= JSON.parse(this.responseText)
            profile.innerText=data.followers;
            profile.innerText=data.avatar_url;
          }
    }

    Xhr.send();
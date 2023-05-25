// Settings. Documentation in readme
contactButtonEnabled = true
contactButtonURL = "https://forms.office.com/r/xp9hAGSDLL"
AnayliticsEnabled = true
AnayliticsURL = "https://bit.ly/3Cb1WhT"
AccessKey = "112342"
// DO NOT MODIFY ANYTHING PAST THIS POINT
























if(contactButtonEnabled){
el = document.createElement("a")
el.href = contactButtonURL
el.innerText = "Got an issue / Suggestion?"
el.style.zIndex = 9999
el.style.background = "red"
el.style.position="absolute"
el.style.top="0px"
el.style.height="20px"
el.style.width="170px"
el.style.left="0px"
document.body.appendChild(el)
}
if(window.localStorage.allowed == "nope"){
            localStorage.allowed = "nope"
            localStorage.key = "Access attempted at " + Date()
            window.location.href = "about:blank"
        }
        if(window.localStorage.getItem("key") == "112342"){
                if(!window.location.href.endsWith(".nor.html")){
                        window.location.href = "./apps.nor.html"
                }
            
        }
        else{
            localStorage.allowed = "nope"
            localStorage.key = "Access attempted at " + Date()
            window.location.href = "about:blank"
        }

if(AnayliticsEnabled){fetch(AnayliticsURL, {"method": "GET"});}

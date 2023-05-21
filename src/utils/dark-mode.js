

const changeColor = ()=>{
    // #theme-toggle is the id of the sun icon in mobile nav and normal one
    const themeToggle = document.querySelectorAll('#theme-toggle')
    const theme = localStorage.getItem('theme');
    theme && document.body.classList.add(theme)


        const handleToggle = ()=>{
            // we add or remove the light-mode class to our body element everytime we click on the sun icon.
            document.body.classList.toggle('light-mode')
            if(document.body.classList.contains('light-mode')){
                //we create a key,value pair in local storage to remember so when we click it set the item with key: theme to : light-mode
                localStorage.setItem("theme", 'light-mode')
                
            } else {
                localStorage.removeItem('theme')
            }
        }

        themeToggle.forEach((button)=>{
            button.addEventListener('click', handleToggle)
        })
}

export default changeColor;
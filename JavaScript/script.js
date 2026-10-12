const sideBar = document.getElementById("sideBar");

//backgrond drak lisht 
sideBar.addEventListener("click", () => {
    console.log("Hi Iam Md Majadul Islam");
    const rootColor = getComputedStyle(document.documentElement).getPropertyValue("--text-color").trim();
    if(rootColor === "#000000"){
        document.documentElement.style.setProperty("--text-color", "#FFFFFF");
        document.body.style.backgroundColor = "#000000";
    }else{
        document.documentElement.style.setProperty("--text-color", "#000000");
        document.body.style.backgroundColor = "#FFFFFF";
    }
})


//view more 
function viewMore() {
    const viewBtn = document.querySelectorAll(".button");
    const totalViews = document.querySelectorAll(".total-views");

    let view = [0, 0, 0, 0, 0, 0];
    for(let i = 0; i <= viewBtn.length; i++){
        viewBtn[i].addEventListener("click", () => {
            for(j = 0; j <= totalViews.length; j++){
                if(i === j){
                    view[i]++;
                   totalViews[j].textContent = `${view[i]} views`; //p tag show views 

                }
            }
        })
    }
}
viewMore();


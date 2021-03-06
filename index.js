// This code has no comments due to good naming convention :)

let matches, success, failed, ids;
matches = [];
ids = [];
success = 0;
failed = 0;
counter = 0;

let ElementsMatched = id => 
{
    counter++
    HandleElement(id);
    setTimeout(() => 
    {
        UpdateMatchedEelements(matches[0])
        matches = []; ids = [];success++;UpdateScores()
    },500);
}


let NotMatched = () => 
{
  setTimeout(()=>
  {
      ClearElements(matches[0], matches[1])
      ids = [];matches = [];failed++;UpdateScores()
  },500); 
}

let ClearElements = (cls1, cls2) => 
{
    let class1 = document.querySelectorAll(`.${cls1}`)
    .forEach(element => element.style.backgroundColor = "#440707fa");

    let class2 = document.querySelectorAll(`.${cls2}`)
    .forEach(element => element.style.backgroundColor = "#440707fa")
}

let UpdateMatchedEelements = cls => 
{
    let items = document.querySelectorAll(`.${cls}`)
    items.forEach(element => 
    {
        element.style.backgroundColor = "#c0c0c0";
        element.style.border = "none";
        element.style.boxShadow = "none";
    })
}
  
  
let UpdateScores = () => 
{
    document.querySelector(".success").innerText = `Successful attempts: ${success}`;
    document.querySelector(".fail").innerText = `Failed attempts: ${failed}`;
  
    if(success/failed !== Infinity)
    {
        let result = success/failed * 100;
        result = result.toFixed(2)
        document.querySelector(".percentage").innerHTML = `Score: ${result} %`;
    }
}


let HandleElement = id => 
{
    let findItem = document.getElementById(id);
    if (findItem.style.backgroundColor !== "rgb(192, 192, 192)")
    {
        findItem.style.backgroundColor = findItem.className;
        matches.push(findItem.className);
        ids.push(findItem.id)
    }
    if(counter == 12){
        alert("You won")
    }
}





let ElementsInMatches = id => 
{
    if(matches.length == 1)
    {
        if(ids[0] !== id)
        {
            HandleElement(id)
            matches[0] == matches[1] && ids[0] !== ids[1]?ElementsMatched(id):NotMatched();
        }
    }
}

let CheckMatch = id => 
{
    (matches.length == 0)?HandleElement(id):ElementsInMatches(id);
}


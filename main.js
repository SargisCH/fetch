/*class ajax{
  getData(url){
      return new Promise((resolve, reject) => {
        fetch(url).then(response => resolve(response.json()), err => reject(err));
      })    
    return new Promise((resolve, reject) => {
       fetch(url).then(function(response){
          resolve(response.json());
       }, function(err){
            reject(err)
          })
       })
  } 
   postData(url,data){
       return new Promise((resolve,reject) =>{
        fetch(url,{method: "POST", body: data}).then(response => resolve(response.json(), err => reject(err)))   
       })
    fetch(url,{method: "POST", body: data}).then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json)
    });
  } 
  putData(url,data){
    fetch(url,{method: "POST", body: data}).then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json)
    });
  } 
  deleteData(url,id){
    fetch(url,{method: "Delete", id: id}).then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json)
    });
  }  
}
let ajax1 = new ajax()
ajax1.getData("https://jsonplaceholder.typicode.com/posts").then(function(response){
  console.log(response)
});*/

 function  getData(url){
      return new Promise((resolve, reject) => {
        fetch(url).then(response => resolve(response.json()), err => reject(err));
      })    
 }
$("#submit").click(function(){
 $.ajax({ 
            url: 'insert.php',
            type: 'POST',
            data: {
                name: "Sargis",
                lname: "chilingaryan"
            },
            success: function(mydata) {
                $("#p").html(mydata)
            }
        }) 
       /* getData('insert.php').then(response => console.log(response))*/
        
})
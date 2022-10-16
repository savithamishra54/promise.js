const posts =[
    {title: 'Post One', body:'This is post One',createdAt: new Date().getTime()},
    {title: 'Post Two',body:'This is post Two',createdAt: new Date().getTime()}
];


function getPosts() {
       
       setTimeout(() => {
 
           let output ='';
           posts.forEach((post,index) => {
            output+=`<li>${post.title}</li>`;
           });
        document.body.innerHTML = output;
      },1000);
} 
 

        

function createPost(post,callback) {
    return new Promise((resolve,reject)=>{
    
   
    setTimeout(() => {
        posts.push(post);
        const error = true;
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
      
    },2000);
    
});
}

function deletePost() {
    return new Promise((resolve,reject)=>{
    
   
    setTimeout(() => {
        if(posts.length>0){
            resolve(posts.pop());
        }
       
         else {
            reject('Array is empty now');
        }
      
    },1000);
    
});
}

createPost ({ title:'Post Three',body:'This is post Three'})
.then(() => {
    getPosts()
    deletePost().then(() => {
        getPosts();
        deletePost().then(() =>{
            getPosts();
            deletePost().then(()=> {
                getPosts()
                deletePost().then(() =>{})
                .catch((err) =>{
                    console.log('inside catch block',err)
                });
            })
        }
        )
    }
    )
})
.catch(err =>console.log(err))








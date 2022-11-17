import React from "react";
import "./posts.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts(props){

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    try {
        
        
     fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => setPosts(data));
         
    }
    catch(err){

        setError(err);
        
    }
    setLoading(false);
    
  }
  function getLogin(){
    setError("");
    const mail=localStorage.getItem("mail")
    const pass=localStorage.getItem("password")
   if (mail&&pass){
     
   }
   else{
    
    setError("Unidentified user, please log in")
   }
    
   }
   
  useEffect(() => {
    getLogin()
    fetchData();
  },[])
  const navigate = useNavigate();

    function goTo(route) {
       navigate(route);
        
      }
    function logout(){
        localStorage.removeItem('mail');
        localStorage.removeItem('password');
        goTo("/login")
    }

    return(

        
        <div >
            <nav
        className="navbar navbar-light justify-content-between"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <span
            className="navbar-brand h1"
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "25px",
            }}
          >
            Logo
          </span>
          <form className="form-inline" >
            <div className="row">
                <div className="col">
                <button  onClick={() => goTo("/home")}  className="btn btn-light">
                    Home
                </button>
                </div>
                <div className="col">
                <button  onClick={() => goTo("/posts")}  className="btn btn-danger">
                    Posts
                </button>
                </div>
                <div className="col"> 
                <button onClick={() => logout()} className="btn btn-light">
                       Logout
         </button></div>
            </div>
          </form>
        </div>
      </nav>
       
            <div className="container ">
            <h3 className="m-4">Posts</h3>
           {loading?<span>Loading ...</span>: error? <span>{error}</span>:<div className="row row-cols-3  ">
            {posts.map((post)=>
             <div className="col py-2" key={post.id} >
             <div className="card m-4 h-100 w-100 ">
             <div className="card-title">
             <h4 className="fw-bold m-3">{post.title}</h4>
              </div>
             <div
                 className="card-body"
                 style={{ alignItems: "center" }}  
               >
                 {post.body}
               </div>
               
             </div>
             </div>
            )}
             
            </div>}
            </div>
        </div>
    )
}
export default Posts;
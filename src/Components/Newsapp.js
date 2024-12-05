import React,{useEffect, useState}from 'react';
import Card from './Card';

const Newsapp = () => {
const [search,setSearch]=useState("india")
const [newsData,setNewsData]=useState(null)
const API_KEY= "cdd2f1c3a5d046e09fa3e3508532b1cb";
const getData=async()=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData= await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);


}
 
// useEfect will run only one time after refrese tha component
useEffect(()=>{
getData()
},[])


const handleInput=(e)=>{

    console.log(e.target.value);
    setSearch(e.target.value);
    

}
const userInput=(event)=>{
setSearch( event.target.value)

}

  return (
    <>
     <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className='searchBar'>
                <input type='text'placeholder='Serch News'value={search} onChange={handleInput}/>
                <button onClick={getData}>Serch</button>

            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with trendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput}value="Sports">Sports</button>
            <button onClick={userInput}value="Politics">Politics</button>
            <button onClick={userInput}value="Entertainment">Entertainment</button>
            <button onClick={userInput}value="Health">Health</button>
            <button onClick={userInput}value="Fitness">Fitness</button>
           

        </div>
        <div>
        <Card data={newsData} />

        </div>
     </div>
    </>
  );
};

export default Newsapp;

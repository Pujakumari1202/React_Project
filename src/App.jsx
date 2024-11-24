import {useState} from "react";
import './App.css'

function App() {

  return (
    <div style={{background:"#dfe6e9", height: "100vh"}}>
      <ToggleMessage/>
     <Greeting name={"rohan"}/>
      <div style={{display:"flex", justifyContent: "center"}}>
       <div>
        <div>
          <PostComponent
          name={"puja"}
          subtitle={"20 followers"}
          time={"2m ago"}
          image={"https://avatars.githubusercontent.com/u/149191257?v=4"}
          description={"What to know to win big? Check out how these folks won $6000 in bounties"}
          />
          <br />
        </div>
        <div>
          <PostComponent
           name={"raman"}
           subtitle={"Promoted"}
           image={"https://avatars.githubusercontent.com/u/149191257?v=4"}
           description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job"}
           />
          <br />
        </div>
       </div>
     </div>
    </div>
  )
}

const style={width:200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}


const ToggleMessage=()=>{
  const [isVisible, setVisible]=useState(false);


  return (
    <div>
      <button onClick={()=>setVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>

  );
};


function PostComponent({name, subtitle,time, image, description}){
  return <div style={style}>
   <div style={{display: "flex"}}>
    <img src={image} style={{
      width: 30,
      height: 30,
      borderRadius: 20
    }} />
    <div style={{fontSize: 10, marginLeft: 10}}>
      <b>
        {name}
      </b>
      <div>{subtitle}</div>
      {(time !==undefined) ? <div style={{display: "flex"}}>
        <div>{time}</div>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5omqwStGIsN2vYlzhOcb04DUreWCDhdQIw&s"} style={{width: 12, height: 12}}/>
      </div> : null} 
    </div>
  </div>
  <div style={{fontSize: 12}}>
     {description}
    </div>

   </div>
}

const Greeting = ({name}) => {
  return <div style={{fontSize: 30, fontWeight: "bold", marginTop: 20}}>
    Hello {name}
  </div>
}
export default App

import './App.css';
import { useState } from 'react';
import Card from './reuseables/card';




function App() {

  const [people, updatePeople] =useState([
      {id: 1, name: "Kasie Ugwu", description: ["Kind", "Smart", "Funny"], profilePics: "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"},
      {id: 2, name: "Ogochukwu Ugorji", description: ["Kind", "Quiet", "Understanding"], profilePics: "https://t3.ftcdn.net/jpg/04/67/95/40/360_F_467954064_qFJxeuLVPcXon6X478v9hdgHrRlNgzDB.jpg"},
      {id: 3, name: "Kasie Adams", description: ["Kind", "Smart", "Jovial"], profilePics: "https://us.123rf.com/450wm/moremar/moremar1904/moremar190400023/moremar190400023.jpg?ver=6"},
      {id: 4, name: "Grace Lee", description: ["Kind", "Smart", "Playful"], profilePics: "https://thumbs.dreamstime.com/b/indian-woman-face-avatar-cartoon-indian-woman-face-makeup-earrings-profile-picture-avatar-cartoon-character-portrait-150832491.jpg"},
      {id: 5, name: "Ugo Peter", description: ["Kind", "Smart", "Calculative"], profilePics: "https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"}
  ])


  const handleDelete = (id) =>{
    let temp = people.filter(each => each.id !== id)
    updatePeople(temp)
  }

  

  return (
    <div  style={{ color: 'blue' }} className="App">
     <div className="container">
      <div className="row">
      {people.map(item =>{
        return(<Card key={item.id} name={item.name} profilePics={item.profilePics} id={item.id} description={item.description}  handleDelete={handleDelete} />)
      })}
      </div>
     </div>
    </div>
  );
}

export default App;





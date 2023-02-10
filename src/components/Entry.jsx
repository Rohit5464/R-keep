import React, {useState} from 'react'
import * as Icon from "react-bootstrap-icons";

const Entry = (props) => {

    const [note , setnote] = useState({
        title : "",
        content: ""
    })

    function change(event){
        const {value , name} = event.target;
        
        setnote(old => {
            return{
                ...old,
                [name] : value
        }
        })
    }
    const [anime , setshow] = useState(false)

    function click(event){
        props.add(note)
        setnote({
            title: "",
            content: ""
          });
          setshow(false);
        event.preventDefault();
    }
    
    function show(){
      setshow(true);
    }
  return (
    <div>
        <form>
        <input name="title" value={note.title} placeholder='Title' onChange={change} onClick={show}/>
        {anime?<textarea name="content" value={note.content} id="index" placeholder='Take your note...' onChange={change} rows="5" ></textarea>:null}
        <button onClick={click} ><Icon.PlusCircleFill/>
        </button>
        </form>
        
    </div>
  )
}

export default Entry
import React from 'react';
import './App.css';
import io from "socket.io-client"

const socket = io("http://localhost:80")

function CommentView() {
  const [name, setName] = React.useState("")
  const [comment, setComment] = React.useState("")
  const receivedCommentsRef = React.useRef()

  React.useEffect(() => {
    socket.on("comment", (data) => {
      if(receivedCommentsRef) {
        const comment =  document.createElement("div")
        comment.textContent = `${data.name} ${data.comment}`
        receivedCommentsRef.current.appendChild(comment)
      }
    }) 
  }, [])

  return (
    <div className="CommentView"> 
      <div className="commet-form" >
        <label> 投稿者名 </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label> コメント </label>
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
        <input type="submit" value="Submit" onClick={() => {
          socket.emit("on_comment", {name: name, comment: comment})
        }} />
      </div>
      <div className="commentList" ref={receivedCommentsRef}>
      </div>
    </div>
  )
}

export default CommentView

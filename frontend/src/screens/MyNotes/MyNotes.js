import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios"

const MyNotes = () => {

  const [notes,setNotes] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async ()=>{
      
    const {data} = await axios.get("/api/notes")

    setNotes(data)
  }

  useEffect(()=>{

    fetchNotes()
  },[])

  return (
    <div>
      <MainScreen title="Welcome back name">
        <Link to="/addnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Add a New Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                    borderStyle:"none"
                  }}
                ><Accordion.Header as={Card.Text}>
                    
                        {note.title}
                    </Accordion.Header>
                  
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
                  <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
              </Accordion.Body>
              
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;

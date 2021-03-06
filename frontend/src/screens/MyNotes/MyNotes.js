import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router";

const MyNotes = ({search}) => {

  const dispatch = useDispatch();
  const noteList = useSelector(state=>state.noteList)
  const {loading, notes, error} = noteList
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const noteCreate = useSelector(state => state.noteCreate)
  const { success: successCreate} = noteCreate

  const noteUpdate = useSelector(state=> state.noteUpdate);
  const {success: successUpdate} = noteUpdate;

  const noteDelete = useSelector(state=> state.noteDelete);
  const {loading : loadingDelete, error:errorDelete,success: successDelete} = noteDelete;

  const { userInfo} = userLogin


  const deleteHandler = (id) => {
  
  
  if (window.confirm("Are you sure?")) {
    dispatch(deleteNoteAction(id))
    }
  };


  useEffect(()=>{
    dispatch(listNotes());
    if(!userInfo){
      navigate("/")
    }
  
  },[dispatch, successCreate, navigate, userInfo, successUpdate, successDelete])

  return (
    <div>
      <MainScreen title={`Welcome back ${userInfo.name}`}>
        <Link to="/addnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Add a New Note
          </Button>
        </Link>
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {(loadingDelete || loading) && <Loading/>}
        {notes?.reverse().filter(filteredNote=>(
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )).map((note) => (
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
                    Created On{" "}
                    <cite title="Source Title">
                       {note.createdAt.substring(0,10)}
                    </cite>
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

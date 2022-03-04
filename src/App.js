import { useState } from "react";
import "./assets/style.css";
import Navbar from "./components/Navbar/Navbar";
import Band from "./components/Band/Band";
import TourSection from "./components/TourSection/TourSection";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input } from "reactstrap";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import axios from "axios";

const data = [
  {
    username: "mark",
    location: "BSD",
    likes: 1,
    caption: "hello world",
  },
  {
    username: "seto",
    location: "Bali",
    likes: 10,
    caption: "WFB dlu ahh",
  },
  {
    username: "bill",
    location: "puncak",
    likes: 0,
    caption: "macet gesss",
  },
  {
    username: "ken",
    location: "bandung",
    likes: 100,
    caption: "ademm",
  },
];

// const toDoList = [
//   {
//     date: "1 March 2022",
//     action: "Makan",
//     status: "done",
//   },
//   {
//     date: "2 March 2022",
//     action: "Belajar Programming",
//     status: "done",
//   },
//   {
//     date: "5 March 2022",
//     action: "Tidur",
//     status: "on going",
//   },
//   {
//     date: "3 March 2022",
//     action: "Jalan-Jalan",
//     status: "on going",
//   },
//   {
//     date: "8 March 2022",
//     action: "Belajar Programming",
//     status: "on going",
//   },
// ];

function App() {
  const [myUserName, setMyUserName] = useState("seto");
  const [toDoInputValue, setToDoInputValue] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [toDoList, setToDoList] = useState([]);
  // [
  //   {
  //     date: new Date(2022, 2, 1),
  //     action: "Makan",
  //     status: true,
  //   },
  //   {
  //     date: new Date(2022, 2, 2),
  //     action: "Belajar Programming",
  //     status: true,
  //   },
  //   {
  //     date: new Date(2022, 2, 3),
  //     action: "Tidur",
  //     status: true,
  //   },
  //   {
  //     date: new Date(2022, 2, 4),
  //     action: "Jalan-Jalan",
  //     status: false,
  //   },
  //   {
  //     date: new Date(2022, 2, 5),
  //     action: "Belajar Programming",
  //     status: false,
  //   },
  // ]

  const ChangeUsername = () => {
    setMyUserName("bill");
  };

  const renderContentList = () => {
    // return data.map((val) => {
    //   return (
    //     <ContentCard
    //       username={val.username}
    //       location={val.location}
    //       likes={val.likes}
    //       caption={val.caption}
    //     />
    //   );
    // });
    return toDoList.map((val, idx) => {
      return (
        <ToDoItem
          date={val.date}
          action={val.action}
          status={val.status}
          deleteTodo={() => deleteData(val.id)}
          editStatus={() => editStatus(val.id)}
        />
      );
    });
  };

  const addToDoList = () => {
    const addNewData = {
      date: new Date(date),
      action: toDoInputValue,
      status: Boolean(parseInt(status)),
    };
    axios.post("http://localhost:2000/todos", addNewData).then(() => {
      fetchToDoList();
    });
  };

  // hanya bisa return satu component atau tag pembungkus, klo perlu bnayak pembungkus bisa pake tag kosong, khusus react

  const deleteData = (id) => {
    axios.delete(`http://localhost:2000/todos/${id}`).then(() => {
      fetchToDoList();
    });
  };

  const editStatus = (id) => {
    const dataToFind = toDoList.find((val) => {
      return val.id === id;
    });

    // axios.get(`http://localhost:2000/todos/${id}`).then((res) => {
    //   const newStatusValue = !res.data.status;
    axios
      .patch(`http://localhost:2000/todos/${id}`, {
        status: !dataToFind.status,
      })
      .then(() => {
        fetchToDoList();
      });
    // });
  };

  // -------- TODO -----------
  // const [inputHandler, setInputHandler] = useState({
  //   toDoList: "",
  //   date: ""
  // })

  const inputHandler = (event) => {
    const { value } = event.target;
    setToDoInputValue(value);
  };

  const dateHandler = (event) => {
    const { value } = event.target;
    setDate(value);
  };

  const statusHandler = (event) => {
    const { value } = event.target;
    setStatus(value);
    console.log(value);
  };

  const fetchToDoList = () => {
    axios.get("http://localhost:2000/todos").then((res) => {
      setToDoList(res.data);
    });

    console.log("Request");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row my-3">
          <div className="offset-3 col-5">
            <Input onChange={inputHandler} />
            <Input onChange={dateHandler} type="date" />
            <Input onChange={statusHandler} type="select" name="status">
              <option>-</option>
              <option value={1}>Done</option>
              <option value={0}>On Going</option>
            </Input>
          </div>
          <div className="col-2 d-flex flex-column">
            <Button onClick={addToDoList} color="success">
              Add
            </Button>
            <Button onClick={fetchToDoList} color="info">
              Fetch ToDo
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {renderContentList()}
          </div>
        </div>
      </div>
      {/* <Jumbotron />
      <Band />
      <TourSection />
      <ClassComponent /> */}
    </>
  );
}

export default App;

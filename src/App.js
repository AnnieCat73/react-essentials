import React from 'react';
import { useState } from 'react'
//import emojipedia from './emojipedia';
//import Entry from './Entry';
//import Arrays from './Arrays';
//import { useState } from 'react'







function App() {


  /*let now = new Date().toLocaleTimeString();
  setInterval(3000, updateTime);
  let isDone = true;

  const strikeThrough = { textDecoration: "line-through" }
  const [time, setTime] = useState(now)
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);

  }
  const [count, setCount] = useState(0);
  function decrease() {
    setCount(count - 1);
  }*/
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  function handleClick() {
    setHeadingText("Submitted")
  }
  function handleMouseOver() {
    setMouseOver(true)
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  const endpoints = [
    {
      name: 'GET /trips',
      description: 'List all the trips',
    },
    {
      name: 'POST /trips',
      description: 'Create a new trip',
      parameters: [
        { name: 'user', description: '*required* the id of the user' },
        { name: 'name', description: '*required* the name of the trip' },
        {
          name: 'start_date',
          description: '(optional) the starting date of the trip',
        },
        {
          name: 'end_date',
          description: '(optional) the end date of the trip',
        },
      ],
    },
    {
      name: 'GET /trips/:id',
      description: 'Get the details of a trip, including expenses',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the trip',
        },
      ],
      response: `

      `,
    },
    {
      name: 'PUT /trips/:id',
      description: 'Edit a trip',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the trip',
        },
        { name: 'name', description: '(optional) the name of the trip' },
        {
          name: 'start_date',
          description: '(optional) the starting date of the trip',
        },
        {
          name: 'end_date',
          description: '(optional) the end date of the trip',
        },
      ],
    },
    {
      name: 'DELETE /trips/:id',
      description: 'Delete a trip',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the trip',
        },
      ],
    },
    {
      name: 'POST /expenses',
      description: 'Create a new expense',
      parameters: [
        {
          name: 'trip',
          description: '*required* the number that identifies the trip',
        },
        { name: 'name', description: '*required* the name of the expense' },
        { name: 'date', description: '*required* the date of the expense' },
        { name: 'amount', description: '*required* the amount of the expense' },
        {
          name: 'currency',
          description: '*required* the currency of the expense',
        },
      ],
    },
    {
      name: 'GET /expenses/:id',
      description: 'Get the details of an expense',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the expense',
        },
      ],
    },
    {
      name: 'PUT /expenses/:id',
      description: 'Edit an expense',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the expense',
        },
        {
          name: 'trip',
          description: '(optional) the number that identifies the trip',
        },
        { name: 'name', description: '(optional) the name of the expense' },
        { name: 'date', description: '(optional) the date of the expense' },
        { name: 'amount', description: '(optional) the amount of the expense' },
        {
          name: 'currency',
          description: '(optional) the currency of the expense',
        },
      ],
    },
    {
      name: 'DELETE /expense',
      description: 'Delete an expense',
      parameters: [
        {
          name: 'id',
          description: '*required* the number that identifies the expense',
        },
      ],
    },
  ]

  const [name, setName] = useState("");
  const [headingTexter, setHeadingTexter] = useState("");

  function handleChange(e) {
    //console.log(e.target.value);//f.x dddr
    //console.log(e.target.placeholder);//What's your name?
    //console.log(e.target.type);//text
    setName(e.target.value)
  }

  function handleClicker(e) {
    setHeadingTexter(name);
    e.preventDefault();
  }

  /*Complex*/
  const [fullName, setFullname] = useState({
    fName: "",
    lName: ""
  });

  function handleChange1(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullname(prevValue => {
      //console.log(prevValue);//so don't delete prev value
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        }
      }
    })
  }
  //Complex React practice with prev value
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;//destructured so same as:
    //const newValue = event.target.value;
    //const inputName = event.target.name;
    setContact((prevValue) => {
      //console.log(prevValue)
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      }
    })
  }

  return (

    <div>
      <section>
        <div className="container">
          <h1>
            Hello {contact.fName} {contact.lName}
          </h1>
          <p>{contact.email}</p>
          <form>
            <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
            <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
            <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
            <button>Submit</button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Hello {fullName.fName} {fullName.lName}</h1>
          <form>
            <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} />
            <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName} />
            <button>Submit</button>
          </form>
        </div>
      </section>


      <section>
        <div className="container">
          <h1>Hello {headingTexter}</h1>
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={name}
          />
          <button onClick={handleClicker}>Submit</button>
        </div>
      </section>
      <header>
        <h1>Trips API</h1>
      </header>
      <main>

        <p>The documentation</p>
        <div>
          {endpoints.map(endpoint => (
            <div>
              <h2>{endpoint.name}</h2>
              <p>{endpoint.description}</p>
              {endpoint.parameters && (
                <>
                  <p>Parameters:</p>
                  <ul>
                    {endpoint.parameters.map((parameter, index) => (
                      <li key={index}>{parameter.name}: {parameter.description}</li>
                    ))}
                  </ul>
                </>
              )}
              {endpoint.response && (
                <>
                  <p>Example response</p>
                  <code>{endpoint.response}</code>
                </>
              )}
            </div>

          ))}

        </div>
      </main>
      <section>
        <div className="container">
          <h1>{headingText}</h1>
          <input type="text" placeholder="What's your name?" />
          <button style={{ backgroundColor: isMousedOver ? "black" : "white" }}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}

          >Submit</button>
        </div>
      </section>

    </div>











    /*}<div className='App' >
      <div className="container">
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
      </div>


      <p style={isDone ? strikeThrough : null}>Buy Milk</p>

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={decrease}>-</button>

      {/*<Heading />
      <List />
      <CurrentGreeting />
      <TodoList />
      <Practice authorized={true} />
      <Timeapp />

    < h1 >
    <span>emojipedia</span>
      </ >

      <dl className="dictionary">
        {/*}{emojipedia.map(createEntry)}}
        {
    emojipedia.map(emojiEntry => (
      <Entry
        key={emojiEntry.id}
        emoji={emojiEntry.emoji}
        name={emojiEntry.name}
        description={emojiEntry.meaning}
      />
    ))
    }
     

    <Arrays />

    </div >*/
  );
}




export default App;

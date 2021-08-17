import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const initialValue = [
  {
    id: 1,
    type: "pop music",
    rating: "6.5/10",
    name: "Piano Book Pop & Movie Hits",
  },
  {
    id: 2,
    type: "pop music",
    rating: "7.5/10",
    name: "Play Along 20/20 Violin",
  },
  {
    id: 3,
    type: "pop music",
    rating: "5.5/10",
    name: "Pop Music and Hip Ennui",
  },
  {
    id: 4,
    type: "pop music",
    rating: "9.5/10",
    name: "Switched On Pop",
  },
  {
    id: 5,
    type: "pop music",
    rating: "8.5/10",
    name: "Yeah! Yeah! Yeah!",
  },

  {
    id: 6,
    type: "old time music",
    rating: "5.5/10",
    name: "Rip it Up and Start Again",
  },
  {
    id: 7,
    type: "old time music",
    rating: "4.5/10",
    name: "Lipstick Traces",
  },
  {
    id: 8,
    type: "old time music",
    rating: "3.5/10",
    name: "Woody Guthrie",
  },
  {
    id: 9,
    type: "old time music",
    rating: "6.5/10",
    name: "Devil's Box",
  },
  {
    id: 10,
    type: "old time music",
    rating: "8.5/10",
    name: "Broad Street",
  },
  {
    id: 11,
    type: "Symphony",
    rating: "5.5/10",
    name: "Welcome To The Symphony",
  },
  {
    id: 12,
    type: "Symphony",
    rating: "4.5/10",
    name: "The Story Orchestra",
  },
  {
    id: 13,
    type: "Symphony",
    rating: "7.5/10",
    name: "Carnival of the Animals",
  },
  {
    id: 14,
    type: "Symphony",
    rating: "2.5/10",
    name: "Wild Symphony",
  },
  {
    id: 15,
    type: "Symphony",
    rating: "8.5/10",
    name: "Allegro",
  },
  {
    id: 16,
    type: "Jazz",
    rating: "3.5/10",
    name: "The History of Jazz",
  },
  {
    id: 17,
    type: "Jazz",
    rating: "4.5/10",
    name: "Lady Sings the Blues",
  },
  {
    id: 18,
    type: "Jazz",
    rating: "7.5/10",
    name: "Thelonious Monk",
  },
  {
    id: 19,
    type: "Jazz",
    rating: "9.5/10",
    name: "Lush Life",
  },
  {
    id: 20,
    type: "Jazz",
    rating: "1.5/10",
    name: "Space is the Place",
  },
];

export default function App() {
  const [books, setBooks] = useState(initialValue);

  const handleClick = (category) => {
    if (category === "all") {
      return setBooks(initialValue);
    }
    const filteredBooks = initialValue.filter((book) => {
      return book.type === category;
    });
    setBooks(filteredBooks);
  };

  return (
    <div className="App">
      <h1>Musical Books Categories</h1>
      <button className="btn" onClick={() => handleClick("all")}>
        All Books
      </button>
      <button className="btn" onClick={() => handleClick("pop music")}>
        pop music
      </button>
      <button className="btn" onClick={() => handleClick("old time music")}>
        old time music
      </button>
      <button className="btn" onClick={() => handleClick("Symphony")}>
        Symphony
      </button>
      <button className="btn" onClick={() => handleClick("Jazz")}>
        Jazz
      </button>

      <div>
        {books.map((book) => {
          return (
            <div key={book.id}>
              {" "}
              {book.name} {book.rating}
            </div>
          );
        })}
      </div>
    </div>
  );
}

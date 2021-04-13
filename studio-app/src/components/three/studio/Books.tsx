import { useEffect, useState } from "react";

// components
import Book from "./Book";

// http
import { getBooksData } from "../../../http/studio";

// type
import { BookData } from "../../../types/studio";

const Books = () => {
  const [data, setData] = useState<BookData[]>(null);
  const getData = async () => {
    const data = await getBooksData();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <group>
      {data &&
        data.map((item, i) => (
          <Book
            position={item.position}
            rotation={item.rotation}
            key={`book-${i}`}
          />
        ))}
    </group>
  );
};

export default Books;

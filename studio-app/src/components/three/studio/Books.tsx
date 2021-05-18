import React, { useEffect, useState } from "react";

// components
import Book from "./Book-archived";

// http
import { getBooksData } from "../../../http/studio";

// type
import { BookModelData } from "../../../types/studio";

const Books = () => {
  const [data, setData] = useState<BookModelData[]>(null);
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
            key={item.id}
          />
        ))}
    </group>
  );
};

export default Books;

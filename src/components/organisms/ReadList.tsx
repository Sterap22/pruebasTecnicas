import { useEffect, useState } from "react"
import { UILabel } from "../atoms/UILabel"
import { IBook } from "../../Interfaces/IBooks";
import dataBooks from '../../assets/products.json';
import { BooksCard } from "../molecules/BooksCard";

export const ReadList = () => {
    const [Data, setData] = useState<string[]>([]); //  Data lista de  lectura
    const [allBooks, setAllBooks] = useState<IBook[]>([]); // Todos los libros

    useEffect(() => {
        const datBook = localStorage.getItem('data_ReadBook');
        if (!!datBook) {
            const booksList = dataBooks.library.map((x) => x.book);
            setAllBooks(booksList);
            setData(JSON.parse(datBook))
        }
    }, [])
    

  return (
    <div >
        <UILabel tagCus='h4' classCus='text-center p-2 mt-6 text-black' styleCus={{ fontSize: '2rem' }}>
            Lista de lectura
        </UILabel>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-4 p-4 m-auto w-[80%] h-[80vh] overflow-y-auto'>
            {allBooks.map((book, index) => {
                if (Data.includes(book.ISBN)) {
                    return(
                        <BooksCard
                            key={'Card-' + index}
                            classCus='bg-cover bg-center h-[250px] w-[90%] rounded-md cursor-pointer'
                            cover={book.cover}
                            synopsis={book.synopsis}
                        />
                    )
                }
            })}
        </div>
    </div>
  )
}

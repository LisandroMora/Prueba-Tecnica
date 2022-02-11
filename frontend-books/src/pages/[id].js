import Banner from "@components/Banner/Index";
import bookService from "@services/getBook.service";

function book({ book }) {
    console.log(book)
    return (
        <div>
            <Banner />
            <div>
                <h1>{book.title}</h1>
                <p>{book.description}</p>

                <h2>Numero de paginas</h2>
                <p>{book.pageCount}</p>

                <h2>Fecha de publicacion</h2>
                <p>{book.publishDate}</p>

                <h3>Excerpt</h3>
                <p>{book.excerpt}</p>

            </div>
        </div>
    );
}

export default book;

export async function getServerSideProps(context) {
    const id = context.query.id;
    const book = await bookService(id);
    return { props: { book: book.books } };
}
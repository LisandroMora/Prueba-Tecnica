import { useRouter } from "next/router";
import { TableContainer } from "./style";

function Table({ table }) {
    const router = useRouter();
    const handleClick = (id) => {
        router.push(`/${id}`);
    }
    return (
        <TableContainer>
            <div className="table">
                <div className="table-head">
                    <div className="table-head-row">
                        <div className="table-head-cell">ID</div>
                        <div className="table-head-cell">Titulo</div>
                        <div className="table-head-cell">Fecha de publicacion</div>
                        <div className="table-head-cell">Acciones</div>
                    </div>
                </div>
            </div>
            <div className="table-body">
                {table.map(item => (
                    <div className="table-body-row" key={item.id} onClick={() => handleClick(item.id)}>
                        <div className="table-body-cell">{item.id}</div>
                        <div className="table-body-cell">{item.title}</div>
                        <div className="table-body-cell">{new Date(item.publishDate).toDateString()}</div>
                        <div className="table-body-cell acciones">
                            <div>Editar</div>
                            <div>Borrar</div>
                        </div>
                    </div>
                ))}
            </div>
        </TableContainer>
    );
}

export default Table;
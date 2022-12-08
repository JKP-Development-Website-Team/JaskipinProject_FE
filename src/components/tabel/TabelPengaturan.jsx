import { useState } from "react";
import { Button } from "react-bootstrap";

function TabelPengaturan({ 
  columns, 
  dataTable, 
  colSpan,
  actionButton 
}) {

  const [isShow, setIsShow] = useState(false);
  const [isDetail, setIsDetail] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const curentPost = dataTable.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = pageNumber => setCurrentPage(pageNumber);
  let paginationPage = [];
  for(let i = 1;i <= Math.ceil(dataTable.length / postPerPage); i++) {
    paginationPage.push(i)
  }

  return (
    <table className="mt-3">
      <thead>
        <tr
          style={{
            backgroundColor: "#0843AD",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {columns?.map((head) => (
            <th>{head.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {curentPost?.map((row) => (
            <tr key={row.id}>
            {columns?.map((col, idx) => {
              return (
                <td
                key={idx}
                 className={col.fieldAction && `d-flex fw-bold justify-content-between align-items-center`}
                >{row[col.field] === "" ? actionButton(row.id): row[col.field]}
                </td>
              )
            })}
          </tr>
         ))}
        {/* Pagination */}
        <tr>
          <td
            colSpan={colSpan.colOne}
            style={{
              padding: "1.7rem",
              color: "#828181",
            }}
          >
            Menampilkan {curentPost.length} dari {dataTable.length}
          </td>
          <td colSpan={colSpan.colTwo} style={{}}>
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginLeft: "-30px",
              }}
            >
              <Button
                variant="light"
                size="sm"
                style={{ border: "2px solid #828181", color: "#828181" }}
                onClick={() => setCurrentPage((state) => state <= 1 ? state - 0 : state - 1)}
              >
                Sebelumnya
              </Button>

              <Button
                style={{ backgroundColor: "#0843AD", border: "none" }}
                className="d-flex justify-content-center"
                size="sm"
                onClick={() => setCurrentPage((state) => state >= paginationPage.length ? state : state + 1)}
              >
                Selanjutnya
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TabelPengaturan;

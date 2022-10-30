import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function TabelCalonAgen() {
  return (
    <Container>
      <Table striped bordered hover size="sm" style={{ marginTop: "10vh", borderRadius: "100px" }} className="rounded">
        <thead>
          <tr style={{ backgroundColor: "#0843AD" }} >
            <th>Status</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>No. Hp</th>
            <th>Kota</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default TabelCalonAgen;
function TabelLuarNegeri() {
  return (
    <table className="mt-3">
      <thead style={{}}>
        <tr
          style={{
            backgroundColor: "#0843AD",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <th>No. Order</th>
          <th>Nama</th>
          <th>No. Resi</th>
          <th>Alamat</th>
          <th>Tujuan </th>
          <th>Harga</th>
          <th>Berat</th>
          <th>Mitra</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JEX0000001</td>
          <td>Johndoe</td>
          <td>JEX0000001</td>
          <td>Jl. Siliwangi</td>
          <td>Taiwan</td>
          <td>Rp. 1000.000</td>
          <td>2 kg</td>
          <td>Fedex</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TabelLuarNegeri;

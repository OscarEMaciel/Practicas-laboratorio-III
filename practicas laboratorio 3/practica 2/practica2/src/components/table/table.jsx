const Table = ({ netIncomes }) => {
  if (!netIncomes || netIncomes.length === 0) {
    return <p>No hay datos de ingresos netos disponibles.</p>;
  }

  const averageIncome = (
    netIncomes.reduce((total, current) => total + current.income, 0) /
    netIncomes.length
  ).toFixed(2);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de ingreso neto: {averageIncome}</p>
    </div>
  );
};

export default Table;

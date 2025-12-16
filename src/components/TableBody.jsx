const TableBody = (props) => {
  const {columns, tableData} = props;
  const getValue = (obj, path) => {
    if (!path) return undefined;
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
  };

  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.teamName.default}>
            {columns.map(({accessor}) => {
              const tData = getValue(data, accessor) ?? '-';
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;

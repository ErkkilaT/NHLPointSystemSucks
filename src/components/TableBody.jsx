import './TableBody.css';
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
              if (accessor != 'teamLogoLocal') {
                return <td key={accessor}>{tData}</td>;
              } else if (accessor == 'teamLogoLocal') {
                return (
                  <td>
                    <img
                      src={data.teamLogoLocal}
                      alt={data.teamAbbrev.default}
                      className="team-logo"
                    ></img>
                  </td>
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;

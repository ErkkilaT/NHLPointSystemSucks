const TableHead = (props) => {
  const {columns, onSort, sortConfig} = props;
  const getIndicator = (accessor) => {
    if (sortConfig.key !== accessor) return '';
    return sortConfig.direction === 'asc'
      ? ' ' + String.fromCharCode(9650)
      : ' ' + String.fromCharCode(9660);
  };

  return (
    <thead>
      <tr>
        {columns.map(({label, accessor}) => {
          return (
            <th
              key={accessor}
              onClick={() => onSort(accessor)}
              style={{cursor: 'pointer'}}
            >
              {label}
              {getIndicator(accessor)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHead;

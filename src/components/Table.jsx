import TableHead from './TableHead.jsx';
import TableBody from './TableBody';
import {useMemo, useState} from 'react';

const Table = (props) => {
  const {columns, tableData} = props;
  const [sortConfig, setSortConfig] = useState({
    key: 'points',
    direction: 'desc',
  });

  const getValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
  };
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return tableData;

    const sorted = [...tableData].sort((a, b) => {
      const aVal = getValue(a, sortConfig.key);
      const bVal = getValue(b, sortConfig.key);

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [tableData, sortConfig]);

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  };

  return (
    <table>
      <TableHead
        columns={columns}
        onSort={requestSort}
        sortConfig={sortConfig}
      />
      <TableBody columns={columns} tableData={sortedData} />
    </table>
  );
};
export default Table;

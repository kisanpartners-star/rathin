import type { DataTable } from '../data/types';

/**
 * Responsive data table. On screens wider than 700px it is a normal table (scrolls sideways if very wide).
 * On phones every row becomes a small card with "label: value" lines, so nothing ever needs sideways scrolling.
 */
export function DataTableView({ table }: { table: DataTable }) {
  const first = table.columns[0];
  return (
    <figure className={`dtable${/^(Level|Stage)$/.test(first) ? ' dtable--grid' : ''}`}>
      <figcaption className="dtable__title">{table.title}</figcaption>
      <div className="dtable__wrap">
        <table className="dtable__table">
          <thead>
            <tr>
              {table.columns.map((c) => (
                <th key={c} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={`${row[0]}-${i}`}>
                {row.map((cell, j) => (
                  <td key={j} data-label={table.columns[j]} className={j === 0 ? 'is-first' : undefined}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note ? <p className="dtable__note">{table.note}</p> : null}
    </figure>
  );
}

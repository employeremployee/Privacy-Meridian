import DifferenceBadge from './DifferenceBadge.jsx'

function GridRow({ row, jurisdictionOrder, onCellClick }) {
  return (
    <tr>
      <th
        scope="row"
        className="sticky left-0 z-10 border-t border-rule bg-surface p-3 text-left text-sm font-medium text-ink"
      >
        {row.label}
      </th>
      {jurisdictionOrder.map((jid) => {
        const cell = row.jurisdictions[jid]
        if (!cell) {
          return <td key={jid} className="border-t border-rule bg-paper p-3 align-top" />
        }
        return (
          <td key={jid} className="border-t border-rule bg-paper p-3 align-top text-sm text-ink">
            {cell.articleId ? (
              <button
                type="button"
                onClick={() => onCellClick(jid, cell.articleId)}
                className="text-left underline decoration-dotted hover:decoration-solid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-blue"
              >
                {cell.value}
              </button>
            ) : (
              <span>{cell.value}</span>
            )}
            {cell.differenceType && (
              <div className="mt-1">
                <DifferenceBadge type={cell.differenceType} />
              </div>
            )}
          </td>
        )
      })}
    </tr>
  )
}

export default GridRow

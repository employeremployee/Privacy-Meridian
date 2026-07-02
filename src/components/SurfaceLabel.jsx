function SurfaceLabel({ articleRef, label, summary }) {
  return (
    <div>
      <p className="font-mono text-sm text-ink">{articleRef}</p>
      <h2 className="mt-1 text-2xl font-bold text-ink">{label}</h2>
      <p className="mt-2 text-base text-ink">{summary}</p>
    </div>
  )
}

export default SurfaceLabel

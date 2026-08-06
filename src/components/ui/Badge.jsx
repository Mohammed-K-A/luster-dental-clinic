function Badge({ children }) {
  return (
    <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
      {children}
    </span>
  );
}

export default Badge;
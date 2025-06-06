export function Button({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#1d4ed8',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
export function Card({ children, ...props }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '0.5rem', padding: '0.5rem', background: 'white' }} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
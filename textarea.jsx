export function Textarea({ value, onChange, ...props }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      style={{ width: '100%', height: '200px', padding: '0.5rem', fontFamily: 'monospace', fontSize: '1rem' }}
      {...props}
    />
  );
}
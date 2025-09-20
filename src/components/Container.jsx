export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-screen-md px-4 md:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

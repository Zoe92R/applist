// example. todo: change to match design
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-900 hover:bg-gray-300";
  return (
    <button
      className={`rounded-md px-4 py-2 font-medium ${styles} ${className}`}
      {...props}
    />
  );
}

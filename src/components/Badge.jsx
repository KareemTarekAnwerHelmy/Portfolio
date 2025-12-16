export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border border-blue-100 dark:border-blue-800',
    secondary: 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700',
    success: 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200 border border-green-100 dark:border-green-800',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
export default function Headerinfo({ Icon, title }) {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span className="capitalize text-base font-semibold text-zinc-900 dark:text-zinc-400">
        {title}
      </span>
    </div>
  );
}

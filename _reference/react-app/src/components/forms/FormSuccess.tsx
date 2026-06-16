import { Icon } from "@/components/ui/Icon";

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-[color:var(--color-success)]/30 bg-[color:var(--color-success)]/10 p-10 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-[color:var(--color-success)]/20 text-[color:var(--color-success)]">
        <Icon name="CircleCheck" className="size-7" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-fg">{title}</h3>
      <p className="mt-2 max-w-md text-ink-200">{body}</p>
    </div>
  );
}

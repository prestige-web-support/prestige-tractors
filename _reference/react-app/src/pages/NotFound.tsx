import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/data/navigation";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[36rem] -translate-x-1/2 glow-brand opacity-30" />
      <Container className="py-32 text-center">
        <p className="font-display text-[6rem] font-black leading-none text-fg sm:text-[9rem]">
          4<span className="text-brand-500">0</span>4
        </p>
        <h1 className="mt-2 font-display text-2xl font-extrabold text-fg sm:text-3xl">
          This paddock's empty
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          The page you're looking for has moved or no longer exists. Let's get you back on track.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to={ROUTES.home} icon="ArrowRight">Back to home</Button>
          <Button to={ROUTES.equipment} variant="secondary">Browse equipment</Button>
        </div>
      </Container>
    </section>
  );
}

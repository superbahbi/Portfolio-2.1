export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Bobby Lee</p>
      <p>Made slowly, on purpose.</p>
    </footer>
  );
}

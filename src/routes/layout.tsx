import { component$, Slot, useStyles$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main class="h-full">
      <Slot />
    </main>
  );
});

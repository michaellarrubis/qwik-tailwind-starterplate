import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <p class="font-bold text-2xl">Takaon!</p>
  );
});

export const head: DocumentHead = {
  title: 'Takaon',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

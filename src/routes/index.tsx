import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <p class="font-bold text-2xl">Welcome! This is a starter template for Qwik + Tailwind</p>
  );
});

export const head: DocumentHead = {
  title: 'Boilerplate: Qwik & Tailwind ',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

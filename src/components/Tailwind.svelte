<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .logo {
    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 65px;
    letter-spacing: 0.21em;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo span {
    display: block;
    margin-left: 6px;
    width: 31px;
    height: 31px;
  }

  .header .bg-element {
    background-image: url(/bg/top-bg.svg);
    background-position: bottom;
    background-size: cover;
    width: 100%;
    height: 240px;
    position: absolute;
  }

  .page-title {
    @apply font-title text-4xl font-bold;
  }

  .input {
    @apply bg-gray-200 rounded text-gray-500 p-5 w-full block;
  }

  .input.with-error {
    @apply border-red-500 border;
  }

  .input::placeholder {
    @apply text-gray-500;
  }

  .content {
    @apply px-10;
  }

  .button {
    @apply rounded px-6 py-5 font-bold font-body text-white text-lg flex justify-center items-center;
  }

  .button.success {
    @apply bg-green-500;
  }

  .button.default {
    @apply bg-gray-500;
  }

  .button.loading {
    @apply bg-gray-200;
    content: "Loading ...";
  }

  .card {
    @apply rounded w-full py-8 px-6 shadow-xs;
  }

  .card.default {
    @apply text-black bg-gray-100;
  }

  .card.success {
    @apply text-white bg-green-500;
  }

  .card-title-xs {
    @apply font-body text-sm font-bold text-gray-500 mb-2;
  }

  .card.success .card-title-xs {
    @apply text-white bg-green-500 text-white;
  }

  .card-value {
    @apply font-title text-3xl font-bold;
  }

  .card-stat {
    @apply mb-8;
  }
</style>

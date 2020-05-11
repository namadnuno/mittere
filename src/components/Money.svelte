<script>
  export let value;
</script>

<span>
  {new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)}
</span>

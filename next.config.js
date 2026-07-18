module.exports = {
  reactStrictMode: true,
  // Export estático: `next build` gera out/ servível por qualquer host (Hostinger).
  output: 'export',
  // O otimizador de imagens exige servidor Node; com export estático usamos os arquivos como estão.
  images: { unoptimized: true },
}

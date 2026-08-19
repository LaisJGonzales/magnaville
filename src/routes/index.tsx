import { createFileRoute, redirect } from "@tanstack/react-router";

// O site em si é HTML/CSS/JS puro e vive na pasta "public":
//   public/site.html        -> textos e estrutura
//   public/css/estilo.css   -> cores e aparência
//   public/js/scripts.js    -> dados (obras, serviços, contato)
// Esta rota apenas manda o visitante do endereço "/" para o site.
export const Route = createFileRoute("/")({
  loader: () => {
    throw redirect({ href: "/site.html" });
  },
  component: () => null,
});

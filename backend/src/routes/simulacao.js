import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { valor_imovel, percentual_entrada, anos_contrato } = req.body;

  if (
    typeof valor_imovel !== "number" ||
    typeof percentual_entrada !== "number" ||
    typeof anos_contrato !== "number"
  ) {
    return res.status(400).json({ error: "Parâmetros inválidos" });
  }

  if (
    percentual_entrada < 5 ||
    percentual_entrada > 20 ||
    anos_contrato < 1 ||
    anos_contrato > 5
  ) {
    return res
      .status(400)
      .json({ error: "Valores fora das faixas permitidas." });
  }

  const valor_entrada = valor_imovel * (percentual_entrada / 100);
  const valor_financiado = valor_imovel - valor_entrada;
  const total_a_guardar = valor_imovel * 0.15;
  const parcela_mensal = parseFloat(
    (total_a_guardar / (anos_contrato * 12)).toFixed(2)
  );

  res.status(200).json({
    valor_entrada,
    valor_financiado,
    total_a_guardar,
    parcela_mensal,
  });
});

export default router;

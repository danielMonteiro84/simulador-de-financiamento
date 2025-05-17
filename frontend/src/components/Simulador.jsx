import { useState } from "react";
import styles from "./Simulador.module.css";

//const API_URL = import.meta.env.VITE_API_URL || "http://backend:3000";

function Simulador() {
  const [valorImovel, setValorImovel] = useState("");
  const [percentualEntrada, setPercentualEntrada] = useState("");
  const [anosContrato, setAnosContrato] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSimular = async () => {
    if (
      !valorImovel ||
      !percentualEntrada ||
      !anosContrato ||
      percentualEntrada < 5 ||
      percentualEntrada > 20 ||
      anosContrato < 1 ||
      anosContrato > 5
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const response = await fetch(`/api/simulacao`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        valor_imovel: Number(valorImovel),
        percentual_entrada: Number(percentualEntrada),
        anos_contrato: Number(anosContrato),
      }),
    });

    const data = await response.json();
    setResultado(data);
  };

  return (
    <div className={styles.container}>
      <h1>Simulador de Compra de Imóvel</h1>
      <div className={styles.textArea}>
        <div className={styles.inputGroup}>
          <label htmlFor="valorImovel">Valor do imóvel</label>
          <input
            id="valorImovel"
            type="number"
            placeholder="Valor do imóvel"
            value={valorImovel}
            onChange={(e) => setValorImovel(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="percentualEntrada">
            Percentual de entrada (5% a 20%)
          </label>
          <input
            id="percentualEntrada"
            type="number"
            placeholder="Percentual de entrada (5% a 20%)"
            value={percentualEntrada}
            onChange={(e) => setPercentualEntrada(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="anosContrato">Duração do contrato (1 a 5 anos)</label>
          <input
            id="anosContrato"
            type="number"
            placeholder="Duração do contrato (1 a 5 anos)"
            value={anosContrato}
            onChange={(e) => setAnosContrato(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={handleSimular}>Simular</button>
      </div>

      {resultado && (
        <div className={styles.resultado}>
          <p>Valor da entrada: R$ {resultado.valor_entrada}</p>
          <p>Valor a financiar: R$ {resultado.valor_financiado}</p>
          <p>Total a guardar: R$ {resultado.total_a_guardar}</p>
          <p>Valor mensal a guardar: R$ {resultado.parcela_mensal}</p>
        </div>
      )}
    </div>
  );
}

export default Simulador;

import React, { useState, useMemo } from 'react';

function EjemploUseMemo({ datos }) {
  const [contador, setContador] = useState(0);

  // 1. Cálculo costoso memorizado
  const datosProcesados = useMemo(() => {
    console.log('Procesando datos...');
    // Imagina una operación pesada aquí
    return datos.filter(item => item > 5);
  }, [datos]); // 2. Dependencia: solo se recalcula si 'datos' cambia

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      {/* Al hacer click, el componente se renderiza, 
          pero 'datosProcesados' NO se recalcula */}
      <ul>
        {datosProcesados.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

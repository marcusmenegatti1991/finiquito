# Guía de Configuración: Google AdSense

## Paso 1: Solicitar Aprobación en Google AdSense

1. Visita [Google AdSense](https://www.google.com/adsense/start/)
2. Inicia sesión con tu cuenta de Google
3. Completa el formulario de solicitud:
   - Nombre del sitio: "Calculadora de Finiquito México"
   - URL del sitio: Tu dominio (ej: calculadora-finiquito.xyz)
   - Categoría: Finanzas / Impuestos
   - País: México
4. Acepta los términos y condiciones
5. Google revisará tu sitio (puede tomar 1-3 días)

## Paso 2: Reemplazar el Publisher ID

Una vez aprobado, reemplaza `ca-pub-xxxxxxxxxxxxxxxx` en `client/index.html` con tu Publisher ID:

```html
<!-- Línea 22 en client/index.html -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-TU_PUBLISHER_ID_AQUI"></script>
```

## Paso 3: Crear Unidades de Anuncios

En tu panel de AdSense:

1. Ve a "Anuncios" > "Unidades de anuncios"
2. Crea nuevas unidades para:
   - **Anuncio 1**: Sidebar izquierdo (300x250 o 336x280)
   - **Anuncio 2**: Sidebar derecho (300x250 o 336x280)
   - **Anuncio 3**: Footer (728x90 o 970x90)

3. Copia el código de cada unidad

## Paso 4: Insertar Anuncios en la Página

Reemplaza los espacios de "Espacio publicitario" en:
- `client/src/components/CalculadoraFiniquito.tsx` (líneas ~280 y ~380)
- `client/src/pages/Home.tsx` (si deseas agregar más)

Ejemplo:
```jsx
<div className="bg-gray-100 rounded-lg p-4">
  {/* Reemplaza esto con el código de AdSense */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins className="adsbygoogle"
       style={{display: 'block'}}
       data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
       data-ad-slot="1234567890"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

## Paso 5: Optimizar para Máximos Ingresos

### Ubicación de Anuncios
- **Arriba del pliegue**: Los anuncios visibles sin scroll generan más clics
- **Junto a contenido relevante**: Los anuncios sobre finanzas funcionan mejor en esta página
- **Múltiples formatos**: Combina anuncios rectangulares, horizontales y nativos

### Tamaño de Anuncios Recomendados
- **336x280**: Rectángulo grande (mejor rendimiento)
- **300x250**: Rectángulo medio (versátil)
- **728x90**: Leaderboard (arriba y abajo)
- **970x90**: Leaderboard grande (desktop)

### Estrategia de Contenido para SEO
1. **Palabras clave**: "finiquito", "calculadora finiquito", "liquidación laboral"
2. **Contenido largo**: Más contenido = más oportunidades de anuncios
3. **Actualizaciones regulares**: Mantén la LFT actualizada
4. **Backlinks**: Comparte en redes sociales y foros laborales

## Paso 6: Monitoreo y Análisis

En tu panel de AdSense:
- Monitorea CTR (Click-Through Rate)
- Revisa RPM (Revenue Per Mille)
- Analiza qué tipos de anuncios funcionan mejor
- Ajusta ubicaciones según el rendimiento

## Políticas Importantes

✅ **Permitido:**
- Anuncios contextuales
- Anuncios nativos
- Anuncios responsivos
- Múltiples anuncios por página

❌ **No permitido:**
- Hacer clic en tus propios anuncios
- Incentivar clics ("Haz clic en los anuncios")
- Colocar anuncios en contenido no relacionado
- Tráfico fraudulento

## Estimación de Ingresos

Basado en datos de la industria para calculadoras financieras en México:

- **CPM (Costo por Mil impresiones)**: $2-5 USD
- **CTR (Tasa de clics)**: 0.5-2%
- **Tráfico mensual esperado**: 1,000-10,000 visitantes

**Ejemplo:**
- 5,000 visitantes/mes
- 2% CTR
- 100 clics
- $3 CPM
- **Ingresos estimados**: $15-25 USD/mes (inicial)

Con optimización y crecimiento: $100-500+ USD/mes

## Próximos Pasos

1. Obtén un dominio (.xyz, .mom, etc.)
2. Solicita aprobación en AdSense
3. Configura los anuncios
4. Promociona en redes sociales
5. Monitorea y optimiza
6. Considera agregar más calculadoras (ISR, aguinaldo, etc.)

## Recursos Útiles

- [Google AdSense Help Center](https://support.google.com/adsense)
- [Best Practices for AdSense](https://support.google.com/adsense/answer/1282097)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)

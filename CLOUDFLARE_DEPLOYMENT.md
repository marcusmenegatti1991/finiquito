# Guía de Deployment: Cloudflare Pages + finiquito.xyz

## Pre-requisitos
- Cuenta en [Cloudflare](https://cloudflare.com) (la misma donde tienes casaamatista.mom)
- Dominio `finiquito.xyz` apuntando a Cloudflare
- Repositorio en GitHub (recomendado) o subir archivos manualmente

---

## Paso 1: Subir el código a GitHub

```bash
git init
git add .
git commit -m "Calculadora Finiquito v1.0"
git remote add origin https://github.com/TU_USUARIO/calculadora-finiquito-mexico.git
git push -u origin main
```

---

## Paso 2: Crear proyecto en Cloudflare Pages

1. Entra a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Ve a **Workers & Pages** → **Create application** → **Pages**
3. Conecta tu cuenta de GitHub y elige el repositorio `calculadora-finiquito-mexico`
4. Configura el build:

| Campo               | Valor                          |
|---------------------|-------------------------------|
| Framework preset    | None (o Vite)                 |
| Build command       | `pnpm run build:cloudflare`   |
| Build output dir    | `dist/public`                 |
| Root directory      | (dejar vacío)                 |
| Node.js version     | 20                            |

5. Haz clic en **Save and Deploy**

---

## Paso 3: Conectar el dominio finiquito.xyz

1. En Cloudflare Pages → tu proyecto → **Custom domains**
2. Haz clic en **Set up a custom domain**
3. Escribe: `finiquito.xyz`
4. Como ya tienes el dominio en Cloudflare, se configurará automáticamente
5. También agrega `www.finiquito.xyz` y configura redirección a la raíz

---

## Paso 4: Activar AdSense en el nuevo sitio

Tu cuenta AdSense ya existe (`ca-pub-4441710642783960`). Solo necesitas:

1. Entra a [Google AdSense](https://adsense.google.com)
2. Ve a **Sitios** → **Agregar sitio**
3. Escribe: `finiquito.xyz`
4. Copia el fragmento de código que te dan (ya está incluido en `index.html`)
5. Espera la aprobación (generalmente 1-3 días)

### Crear unidades de anuncios manuales (después de aprobación)

Una vez aprobado, crea las unidades en AdSense → **Anuncios** → **Unidades de anuncios**:

| Nombre              | Formato      | Dónde va                    |
|---------------------|--------------|-----------------------------|
| Izquierdo calculadora | 300x250   | Junto al formulario         |
| Derecho calculadora  | 300x250    | Junto a los resultados      |
| Banner Home          | 728x90     | Entre beneficios y calculadora |

Luego reemplaza en el código:
- `SLOT_IZQUIERDO` → ID del slot izquierdo
- `SLOT_DERECHO` → ID del slot derecho  
- `SLOT_BANNER_HOME` → ID del banner

Los slots se ven así: `data-ad-slot="1234567890"`

---

## Paso 5: Verificar que todo funciona

- [ ] Sitio carga en `https://finiquito.xyz`
- [ ] Rutas /about, /privacy, /terms funcionan (sin 404)
- [ ] La calculadora calcula correctamente
- [ ] Los anuncios aparecen (tras aprobación de AdSense)
- [ ] El sitio carga en móvil

---

## Variables de entorno (opcionales)

Si en el futuro agregas analytics u otras integraciones, configúralas en:
**Cloudflare Pages** → tu proyecto → **Settings** → **Environment variables**

---

## Tip: Auto Ads de Google

El script ya incluido en `index.html` activa los **Auto Ads**:
Google coloca automáticamente anuncios en el mejor lugar de la página.
No necesitas crear unidades manuales para empezar a generar ingresos.

Solo necesitas que el sitio sea aprobado en AdSense.


# Examen segundo parcial

Examen parcial sobre ciudades del mundo.

## API Reference

#### Get ciudades por país

```bash
  GET /VerCiudadesPorPais/:pais
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pais` | `string` | Paises a consultar|

Los paises pre-cargados a la base de datos son los obtenidos del siguiente link.

[Las 50 ciudades más bonitas del mundo que tienes que visitar](https://tipsparatuviaje.com/ciudades-mas-bonitas-del-mundo/)

Los paises a consultar son:
|Paises| No. de Ciudades|
|:---|:--- |
|Italia|3|
|Turquía|1|
|EE.UU|2|
|Reino Unido|1|
|Francia|1|
|China|2|
|Países Bajos|1|
|Rusia|1|
|Sudáfrica|1|
|Líbano|1|
|Japón|1|
|Nueva Zelanda|1|
|Cuba|1|
|España|2|
|Australia|1|
|Portugal|1|
|India|1|
|Bélgica|1|
|Suiza|1|
|California|1|
|Suecia|1|
|Colombia|1|
|Singapur|1|
|Hungría|1|
|Chile|1|
|República Checa|1|
|Escocia|1|
|Corea del Sur|1|
|México|1|
|Croacia|1|
|Letonia|1|
|Ecuador|1|
|Austria|2|
|Canadá|1|
|Israel|1|
|Argentina|1|
|Marruecos|1|
|Irán|1|
|Omán|1|
|EE.UU.|1|
|Ucrania|1|
|Alemania|1|
|Polonia|1|
|Vietnam|1|

El nombre del pais se puede encontrar en la tabla anterior.

#### Post ciudad

```bash
  POST /almacenarCiudades
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ciudad`      | `string` | `Nombre de la ciudad` |
| `pais`      | `string` | `Pais de la ciudad` |
| `atractivo`      | `string` | `descripción pequeña` |

Json de Prueba
```javascript
{
    "ciudad": "Ciudad de México",
    "pais": "México",
    "atractivo" : "Así es"
}
```
#### GET Delete All

```bash
  GET /deleteAll
```
Este servicio funciona para eliminar todas las ciudades cargadas a la base de datos de forma rápida.

<span style="color:red"> <strong>NO USAR A MENOS QUE SE REQUIERA</strong></span>.

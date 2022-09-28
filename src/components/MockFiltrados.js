 const data = [
    // {
    //     id:'1',
    //     title: 'Cafe Guatemala 1/4kg',
    //     price: '2500',
    //     shortdescription: '"...Altura media ideal para paladares que aprecian lo dulce y de acidez baja."',
    //     description: 'Es considerado un café suave y agradable, conocido a nivel internacional como Prime y Extra Prime. En las zonas intermedias, entre 1.070 a 1.200 metros sobre el nivel del mar, las calidades aumentan. El café de esta altura es conocido como Semiduro y Duro.',
    //     category: 'Productos',
    //     stock: 28,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/101-bb46b0d3d33fd3334316580141818184-640-0.png',
    // },
    // {
    //     id:'2',
    //     title: 'Cafe Colombia 1/4kg',
    //     price: '2500',
    //     shortdescription: '"...El cafe que agrada a todos los paladares, equilibrado y con un gran cuerpo"',
    //     description: 'Las condiciones geográficas: su clima tropical y las altas montañas son ideales para el cultivo de café. Los procesos: mientras que Brasil apuesta por una recolección automatizada, en Colombia predomina la recolección manual que mejora la calidad del grano.',
    //     category: 'Productos',
    //     stock: 19,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/bistrea-web-711-a7abd69467d731b45a16595717526669-320-0.png'
    // },
    // {
    //     id:'3',
    //     title: 'Cafe Peru 1/4kg',
    //     price: '2500',
    //     shortdescription: '"...Se caracteriza por ser un cafe mas acido que otros, cuerpo medio y dulzor agradable"',
    //     description: ' El café peruano se produce en 350.000 hectáreas de cafetales en 210 distritos rurales ubicados en 10 departamentos de la vertiente oriental de los Andes, siendo las regiones de Amazonas, San Martín y Chanchamayo, las tres áreas principales de cultivo. Del café peruano, los consumidores aprecian su sabor suave, ligeramente dulce, su buen cuerpo y su aroma delicado, que lo han hecho merecedor de numerosos re- conocimientos en concursos de calidad y campeonatos baristas de todo el mundo.',
    //     category: 'Productos',
    //     stock: 92,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/bistrea-web-72-33204809f0e87339d016595716888325-320-0.png'
    // },
    // {
    //     id:'4',
    //     title: 'Cafe Peru Premium 1/4kg',
    //     price: '3500',
    //     shortdescription: '"...Se caracteriza por ser un cafe mas acido que otros, cuerpo ligero, notas frutales y florales"',
    //     description: ' El café peruano se produce en 350.000 hectáreas de cafetales en 210 distritos rurales ubicados en 10 departamentos de la vertiente oriental de los Andes, siendo las regiones de Amazonas, San Martín y Chanchamayo, las tres áreas principales de cultivo. Del café peruano, los consumidores aprecian su sabor suave, ligeramente dulce, su buen cuerpo y su aroma delicado, que lo han hecho merecedor de numerosos re- conocimientos en concursos de calidad y campeonatos baristas de todo el mundo.',
    //     category: 'Productos',
    //     stock: 20,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/71-50613efc8bf418c5c816580170373698-320-0.png'
    // },
    // {
    //     id:'5',
    //     title: 'Cafe Guatemala Premium 1/4 kg',
    //     price: '3500',
    //     shortdescription: '"...Cafe de altura baja, poca acidez, cuerpo intermedio y notas exoticas para paladares exigentes"',
    //     description: 'Es considerado un café suave y agradable, conocido a nivel internacional como Prime y Extra Prime. En las zonas intermedias, entre 1.070 a 1.200 metros sobre el nivel del mar, las calidades aumentan. El café de esta altura es conocido como Semiduro y Duro.',
    //     category: 'Productos',
    //     stock: 10,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/311-e85dbf56a733bb42d516580147630562-640-0.png'
    // },

// CAFE Por KG
    // {
    //     id:'51',
    //     title: 'Cafe Guatemala 1kg',
    //     price: '7500',
    //     shortdescription: '"...Altura media ideal para paladares que aprecian lo dulce y de acidez baja."',
    //     description: 'Es considerado un café suave y agradable, conocido a nivel internacional como Prime y Extra Prime. En las zonas intermedias, entre 1.070 a 1.200 metros sobre el nivel del mar, las calidades aumentan. El café de esta altura es conocido como Semiduro y Duro.',
    //     category: 'Productos',
    //     stock: 42,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/101-bb46b0d3d33fd3334316580141818184-640-0.png',
    // },
    // {
    //     id:'52',
    //     title: 'Cafe Colombia 1kg',
    //     price: '7500',
    //     shortdescription: '"...El cafe que agrada a todos los paladares, equilibrado y con un gran cuerpo"',
    //     description: 'Las condiciones geográficas: su clima tropical y las altas montañas son ideales para el cultivo de café. Los procesos: mientras que Brasil apuesta por una recolección automatizada, en Colombia predomina la recolección manual que mejora la calidad del grano.',
    //     category: 'Productos',
    //     stock: 19,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/bistrea-web-711-a7abd69467d731b45a16595717526669-320-0.png'
    // },
    // {
    //     id:'53',
    //     title: 'Cafe Peru 1kg',
    //     price: '7500',
    //     shortdescription: '"...Se caracteriza por ser un cafe mas acido que otros, cuerpo medio y dulzor agradable"',
    //     description: ' El café peruano se produce en 350.000 hectáreas de cafetales en 210 distritos rurales ubicados en 10 departamentos de la vertiente oriental de los Andes, siendo las regiones de Amazonas, San Martín y Chanchamayo, las tres áreas principales de cultivo. Del café peruano, los consumidores aprecian su sabor suave, ligeramente dulce, su buen cuerpo y su aroma delicado, que lo han hecho merecedor de numerosos re- conocimientos en concursos de calidad y campeonatos baristas de todo el mundo.',
    //     category: 'Productos',
    //     stock: 23,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/bistrea-web-72-33204809f0e87339d016595716888325-320-0.png'
    // },
    // {
    //     id:'54',
    //     title: 'Cafe Peru Premium 1kg',
    //     price: '9500',
    //     shortdescription: '"...Se caracteriza por ser un cafe mas acido que otros, cuerpo ligero, notas frutales y florales"',
    //     description: ' El café peruano se produce en 350.000 hectáreas de cafetales en 210 distritos rurales ubicados en 10 departamentos de la vertiente oriental de los Andes, siendo las regiones de Amazonas, San Martín y Chanchamayo, las tres áreas principales de cultivo. Del café peruano, los consumidores aprecian su sabor suave, ligeramente dulce, su buen cuerpo y su aroma delicado, que lo han hecho merecedor de numerosos re- conocimientos en concursos de calidad y campeonatos baristas de todo el mundo.',
    //     category: 'Productos',
    //     stock: 45,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/71-50613efc8bf418c5c816580170373698-320-0.png'
    // },
    // {
    //     id:'55',
    //     title: 'Cafe Guatemala Premium 1kg',
    //     price: '9500',
    //     shortdescription: '"...Cafe de altura baja, poca acidez, cuerpo intermedio y notas exoticas para paladares exigentes"',
    //     description: 'Es considerado un café suave y agradable, conocido a nivel internacional como Prime y Extra Prime. En las zonas intermedias, entre 1.070 a 1.200 metros sobre el nivel del mar, las calidades aumentan. El café de esta altura es conocido como Semiduro y Duro.',
    //     category: 'Productos',
    //     stock: 12,
    //     img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/636/304/products/311-e85dbf56a733bb42d516580147630562-640-0.png'
    // },



// METODOS DE FILTRADO y Filtros
    // {
    //     id:'101',
    //     title: 'Aeropress',
    //     price: '4000',
    //     shortdescription: "Metodo que utiliza la presion para moliendas finas y resultados intensos", 
    //     description: '"AeroPress se le conoce al dispositivo y al método de extracción para preparar café. El utensilio consiste en un cilindro de propileno el cual se coloca sobre una taza. Posteriormente, se le coloca un filtro de papel, café y agua caliente. La infusión se extrae gracias a un émbolo obteniendo así, un café aromático."',
    //     category: 'Filtrados',
    //     stock: 6,
    //     img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/467/products/aeropress-21-279159521e1d84c03e16052854464529-640-0.jpg',
    // },
    // {
    //     id:'102',
    //     title: 'Kalita Wave',
    //     price: '5000',
    //     shortdescription: "el filtrado por medio de tres orificios le da un sabor increible a este metodo", 
    //     description: '"Kalita Wave es un método similar al Chemex o V60, del cual se obtiene una taza limpia. Esto se contrasta con el perfil robusto de preparaciones de inmersión completa como la prensa francesa o el clever. Aunque sea similar al Chemex o al V60, Kalita Wave tiene una característica diferente en su forma de extracción."',
    //     category: 'Filtrados',
    //     stock: 3,
    //     img: 'https://eytmnthxtm9.exactdn.com/wp-content/uploads/2020/04/Kalita-wave-cristal-.jpg?strip=all&lossy=1&ssl=1'
    // },
    // {
    //     id:'103',
    //     title: 'Prensa Francesa',
    //     price: '4500',
    //     shortdescription: "El metodo mas facil y efectivo de preparar un cafe y compartir", 
    //     description: '"La Prensa Francesa es un método por inmersión*, permite controlar todo el proceso de extracción, desde el tiempo de contacto, la temperatura y la turbulencia, entre otras variables. También al actuar directamente sobre todo el café molido nos da la posibilidad de extraer muy bien los sabores.',
    //     category: 'Filtrados',
    //     stock: 12,
    //     img: 'https://hondushoping.com/1277-large_default/prensa-francesa-34oz.jpg'
    // },
    // {
    //     id:'104',
    //     title: 'Chemex',
    //     price: '10000',
    //     shortdescription: "El futuro del sabor del cafe depende de este metodo, la mejor opcion", 
    //     description: 'La cafetera Chemex fue inventada por un químico alemán, Peter J. Schlumbohm, en 1941. Además de químico, Schlumbohm era un prolífico inventor, registró unas 300 patentes de utensilios varios, desde un agitador de cócteles a automóviles. El primer mérito de esta cafetera es poder controlar a la perfección la temperatura del agua, uno de los factores más importantes para obtener el mejor sabor con el café, y algo difícil de vigilar con una cafetera automática.',
    //     category: 'Filtrados',
    //     stock: 22,
    //     img: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/259/541/products/chemex-021-0ab5a8c2b037dea05815907745589067-1024-10241-1eb92fa93eb23a1b2b15945098794038-640-0.png'
    // },
    // {
    //     id:'105',
    //     title: 'Volturno Italiana',
    //     price: '7000',
    //     category: 'Filtrados',
    //     shortdescription: "Cafetera para dos, Molienda intermedia, notas muy asentuadas al beber", 
    //     description: '"Es la cafetera italiana de fabricación nacional por excelencia, con su característico color plateado. La empresa nació hace 70 años, y desde 1951 provee cafeteras italianas para todos los argentinos.Otra de las ventajas de las cafeteras italianas es que pueden preparar varios cafés a la vez, todo depende del tamaño de la cafetera. Hay cafeteras desde una sola taza hasta nueve tazas o incluso 12 tazas, aunque las más habituales son de tres y de seis tazas.',
    //     stock: 6,
    //     img: 'https://bazardelaesquina.com/wp-content/uploads/2017/11/Cafetera-Volturno-Moka.jpg'
    // },
    // {
    //     id:'107',
    //     title: 'Filtros Chemex',
    //     price: '1200',
    //     category: 'Filtrados',
    //     shortdescription: "Filtros Especiales Chemex", 
    //     description: 'La cafetera Chemex fue inventada por un químico alemán, Peter J. Schlumbohm, en 1941. Además de químico, Schlumbohm era un prolífico inventor, registró unas 300 patentes de utensilios varios, desde un agitador de cócteles a automóviles. El primer mérito de esta cafetera es poder controlar a la perfección la temperatura del agua, uno de los factores más importantes para obtener el mejor sabor con el café, y algo difícil de vigilar con una cafetera automática.',
    //     stock: 16,
    //     img: 'https://kaffe.com.pe/147-large_default/papel-filtro-p-cafetera-chemex-de-1-3-tazas-v8536.jpg'
    // },
    // {
    //     id:'108',
    //     title: 'Filtros ',
    //     price: '300',
    //     category: 'Filtrados',
    //     shortdescription: "Filtros multiuso ", 
    //     description: 'El filtro de café se trata de un utensilio de cocina que tiene la función de filtrar el agua caliente de los granos molidos del café para la elaboración del café bebido',
    //     stock: 16,
    //     img: 'https://carrefourar.vtexassets.com/arquivos/ids/163728/7791465001291_02.jpg?v=637467708913400000'
    // },
    // {
    //     id:'109',
    //     title: 'Filtro de tela ',
    //     price: '600',
    //     category: 'Filtrados',
    //     shortdescription: "Filtro de tela ideal para teteras ", 
    //     description: 'El filtro de café se trata de un utensilio de cocina que tiene la función de filtrar el agua caliente de los granos molidos del café para la elaboración del café bebido',
    //     stock: 16,
    //     img: 'https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/1280x1280/products/3314/13433/Filtro-Cafe-Tela-Argentina_Select-1000x1000__94579.1610660283.jpg?c=1'
    // },
]
export default data
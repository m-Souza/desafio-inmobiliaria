
var propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
        },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
        },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
        },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
        },
    
]

var propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
        },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
        },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
        },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
        },
]

const siMascota = "<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>"
const noMascota = "<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>"
const siFumar = "<p class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</p>"
const noFumar = "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</p>"

const sectionVenta = document.querySelector('#venta .row')

const sectionAlquiler = document.querySelector('#alquiler .row')

const sectionVentaFull = document.querySelector('#venta')

const sectionAlquilerFull = document.querySelector('#alquiler')

const indexPage = document.querySelector('title').innerHTML=="Desafío - Inmobiliaria"

const ventaPage = document.querySelector('title').innerHTML=="Propiedades a la Venta"
const alquilerPage = document.querySelector('title').innerHTML=="Propiedades en Alquiler"

console.log(ventaPage)
console.log(alquilerPage)


if(indexPage==true){
    propiedades_venta = propiedades_venta.slice(0, 3)
    propiedades_alquiler = propiedades_alquiler.slice(0, 3)
}


if(ventaPage==true){
    sectionAlquilerFull.style.display = "none"
}
if(alquilerPage==true){
    sectionVentaFull.style.display = "none"
}


for (let propiedad_venta of propiedades_venta){
    let fumar = ''
    if(propiedad_venta.smoke == true){
        fumar = siFumar
    } else{
        fumar = noFumar
    }
    let mascota = ''
    if(propiedad_venta.pets == true){
        mascota = siMascota
    } else{
        mascota = noMascota
    }
    sectionVenta.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
        src="${propiedad_venta.src}"
        class="card-img-top"
        alt="Imagen del departamento"
        />
        <div class="card-body">
        <h5 class="card-title">
            ${propiedad_venta.nombre}
        </h5>
        <p class="card-text">
            ${propiedad_venta.descripcion}
        </p>
        <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}
        </p>
        <p>
            <i class="fas fa-bed"></i> ${propiedad_venta.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad_venta.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad_venta.costo}</p>
        ${fumar}
        ${mascota}
        </div>
        </div>
    </div>
    
    `
}

for (let propiedad_alquiler of propiedades_alquiler){
    let fumar = ''
    if(propiedad_alquiler.smoke == true){
        fumar = siFumar
    } else{
        fumar = noFumar
    }
    let mascota = ''
    if(propiedad_alquiler.pets == true){
        mascota = siMascota
    } else{
        mascota = noMascota
    }
    sectionAlquiler.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
        src="${propiedad_alquiler.src}"
        class="card-img-top"
        alt="Imagen del departamento"
        />
        <div class="card-body">
        <h5 class="card-title">
            ${propiedad_alquiler.nombre}
        </h5>
        <p class="card-text">
            ${propiedad_alquiler.descripcion}
        </p>
        <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicacion}
        </p>
        <p>
            <i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad_alquiler.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.costo}</p>
        ${fumar}
        ${mascota}
        </div>
        </div>
    </div>
    
    `
}


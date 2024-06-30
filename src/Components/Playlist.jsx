import React from 'react';

function Playlist() {
    return (
        <div className="h-screen p-6 bg-slate-50">
            <h2 className='text-4xl text-center font-poetsen p-16'>Estoy finalizando esta página, así que este es el pie(?</h2>
            <div className='flex justify-center items-center'>
                <p className='w-1/2 text-xl text-black'>
                    A la derecha vas a encontrar nuestra playlist...
                    <br/>
                    Aunque, en realidad, acá quiero agradecer a otras personas, así que
                    si un día podes, me gustaría que les digas. En principio, muchísimas gracias a tus amigos por siempre ser buena onda
                    conmigo. Me han tratado super bien y me incluyeron desde el minuto 0, cómo si fuera uno más del grupo.
                    <br/>
                    GRACIAS a tu familia, es increíble como me trataron siempre. No tengo palabras por cómo se preocuparon y ocuparon
                    tus padres conmigo estos días que me sentí mal. Gracias a ellos y a ti mejoré muchísimo en poco tiempo.
                    <br />
                    A tus padres decirles que son unos grosos, admiro todo lo que hacen y lo que lograron, especialmente con sus hijos. 
                    Dos chicos que se superan día a día, que son buena gente y les espera un futuro grandioso.
                    <br />
                    A Yasmincita, siempre fue buenita conmigo, aunque pensé que no le caía muy bien jajaja
                    <br />
                    A tu tía y primos, siempre buena onda :D
                    <br />
                    A tu hermano, me tuvo que aguantar casi viviendo ahí jajaja teniendo que cocinarme, lavar mis platos, etc.
                    <br />
                    No escribo más porque me pongo a llorar como marrano jajaja te amo.
                    </p>

                <iframe
                    className="w-1/2 h-[100vh] "
                    src="https://open.spotify.com/embed/playlist/5ODhJF6ot9PsB8JXIHaKdP?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    );
}

export default Playlist;

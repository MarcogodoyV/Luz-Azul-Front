import React, { useEffect }  from 'react'
import Banner1 from "images/bannerlanding.jpg"
import Banner2 from "images/banner2.jpg"
import { Atajos } from './Inicio/atajos/Atajos'


export const Pronostigol = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

  return (
    <>  
        <div className='container'>
            <h1 className="title">PRONOSTIGOL</h1>
            <hr className="divider"></hr>
            <img src={Banner1} style={{width: '1170px'}} alt="banner promos"></img>
            <img src={Banner2} style={{width: '1170px'}} alt="banner promos"></img>
            <Atajos />
            <div>
                <h2 className='subtitle title generic-margin'><strong><u>1.Reglas del juego “pronostigol”.</u></strong></h2>
                <h4 className="subtitle"><strong>A. Reglas del juego</strong></h4>
                <p style={{color: '#777'}}>
                    El juego consiste en adivinar los resultados de los partidos del Mundial de Qatar 2022. Los participantes, irán obteniendo un puntaje a medida que adivinen los resultados de los partidos o el ganador, perdedor o el empate de dichos encuentros. El participante, previo a los encuentros pertinentes, dará su pronóstico para todos los partidos que se disputaran en el Mundial de Qatar 2022, es decir, indicará el eventual resultado y/o ganador, perdedor o igualdad que crea que surjan de los encuentros.
                </p>
                <p style={{color: '#777'}}>
                    PUNTAJES:
                    Se podrá obtener puntos de dos formas:
                    1- Por un lado, adivinando el resultado exacto del partido, es decir, los goles convertidos del encuentro. El participante que acierte el resultado obtendrá <strong>3 puntos</strong>.
                    2- Por otro lado, se podrá obtener <strong>1 punto</strong>, acertando el ganador, perdedor o empate de los partidos pronosticados por El participante.
                </p>
                <h4 className="subtitle"><strong>B. Instancias del juego.</strong></h4>
                <p style={{color: '#777'}}>
                    <i>El juego consta de dos instancias:</i>
                </p>
                <p style={{color: '#777'}}>
                    <strong>Fase 1.</strong>
                </p>
                <p style={{color: '#777'}}>
                    La primera instancia, denominada como <strong>“fase 1”</strong>, comprende los partidos de las fases de grupo, es decir, aquellos que se disputarán entre los días 20 de noviembre y el 2 de diciembre de 2022.
                </p>
                <p style={{color: '#777'}}>
                    <strong>Fase 2.</strong>
                </p>

                <p style={{color: '#777'}}>
                    La segunda fase, denominada como <strong>“fase 2”</strong>, comprende la etapa de las eliminatorias, es decir, octavos, cuartos, semifinal, partido por el tercer y cuarto puesto y la final. Son aquellos partidos que se disputarán entre los días 3 de diciembre y el 18 de diciembre de 2022.
                    El pronóstico, en esta fase de eliminatorias, siempre será por la victoria o por la derrota de un equipo, ya que, obligatoriamente, siempre un equipo ganará y pasará a la siguiente ronda, y el otro quedará eliminado.
                    Por ende, los jugadores deben optar por un resultado especifico. Si el participante pronostica un resultado especifico de un determinado encuentro y resulta ser el resultado final del partido, obtendrá <strong>3 puntos</strong>.
                    En caso de empate, el partido se definirá por tanda de penales y, conforme el pronóstico establecido por cada participante, el equipo que logre superar la tanda de penales de forma vitoriosa se le adjudicará a este jugador la suma de <strong>1 punto</strong> por haber pronosticado la victoria (o, en su caso, la derrota) de dicho encuentro.
                </p>
                <h4 className="subtitle"><strong>B. Forma en el que se contabilizarán los puntos. Tabla de posiciones.</strong></h4>
                <p style={{color: '#777'}}>
                    Cada fase tendrá su propia tabla de posiciones.
                    <br></br>
                    La <strong>“fase 1”</strong> tendrá una tabla con los puntos que vayan obteniendo los participantes. Lo mismo, se aplicará para la <strong>“fase 2”</strong>. Finalmente, se sumaran los resultados de las dos fases (<strong>tabla de posiciones general</strong>). El resultado de la suma de ambas tablas de posiciones dará como resultado el puntaje final de los participantes y, por ende, el ganador del certamen.
                </p>
                <h4 className="subtitle"><strong>C. Premio</strong></h4>
                <p style={{color: '#777'}}>
                    Al finalizar ambas fases, es decir, el resultado de “la tabla de posiciones general”, consagrarán, conforme a quien haya obtenido la mayor puntuación.
                    <br></br>
                    La persona que logre alcanzar el 1º puesto será el ganador de $100.000 (cien mil pesos argentinos). En caso de existir más de un, este premio se repartirá en partes iguales.
                    <br></br>
                    En las Fases 1 y la Fase 2 los primeros cinco participantes en la tabla de posición, ganarán “órdenes de compra” valuadas en $5.000, para ser canjeadas en los locales LUZ AZUL.
                    <br></br>
                    El ganador tendrá 30 días corridos, desde el 18 de diciembre de 2022, para acreditar su identidad, requisito esencial para poder recibir el premio y exigirlo. En caso contrario, el premio se considerará perdido.
                    <br></br>
                    El procedimiento, la verificación y todo lo relacionado a la forma y modo de entrega de los premios será supervisado por un escribano público.
                </p>
                <h4 className="subtitle"><strong>D. Medio por el cual los participantes pronosticarán los resultados.</strong></h4>
                <p style={{color: '#777'}}>
                    El juego “pronostigol” se llevará a cabo por medio de la aplicación móvil “Luz Azul”.
                    <br></br>
                    Las personas que pretendan participar, deben descargar la aplicación (disponible en App Store y Play Store) de “Luz Azul” y seguir los pasos que se indican en la misma.
                </p>
                <h4 className="subtitle"><strong>E. El pronóstico de los partidos será para todos los equipos del Mundial de Qatar 2022.</strong></h4>
                <p style={{color: '#777'}}>
                    El juego, que consiste en tratar de adivinar el resultado o el ganador, perdedor o la igualdad de los encuentros, no solo involucrará a los partidos de la selección argentina, sino que pueden jugar con los pronósticos de todos los equipos que sean parte del Torneo Mundial de Futbol Qatar 2022.
                </p>
                <h4 className="subtitle"><strong>F. Inicio y fin del juego.</strong></h4>
                <p style={{color: '#777'}}>
                    El Torneo Mundial de Futbol Qatar 2022 comienza el día 20 de noviembre del año 2022 y finaliza el día 18 de diciembre de 2022. Este es el periodo de duración del juego “pronostigol”. Se podrá participar del juego con anterioridad o con posterioridad del inicio del torneo, pero NUNCA con posterioridad al 18 de diciembre.
                    <br></br>
                    El juego comienza, una vez obtenida la descarga de la aplicación móvil “Luz Azul”, a partir deque el participanteemite su primer pronóstico de cualquier partido.
                    <br></br>
                    El tiempo límite para poder pronosticar el resultado de un partido es hasta el momento previo del comienzo de cada partido por el cual se quiere pronosticar. NO se puede pronosticar el partido cuando este haya comenzado o terminado.
                    <br></br>
                    El fin del juego se da en la última etapa del Torneo Mundial de Futbol Qatar 2022, es decir, el día 18 de diciembre de 2022 cuando se enfrenten los finalistas del evento.
                    <br></br>
                    Los participantes pueden iniciar y finalizar el juego cuando crean conveniente.
                </p>
                <h4 className="subtitle"><strong>G. Partidos suspendidos, aplazados, abandonados o interrumpidos.</strong></h4>
                <p style={{color: '#777'}}>
                    Un partido que no se juegue o se aplace se considerará como 'no participante' a efectos del juego, a no ser que se juegue en 5 días desde la hora programada originalmente, en cuyo caso el juego (pronóstico) prevalecerá, a no ser que se cancele de mutuo acuerdo.
                    <br></br>
                    Si algún partido se lleva a cabo antes de la fecha y hora previstas inicialmente, el pronóstico de losparticipantesprevalecerá siempre y cuando se realicen antes de la nueva fecha y hora de inicio.
                    <br></br>
                    Se anularán los puntos a cualquier partido de fútbol que se suspenda antes de que se completen los 90 minutos de juego, excepto aquellos cuyo resultado se determinara con anterioridad a la suspensión del partido.
                    <br></br>
                    Si un partido se interrumpe, pero se reanuda posteriormente (desde el momento en el que se interrumpió) y se disputa en su totalidad en 48 horas desde la hora inicial programada para el partido, el juego prevalece.
                    <br></br>
                    De lo contrario, si el partido se reanuda, pero no se completa en 48 horas desde la hora inicial programada para el partido, se tratará como abandono y los puntos al partido original se anularán, excepto aquellas cuyo resultado ya se hubiera determinado antes de la interrupción inicial del partido.
                </p>

                <h2 className='subtitle title generic-margin'><strong><u>2. Bases y condiciones.</u></strong></h2>
                <ol>
                    <li>
                        <p style={{color: '#777'}}>
                            Cada participante debe descargarse la aplicación de Lácteos Luz Azul, completar y registrarse en la misma con sus datos personales (nombre y apellido completo, fecha de nacimiento, DNI, correo electrónico, un número de celular y un mail de contacto). El titular consiente dicha transferencia al completar y enviar el formulario con sus datos.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al utilizar, visitar y/o acceder a cualquier parte (incluidas, pero no limitadas a subdominios, código fuente y/o API del sitio, sea o no visible) del Sitio Web o aplicaciones móviles de Luz Azul, usted acepta quedar vinculado a lascondiciones generales,política de privacidad,política de cookies y a las reglas aplicables a nuestros productos y servicios.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al jugar, y/o acceder a cualquier sección del Sitio Web de Luz Azul, usted está de acuerdo y acepta atenerse a las reglas aplicables a los productos disponibles ofrecidos en cada momento en el Sitio Web.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Podría ser necesario modificar condiciones por una serie de razones. Todas las modificaciones se publicarán y notificarán. En caso de efectuarse un cambio fundamental en las condiciones generales, se solicitará que el cliente acepte las nuevas condiciones generales antes de proceder. Una vez aceptadas, por consiguiente, las nuevas condiciones generales entrarán en vigor. En caso de que el cliente, debido a cualquier cambio factible, no desee seguir utilizando los servicios de Luz Azul, podrá cerrar la cuenta.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Todos los solicitantes deberán ser mayores de 18 años, tener capacidad legal para poder registrarse en Luz Azul y no estar sujetos a ningún tipo de prohibición establecida legalmente.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Luz Azul verificará su identidad a través de canales legales establecidos, ya sean mediante los medios automáticos a su disposición para la verificación de la identidad, como mediante la solicitud de información o documentación.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Toda información proporcionada al registrarse, DEBERÁ ser precisa y completa. De lo contrario, nos reservamos el derecho a suspender la cuenta.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al aceptar las condiciones y/o registrarse para utilizar el Sitio Web, usted acepta que estamos legitimados para llevar a cabo cualquier gestión para la correcta identificación de identidadu otros controles de verificación que se requiera. Cada participante acepta proporcionar la información que resulte necesaria para identificar y ejercer las verificaciones y controles que resulten necesarios.Nos reservamos el derecho de suspender o restringir las cuentas hasta el momento en que se completen la información requerida.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            <strong>Datos personales</strong>.Luz Azul se adecuará en todo momento a la normativa aplicable al tratamiento de los datos personales que nos proporcione. Sus datos personales serán tratados de acuerdo con nuestra política de privacidad.
                            <br></br>
                            Todos los datos personales serán tratados de manera estrictamente confidencial y no se compartirán ni cederán a terceros salvo para su procesamiento por medios informáticos a los fines del juego.
                            <br></br>
                            Los datos personales de quienes deseen participar serán tratados en estricto cumplimiento de la Ley 25.326 y su decreto reglamentario 1558/01, con la única finalidad del desarrollo del juego, aclarándose que no se persigue ningún fin lucrativo con el desarrollo del presente juego.
                            <br></br>
                            <br></br>El titular de los datos tiene derecho a solicitar el acceso a los mismos de forma gratuita en intervalos no inferiores a 6 meses.
                            <br></br>
                            Ante cualquier consulta sobre el tratamiento de sus datos, comunicarse con contacto@luz-azul.com.ar.
                            <br></br>
                            La agencia de acceso a la información pública es el organismo de control de la ley 25.326 y tiene potestad para recibir y tramitar denuncias por incumplimiento a la misma.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Si alguna disposición contenida en estas condiciones generales fuera reconocida como no válida o no aplicable por un tribunal o por un órgano administrativo de jurisdicción competente, dicha invalidez o no aplicabilidad no afectará las demás disposiciones sobre estas condiciones generales, las cuales permanecerán en vigencia.
                        </p>
                    </li>
                </ol>
                <h2 className='subtitle title generic-margin'><strong><u>3. Reclamaciones, conflictos, ley vigente y jurisdicción.</u></strong></h2>
                <ol>
                    <li>
                        <p style={{color: '#777'}}>
                            En caso de reclamación o conflicto, póngase encon nosotros, por medio del siguiente link:contacto@luz-azul.com.ar
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Luz Azul tratará de resolver las reclamaciones provenientes de los clientes dentro del plazo de un mes desde la presentación de las mismas.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            En caso de que la misma no se resuelva o el cliente no esté de acuerdo con la solución brindad por Luz Azul, ambas partes pueden remitir la disputa a un organismo de arbitraje.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al aceptar estas condiciones generales y/o hacer uso (autorizado o no) de los servicios de Luz Azul (tanto a través del Sitio Web o de otra forma) y/o al hacer uso, visitar y/o acceder a cualquier parte (incluidas, pero no limitadas a subdominios, código fuente y/o API del sitio, sea o no visible) del Sitio Web, el participante irrevocablemente acepta que los tribunales de la Provincia de Buenos Aires tendrán jurisdicción exclusiva en la determinación de cualquier disputa surgida en relación a estas condiciones generales. Sin perjuicio de lo que precede, Luz Azulse reserva el derecho a iniciar acciones contra el cliente, en los Tribunales Ordinarios del Depto. Judicial de Azul, Provincia de Buenos Aires.-
                        </p>
                    </li>
                </ol>
                <h2 className='subtitle title generic-margin'><strong><u>4. Reglamento Pronostigol y Reglamento FIFA.</u></strong></h2>
                <ol>
                    <li>
                        <p style={{color: '#777'}}>
                            <strong>A. Reglamento “Pronostigol”.</strong>
                            <br></br>
                            “Pronostigol” es un juego creado por “Luz Azul”. El consumidor y/o usuario acepta en su totalidad las bases, términos, reglamentos y condiciones aquí establecidas, y se denominará participante.-
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            <strong>B. Reglamentos FIFA.</strong>
                            <br></br>
                            La FIFA es el órgano rector del futbol mundial, es la entidad legisladora para todas las actividades futbolísticas.
                            <br></br>
                            A través del Congreso, el Consejo de la FIFA y el secretario general, la FIFA adopta varios tipos de documentos jurídicos que repercuten en las actividades futbolísticas cotidianas en todo el mundo.
                            <br></br>
                            Se le deja a disposición del usuario y/o consumidor para su estudio, análisis y verificación en caso que le surjan dudas con respecto, principalmente, a los reglamentos del Futbol, ingresando al siguiente link de enlace: <a style={{color: 'var(--title)'}} href="https://www.fifa.com/es/legal/documents" target="_blank" rel="noreferrer">Normas y Reglamentos (fifa.com)</a>
                            <br></br>
                            Los documentos jurídicos relativos a las actividades de la División de Servicios Jurídicos y Cumplimiento; todos ellos pueden descargase en formato PDF. Encontrará las versiones actuales de las diferentes normas y reglamentos, entre ellos, los Estatutos de la FIFA, el Reglamento de Gobernanza de la FIFA, el Reglamento sobre el Estatuto y la Transferencia de Jugadores de la FIFA, el Código de Ética de la FIFA, el Código Disciplinario de la FIFA, el Reglamento de la FIFA sobre las Relaciones con Intermediarios, etc.
                        </p>
                    </li>
                </ol>
            </div>
            <div>
                <h2 className='subtitle title generic-margin'><strong><u>1. Juego de Referidos. Reglas.</u></strong></h2>
                <p style={{color: '#777'}}>
                    Conjuntamente con el juego “pronostigol”, se realizará un torneo de “referidos”, juego que consiste en invitar a nuevos usuarios (amigos, conocidos, familiares, etc.) con la finalidad de que se unan al juego “pronostigol” por medio de un código QR generado en el perfil del usuario. <br></br>
                    Cada invitación por parte de un usuario que logre convencer a un nuevo usuario de participar y este último así lo haga, sumará puntos. Quien obtenga la mayor cantidad de puntos, contabilizados estos desde una tabla de posiciones denominada “tabla de referidos”, al finalizar el Torneo Mundial de Futbol Qatar 2022, es decir, el 18 de diciembre de 2022, será el ganador de $20.000 (veinte mil pesos argentinos). <br></br>
                    Se considerará “referido” al usuario que logre convencer a otra persona de descargarse la aplicación de “Luz Azul” y que este realice, por primera vez, la registración en dicha app. Pero, si el usuario ya contaba con tal registración, no se contabilizarán los puntos, por ende, al no ser considerado “referido”, no sumará puntos.
                </p>
                <h2 className='subtitle title generic-margin'><strong><u>2. Bases y condiciones. </u></strong></h2>
                <ol>
                    <li>
                        <p style={{color: '#777'}}>
                            Cada participante debe descargarse la aplicación de Lácteos Luz Azul, completar y registrarse en la misma con sus datos personales (nombre y apellido completo, fecha de nacimiento, DNI, correo electrónico, un número de celular y un mail de contacto). El titular consiente dicha transferencia al completar y enviar el formulario con sus datos.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al utilizar, visitar y/o acceder a cualquier parte (incluidas, pero no limitadas a subdominios, código fuente y/o API del sitio, sea o no visible) del Sitio Web o aplicaciones móviles de Luz Azul, usted acepta quedar vinculado a las condiciones generales, política de privacidad, política de cookies y a las reglas aplicables a nuestros productos y servicios.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al jugar, y/o acceder a cualquier sección del Sitio Web de Luz Azul, usted está de acuerdo y acepta atenerse a las reglas aplicables a los productos disponibles ofrecidos en cada momento en el Sitio Web.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Podría ser necesario modificar condiciones por una serie de razones. Todas las modificaciones se publicarán y notificarán. En caso de efectuarse un cambio fundamental en las condiciones generales, se solicitará que el cliente acepte las nuevas condiciones generales antes de proceder. Una vez aceptadas, por consiguiente, las nuevas condiciones generales entrarán en vigor. En caso de que el cliente, debido a cualquier cambio factible, no desee seguir utilizando los servicios de Luz Azul, podrá cerrar la cuenta.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Todos los solicitantes deberán ser mayores de 18 años, tener capacidad legal para poder registrarse en Luz Azul y no estar sujetos a ningún tipo de prohibición establecida legalmente.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Luz Azul verificará su identidad a través de canales legales establecidos, ya sean mediante los medios automáticos a su disposición para la verificación de la identidad, como mediante la solicitud de información o documentación.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Toda información proporcionada al registrarse, DEBERÁ ser precisa y completa. De lo contrario, nos reservamos el derecho a suspender la cuenta.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al aceptar las condiciones y/o registrarse para utilizar el Sitio Web, usted acepta que estamos legitimados para llevar a cabo cualquier gestión para la correcta identificación de identidad u otros controles de verificación que se requiera. Cada participante acepta proporcionar la información que resulte necesaria para identificar y ejercer las verificaciones y controles que resulten necesarios. Nos reservamos el derecho de suspender o restringir las cuentas hasta el momento en que se completen la información requerida.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            <strong>Datos personales</strong>. Luz Azul se adecuará en todo momento a la normativa aplicable al tratamiento de los datos personales que nos proporcione. Sus datos personales serán tratados de acuerdo con nuestra política de privacidad. <br></br>
                            Todos los datos personales serán tratados de manera estrictamente confidencial y no se compartirán ni cederán a terceros salvo para su procesamiento por medios informáticos a los fines del juego. <br></br>
                            Los datos personales de quienes deseen participar serán tratados en estricto cumplimiento de la Ley 25.326 y su decreto reglamentario 1558/01, con la única finalidad del desarrollo del juego, aclarándose que no se persigue ningún fin lucrativo con el desarrollo del presente juego.<br></br>
                            El titular de los datos tiene derecho a solicitar el acceso a los mismos de forma gratuita en intervalos no inferiores a 6 meses. <br></br>
                            Ante cualquier consulta sobre el tratamiento de sus datos, comunicarse con contacto@luz-azul.com.ar. <br></br>
                            La agencia de acceso a la información pública es el organismo de control de la ley 25.326 y tiene potestad para recibir y tramitar denuncias por incumplimiento a la misma. <br></br>
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Si alguna disposición contenida en estas condiciones generales fuera reconocida como no válida o no aplicable por un tribunal o por un órgano administrativo de jurisdicción competente, dicha invalidez o no aplicabilidad no afectará las demás disposiciones sobre estas condiciones generales, las cuales permanecerán en vigencia.
                        </p>
                    </li>
                </ol>
                <h2 className='subtitle title generic-margin'><strong><u>3. Reclamaciones, conflictos, ley vigente y jurisdicción. </u></strong></h2>
                <ol>
                    <li>
                        <p style={{color: '#777'}}>
                            En caso de reclamación o conflicto, póngase en con nosotros, por medio del siguiente link: contacto@luz-azul.com.ar
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Luz Azul tratará de resolver las reclamaciones provenientes de los clientes dentro del plazo de un mes desde la presentación de las mismas.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            En caso de que la misma no se resuelva o el cliente no esté de acuerdo con la solución brindad por Luz Azul, ambas partes pueden remitir la disputa a un organismo de arbitraje.
                        </p>
                    </li>
                    <li>
                        <p style={{color: '#777'}}>
                            Al aceptar estas condiciones generales y/o hacer uso (autorizado o no) de los servicios de Luz Azul (tanto a través del Sitio Web o de otra forma) y/o al hacer uso, visitar y/o acceder a cualquier parte (incluidas, pero no limitadas a subdominios, código fuente y/o API del sitio, sea o no visible) del Sitio Web, el participante irrevocablemente acepta que los tribunales de la Provincia de Buenos Aires tendrán jurisdicción exclusiva en la determinación de cualquier disputa surgida en relación a estas condiciones generales. Sin perjuicio de lo que precede, Luz Azul se reserva el derecho a iniciar acciones contra el cliente, en los Tribunales Ordinarios del Depto. Judicial de Azul, Provincia de Buenos Aires.
                        </p>
                    </li>
                </ol>
                <h2 className='subtitle title generic-margin'><strong><u>4. Reglamento “juego de referidos” y Reglamento FIFA. </u></strong></h2>
                <ol>
                    <li>
                        <h4 className="subtitle"><strong>Reglamento “referidos”.</strong></h4>
                        <p style={{color: '#777'}}>
                            “Referidos” es un juego creado por “Luz Azul”. El consumidor y/o usuario acepta en su totalidad las bases, términos, reglamentos y condiciones aquí establecidas, y se denominará participante y/o usuario.
                        </p>
                    </li>
                    <li>
                        <h4 className="subtitle"><strong>Reglamentos FIFA.</strong></h4>
                        <p style={{color: '#777'}}>
                            La FIFA es el órgano rector del futbol mundial, es la entidad legisladora para todas las actividades futbolísticas. <br></br>
                            A través del Congreso, el Consejo de la FIFA y el secretario general, la FIFA adopta varios tipos de documentos jurídicos que repercuten en las actividades futbolísticas cotidianas en todo el mundo. <br></br>
                            Se le deja a disposición del usuario y/o consumidor para su estudio, análisis y verificación en caso que le surjan dudas con respecto, principalmente, a los reglamentos del Futbol, ingresando al siguiente link de enlace: <a style={{color: 'var(--title)'}} href="https://www.fifa.com/es/legal/documents">Normas y Reglamentos (fifa.com)</a>
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    </>
  )
}

---
layout: page
---

<!--Para facilitar la asistencia se han pensado tres modalidades:-->

<details open>
  <summary>Inscribirse curso completo</summary><br>
  <p>El curso completo consta de 12 sesiones que tendrán lugar los sábados de 11:00 a 13:00, desde el 19 de enero hasta 6 de abril 2019 ambos incluídos.</p><br>
  <p>Precio:  300€</p><button class="boton" onclick="cargarBoton(0)">Inscribirse</button>
  <br>
</details>

<details>
  <summary>Inscribirse por bloques</summary><br>
  <p>El curso está dividido en cuatro bloques, cada uno de ellos compuesto de tres sesiones. Es posible inscribirse a uno o varios bloques.</p>
  <a href="{{ site.baseurl }}{% link programa/B-I.md %}">Bloque I:La historia como <i>magister vitae</i>.</a><span class="dates-inscription">19 y 26 de enero, 2 de febrero</span><br>
  <a href="{{ site.baseurl }}{% link programa/B-II.md %}">Bloque II:Lenguaje e igualdad.</a> <span class="dates-inscription"> 9, 16 y 23 de febrero</span><br>
  <a href="{{ site.baseurl }}{% link programa/B-III.md %}">Bloque III: El legado de Grecia y Roma.</a> <span class="dates-inscription"> 2, 9 y 16 de marzo</span><br>
  <a href="{{ site.baseurl }}{% link programa/B-IV.md %}">Bloque IV: La globalización de las ideas.</a><span class="dates-inscription">23 y 30 de marzo, 6 abril</span><br><br>
  <p>Precio: 100€ por bloque.</p><button class="boton" onclick="cargarBoton(1)">Inscribirse</button>
  <br>
</details>


<details>
  <summary>Inscribirse por sesiones</summary>
  <br>
  <a href="../programa/B-I.html#sesion1">Sesión 1. Memoria e ingenuidad.</a><span class="dates-inscription">19 Enero</span><br>
  <a href="../programa/B-I.html#sesion2">Sesión 2. Guerra y sociedad patriarcal.</a><span class="dates-inscription">26 Enero </span><br>
  <a href="../programa/B-I.html#sesion3">Sesión 3. La democracia velada.</a><span class="dates-inscription">2 Febrero </span><br>
  <a href="../programa/B-II.html#sesion4">Sesión 4. La lengua como reflejo de la realidad.</a><span class="dates-inscription">9 Febrero </span><br>
  <a href="../programa/B-II.html#sesion5">Sesión 5. ¿Un matriarcado oculto?</a><span class="dates-inscription">16 Febrero </span><br>
  <a href="../programa/B-II.html#sesion6">Sesión 6. Una igualdad que perpetúa el modelo patriarcal.</a><span class="dates-inscription">23 Febrero </span><br>
  <a href="../programa/B-III.html#sesion7">Sesión 7. Una deuda impagable.</a><span class="dates-inscription">2 Marzo</span><br>
  <a href="../programa/B-III.html#sesion8">Sesión 8. Humanismo y educación.</a><span class="dates-inscription">9 Marzo </span><br>
  <a href="../programa/B-III.html#sesion9">Sesión 9. Un lado oscuro: el destierro social de la mujer.</a><span class="dates-inscription">16 Marzo </span><br>
  <a href="../programa/B-IV.html#sesion10">Sesión 10. La mentalidad de la ciudad-estado.</a><span class="dates-inscription">23 Marzo </span><br>
  <a href="../programa/B-IV.html#sesion11">Sesión 11. La fragilidad de la memoria y el principio del fin.</a><span class="dates-inscription">30 Marzo </span><br>
  <a href="../programa/B-IV.html#sesion12">Sesión 12. Hacia la edad media.</a><span class="dates-inscription">6 Abril</span><br><br>
  <p>Precio: 40€ por sesion.</p><button class="boton" onclick="cargarBoton(2)">Inscribirse</button>
  <br>
</details>

<br>
<hr>
<br>
<!--<img src="/assets/images/tuba.png" alt="Telégrafo acústico antigua grecia" /><br>-->
Para aquellas personas que no puedan asistir presencialmente, a parte o al curso completo, existe la posibilidad de seguir el curso por streaming. Puedes escribirnos para más información.
<hr>
<br>
<a id="formulario"></a>
<h4>Formulario de inscripción</h4 >
<div style="border-radius: 5px;background-color: #f2f2f2;padding: 20px;">
<form accept-charset="UTF-8" action="https://formcarry.com/s/5pYNQCAMaX1" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required/>
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos" name="apellidos" required/>
        <label for="email">Correo electrónico</label>
        <input type="email" id="email"  name="email" required/>
        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono"/>
        <label for="opcion">Modalidad</label>
        <select name="opcion" onchange="updateCheckBox(this)">
        <option value="todo" selected>Taller completo</option>
        <option value="bloques">Por bloques</option>
        <option value="sesiones">Por sesiones</option>
        <input type="hidden" name="_gotcha">
        </select>

        <div class="a">
        <!--Bloques-->
        <label name="bloque" class="div-invisible"><input type="checkbox" name="BI" value="BI" onchange="cambiarCheckbox(this);"> Bloque I. La historia como magister vitae.</label>
        <label name="bloque" class="div-invisible"><input type="checkbox" name="BII" value="BII"> Bloque II. Lenguaje e igualdad.</label>
        <label name="bloque" class="div-invisible"><input type="checkbox" name="BIII" value="BIII"> Bloque III. El legado de Grecia y Roma.</label>
        <label name="bloque" class="div-invisible"><input type="checkbox" name="BIV" value="BIV"> Bloque IV. La globalización de las ideas.</label>

        <!--Sesiones-->
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s1" value="s1"> Sesión 1. Memoria e ingenuidad.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s2" value="s2"> Sesión 2. Guerra y sociedad patriarcal.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s3" value="s3"> Sesión 3. La democracia velada. </label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s4" value="s4"> Sesión 4. La lengua como reflejo de la realidad.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s5" value="s5"> Sesión 5. ¿Un matriarcado oculto?</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s6" value="s6"> Sesión 6. Una igualdad que perpetúa el modelo patriarcal.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s7" value="s7"> Sesión 7. Una deuda impagable.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s8" value="s8"> Sesión 8. Humanismo y educación.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s9" value="s9"> Sesión 9. Un lado oscuro: el destierro social de la mujer.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s10" value="s10"> Sesión 10. La mentalidad de la ciudad-estado.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s11" value="s11"> Sesión 11. La fragilidad de la memoria y el principio del fin.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" name="s12" value="s12"> Sesión 12. Hacia la edad media.</label>
        </div>
        <br>
        <input type="checkbox" id="streaming" name="streaming"/>
        Seguir el curso por streaming
        <br><br>
        <input type="submit" value="Inscribirse" id="submit"/>

   <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->

    <input type="hidden" name='redirect_to' value="https://fragilidadmemoria/inscripcion/inscripcion1.html"/>

</form></div>


<br>
<hr>

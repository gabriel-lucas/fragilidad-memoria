---
layout: page
---

<div style="border-radius: 5px;background-color: #f2f2f2;padding: 20px;">
<form accept-charset="UTF-8" action="https://usebasin.com/f/fe1490925bf6" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required/>
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos" name="apellidos" required/>
        <label for="email">Correo electrónico</label>
        <input type="email" id="email"  name="email" required/>
        <label for="telefono">Teléfono</label>
        <input type="telephone" id="telefono" name="telefono"/>
        <label for="opcion">Modalidad</label>
        <select name="opcion" onchange="updateCheckBox(this)">
        <option value="todo" selected>Taller completo</option>
        <option value="bloques">Por bloques</option>
        <option value="sesiones">Por sesiones</option>
        </select>

        <div class="a">
        <!--Bloques-->
        <label name="bloque" class="div-invisible"><input type="checkbox" id="BI" value="BI"> Bloque I. La historia como magister vitae.</label>
        <label name="bloque" class="div-invisible"><input type="checkbox" id="BII" value="BII"> Bloque II. Lenguaje e igualdad.</label>
        <label name="bloque" class="div-invisible"><input type="checkbox" id="BIII" value="BIII"> Bloque III. El legado de Grecia y Roma.</label>
        <label name="bloque" class="div-invisible"><input type="checkbox" id="BIV" value="BIV"> Bloque IV. La globalización de las ideas.</label>

        <!--Sesiones-->
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s1" value="s1"> Sesión 1. Memoria e ingenuidad.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s2" value="s2"> Sesión 2. Guerra y sociedad patriarcal.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s3" value="s3"> Sesión 3. La democracia velada. </label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s4" value="s4"> Sesión 4. La lengua como reflejo de la realidad.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s5" value="s5"> Sesión 5. ¿Un matriarcado oculto?</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s6" value="s6"> Sesión 6. Una igualdad que perpetúa el modelo patriarcal.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s7" value="s7"> Sesión 7. Una deuda impagable.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s8" value="s8"> Sesión 8. Humanismo y educación.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s9" value="s9"> Sesión 9. Un lado oscuro: el destierro social de la mujer.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s10" value="s10"> Sesión 10. La mentalidad de la ciudad-estado.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s11" value="s11"> Sesión 11. La fragilidad de la memoria y el principio del fin.</label>
        <label name="sesion" class="div-invisible"><input type="checkbox" id="s12" value="s12"> Sesión 12. Hacia la edad media.</label>
        </div>
        <br>
        <input type="submit" value="Inscribirse" id="submit"/>

   <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->

    <input type="hidden" name='redirect_to' value="/path/to/thank-you.html"/>

</form></div>

Existen tres modalidades de inscripción:

* Taller completo.

El taller completo son doce encuentros: sábados del 19 de Enero del 2019 al 6 de Abril incluídos - 300 euros

* Inscripción por bloque.

El taller está pensado en cuatro bloques temáticos.

[Bloque I : La historia como magister vitae]({{ site.baseurl }}{% link programa/B-I.md %}) 19 y 26 de enero 2019, 2 de febrero 2019

[Bloque II:Lenguaje e igualdad.]({{ site.baseurl }}{% link programa/B-II.md %}) 9, 16 y 23 de febrero

[Bloque III: El legado de Grecia y Roma.]({{ site.baseurl }}{% link programa/B-III.md %}) 2, 9 y 16 de marzo

[Bloque IV: La globalización de las ideas.]({{ site.baseurl }}{% link programa/B-IV.md %}) 23 y 30 de marzo, 6 abril.

150 euros por bloque

* Inscripción por sesión.

Se puede asistir a sesiones individuales.
50 euros.

El taller tiene plazas limitadas y se dará prioridad a las personas que estén interesadas en el curso completo. Una vez elegida la modalidad de inscripción, para formalizarla, escríbenos al mail: <a class="u-email" href="mailto:{{ site.email }}">{{ site.email }}</a>

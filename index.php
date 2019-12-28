<?php include './partials/head.php'; ?>
<?php include './partials/header.php'; ?>
<main>
    <section class="section intro active">
        <div class="container">
            <h1 class="headline headline--orange">Vartojimo paskola</h1>
            <h2 class="subtitle subtitle--brown">Paskolos, kurios padeda</h2>
            <p class="bodyTxt bodyTxt--brown">Vartojimo paskola pravers, jei planuojate atnaujinti namus, remontuoti automobilį, įsigyti naujų baldų, buitinės technikos, ar kitą brangesnį daiktą.</p>
            <ul class="list list--brown">
                <li>Paskola nuo 500 iki 20 000 Eur be užstato.</li>
                <li>Pinigus pervesime Jums į sąskaitą iš karto po sutarties sudarymo.</li>
                <li>Pasiskolintą sumą ar jos dalį galėsite grąžinti anksčiau laiko be papildomų mokesčių.</li>
            </ul>
            <a class="button" href="#" id="introBtn">Pildyti paraišką</a>
        </div>
    </section>
    <section class="section form">
      <div class="container">

        <div class="steps">
          <div class="steps__item active">1</div>
          <div class="steps__item">2</div>
          <div class="steps__item">3</div>
          <div class="steps__item">4</div>
        </div>

        <form action="/endpoint.php" class="form">

          <div class="form_wrapper">

              <fieldset class="form__item active" data-step="1" data-condition>
                  <h2 class="subtitle subtitle--brown">Pasirinkite paskolos tipą:</h2>
                <div>
                  <select name="loanType" id="loanType">
                    <option value=""></option>
                    <option value="nt-remontui">NT Remontui</option>
                    <option value="nt-pirkimui">NT Pirkimui</option>
                  </select>
                </div>
              </fieldset>
              
              <fieldset class="form__item" data-step="2">
                  <h2>This is form 2</h2>
                  <input type="text" name="school" placeholder="School">
                  <input type="date" name="date" placeholder="Birthdate">
                <div>
                  <input type="radio" name="gender" value="male" checked> Male<br>
                  <input type="radio" name="gender" value="female"> Female<br>
                  <input type="radio" name="gender" value="other"> Other
                </div>
                
              </fieldset>

              <fieldset class="form__item" data-step="2">
                  <h2>This is form 2</h2>
                  <input type="text" name="school" placeholder="School">
                  <input type="date" name="date" placeholder="Birthdate">
                <div>
                  <input type="radio" name="gender" value="male" checked> Male<br>
                  <input type="radio" name="gender" value="female"> Female<br>
                  <input type="radio" name="gender" value="other"> Other
                </div>
              </fieldset>

              <fieldset class="form__item" data-step="3">
                  <h2>This is form 2</h2>
                  <div>
                    <input type="email" name="email" placeholder=" Your Email">
                  </div>
                  <input type="text" name="school" placeholder="School">
                  <input type="date" name="date" placeholder="Birthdate">
                <div>
                  <input type="radio" name="gender" value="male" checked> Male<br>
                  <input type="radio" name="gender" value="female"> Female<br>
                  <input type="radio" name="gender" value="other"> Other
                </div>
              </fieldset>
              
              <fieldset class="form__item" data-step="4">
                  <h2>The last form</h2>
                  <input type="text" name="name" placeholder="Name">
                  <input type="email" name="email" placeholder="Email">
              </fieldset>

              <div class="error_msg">
                <p class="error_msg__txt">Pasirinkti ne visi reikiami laukeliai!</p>
              </div>
          </div>

        </form>
        <a href id="back" class="button button--secondary">Atgal</a>
        <a href id="next" class="button">Toliau</a>

      </div>
    </section>
    <section class="section summary">
      <div class="container">
        This is your summary
      </div>
    </section>
</main>

<?php include './partials/footer.php'; ?>
<?php include './partials/foot.php'; ?>
